import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SalesHEHLComponent} from './salesHEHL.component'
import {AuthGuard} from '../core/auth/Services/authGaurd.service'

export const SalesHEHLRoutes : Routes = [
    {
        path: '',
        component:SalesHEHLComponent,
        canActivate:[AuthGuard],
        children: [
             {
               path: '',
               redirectTo:'/sales_HEHL/myApplications',
               pathMatch:"full"
            },
             {
                path: 'myApplications',
                loadChildren: "../SalesHEHL/myApplications/myApplication.module#MyApplicationModule"
            },{
                path:'loanApplication',
                loadChildren: "../SalesHEHL/loanApplication/loanApplication.module#LoanApplicationModule"
            }
        ]
    }
];

 
