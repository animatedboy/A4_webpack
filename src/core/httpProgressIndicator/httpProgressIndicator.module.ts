import { HttpProxy  } from '../../shared/httpProxy/httpInterceptor/httpProxy';
import { XHRBackend, RequestOptions, HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpProgressIndicatorFactory} from './Service/httpProgressIndicator.factory';
import {ProgressIndicatorInterceptor} from './Service/progressInterceptor.service';
import {HttpProgressIndicatorComponent} from './Component/httpProgressIndicator.component';
import { AuthInterceptor } from '../auth/Services/auth.interceptor'


function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, progressIndicatorInterceptor: ProgressIndicatorInterceptor,authInterceptor:AuthInterceptor) {
  let service = new HttpProxy(xhrBackend, requestOptions);
  service.addInterceptor(progressIndicatorInterceptor);
  service.addInterceptor(authInterceptor);
  return service;
}

@NgModule({
  imports: [CommonModule],
  declarations: [HttpProgressIndicatorComponent],
  providers: [AuthInterceptor,HttpProgressIndicatorFactory, ProgressIndicatorInterceptor,
    {
      provide: HttpProxy,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions,AuthInterceptor, ProgressIndicatorInterceptor]
    }],
  bootstrap: [HttpProgressIndicatorComponent],
  exports: [HttpProgressIndicatorComponent]
})

export class HttpProgressIndicatorModule { }
