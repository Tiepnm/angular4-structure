import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs/index";


// import { JwtService } from '../services';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mjk3NzcsInVzZXJuYW1lIjoidGllcG5tIiwiZXhwIjoxNTMyOTIyNzYwfQ.FLbiadvOXtf_J1snEkmHVpDkT9XDdHHiYxfpkDPuX-0';

    if (token) {
      headersConfig['Authorization'] = `Token ${token}`;
    }


    const request = req.clone({setHeaders: headersConfig});
    return next.handle(request);
  }
}
