import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Configuration } from '../ngx-webrtc-configuration';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  private storage: 'localStorage' | 'sessionStorage' = 'sessionStorage';
  public preferredAudioInputDevice$ = new BehaviorSubject<string | null>(null);
  public preferredAudioOutputDevice$ = new BehaviorSubject<string | null>(null);
  public preferredVideoInputDevice$ = new BehaviorSubject<string | null>(null);
  public preferredAudioInputDeviceVolume$ = new BehaviorSubject<number | null>(null);

  constructor(
    private readonly config: Configuration,
  ) {
    this.initPreferredDevicesFromStorag();
  }

  private initPreferredDevicesFromStorag(): void {
    // TODO: more generic and add unsubscribe
    console.log(this.config);
    if(this.config.savePreferredDeviceInStorage) {
      this.preferredVideoInputDevice$.next(window[this.storage].getItem('ngx-webrtc-preferred-video-input-device'));
      this.preferredAudioInputDevice$.next(window[this.storage].getItem('ngx-webrtc-preferred-audio-input-device'));
      const inputDeviceVolumeStorage = window[this.storage].getItem('ngx-webrtc-preferred-audio-input-device-volume');
      if (inputDeviceVolumeStorage) {
        const inputDeviceVolume = parseInt(inputDeviceVolumeStorage, 10);
        this.preferredAudioInputDeviceVolume$.next(inputDeviceVolume);
      }
      this.preferredAudioOutputDevice$.next(window[this.storage].getItem('ngx-webrtc-preferred-audio-output-device'));

      this.preferredVideoInputDevice$.subscribe(preferredVideoInputDevice => {
        if (preferredVideoInputDevice) {
          window[this.storage].setItem('ngx-webrtc-preferred-video-input-device', preferredVideoInputDevice);
        } else {
          window[this.storage].removeItem('ngx-webrtc-preferred-video-input-device');
        }
      });
      this.preferredAudioInputDevice$.subscribe(preferredAudioInputDevice => {
        if (preferredAudioInputDevice) {
          window[this.storage].setItem('ngx-webrtc-preferred-audio-input-device', preferredAudioInputDevice);
        } else {
          window[this.storage].removeItem('ngx-webrtc-preferred-audio-input-device');
        }
      });
      this.preferredAudioOutputDevice$.subscribe(preferredAudioOutputDevice => {
        if (preferredAudioOutputDevice) {
          window[this.storage].setItem('ngx-webrtc-preferred-audio-output-device', preferredAudioOutputDevice);
        } else {
          window[this.storage].removeItem('ngx-webrtc-preferred-audio-output-device');
        }
      });
      this.preferredAudioInputDeviceVolume$.subscribe(preferredAudioInputDeviceVolume => {
        if (preferredAudioInputDeviceVolume) {
          window[this.storage].setItem('ngx-webrtc-preferred-audio-input-device-volume', `${preferredAudioInputDeviceVolume}`);
        } else {
          window[this.storage].removeItem('ngx-webrtc-preferred-audio-input-device-volume');
        }
      });
    }
  }

  getAudioConstraintWithPreferences(): boolean | { deviceId?: string, volume?: number } {
    const preferredAudioInputDevice = this.preferredAudioInputDevice$.getValue();
    const preferredAudioInputDeviceVolume = this.preferredAudioInputDeviceVolume$.getValue();
    let audioConstraint: boolean | { deviceId?: string, volume?: number }  = true;
    if (preferredAudioInputDevice || preferredAudioInputDeviceVolume !== null) {
      if (preferredAudioInputDevice && preferredAudioInputDeviceVolume !== null) {
        audioConstraint = {
          deviceId: preferredAudioInputDevice,
          volume: preferredAudioInputDeviceVolume
        }
      } else if (preferredAudioInputDevice) {
        audioConstraint = {
          deviceId: preferredAudioInputDevice
        }
      } else if (preferredAudioInputDeviceVolume) {
        audioConstraint = {
          volume: preferredAudioInputDeviceVolume
        }
      }
    }
    return audioConstraint;
  }

  getVideoConstraintWithPreferences(): boolean | { deviceId?: string }  {
    const preferredVideoInputDevice = this.preferredVideoInputDevice$.getValue();
    return preferredVideoInputDevice ? { deviceId: preferredVideoInputDevice } : true
  }

  setPreferredAudioInputDevice(deviceId: string): void {
    this.preferredAudioInputDevice$.next(deviceId);
  }
  setPreferredAudioOutputDevice(deviceId: string): void {
    this.preferredAudioOutputDevice$.next(deviceId);
  }
  setPreferredVideoInputDevice(deviceId: string): void {
    this.preferredVideoInputDevice$.next(deviceId);
  }
  setPreferredAudioInputDeviceVolume(volume: number): void {
    this.preferredAudioInputDeviceVolume$.next(volume);
  }

  resetPreferences(): void {
    this.preferredAudioInputDevice$.next(null);
    this.preferredAudioOutputDevice$.next(null);
    this.preferredVideoInputDevice$.next(null);
    this.preferredAudioInputDeviceVolume$.next(null);
  }
  
}