import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';//to use ngModel
import { SharedModule } from '../shared/shared.module'
import { CoreModule } from '../core/core.module'
import { AppComponent } from './app.component'
import { AppRoutingModule }   from './appRoute.module';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule } from '@angular/material';


@NgModule({
  imports:      [ MaterialModule,BrowserAnimationsModule,HttpModule,AppRoutingModule,CoreModule,SharedModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[],
  exports:[MaterialModule]
})

export class AppModule { }
