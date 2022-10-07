import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeviceType } from '../enums';
import { DevicesGroup } from '../interfaces';
import { NgxWebrtConfiguration } from '../ngx-webrtc-configuration';
import { StreamService } from './stream.service';

/**
 * The DeviceService help you with device interaction (audio and video devices) and can hold a state for devices if you want to implement
 * a lobby with device testing.
 */
@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  public selectedAudioInput$ = new BehaviorSubject<MediaDeviceInfo | null>(null);
  public selectedVideoInput$ = new BehaviorSubject<MediaDeviceInfo | null>(null);
  public preferredAudioInputDevice$ = new BehaviorSubject<string | null>(null);
  public preferredAudioOutputDevice$ = new BehaviorSubject<string | null>(null);
  public preferredVideoInputDevice$ = new BehaviorSubject<string | null>(null);
  public preferredAudioInputDeviceVolume$ = new BehaviorSubject<number | null>(null);
  private devices: MediaDeviceInfo[] = [];
  private devicesGoups: DevicesGroup[] = [];

  constructor(
    private readonly config: NgxWebrtConfiguration,
    private streamService: StreamService,
  ){}

  detectSelectedDevices() {
    this.getMediaDevices().then(devices => {
      this.devices = devices;
      this.devicesGoups = this.groupDeviceByKind(devices, [], true);
    });
  }


  getMediaDevicesGrouped() {
    return this.devicesGoups;
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
  changeSelectedDevice(deviceId: string, kind: DeviceType): void {
    if (kind === DeviceType.VideoInput) {
      if (this.devices && this.devices.length) {
        const device = this.devices.find(d => d.deviceId === deviceId);
        if (device) {
          this.selectedVideoInput$.next(device)
        }
      }
      navigator.mediaDevices.getUserMedia({ video: {
        deviceId
      }}).then((stream) => {
        
        const track = this.streamService.getVideoTrackForStream(stream);
        if (track) {
          this.streamService.replaceTrack(track);
        }
        const currentStream = this.streamService.getLocalStream();
        if (currentStream && track) {
          const oldTrack = this.streamService.getVideoTrackForStream(currentStream);
          oldTrack?.stop();
          this.streamService.replaceTrackInStream(currentStream, track);
        }
      }, console.error);
    }
    if (kind === DeviceType.AudioInput) {
      if (this.devices && this.devices.length) {
        const device = this.devices.find(d => d.deviceId === deviceId);
        if (device) {
          this.selectedAudioInput$.next(device)
        }
      }
      navigator.mediaDevices.getUserMedia({ audio: {
        deviceId
      }}).then((stream) => {
        const track = this.streamService.getAudioTrackForStream(stream);
        if(track) {
          this.streamService.replaceTrack(track);
        }
        const currentStream = this.streamService.getLocalStream();
        if (currentStream && track) {
          const oldTrack = this.streamService.getVideoTrackForStream(currentStream);
          oldTrack?.stop();
          this.streamService.replaceTrackInStream(currentStream, track);
        }
      }, console.error);
    }
    if (kind === DeviceType.AudioOutput) {
      this.streamService.setAudioOutput(deviceId);
    }
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
  groupDeviceByKind(devices: MediaDeviceInfo[], omit: DeviceType[] = [], updateSelected = false): DevicesGroup[] {
    const devicesGoups: DevicesGroup[] = [];
    const audioInput = devices.filter(d => d.kind === DeviceType.AudioInput);
    const audioOutput = devices.filter(d => d.kind === DeviceType.AudioOutput);
    const videoinput = devices.filter(d => d.kind === DeviceType.VideoInput);
    if (updateSelected) {
      devices.forEach(device => {
        const type = device.kind as DeviceType;
        if (this.isDeviceSelected(device, type)) {
          if (type === DeviceType.VideoInput) {
            this.selectedVideoInput$.next(device);
          }
          if (type === DeviceType.AudioInput) {
            this.selectedAudioInput$.next(device);
          }
        }
      });
    }
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

}
