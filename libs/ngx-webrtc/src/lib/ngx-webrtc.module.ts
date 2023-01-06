import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ShareScreenDirective, ToggleAudioSelfDirective, ToggleAudioUserDirective, ToggleVideoSelfDirective, ToggleVideoUserDirective } from './directives';
import { NgxWebrtcConfiguration } from './interfaces';
import { Configuration } from './ngx-webrtc-configuration';
import { NGX_WEBRTC_STORAGE } from './ngx-webrtc-storage';
import { NGX_WEBRTC_STORAGE_PREFIX } from './ngx-webrtc-storage-prefix';

@NgModule({
  declarations: [
    ToggleAudioSelfDirective,
    ToggleVideoSelfDirective,
    ToggleAudioUserDirective,
    ToggleVideoUserDirective,
    ShareScreenDirective,
  ],
  exports: [
    ToggleAudioSelfDirective,
    ToggleVideoSelfDirective,
    ToggleAudioUserDirective,
    ToggleVideoUserDirective,
    ShareScreenDirective,
  ],
  imports: [CommonModule],
  providers: [
    { provide: NGX_WEBRTC_STORAGE_PREFIX, useValue: 'ngx-webrtc' },
    { provide: NGX_WEBRTC_STORAGE, useValue: 'sessionStorage' },
  ]
})
export class NgxWebrtcModule {
  static forRoot(
    libConfiguration: NgxWebrtcConfiguration
  ): ModuleWithProviders<NgxWebrtcModule> {
    return {
      ngModule: NgxWebrtcModule,
      providers: [
        {
          provide: Configuration,
          useValue: libConfiguration,
        },
      ],
    };
  }
}
