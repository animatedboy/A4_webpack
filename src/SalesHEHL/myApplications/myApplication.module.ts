import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { MyApplicationRoutes } from './myApplication.route'
import { MyApplicationsComponent } from './Components/myApplications.component'


@NgModule({
  declarations: [ MyApplicationsComponent ],
  imports:      [CommonModule,RouterModule,RouterModule.forChild(MyApplicationRoutes)],
  providers:    [],
  exports:[MyApplicationsComponent]
})
 
export class MyApplicationModule { }
