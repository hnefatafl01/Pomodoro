import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor  {

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req);
    }

}
