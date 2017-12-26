
import { XHRBackend, RequestOptions, HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpProgressIndicatorFactory} from './Service/httpProgressIndicator.factory';
import {ProgressIndicatorInterceptor} from './Service/progressInterceptor.service';
import {HttpProgressIndicatorComponent} from './Component/httpProgressIndicator.component';
import { AuthInterceptor } from '../auth/Services/auth.interceptor'




@NgModule({
  imports: [CommonModule],
  declarations: [HttpProgressIndicatorComponent],
  providers: [HttpProgressIndicatorFactory,{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },{ provide: HTTP_INTERCEPTORS, useClass: ProgressIndicatorInterceptor, multi: true }],
  bootstrap: [HttpProgressIndicatorComponent],
  exports: [HttpProgressIndicatorComponent]
})

export class HttpProgressIndicatorModule { }
