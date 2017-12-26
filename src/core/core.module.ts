import { NgModule }      from '@angular/core';
import { LoginModule } from './auth/login.module';
import { HttpProgressIndicatorModule } from '../core/httpProgressIndicator/httpProgressIndicator.module';
import { FooterComponent } from './footer/Components/footer.component'
import { LoginService } from './auth/Services/login.service';
import { HeaderService } from './header/Services/header.service'
import {RestProxy} from './restProxy/restProxy.service';
import {DialogsService} from './dialogService/dialog.service'
import { SharedModule} from '../shared/shared.module'
//import {MenuComponent} from '../shared/menu/Components/menu.component'

@NgModule({
  imports: [SharedModule,LoginModule,HttpProgressIndicatorModule],
  declarations:[FooterComponent],
  providers:[LoginService,HeaderService,RestProxy,DialogsService],
  exports:[HttpProgressIndicatorModule,FooterComponent]
})

export class CoreModule {}