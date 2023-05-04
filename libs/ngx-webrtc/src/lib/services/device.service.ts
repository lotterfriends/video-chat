import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeviceType } from '../enums';
import { DevicesGroup } from '../interfaces';
import { Configuration } from '../ngx-webrtc-configuration';
import { PreferencesService } from './preferences.service';
import { StreamService } from './stream.service';

/**
 * The DeviceService help you with device interaction (audio and video devices) and can hold a state for devices if you want to implement
 * a lobby with device testing.
 */
@Injectable({
  providedIn: 'root'
})
export class DeviceService implements OnDestroy {

  private storage: 'localStorage' | 'sessionStorage' = 'sessionStorage';
  public selectedAudioInput$ = new BehaviorSubject<MediaDeviceInfo | null>(null);
  public selectedVideoInput$ = new BehaviorSubject<MediaDeviceInfo | null>(null);
  public devices$ = new BehaviorSubject<MediaDeviceInfo[]>([]);
  public devicesGoups$ = new BehaviorSubject<DevicesGroup[]>([]);

  constructor(
    private readonly config: Configuration,
    private streamService: StreamService,
    private preferencesService: PreferencesService
  ){
      // not possible with HostListener
      navigator.mediaDevices.addEventListener('devicechange', this.onDeviceChangeListener);
  }

  ngOnDestroy(): void {
    navigator.mediaDevices.removeEventListener('devicechange', this.onDeviceChangeListener);
  }

  private onDeviceChangeListener: EventListener = () => {
    this.detectSelectedDevices().then(devices => {
      if (this.config.debug) {
        console.log('devices after devicechange event');
        console.log(devices);
      }
    }) 
  }

  detectSelectedDevices(): Promise<MediaDeviceInfo[]> {
    return new Promise((resolve, reject) => {
      this.getMediaDevices().then(devices => {
        this.devices$.next(devices);
        this.devicesGoups$.next(this.groupDeviceByKind(devices, []));
        resolve(devices);
      }, reject);
    });
  }


  getMediaDevicesGrouped(omit: DeviceType[] = []) {
    const devicesGoups = this.devicesGoups$.getValue();
    if (omit.length) {
      return devicesGoups.filter(e => !omit.includes(e.kind));
    }
    return devicesGoups;
  }

  /**
   * get media devices, Attention you need getMedia permissions for this call
   * @returns Promise that resolves to media Devices as array 
   */
  public getMediaDevices(): Promise<MediaDeviceInfo[]> {
    return navigator.mediaDevices.enumerateDevices();
  }
  

  /**
   * Change selected device wit a deviceId and a device type.
   * @param deviceId id of selected device
   * @param kind type of selected device `VideDevice` or `AudioDevice`
   */
  changeSelectedDevice(deviceId: string, kind: DeviceType): Promise<void> {
    return new Promise<void>((resolve, rejects) => {
      const devices = this.devices$.getValue();
      if (kind === DeviceType.VideoInput) {
        if (this.selectedVideoInput$.getValue()?.deviceId === deviceId) {
          resolve();
        }
        navigator.mediaDevices.getUserMedia({ video: {
          deviceId
        }}).then((newStream) => {
          this.preferencesService.setPreferredVideoInputDevice(deviceId);
          if (devices && devices.length) {
            const device = devices.find(d => d.deviceId === deviceId);
            if (device) {
              this.selectedVideoInput$.next(device)
            }
          }   
          const track = this.streamService.getVideoTrackForStream(newStream);
          const currentStream = this.streamService.getLocalStream();
          if (currentStream && track) {
            this.streamService.replaceTrack(track);
            const oldTrack = this.streamService.getVideoTrackForStream(currentStream);
            oldTrack?.stop();
            this.streamService.replaceTrackInStream(currentStream, track);
          } else {
            this.streamService.setLocalStream(newStream);
          }
          resolve();
        }, (error) => {
          console.error(error);
          rejects(error);
        });
      }
      if (kind === DeviceType.AudioInput) {
        if (this.selectedAudioInput$.getValue()?.deviceId === deviceId) {
          resolve();
        }
        navigator.mediaDevices.getUserMedia({ audio: {
          deviceId
        }}).then((newStream) => {
          this.preferencesService.setPreferredAudioInputDevice(deviceId);
          if (devices && devices.length) {
            const device = devices.find(d => d.deviceId === deviceId);
            if (device) {
              this.selectedAudioInput$.next(device)
            }
          }
          const track = this.streamService.getAudioTrackForStream(newStream);
          if(track) {
            this.streamService.replaceTrack(track);
          }
          const currentStream = this.streamService.getLocalStream();
          if (currentStream && track) {
            const oldTrack = this.streamService.getAudioTrackForStream(currentStream);
            oldTrack?.stop();
            this.streamService.replaceTrackInStream(currentStream, track);
          } else {
            this.streamService.setLocalStream(newStream);
          }
          resolve();
        }, (error) => {
          console.error(error);
          rejects(error);
        });
      }
      if (kind === DeviceType.AudioOutput) {
        this.preferencesService.setPreferredAudioOutputDevice(deviceId);
        this.streamService.setAudioOutput(deviceId);
        resolve();
      }
    });
  }

  /**
   * Check the given device, if it's selected.
   * @param device device to check if it's selected
   * @param kind the kind of the device to check
   * @returns `true` if the devie is selected, outerwise `false`
   */
  isDeviceSelected(device: MediaDeviceInfo, kind: DeviceType): boolean {
    const stream = this.streamService.getLocalStream();
    if (stream) {
      if (kind === DeviceType.VideoInput && this.streamService.hasVideo) {
        const track = this.streamService.getVideoTrackForStream(stream);
        if (track) {
          return track.getSettings().deviceId === device.deviceId;
        }
      }
      if (kind === DeviceType.AudioInput && this.streamService.hasAudio) {
        const track = this.streamService.getAudioTrackForStream(stream);
        if (track) {
          return track.getSettings().deviceId === device.deviceId;
        } 
      }
    }
    return false;
  }

  /**
   * group a list of devices you get by calling `StreamService.getMediaDevices()` by type.
   * @param devices list of devices you get by calling `StreamService.getMediaDevices()`
   * @returns a list of devices grouped by `DeviceType`
   */
  groupDeviceByKind(devices: MediaDeviceInfo[], omit: DeviceType[] = []): DevicesGroup[] {
    const devicesGoups: DevicesGroup[] = [];
    const audioInput = devices.filter(d => d.kind === DeviceType.AudioInput);
    const audioOutput = devices.filter(d => d.kind === DeviceType.AudioOutput);
    const videoinput = devices.filter(d => d.kind === DeviceType.VideoInput);
    if (audioInput.length && !omit.includes(DeviceType.AudioInput)) {
      devicesGoups.push({
        kind: DeviceType.AudioInput,
        devices: audioInput
      });
    }
    if (audioOutput.length && !omit.includes(DeviceType.AudioOutput)) {
      devicesGoups.push({
        kind: DeviceType.AudioOutput,
        devices: audioOutput
      });
    }
    if (videoinput.length && !omit.includes(DeviceType.VideoInput)) {
      devicesGoups.push({
        kind: DeviceType.VideoInput,
        devices: videoinput
      });
    }
    return devicesGoups;
  }

  /**
   * An simple wrapper for `navigator.mediaDevices.getUserMedia`, with basis error handling.
   * @todo refactor
   * @param mediaConstraints a MediaStreamConstraints e.g. with specific deviceId, resolution or just audio. Default is:
   *                          ```json
   *                         {
   *                             audio: true,
   *                             video: true
   *                         }
   *                         ```
   * @returns Promise that resilve to a stream matching the constraint
   */
  public tryGetUserMedia(mediaConstraints?: MediaStreamConstraints): Promise<MediaStream> {
    if (!mediaConstraints) {
      mediaConstraints = {
        audio: true,
        video: true
      }
    };
    return new Promise((resolve, reject) => {
      this.detectSelectedDevices().then(() => {
        navigator.mediaDevices.getUserMedia(mediaConstraints).then(steam => {
          this.setDeviceAndResolve(steam, resolve);
        },reject);
      }, reject);
    });
  }

  private findFirstSuccessful<T>(promises:(() => Promise<T>)[], onSuccess: (arg0: T) => void, onNotFound: () => void) {
    const currentPromise = promises.shift();
    if (currentPromise) {
      currentPromise().then(onSuccess, () => {
        this.findFirstSuccessful(promises, onSuccess, onNotFound);
      });
    } else {
      onNotFound();
    }
  }

  public tryGetMedia(onSuccess: (arg0: MediaStream) => void, onNotFound: () => void) {

    const tryChain: (() => Promise<MediaStream>)[] = [
      this.tryGetMediaWithPreferences.bind(this),
      this.tryGetMediaDefault.bind(this),
      this.tryGetMediaAudioOnly.bind(this)
    ];

    this.findFirstSuccessful<MediaStream>(tryChain, onSuccess, onNotFound);
  }
  
  private tryGetMediaWithPreferences() {
    const preferencesConstrains: MediaStreamConstraints = {
      video: this.preferencesService.getVideoConstraintWithPreferences(),
      audio: this.preferencesService.getAudioConstraintWithPreferences(),
    };
    return this.tryGetUserMedia(preferencesConstrains);
  }
  
  private tryGetMediaDefault() {
    this.preferencesService.resetPreferences();
    return this.tryGetUserMedia({
      video: true,
      audio: true
    });
  }

  private tryGetMediaAudioOnly() { 
    return this.tryGetUserMedia({
      video: false,
      audio: true
    });
  }


  private setDeviceAndResolve(stream: MediaStream, resolve: (value: MediaStream | PromiseLike<MediaStream>) => void) {
    const devicesGoups = this.devicesGoups$.getValue();
    const videoDevices = devicesGoups.find(e => e.kind === DeviceType.VideoInput);
    const videoTrack = this.streamService.getVideoTrackForStream(stream);
    if (videoTrack && videoDevices) {
      const selectedVideoDevice = videoDevices.devices.find(e => e.deviceId === videoTrack.getSettings().deviceId);
      if (selectedVideoDevice) {
        this.selectedVideoInput$.next(selectedVideoDevice);
        this.preferencesService.setPreferredVideoInputDevice(selectedVideoDevice.deviceId);
      }
    }
    const audioDevices = devicesGoups.find(e => e.kind === DeviceType.AudioInput);
    const audioTrack = this.streamService.getAudioTrackForStream(stream);
    if (audioTrack && audioDevices) {
      const selectedAudioDevice = audioDevices.devices.find(e => e.deviceId === audioTrack.getSettings().deviceId);
      if (selectedAudioDevice) {
        this.selectedAudioInput$.next(selectedAudioDevice);
        this.preferencesService.setPreferredAudioInputDevice(selectedAudioDevice.deviceId);
      }
    }
    resolve(stream);
  }

}
