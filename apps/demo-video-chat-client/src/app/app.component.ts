import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { IceServer, UtilityService } from 'ngx-webrtc';
import { lastValueFrom } from 'rxjs';
import { VideoChatComponent } from './components/video-chat/video-chat.component';
import { ChannelHistoryService } from './services/channel-history.service';
import { ServerService } from './services/server.service';
import { SocketService } from './services/socket.service';
import { UiService } from './services/ui.service';
import { UserStorageService } from './services/user-storage.service';

@Component({
  selector: 'ngx-webrtc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showJoin = true;
  public showChat = false;
  public roomName = this.genRoom();
  public wantedRoomName = '';
  public uiShowUserlist = UiService.DEFAULTS.USERLIST_VISIBLE;
  public uiShowChat = UiService.DEFAULTS.CHAT_VISIBLE;
  public showJoinDialog = false;
  public wantJoin = false;
  private servers: IceServer[] = [];

  @ViewChild('videoChat') private videoChatComponent!: VideoChatComponent;
  @ViewChild('room', { static: false }) room!: ElementRef;

  @HostListener('window:popstate', ['$event']) popsate(): void {
    if (location.pathname && location.pathname.length > 6) {
      this.roomName = location.pathname.substring(1);
      this.join();
    } else {
      this.leave();
    }
  }

  constructor(
    private userStorageService: UserStorageService,
    private socketService: SocketService,
    private serverService: ServerService,
    private uiService: UiService,
    public channelHistoryService: ChannelHistoryService,
  ) {

    this.uiService.isUserlistVisible$.subscribe(isVisible => {
      this.uiShowUserlist = isVisible;
    });
    this.uiService.isChatVisible$.subscribe(isVisible => {
      this.uiShowChat = isVisible;
    });

    // ask for username if not set yet
    if (!this.userStorageService.getCurrentUser()) {
      this.userStorageService.setCurrentUsername(prompt('enter username') || 'Anon' + UtilityService.getRandom(6));
    }

    // get me when register/refresh is ready
    this.socketService.onMe().subscribe(async (me) => {
      this.userStorageService.setCurrentUser(me.user);
      this.servers = await lastValueFrom(this.serverService.getServers());
      if (me.reason === 'register') {
        this.shouldJoin();
      }
    });

    // on error start with a fresh register
    this.socketService.onRegisterError().subscribe(error => {
      if (error.code === 'USERNAME_TAKEN') {
        this.userStorageService.removeCurrentUser();
        alert('The Usernname you chooese is taken, please choose a different one');
        this.userStorageService.setCurrentUsername(prompt('enter username') || 'Anon' + UtilityService.getRandom(6));
      }
      this.socketService.register();
    });

    // start when connected
    this.socketService.isConnected.subscribe((connected: boolean) => {
      if (connected) {
        const user = this.userStorageService.getCurrentUser();
        if (user) {
          this.socketService.refresh(user);
        } else {
          this.socketService.register();
        }
      }
    });
  }

  private shouldJoin(): void {
    if (location.pathname && location.pathname.length > 6) {
      const roomName = location.pathname.substring(1);
      this.join(roomName, true);
    }
  }

  private genRoom(): string {
    return UtilityService.getRandom(10);
  }

  public newRoom(): void {
    this.roomName = this.genRoom();
  }

  public join(roomName?: string | null, ask = false): void {
    const room = roomName ? roomName : this.roomName;
    // with asking we can prevent that users join on the same time (watch mode with automatic reload)
    // when users join on the same time it's unclear who is initiator
    if (ask) {
      this.wantedRoomName = room;
      this.showJoinDialog = true;
    } else {
      this.doJoin(room);
    }
  }
  
  public doJoin(room: string) {
    this.showJoinDialog = false;
    this.roomName = room;
    this.channelHistoryService.addChannelToHistory(room);
    // update ui
    this.showChat = true;
    this.showJoin = false;
  
    // join room
    this.socketService.joinRoom(room);
    setTimeout(() => {
      this.videoChatComponent?.startCall(this.servers);
    });
  
    // update url
    history.pushState({room}, `room ${room}`, `${room}`);
  }

  joinClose() {
    this.joinNo();
  }

  joinYes() {
    this.doJoin(this.wantedRoomName);
    this.showJoinDialog = false;
  }

  joinNo() {
    location.href = location.origin;
    this.showJoinDialog = false;
  }

  public leave(): void {
    this.videoChatComponent.stopCall();
    this.socketService.leaveRoom();
    history.pushState({}, '', location.origin);
    this.showChat = false;
    this.showJoin = true;
    this.newRoom();
    console.clear();
  }

  toggleFullscreen(): void {
    if (this.room.nativeElement) {
      if (window.innerHeight !== screen.height) {
        this.room.nativeElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  }

}
