import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { RouterModule }        from '@angular/router';
import {SalesHEHLRoutes} from './salesHEHL.routes';
import {SalesHEHLComponent} from './salesHEHL.component';
import {SalesHEHLHeaderComponent} from './header/Components/SalesHEHLHeader.component';
import {SharedModule} from '../shared/shared.module'


@NgModule({
  imports:      [SharedModule,RouterModule,RouterModule.forChild(SalesHEHLRoutes),FormsModule],
  declarations: [SalesHEHLComponent,SalesHEHLHeaderComponent],
  providers:    [],
  exports:[SalesHEHLComponent,SalesHEHLHeaderComponent]
})

export class SalesHEHLModule { }
