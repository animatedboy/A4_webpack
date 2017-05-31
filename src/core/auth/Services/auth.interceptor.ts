import { Interceptor, InterceptedRequest, InterceptedResponse } from '../../../shared/httpProxy/httpInterceptor/httpProxy';
import {Injectable} from '@angular/core';
import { Headers } from '@angular/http';
//import { CookieService } from '../../cookieService'

@Injectable() 
export class AuthInterceptor implements Interceptor {

    
    public interceptBefore(request: InterceptedRequest): InterceptedRequest {
        // Do whatever with request: get info or edit it
        let token = localStorage.getItem("token");
        if(token){
            request.options.headers.append('Authorization',token);
        }
        return request;
        /*
          You can return:
            - Request: The modified request
            - Nothing: For convenience: It's just like returning the request
            - <any>(Observable.throw("cancelled")): Cancels the request, interrupting it from the pipeline, and calling back 'interceptAfter' in backwards order of those interceptors that got called up to this point.
        */
    }
 
    public interceptAfter(interceptedResponse: InterceptedResponse): InterceptedResponse {
        // Do whatever with response: get info or edit it
        let leapAuthToken = interceptedResponse.response.headers.get('leapauthtoken');
        let tokenExpiry = interceptedResponse.response.headers.get("tokenexpiry");

        if(leapAuthToken){
            localStorage.setItem('token',leapAuthToken);
            localStorage.setItem('token_expiry',tokenExpiry);
        }
     
        return interceptedResponse;
        /*
          You can return:
            - Response: The modified response
            - Nothing: For convenience: It's just like returning the response
        */
    }
}