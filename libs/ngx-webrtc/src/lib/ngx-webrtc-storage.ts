import { InjectionToken } from '@angular/core';

export const NGX_WEBRTC_STORAGE = new InjectionToken<'localStorage' | 'sessionStorage'>('NGX_WEBRTC_STORAGE');