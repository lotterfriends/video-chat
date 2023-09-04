import {
  AfterViewInit, Component,
  ElementRef, HostListener, Input, OnInit, ViewChild, ViewContainerRef
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ConferenceGridHolderComponent } from '@ngx-webrtc/demo-ui-components';
import { MessageType, User } from '@ngx-webrtc/demo-video-chat-models';
import {
  CallService, DeviceService, IceServer, PeerConnectionClient, PeerConnectionClientSignalMessage,
  StreamService
} from 'ngx-webrtc';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter, first, map } from 'rxjs/operators';
import { MessagesService } from '../../services/messages.service';
import { SocketService } from '../../services/socket.service';
import { UiService, ViewMode } from '../../services/ui.service';
import { UserStorageService } from '../../services/user-storage.service';
import { RemotePeerComponent } from './remote-peer/remote-peer.component';
import { VideoChat } from './video-chat';

/**
 * This is an example implementation of an video chat
 */
@UntilDestroy()
@Component({
  selector: 'ngx-webrtc-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.css'],
})
export class VideoChatComponent implements OnInit, AfterViewInit {

  private debug = true;
  public viewMode = UiService.DEFAULTS.VIEW_MODE;
  public self: string | null = this.userStorageService.getCurrentUsername();
  private users: User[] = [];
  private identifier: (keyof User) = this.callService.getUserIdentifier();
  private usersJoinedDuringInit: User[] = [];
  private vc: VideoChat;
  public localVideoEnabled$ = new BehaviorSubject(false);

  @Input() room!: string;
  @ViewChild('localStreamNode', { static: false }) localStreamNode!: ElementRef<HTMLVideoElement>;
  @ViewChild('remotePeerHolder',  { read: ViewContainerRef })  remotePeerHolder!: ViewContainerRef;
  @ViewChild('holder', { static: false }) public holder!: ConferenceGridHolderComponent;
  @HostListener('window:resize') public onWinResize(): void {
    this.resize();
  }
  @HostListener('window:beforeunload') onClose(): void {
    this.stopCall();
  }

  constructor(
    private userStorageService: UserStorageService,
    private socketService: SocketService,
    private messageService: MessagesService,
    private streamService: StreamService,
    private callService: CallService,
    private uiService: UiService,
    private deviceService: DeviceService,
  ) {
    this.vc = new VideoChat(callService, streamService);
    this.localVideoEnabled$ = this.vc.localVideoEnabled$;
  }


  ngAfterViewInit(): void {
    // update grid size when ui changed
    this.uiService.isChatVisible$.pipe(untilDestroyed(this)).subscribe(this.resize.bind(this));
    this.uiService.isUserlistVisible$.pipe(untilDestroyed(this)).subscribe(this.resize.bind(this));
  }

  ngOnInit(): void {
    this.log('init');
    this.initSocketEvents();

    this.vc.startPeerConnection.pipe(untilDestroyed(this)).subscribe(this.startPeerConnection.bind(this))
    this.streamService.localStream$.pipe(untilDestroyed(this)).subscribe((stream) => {
      if (stream) {
        const nodeStream: MediaStream | null = this.localStreamNode.nativeElement.srcObject as MediaStream;
        if (stream.getTracks().length && stream != nodeStream) {
          this.streamService.setStreamInNode(this.localStreamNode.nativeElement, stream, true, true);
        }
      }
    });
  }

  private initSocketEvents() {
    this.socketService.onUsersJoinedRoom().pipe(
      untilDestroyed(this),
      distinctUntilChanged()
    ).subscribe(this.onUserJoined.bind(this));

    this.socketService.onUserLeftRoom().pipe(
      untilDestroyed(this),
      distinctUntilChanged()
    ).subscribe(this.onUserLeft.bind(this));

    // signaling in
    this.socketService.getPrivateMessages().pipe(
      untilDestroyed(this),
      filter(m => m.type === MessageType.Signal)
    ).subscribe(message => {
      for (const client of this.vc.getClients()) {
        if (client.user.name === message.author) {
          client.connection.receiveSignalingMessage(message.message);
        }
      }
    });
  }

  public startCall(servers: IceServer[]) {
    this.vc.start(servers);
    this.deviceService.tryGetMedia(this.onLocalStream.bind(this), this.onNoStream.bind(this));
  }

  private onLocalStream(stream: MediaStream): void {
    this.log('onLocalStream', stream);
    this.streamService.setLocalStream(stream);

    this.log('joinedRoom');

    this.socketService.joinedRoom();
    this.callService.start();
  }

  private onNoStream(): void {
    this.log('onNoStream');
    const emptyStream = new MediaStream();
    this.streamService.setLocalStream(emptyStream);
    this.log('joinedRoom');
    this.socketService.joinedRoom();
    this.callService.start();
    if (this.usersJoinedDuringInit.length) {
      this.onUserJoined(this.usersJoinedDuringInit);
    }
  }

  public getConnectedUserCount(): number {
    return this.vc.getClients().length;
  }

  public hasConnectedUsers(): boolean {
    return this.vc.getClients().length > 0;
  }

  private filterConnectedUsers(user: User): boolean {
    return user[this.identifier] !== this.self &&
      !this.vc.getClients().map(e => e.user[this.identifier]).includes(user[this.identifier]);
  }

  private async onUserJoined(users: User[]): Promise<void> {
    if (!this.callService.started$.getValue()) {
      this.usersJoinedDuringInit = users;
      return;
    }
    this.usersJoinedDuringInit = [];
    if (this.users === users) {
      return;
    }
    this.users = users;
    this.log('onUserJoined', users);
    if (users.length > 1) {

      if (users.length > 2 && this.vc.getClients().length) {
        this.vc.isInitiator = true;
      }

      for (const [i, user] of users.filter(this.filterConnectedUsers.bind(this)).entries()) {
        this.log('new user', user);
        const component = this.remotePeerHolder.createComponent(RemotePeerComponent);
        const client = await this.vc.addPeer(user, component);
        
         // signaling out
        client.connection.signalingMessage.pipe(untilDestroyed(this)).subscribe(m => {
          // this.log(m);
          this.socketService.sendSignalMessage(m, user.name);
        });
      }
      this.resize();
    } else {
      this.vc.isInitiator = true;
    }
  }

  private onUserLeft(user: User) {
    this.log('onUserLeft', user);
    if (user.name !== this.self) {
      this.vc.onUserLeft(user);
      this.resize();
    }
  }

  private startPeerConnection(client: {connection: PeerConnectionClient, user: User}): void {
    if (this.vc.isInitiator) {
      client.connection.startAsCaller();
      this.log('start as caller', client.user);
    } else {
      this.messageService.getPrivateMessages(this.room, MessageType.Signal, client.user.name, this.callService.getSince()).pipe(
        first(),
        map(m => m.messages.map(e => JSON.parse(e.message) as PeerConnectionClientSignalMessage))
      ).subscribe(messages => {
        this.log('start as callee', client.user, messages);
        client.connection.startAsCallee(messages);
      });
    }

    client.connection.negotiationNeededTriggered.pipe(
      untilDestroyed(this),
    ).subscribe(() => {
      client.connection.createOffer();
    });
  }

  public stopCall(): void {
    this.callService.users$.next([]);
    this.streamService.stopStreamInNode(this.localStreamNode);
    this.streamService.setLocalStream(null);
    this.vc.getClients()?.forEach(client => {
      client.connection.close();
    });
    this.remotePeerHolder.clear();
    this.vc.resetClients();
    this.callService.updateSince();
    this.callService.stop();
  }

  private resize(): void {
    setTimeout(() => {
      if (this.viewMode === ViewMode.Grid) {
        this.holder.resizeGrid();
      } else {
        this.holder.removeSize();
      }
    });
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  private log(...args: any[]): void {
    if (this.debug) {
      console.log(...args);
    }
  }

}
