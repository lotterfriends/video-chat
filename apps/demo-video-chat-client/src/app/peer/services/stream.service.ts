import { ElementRef, EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StreamType } from '../peer-connection-client';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor() { }


  public localStream$ = new BehaviorSubject<MediaStream>(null);
  public localShareScreenStream$ = new BehaviorSubject<MediaStream>(null);
  public replaceTrack$ = new BehaviorSubject<MediaStreamTrack>(null);
  public audioOutput$ = new BehaviorSubject<string>(null);
  public localStreamStatusChanged = new EventEmitter<MediaStream | MediaStreamTrack>();
  public localAudioStreamStatusChanged = new EventEmitter<boolean>();
  public localVideoStreamStatusChanged = new EventEmitter<boolean>();
  public hasVideo = false;
  public hasAudio = false;

  public static getAspectRatio(width: number, height: number): string {

    function gcd(a: number, b: number): number {
      return b ? gcd(b, a % b) : a;
    }

    const divisor: number = gcd(width, height);
    return `${width / divisor}x${height / divisor}`;
  }
  public setStreamInNode(node: HTMLVideoElement, stream: MediaStream | MediaStreamTrack, muted = true): void {
    const self = this;
    if (node) {

      // play when ready
      node.addEventListener('canplay', function onCanPlay(event) {
        const video: HTMLVideoElement = event.target as HTMLVideoElement;
        if (video) {
          video.removeEventListener('canplay', onCanPlay);
          video.play();
        }
        self.localStreamStatusChanged.emit(stream);
      });

      let tmpStream;
      if (stream instanceof MediaStreamTrack) {
        tmpStream = new MediaStream();
        tmpStream.addTrack(stream);
      } else {
        tmpStream = stream;
      }
      node.srcObject = tmpStream;
      node.muted = muted;
    }
  }

  public stopStreamInNode(node: ElementRef): void {
    node?.nativeElement?.pause();
    node?.nativeElement?.srcObject?.getTracks().forEach((t: MediaStreamTrack) => t.stop());
    if (node?.nativeElement?.srcObject) {
      node.nativeElement.srcObject = new MediaStream();
    }
  }

  public toggleMuteStream(stream: MediaStream | MediaStreamTrack, type: StreamType, value?: boolean): void {
    console.log('toggleMuteStream()', stream, type, value);
    if (stream) {
      if (stream instanceof MediaStreamTrack) {
        const targetValue = typeof value !== 'undefined' ? value : !stream.enabled;
        stream.enabled = targetValue;
      } else {
        if (type === StreamType.Audio) {
          stream.getAudioTracks().forEach(track => {
            const targetValue = typeof value !== 'undefined' ? value : !track.enabled;
            track.enabled = targetValue;
            this.localAudioStreamStatusChanged.emit(targetValue);
          });
        }
        if (type === StreamType.Video) {
          stream.getVideoTracks().forEach(track => {
            const targetValue = typeof value !== 'undefined' ? value : !track.enabled;
            track.enabled = targetValue;
            this.localVideoStreamStatusChanged.emit(targetValue);
          });
        }
      }
    }
    this.localStreamStatusChanged.emit(stream);
  }

  public muteStream(stream: MediaStream | MediaStreamTrack, type: StreamType): void {
    this.toggleMuteStream(stream, type, false);
  }

  public unmuteStream(stream: MediaStream | MediaStreamTrack, type: StreamType): void {
    this.toggleMuteStream(stream, type, true);
  }

  public replaceTrackInStream(stream: MediaStream, track: MediaStreamTrack): void {
    if (track.kind === StreamType.Video) {
      stream?.getVideoTracks().forEach(e => stream.removeTrack(e));
    }
    if (track.kind === StreamType.Audio) {
      stream?.getAudioTracks().forEach(e => stream.removeTrack(e));
    }
    stream?.addTrack(track);
  }

  public setLocalStream(stream: MediaStream): void {
    this.localStream$.next(stream);
  }

  public getLocalStream(): MediaStream {
    return this.localStream$.getValue();
  }

  public replaceTrack(track: MediaStreamTrack): void {
    this.replaceTrack$.next(track);
  }

  public toggleMuteLocalAudioStream(): void {
    this.toggleMuteStream(this.localStream$.getValue(), StreamType.Audio);
  }

  public muteLocalAudioStream(): void {
    this.toggleMuteStream(this.localStream$.getValue(), StreamType.Audio, false);
  }

  public unmuteLocalAudioStream(): void {
    this.toggleMuteStream(this.localStream$.getValue(), StreamType.Audio, true);
  }

  public toggleMuteLocalVideoStream(): void {
    this.toggleMuteStream(this.localStream$.getValue(), StreamType.Video);
  }

  public muteLocalVideoStream(): void {
    this.toggleMuteStream(this.localStream$.getValue(), StreamType.Video, false);
  }

  public unmuteLocalVideoStream(): void {
    this.toggleMuteStream(this.localStream$.getValue(), StreamType.Video, true);
  }

  async getScreenCapture(): Promise<MediaStream | null> {
    let stream: MediaStream = null;
    try {
      const n: any = navigator;
      if (n.getDisplayMedia) {
        stream = await n.getDisplayMedia({ video: true });
      } else if (n.mediaDevices.getDisplayMedia) {
        stream = await n.mediaDevices.getDisplayMedia({ video: true });
      } else {
        stream = await n.mediaDevices.getUserMedia({ video: { mediaSource: 'screen' } });
      }
    } catch (e) {
      console.log(`MdoVideoCallComponent.getScreenCapture() -> no permissions`);
    }
    return stream;
  }

  public getVideoTrackForStream(stream: MediaStream): MediaStreamTrack {
    return stream?.getVideoTracks()[0];
  }

  public getAudioTrackForStream(stream: MediaStream): MediaStreamTrack {
    return stream?.getAudioTracks()[0];
  }

  public getMediaDevices(): Promise<MediaDeviceInfo[]> {
    return navigator.mediaDevices.enumerateDevices();
  }

  public setAudioOutput(deviceId: string): void {
    this.audioOutput$.next(deviceId);
  }

  public tryGetUserMedia() {
    const mediaConstraints = {
      audio: true,
      video: true
    };

    return new Promise((resolve, reject) => {

      navigator.mediaDevices.getUserMedia(mediaConstraints).then(a => {
        this.hasAudio = true;
        this.hasVideo = true;
        resolve(a);
      }, b => {
        let cam = true, mic = true;
        if (b.message.indexOf('Starting videoinput failed') > -1) {
          console.log('videoinput used by another software');
          cam = false;
        }
        navigator.mediaDevices.enumerateDevices().then((devices) => {
          cam = cam && devices.find((device) => {
            return device.kind === 'videoinput';
          }) !== null;
          mic = devices.find((device) => {
            return device.kind === 'audioinput';
          }) !== null;
          const constraints = {
            video: cam && mediaConstraints.video,
            audio: mic && mediaConstraints.audio
          };
          navigator.mediaDevices.getUserMedia(constraints).then(a => {
            this.hasAudio = true;
            resolve(a);
          }, reject);
        }, (f) => {
          reject(f);
        });
      }).catch(e => {
        reject(e);
      });
    });
  }
}