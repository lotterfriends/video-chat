import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerUser } from '@ngx-webrtc/demo-video-chat-models';
import { UserStorageService } from './services/user-storage.service';

// Do not use in production, this is just a demo
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  user: ServerUser;

  constructor(
    private userStorageServie: UserStorageService
    ) {
  }

  getToken(): string {
    return btoa([this.user.name, this.user.secret].join(':'));
  }

  addAuthHeader(req: HttpRequest<any>): HttpRequest<any> {
    const token = this.getToken();
    return req.clone({
      setHeaders: {
        Authorization: `Basic ${token}`,
      },
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.user = this.userStorageServie.getCurrentUser();
    if (this.user) {
      return next.handle(this.addAuthHeader(req));
    }
    return next.handle(req);
  }
}