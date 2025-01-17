import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { StreamService } from 'ngx-webrtc';
import { UiService, ViewMode } from '../../../services/ui.service';

@UntilDestroy()
@Component({
  selector: 'ngx-webrtc-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsComponent implements OnInit {
  public showUserlist = true;
  public inFullscreen = false;
  public userlistVisisble = UiService.DEFAULTS.USERLIST_VISIBLE;
  public chatVisisble = UiService.DEFAULTS.CHAT_VISIBLE;
  public viewMode = UiService.DEFAULTS.VIEW_MODE;
  public viewModes = ViewMode;
  public viewModesList = Object.values(ViewMode);
  @Output() leave = new EventEmitter();
  @Output() fullscreen = new EventEmitter();

  constructor(
    private uiService: UiService,
    private streamService: StreamService, 
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.uiService.viewMode$.pipe(
      untilDestroyed(this)
    ).subscribe(mode => {
      this.viewMode = mode;
      this.cdr.detectChanges();
    });

    this.streamService.localAudioStreamStatusChanged.pipe(untilDestroyed(this)).subscribe(isAudioEnabled => {
      console.log('isAudioEnabled', isAudioEnabled);
    })

  }

  onToggleFailed(error: Error) {
    alert(error);
  }

  toggleUserlist(): void {
    this.uiService.toggleShowUserlist();
    this.userlistVisisble = !this.userlistVisisble;
  }

  toggleChat(): void {
    this.uiService.toggleShowChat();
    this.chatVisisble = !this.chatVisisble;
  }

  toggleVideoSettingsDialog(): void {
    this.uiService.toggleShowVideoSettingsDialog();
  }

  toggleFullscreen(): void {
    this.fullscreen.emit();
    this.inFullscreen = !this.inFullscreen;
  }

  doLeave(): void {
    this.leave.emit();
  }

  setViewMode(mode: ViewMode): void {
    this.uiService.setViewMode(mode);
  }

}
