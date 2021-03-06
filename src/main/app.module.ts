import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';//to use ngModel
import { SharedModule } from '../shared/shared.module'
import { CoreModule } from '../core/core.module'
import { AppComponent } from './app.component'
import { AppRoutingModule }   from './appRoute.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule } from '@angular/material';


@NgModule({
  imports:      [MatDialogModule,BrowserAnimationsModule,AppRoutingModule,CoreModule,SharedModule,HttpClientModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[],
  exports:[MatDialogModule]
})

export class AppModule { }
