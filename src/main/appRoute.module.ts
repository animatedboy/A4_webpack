import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../core/auth/Services/authGaurd.service';
import {SalesHEHLHeaderComponent} from '../SalesHEHL/header/Components/SalesHEHLHeader.component';
import {SalesHEHLComponent} from '../SalesHEHL/salesHEHL.component';
import {SharedModule} from '../shared/shared.module'

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'contact', loadChildren: '../contact/contact.module#ContactModule' },
  { path:'sales_HEHL', loadChildren:'../SalesHEHL/salesHEHL.module#SalesHEHLModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true }),SharedModule],
  exports: [RouterModule],
  providers :[AuthGuard],
  declarations:[]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/