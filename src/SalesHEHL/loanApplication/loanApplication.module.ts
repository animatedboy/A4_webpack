import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { LoanApplicationRoutes } from './loanApplication.routes'
import { LoanApplicationComponent } from './Components/loanApplication.component'


@NgModule({
  imports:      [CommonModule,RouterModule,RouterModule.forChild(LoanApplicationRoutes)],
  declarations: [ LoanApplicationComponent ],
  providers:    [],
  exports:[LoanApplicationComponent]
})
 
export class LoanApplicationModule { }