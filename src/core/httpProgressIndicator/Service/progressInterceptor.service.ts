import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { HttpProgressIndicatorFactory } from './httpProgressIndicator.factory'

@Injectable() 
export class ProgressIndicatorInterceptor implements HttpInterceptor {

    constructor(private httpProgressIndicatorFactory:HttpProgressIndicatorFactory){
           
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth header from the service.
        this.httpProgressIndicatorFactory.onRequestStart(req.url);
        return next.handle(req).do(evt => {
            this.httpProgressIndicatorFactory.onRequestSuccess("abc");
            if (evt instanceof HttpResponse) {
              console.log('---> status:', evt.status);
              console.log('---> filter:', req.params.get('filter'));
            }
          });
        // Pass on the cloned request instead of the original request.
       
      }
 
    public interceptAfter(event) {
       this.httpProgressIndicatorFactory.onRequestSuccess("abc");
    }
}