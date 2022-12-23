import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ShareScreenDirective, ToggleAudioSelfDirective, ToggleAudioUserDirective, ToggleVideoSelfDirective, ToggleVideoUserDirective } from './directives';
import { NgxWebrtcConfiguration } from './interfaces';
import { Configuration } from './ngx-webrtc-configuration';

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
  providers: []
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
