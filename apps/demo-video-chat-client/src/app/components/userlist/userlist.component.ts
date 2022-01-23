import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ServerUser, User } from '@ngx-webrtc/demo-video-chat-models';
import { CallService, UserInCall } from '../../peer/services/call.service';
import { StreamService } from '../../peer/services/stream.service';
import { UserStorageService } from '../../services/user-storage.service';

@UntilDestroy()
@Component({
  selector: 'ngx-webrtc-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserlistComponent implements OnInit {

  public users;
  public selfAudioMuted = false;
  public selfVideoMuted = false;
  public self: ServerUser;

  constructor(
    public callService: CallService,
    private cdr: ChangeDetectorRef,
    private userService: UserStorageService,
    private streamService: StreamService,
  ) {

  }

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.self = this.userService.getCurrentUser();
    this.callService.started$.pipe(untilDestroyed(this)).subscribe(this.onChatStarted.bind(this));
  }

  onChatStarted(isStarted: boolean): void {
    if (isStarted) {
      this.streamService.localStreamStatusChanged.pipe(
        untilDestroyed(this),
      ).subscribe(this.onLocalStreamStatusChanged.bind(this));
    }
  }

  onLocalStreamStatusChanged(stream: MediaStream | MediaStreamTrack): void {
    if (stream){
      if (stream instanceof MediaStreamTrack && stream.kind === StreamType.Audio) {
        this.selfAudioMuted = !stream.enabled;
      }
      if (stream instanceof MediaStream && stream.getAudioTracks().length) {
        const track = this.streamService.getAudioTrackForStream(stream);
        this.selfAudioMuted = !track.enabled;
      }
      if (stream instanceof MediaStreamTrack && stream.kind === StreamType.Video) {
        this.selfVideoMuted = !stream.enabled;
      }
      if (stream instanceof MediaStream && stream.getVideoTracks().length) {
        const track = this.streamService.getVideoTrackForStream(stream);
        this.selfVideoMuted = !track.enabled;
      }
      this.cdr.detectChanges();
    }
  }

  onUserJoined(users: User): void {
    this.users = users;
    this.cdr.detectChanges();
  }

  changeVolume($event: Event, user: UserInCall): void {
    const volume = parseInt(($event.target as HTMLInputElement).value, 10);
    user.volume = volume;
    (user.node.instance.audioStreamNode.nativeElement as HTMLAudioElement).volume = volume;
  }

  unmute(user: UserInCall): void {
    user.volume = 1;
    (user.node.instance.audioStreamNode.nativeElement as HTMLAudioElement).volume = 1;
  }

  mute(user: UserInCall): void {
    user.volume = 0;
    (user.node.instance.audioStreamNode.nativeElement as HTMLAudioElement).volume = 0;
  }

}