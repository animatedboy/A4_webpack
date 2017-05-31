import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent }  from './Components/login.component';
import { FormsModule } from '@angular/forms';//to use ngModel
import { RouterModule }        from '@angular/router';
import { HeaderComponent } from '../header/Components/header.component'

@NgModule({
  imports:      [ CommonModule,FormsModule,RouterModule.forChild([ { path: 'login', component: LoginComponent}])],
  declarations: [ LoginComponent,HeaderComponent ],
})

export class LoginModule { }
