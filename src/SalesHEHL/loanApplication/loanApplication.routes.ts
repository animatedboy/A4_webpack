import {Routes, RouterModule} from '@angular/router';
import {LoanApplicationComponent} from './Components/loanApplication.component'
export const LoanApplicationRoutes : Routes = [
    {
        path: '',
        component:LoanApplicationComponent,
        data:{headerText:"Loan Application"}
    }
];

