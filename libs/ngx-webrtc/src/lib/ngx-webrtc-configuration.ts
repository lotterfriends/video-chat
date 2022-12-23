import { NgxWebrtcConfiguration } from './interfaces';

export class Configuration implements NgxWebrtcConfiguration {
  userIdentifier = '';
  debug = false;
  savePreferredDeviceInStorage = true;
}