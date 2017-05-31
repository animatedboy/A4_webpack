import { NgModule }  from '@angular/core';
import {CommonModule} from '@angular/common'
import {DialogModule } from './dialogService/dialog.module';
import {RestProxy} from './httpProxy/restProxy/restProxy.service';
import {MenuComponent} from './menu/Components/menu.component';



@NgModule({
  imports: [ DialogModule,CommonModule],
  declarations:[MenuComponent],
  providers:[RestProxy],
  exports:[MenuComponent,CommonModule]
})

export class SharedModule {}