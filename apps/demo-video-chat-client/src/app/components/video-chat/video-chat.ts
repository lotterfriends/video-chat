import { ComponentRef, EventEmitter } from '@angular/core';
import { CallService, IceServer, PeerConnectionClient, RemotePeerComponentInterface, StreamService, StreamType, User } from 'ngx-webrtc';
import { BehaviorSubject, filter, first } from 'rxjs';

export class VideoChat {

  private debug = true;
  private debugPeerConnection = false;

  private clients: {user: User, connection: PeerConnectionClient, component: ComponentRef<RemotePeerComponentInterface>}[] = [];
  public localVideoEnabled$ = new BehaviorSubject<boolean>(false);
  public isInitiator = false;
  private identifier: (keyof User) = this.callService.getUserIdentifier();
  private servers: IceServer[] = [];

  public startPeerConnection = new EventEmitter<{user: User, connection: PeerConnectionClient}>();

  constructor(
    private callService: CallService,
    private streamService: StreamService,
  ) {
    this.initStreamEvents();
    this.initCallEvents();
  } 


  public start(servers: IceServer[]) {
    this.log('startCall');
    this.servers = servers;
  }

  private initStreamEvents() {
    this.log('initStreamEvents')
    // send stream events to peers

    this.streamService.localAudioStreamStatusChanged.subscribe(localAudioEnabled => {
      // inform peers about audio status
      this.clients.forEach(e => {
        localAudioEnabled ? e.connection.audioUnmuted() : e.connection.audioMuted();
      });
    });

    this.streamService.localVideoStreamStatusChanged.subscribe(localVideoEnabled => {
      this.localVideoEnabled$.next(localVideoEnabled);
      // inform peers about video status
      this.clients.forEach(e => {
        localVideoEnabled ? e.connection.videoUnmuted() : e.connection.videoMuted();
      });
    });

    // change audio output, bad browser support
    // only blink engine (chrome, edge, opera)
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/setSinkId
    this.streamService.audioOutput$.pipe(
      filter(e => e !== null),
    ).subscribe(deviceId => {
      this.clients.forEach(async client => {
        await client.component?.instance?.audioStreamNode?.nativeElement?.setSinkId(deviceId);
      });
    });

    this.streamService.replaceTrack$.pipe(
      filter(e => e !== null)
    ).subscribe((track: MediaStreamTrack | null) => {
      this.log('replaceTrack', track);
      const localStream = this.streamService.getLocalStream();
      if (track) {
        if (track.kind === StreamType.Audio && localStream?.getAudioTracks().length || 
          track.kind === StreamType.Video && localStream?.getVideoTracks().length) {
            this.clients.forEach(async client => {
              client.connection.replaceTrack(track);
            });
          } else {
            this.clients.forEach(async client => {
              client.connection.addTrack(track);
            });
        }
      } else {
        this.log('WARNING: track is null');
      }
    });

    this.streamService.localStream$.subscribe((stream) => {
      if (stream) {
        this.localVideoEnabled$.next(stream.getVideoTracks().length > 0)
      }
    });
  }

  private initCallEvents() {
    this.log('initCallEvents');
    // send call events to peers

    this.callService.startShareScreen.subscribe(() => {
      this.clients.forEach(e => {
        e.connection.startShareScreen();
      });
    });
    this.callService.stopShareScreen.subscribe(() => {
      this.clients.forEach(e => {
        e.connection.stopShareScreen();
      });
    });
  }


  public async addPeer(user: User, component: ComponentRef<RemotePeerComponentInterface>): Promise<{user: User, connection: PeerConnectionClient, component: ComponentRef<RemotePeerComponentInterface>}> {

    const cert = await this.callService.createCertifcate();
    const connection = await this.callService.createPeerClient({
      debug: this.debugPeerConnection,
      peerConnectionConfig: {
        iceServers: this.servers,
        certificates: [cert],
      },
    });

    const localStream = this.streamService.getLocalStream();
    
    // add media
    if (localStream) {
      connection.addStream(localStream);
    }

    connection.remoteTrackAdded.subscribe(track => {
      // this.log('remoteTrackAdded', user, track.kind);
      if (component.instance.audioStreamNode) {
        if (track.kind === StreamType.Audio) {
          this.streamService.setStreamInNode(component.instance.audioStreamNode.nativeElement, track.track, false);
          this.callService.userHasMic(user);
        }
      } else {
        console.warn('no audioStreamNode in component instance');
      }
      if (component.instance.videoStreamNode) {
        if (track.kind === StreamType.Video) {
          this.streamService.setStreamInNode(component.instance.videoStreamNode.nativeElement, track.track);
          this.callService.userHasCam(user);
        }
      } else {
        console.warn('no videoStreamNode in component instance');
      }
    });

    if (localStream && localStream.getTracks().length) {
      connection.negotiationNeededTriggered.pipe(
        first(),
      ).subscribe(() => {
        this.startPeerConnection.emit({connection, user})
      });
    } else {
      this.startPeerConnection.emit({connection, user})
    }
    
    connection.muteMyAudio.subscribe(() => {
      this.streamService.disableLocalTrack(StreamType.Audio);
    });

    connection.muteMyVideo.subscribe(() => {
      this.streamService.disableLocalTrack(StreamType.Video);
    });

    connection.userMuteAudio.subscribe(() => {
      this.callService.userAudioMuted(user);
    });

    connection.userUnmuteAudio.subscribe(() => {
      this.callService.userAudioUnmuted(user);
    });

    connection.userUnmuteVideo.subscribe(() => {
      this.callService.userVideoUnmuted(user);
    });

    connection.userMuteVideo.subscribe(() => {
      this.callService.userVideoMuted(user);
    });

    // connection.negotiationNeededTriggered.subscribe(() => {
    //   if (this.clients.length) {
    //     connection.createOffer();
    //   }
    // });

    this.callService.addUser(user, connection, component);
    component.instance.setUser(user);
    const client = {
      component,
      user,
      connection,
    };
    this.clients.push(client);
    return client;
  }

  public establishPeerConnection(connection: PeerConnectionClient) {
    connection.negotiationNeededTriggered.subscribe(() => {
      connection.createOffer();
    });
  }

  public async onUserLeft(user: User): Promise<void> {
    this.log('onUserLeft');
    this.callService.removeUser(user);
    const client = this.clients.find(e => e.user[this.identifier] === user[this.identifier]);
    if (client?.component?.instance?.audioStreamNode) {
      this.streamService.stopStreamInNode(client.component.instance.audioStreamNode);
    }
    if (client?.component?.instance?.videoStreamNode) {
      this.streamService.stopStreamInNode(client.component.instance.videoStreamNode);
    }
    if (client?.connection) {
      client.connection.close();
    }
    if (client?.component) {
      client.component.destroy();
    }
    this.clients = this.clients.filter(e => e.user[this.identifier] !== user[this.identifier]);

    // everyone else left, now I'm the initiator
    if (!this.clients.length) {
      this.isInitiator = true;
    }
  }


  public getClients(): {user: User, connection: PeerConnectionClient, component: ComponentRef<RemotePeerComponentInterface>}[] {
    return this.clients;
  }
  
  public resetClients(): void {
    this.clients = [];
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  private log(...args: any[]): void {
    if (this.debug) {
      console.log(...args);
    }
  }


  
}