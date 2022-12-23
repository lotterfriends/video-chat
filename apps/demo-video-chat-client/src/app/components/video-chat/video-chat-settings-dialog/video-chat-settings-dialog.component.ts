import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DeviceType, DeviceService, DevicesGroup } from 'ngx-webrtc';
import { distinctUntilChanged } from 'rxjs/operators';
import { UiService } from '../../../services/ui.service';

type WindowWithPlatform = typeof window & {platform : { isFirefox: boolean, isSafari: boolean}};

// TODO: display input level
@UntilDestroy()
@Component({
  selector: 'ngx-webrtc-video-chat-settings-dialog',
  templateUrl: './video-chat-settings-dialog.component.html',
  styleUrls: ['./video-chat-settings-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoChatSettingsDialogComponent implements OnInit {
  private platform = (window as WindowWithPlatform).platform;
  private showVideoSettingsDialogInternal = UiService.DEFAULTS.VIDEO_SETTINGS_DIALOG_VISIBLE;
  public devicesGoups: DevicesGroup[] = [];
  public getLabelForDeviceTypeFkt = this.uiService.getLabelForDeviceType;
  public set showVideoSettingsDialog(value){
    if (this.showVideoSettingsDialogInternal !== value && !value) {
      this.uiService.hideVideoSettingsDialog();
    }
    this.showVideoSettingsDialogInternal = value;
  }

  public get showVideoSettingsDialog(): boolean {
    return this.showVideoSettingsDialogInternal;
  }

  constructor(
    private uiService: UiService,
    private deviceService: DeviceService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {

    this.uiService.isVideoSettingsDialogVisible$.pipe(
      untilDestroyed(this),
      distinctUntilChanged()
    ).subscribe((isVisible) => {
      this.showVideoSettingsDialog = isVisible;
      this.cdr.detectChanges();
    });
    
    this.deviceService.devicesGoups$.pipe(
      untilDestroyed(this),
      distinctUntilChanged()
    ).subscribe(devicesGoups => {
      this.initDeviceList(devicesGoups);
    });
  }

  /**
   * change audio output, bad browser support
   * only blink engine (chrome, edge, opera)
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/setSinkId
   */
  initDeviceList(devicesGoups: DevicesGroup[]): void {
    const omit: DeviceType[] = [];
    if (this.platform.isFirefox || this.platform.isSafari) {
      omit.push(DeviceType.AudioOutput);
    }
    if (omit.length) {
      this.devicesGoups = devicesGoups.filter(e => !omit.includes(e.kind));
    } else {
      this.devicesGoups = devicesGoups;
    }
    this.cdr.detectChanges();
  }

  isSelected(device: MediaDeviceInfo, kind: DeviceType): boolean {
    if (kind === DeviceType.VideoInput) {
      return this.deviceService.selectedVideoInput$.getValue() === device;
    }
    if (kind === DeviceType.AudioInput) {
      return this.deviceService.selectedAudioInput$.getValue() === device;
    }
    return false;
  }

  changeSelectedDevice(event: Event, kind: DeviceType): void {
    const prevValue = this.deviceService.selectedVideoInput$.getValue();
    const deviceId = (event.target as HTMLSelectElement).value;
    this.deviceService.changeSelectedDevice(deviceId, kind).catch(e => {
      alert(e);
      const element = document.getElementById(`device-group-${kind}`) as HTMLSelectElement;
      if (element && prevValue) {
        element.value = prevValue.deviceId;
      }
    })
  }

}
