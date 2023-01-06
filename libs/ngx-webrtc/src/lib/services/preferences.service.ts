import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Configuration } from '../ngx-webrtc-configuration';
import { NGX_WEBRTC_STORAGE } from '../ngx-webrtc-storage';
import { NGX_WEBRTC_STORAGE_PREFIX } from '../ngx-webrtc-storage-prefix';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService implements OnDestroy {

  public preferredAudioInputDevice$ = new BehaviorSubject<string | null>(null);
  public preferredAudioOutputDevice$ = new BehaviorSubject<string | null>(null);
  public preferredVideoInputDevice$ = new BehaviorSubject<string | null>(null);
  public preferredAudioInputDeviceVolume$ = new BehaviorSubject<number | null>(null);
  private readonly VIDEO_INPUT_KEY: string = this.storageKey('preferred-video-input-device');
  private readonly AUDIO_INPUT_KEY: string = this.storageKey('preferred-audio-input-device');
  private readonly AUDIO_INPUT_VOLUME_KEY: string = this.storageKey('preferred-audio-input-device');
  private readonly AUDIO_OUTPUT_KEY: string = this.storageKey('preferred-audio-input-device');

  private subs: Subscription[] = [];

  constructor(
    private readonly config: Configuration,
    @Inject(NGX_WEBRTC_STORAGE_PREFIX) private readonly prefix: string,
    @Inject(NGX_WEBRTC_STORAGE) private readonly storage: 'localStorage' | 'sessionStorage',
  ) {
    this.initPreferredDevicesFromStorag();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    })
  }

  private storageKey(key: string): string {
    return [this.prefix, key].join('-');
  }

  private initSubscription<T>(subject: BehaviorSubject<T | null>, key: string): void {
    this.subs.push(subject.subscribe(newValue => {
      if (typeof newValue === 'string' || typeof newValue === 'number') {
        window[this.storage].setItem(key, `${newValue}`);
      } else {
        window[this.storage].removeItem(key);
      }
    }))
  }

  private setInitalValuesFromStorage() {
    this.preferredVideoInputDevice$.next(window[this.storage].getItem(this.VIDEO_INPUT_KEY));
    this.preferredAudioInputDevice$.next(window[this.storage].getItem(this.AUDIO_INPUT_KEY));
    const inputDeviceVolumeStorage = window[this.storage].getItem(this.AUDIO_INPUT_VOLUME_KEY);
    if (inputDeviceVolumeStorage) {
      const inputDeviceVolume = parseInt(inputDeviceVolumeStorage, 10);
      this.preferredAudioInputDeviceVolume$.next(inputDeviceVolume);
    }
    this.preferredAudioOutputDevice$.next(window[this.storage].getItem(this.AUDIO_OUTPUT_KEY));
  }

  private initPreferredDevicesFromStorag(): void {
    if(this.config.savePreferredDeviceInStorage) {
      this.setInitalValuesFromStorage();
      this.initSubscription<string>(this.preferredVideoInputDevice$, this.VIDEO_INPUT_KEY);
      this.initSubscription<string>(this.preferredAudioInputDevice$, this.AUDIO_INPUT_KEY);
      this.initSubscription<string>(this.preferredAudioOutputDevice$, this.AUDIO_OUTPUT_KEY);
      this.initSubscription<number>(this.preferredAudioInputDeviceVolume$, this.AUDIO_INPUT_VOLUME_KEY);
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