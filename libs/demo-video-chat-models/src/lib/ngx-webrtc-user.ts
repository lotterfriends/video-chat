import { NgxWebrtcUser } from 'ngx-webrtc';

export interface User extends NgxWebrtcUser {
  name: string;
  socketId: string;
}
