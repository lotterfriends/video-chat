import { EventEmitter } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SdpUtils } from "./sdp-utils";

export interface SdpSettings {
  videoSendCodec?: string,
  videoRecvCodec?: string,
  audioRecvCodec?: string,
  videoFec?: 'true' | 'false',
  opusStereo?: 'true' | 'false',
  opusFec?: 'true' | 'false',
  opusDtx?: 'true' | 'false',
  opusMaxPbr?: 'true' | 'false',
  audioSendBitrate?: string | number,
  videoSendInitialBitrate?: string | number,
  videoSendBitrate?: string | number,
  audioRecvBitrate?: string | number,
  videoRecvBitrate?: string | number,
}

export interface PeerConnectionClientSettings extends SdpSettings {
  peerConnectionConfig: {
    iceTransports?: 'relay' | string,
    iceServers: {urls: string | string[]}[]
    certificates?: RTCCertificate[]
  },
}

export interface PeerConnectionClientSignalMessage {
  type: RTCSdpType | PeerConnectionClientSignalMessageType;
  sdp?: string;
  label?: number | RTCIceCandidate['sdpMLineIndex'],
  id?: string | RTCIceCandidate['sdpMid'],
  candidate?: string | RTCIceCandidate['candidate']
}

export enum PeerConnectionClientSignalMessageType {
  Candidate = "candidate",
  Answer = "answer",
  Offer = "offer",
  Bye = "bye",
}


export enum StreamType {
  Video = "video",
  Audio = "audio",
}


export interface StreamTrack {
  track: MediaStreamTrack,
  kind: StreamType
}

export class PeerConnectionClient {
  
  private debug = false;
  private started = false;
  private isInitiator = false;
  private hasRemoteSdp = false;
  private messageQueue: PeerConnectionClientSignalMessage[] = []
  private connection: RTCPeerConnection | null;
  private settings: PeerConnectionClientSettings;
  public signalingMessage = new EventEmitter<PeerConnectionClientSignalMessage>();
  public seeNewCandidate$ = new BehaviorSubject<{location: string, candidate: string} | null>(null);
  public remoteStreamAdded = new EventEmitter<StreamTrack>(null);
  public signalState$ = new BehaviorSubject<RTCSignalingState | null>(null);
  public error$ = new BehaviorSubject<{source: string, error?: Error} | null>(null);
  public remotesDpSet = new BehaviorSubject<MediaStreamTrack | null>(null);
  public remoteHangUp = new EventEmitter<void>();
  public iceConnectionState$ = new BehaviorSubject<RTCIceConnectionState| null>(null);
  private readonly DEFAULT_SDP_OFFER_OPTIONS: RTCOfferOptions = {
    offerToReceiveAudio: true,
    offerToReceiveVideo: true,
  }

  constructor(settings: PeerConnectionClientSettings) {
    this.settings = settings;
    this.log(this.settings.peerConnectionConfig);
    this.connection = new RTCPeerConnection(this.settings.peerConnectionConfig);
    this.connection.onicecandidate = this.onIceCandidate.bind(this);
    this.connection.ontrack = this.onRemoteStreamAdded.bind(this);
    this.connection.onsignalingstatechange = this.onSignalingStateChange.bind(this);
    this.connection.oniceconnectionstatechange = this.onIceConnectionStateChange.bind(this);
  }

  startAsCaller(offerOptions: RTCOfferOptions = {}): boolean {
    this.log('startAsCaller', offerOptions)

    if (!this.connection) {
      return false;
    }

    if (this.started) {
      return false;
    }
  
    this.isInitiator = true;
    this.started = true;

    const constraints: RTCOfferOptions = {...this.DEFAULT_SDP_OFFER_OPTIONS, ...offerOptions};
    this.log('Sending offer to peer, with constraints: \n\'' + JSON.stringify(constraints) + '\'.');
    
    this.connection.createOffer(constraints)
        .then(this.setLocalSdpAndNotify.bind(this))
        .catch(this.onError.bind(this, 'createOffer'));
  
    return true;
  }

  startAsCallee(initialMessages: string[] | PeerConnectionClientSignalMessage[]): boolean {
    this.log('startAsCallee', initialMessages);
    if (!this.connection) {
      return false;
    }

    if (this.started) {
      return false;
    }

    this.started = true;

    if (initialMessages && initialMessages.length > 0) {
      // Convert received messages to JSON objects and add them to the message
      // queue.
      for (const message of initialMessages) {
        this.receiveSignalingMessage(message);
      }
      return true;
    }
  
    // We may have queued messages received from the signaling channel before
    // started.
    if (this.messageQueue.length > 0) {
      this.drainMessageQueue();
    }
    return true;
  }

  close(): void {
    this.log('close');
    if (!this.connection) {
      return;
    }
    this.signalingMessage.emit({
      type: PeerConnectionClientSignalMessageType.Bye
    });
    this.connection.close();
    this.connection = null;
  }


  getPeerConnectionStates(): {
    signalingState: RTCSignalingState,
    iceGatheringState: RTCIceGatheringState,
    iceConnectionState: RTCIceConnectionState
  } | null {
    if (!this.connection) {
      return null;
    }
    return {
      signalingState: this.connection.signalingState,
      iceGatheringState: this.connection.iceGatheringState,
      iceConnectionState: this.connection.iceConnectionState
    };
  }

  getPeerConnectionStats(track?: MediaStreamTrack): Promise<RTCStatsReport> {
    if (!this.connection) {
      return Promise.reject();
    }
    return this.connection.getStats(track);
  }

  addTrack(track: MediaStreamTrack): void {
    this.log('addTrack', track);
    if (this.connection) {
      this.connection.addTrack(track);
    }
  }

  replaceTrack(track: MediaStreamTrack) {
    console.log(track);
    if (this.connection) {
      const sender = this.connection.getSenders().find(function(s) {
        return s.track.kind == track.kind;
      });
      sender.replaceTrack(track);
    }
  }

  public addStream(mediaSteam: MediaStream) {
    mediaSteam.getTracks().forEach(track => {
      this.addTrack(track);
    });
  }

  setLocalSdpAndNotify(sessionDescription: RTCSessionDescriptionInit): void {
    if (!this.connection) {
      return;
    }
    // this.log('setLocalSdpAndNotify', sessionDescription);
    if (sessionDescription.sdp) {
      sessionDescription.sdp = SdpUtils.maybeSetOpusOptions(sessionDescription.sdp, this.settings);
      sessionDescription.sdp = SdpUtils.maybePreferAudioReceiveCodec(sessionDescription.sdp, this.settings);
      sessionDescription.sdp = SdpUtils.maybePreferVideoReceiveCodec(sessionDescription.sdp, this.settings);
      sessionDescription.sdp = SdpUtils.maybeSetAudioReceiveBitRate(sessionDescription.sdp, this.settings);
      sessionDescription.sdp = SdpUtils.maybeSetVideoReceiveBitRate(sessionDescription.sdp, this.settings);
      sessionDescription.sdp = SdpUtils.maybeRemoveVideoFec(sessionDescription.sdp, this.settings);
    }
    this.connection.setLocalDescription(sessionDescription)
        .then(() => this.log('Set session description success.'))
        .catch(this.onError.bind(this, 'setLocalDescription'));

    // Chrome version of RTCSessionDescription can't be serialized directly
    // because it JSON.stringify won't include attributes which are on the
    // object's prototype chain. By creating the message to serialize
    // explicitly we can avoid the issue.
    this.signalingMessage.emit({
      sdp: sessionDescription.sdp,
      type: sessionDescription.type
    });
  }

  filterIceCandidate(candidateObj: RTCIceCandidate): boolean {
    // this.log('filterIceCandidate', candidateObj);
    var candidateStr = candidateObj.candidate;

    // Always remove TCP candidates. Not needed in this context.
    if (candidateStr.indexOf('tcp') !== -1) {
      return false;
    }
  
    // If we're trying to remove non-relay candidates, do that.
    if (this.settings.peerConnectionConfig.iceTransports === 'relay' && SdpUtils.iceCandidateType(candidateStr) !== 'relay') {
      return false;
    }
  
    return true;
  }

  onIceCandidate(event: RTCPeerConnectionIceEvent) {
    // this.log('onIceCandidate', event);
    if (event.candidate) {
      // Eat undesired candidates.
      if (this.filterIceCandidate(event.candidate)) {
        var message = {
          type: PeerConnectionClientSignalMessageType.Candidate,
          label: event.candidate.sdpMLineIndex,
          id: event.candidate.sdpMid,
          candidate: event.candidate.candidate
        };
        this.signalingMessage.emit(message);
        this.onRecordIceCandidate('Local', event.candidate);
      }
    } else {
      this.log('End of candidates.');
    }
  }

  receiveSignalingMessage(message: string | PeerConnectionClientSignalMessage) {
    // this.log('receiveSignalingMessage', message);
    let messageObj: PeerConnectionClientSignalMessage;
    if (typeof message === 'string') {
      try {
        messageObj = JSON.parse(message);
      } catch (error) {
        this.log('invalid json for message', message);
        return;
      }
    } else {
      messageObj = message;
    }

    if ((this.isInitiator && messageObj.type === PeerConnectionClientSignalMessageType.Answer) ||
        (!this.isInitiator && messageObj.type === PeerConnectionClientSignalMessageType.Offer)) {
      this.hasRemoteSdp = true;
      // Always process offer before candidates.
      this.messageQueue.unshift(messageObj);
    } else if (messageObj.type === PeerConnectionClientSignalMessageType.Candidate) {
      this.messageQueue.push(messageObj);
    } else if (messageObj.type === PeerConnectionClientSignalMessageType.Bye) {
      this.remoteHangUp.emit();
    }
    this.drainMessageQueue();
  };


  processSignalingMessage(message: PeerConnectionClientSignalMessage) {
    // this.log('processSignalingMessage', message);
    if (!this.connection) {
      return;
    }
    if (message.type === PeerConnectionClientSignalMessageType.Offer && !this.isInitiator) {
      if (this.connection.signalingState !== 'stable') {
        this.log('ERROR: remote offer received in unexpected state: ' + this.connection.signalingState);
        return;
      }
      this.setRemoteSdp(message);
      this.doAnswer();
    } else if (message.type === PeerConnectionClientSignalMessageType.Answer && this.isInitiator) {
      if (this.connection.signalingState !== 'have-local-offer') {
        this.log('ERROR: remote answer received in unexpected state: ' +
              this.connection.signalingState);
        return;
      }
      this.setRemoteSdp(message);
    } else if (message.type === PeerConnectionClientSignalMessageType.Candidate) {
      var candidate = new RTCIceCandidate({
        sdpMLineIndex: message.label,
        candidate: message.candidate
      });
      this.onRecordIceCandidate('Remote', candidate);
      this.connection.addIceCandidate(candidate)
          .then(this.log.bind(this, 'Remote candidate added successfully.'))
          .catch(this.onError.bind(this, 'addIceCandidate'));
    } else {
      this.log('WARNING: unexpected message: ' + JSON.stringify(message));
    }
  }

  doAnswer() {
    if (!this.connection) {
      return;
    }
    this.log('Sending answer to peer.');
    this.connection.createAnswer()
        .then(this.setLocalSdpAndNotify.bind(this))
        .catch(this.onError.bind(this, 'createAnswer'));
  };


  setRemoteSdp(message: PeerConnectionClientSignalMessage) {
    if (!this.connection) {
      return;
    }
    // this.log('setRemoteSdp', message);
    if (message.sdp) {
      message.sdp = SdpUtils.maybeSetOpusOptions(message.sdp, this.settings);
      message.sdp = SdpUtils.maybePreferAudioSendCodec(message.sdp, this.settings);
      message.sdp = SdpUtils.maybePreferVideoSendCodec(message.sdp, this.settings);
      message.sdp = SdpUtils.maybeSetAudioSendBitRate(message.sdp, this.settings);
      message.sdp = SdpUtils.maybeSetVideoSendBitRate(message.sdp, this.settings);
      message.sdp = SdpUtils.maybeSetVideoSendInitialBitRate(message.sdp, this.settings);
      message.sdp = SdpUtils.maybeRemoveVideoFec(message.sdp, this.settings);
    }
    this.connection.setRemoteDescription(new RTCSessionDescription(message as RTCSessionDescriptionInit))
        .then(this.onSetRemoteDescriptionSuccess.bind(this))
        .catch(this.onError.bind(this, 'setRemoteDescription'));
  }

  // When we receive messages from GAE registration and from the WSS connection,
  // we add them to a queue and drain it if conditions are right.
  drainMessageQueue() {
    // It's possible that we finish registering and receiving messages from WSS
    // before our peer connection is created or started. We need to wait for the
    // peer connection to be created and started before processing messages.
    //
    // Also, the order of messages is in general not the same as the POST order
    // from the other client because the POSTs are async and the server may handle
    // some requests faster than others. We need to process offer before
    // candidates so we wait for the offer to arrive first if we're answering.
    // Offers are added to the front of the queue.
    if (!this.connection || !this.started || !this.hasRemoteSdp) {
      return;
    }
    for (const message of this.messageQueue) {
      this.processSignalingMessage(message);
    }
    this.messageQueue = [];
  }


  // Hooks

  onIceConnectionStateChange() {
    if (!this.connection) {
      return;
    }
    this.log('ICE connection state changed to: ' + this.connection.iceConnectionState);

    // if (this.connection.iceConnectionState === 'completed') {
    //   this.log('ICE complete time: ' +
    //       (window.performance.now() - this.startTime_).toFixed(0) + 'ms.');
    // }

    this.iceConnectionState$.next(this.connection.iceConnectionState);
  }
  
  onSignalingStateChange() {
    if (!this.connection) {
      return;
    }
    this.log('Signaling state changed to: ' + this.connection.signalingState);
    this.signalState$.next(this.connection.signalingState);
  }

  onError(source: string, error?: Error) {
    this.log(`${source}:`, error);
    this.error$.next({source, error});
  }

  onRecordIceCandidate(location: string, candidateObj: RTCPeerConnectionIceEvent['candidate']): void {
    if (candidateObj?.candidate) {
      this.seeNewCandidate$.next({location, candidate: candidateObj.candidate});
    } else {
      this.log('see new candidate but candidate is null', {location, candidate: candidateObj})
    }
  }
  
  onRemoteStreamAdded(event: RTCTrackEvent): void {
    this.remoteStreamAdded.emit({
      track: event.track,
      kind: event.track.kind as StreamType
    });
  }

  onSetRemoteDescriptionSuccess () {
    if (!this.connection) {
      return;
    }
    this.log('Set remote session description success.');
    // By now all onaddstream events for the setRemoteDescription have fired,
    // so we can know if the peer has any remote video streams that we need
    // to wait for. Otherwise, transition immediately to the active state.
    var remoteStreams = this.connection.getReceivers();
    if (remoteStreams.length) {
      for (const stream of remoteStreams) {
        this.remotesDpSet.next(stream.track);
      }
    }
  };

  log(...args: any[]): void {
    if (this.debug) {
      console.log(...args);
    }
  }

}
