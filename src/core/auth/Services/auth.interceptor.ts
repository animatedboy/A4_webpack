import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

//import { CookieService } from '../../cookieService'

@Injectable() 
export class AuthInterceptor implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth header from the service.
        const authHeader = localStorage.getItem("token");
        let authReq = req;
        // Clone the request to add the new header.
        if(authHeader){
         authReq= req.clone({headers: req.headers.set('Authorization', authHeader)});
         return next.handle(authReq);
        
        }
        return next.handle(authReq).do(evt => {
            if (evt instanceof HttpResponse) {
              console.log('---> status:', evt.status);
              console.log('---> filter:', req.params.get('filter'));
              let leapAuthToken = evt.headers.get('leapauthtoken');
              let tokenExpiry = evt.headers.get("tokenexpiry");

            if(leapAuthToken){
                localStorage.setItem('token',leapAuthToken);
                localStorage.setItem('token_expiry',tokenExpiry);
            }
            }else if(evt instanceof HttpErrorResponse){
                console.log('---> status:', evt.status);
               console.log('---> filter:', req.params.get('filter'));
            }
          });
        // Pass on the cloned request instead of the original request.
       
      }


}