import { Component } from '@angular/core';
import {Router} from '@angular/router'
import {LoginService} from '../Services/login.service';
import {ResponseStatus,IBaseResponse} from '../../../shared/utilities/utility';
import { LoginModel } from '../Models/loginModel';

@Component({
  moduleId:module.id,
  selector: 'login',
  templateUrl:'../Templates/login.html'
})
export class LoginComponent { 
    title = 'Angular Demo'; 
    loginModel={
        userId:'',
        password:''
    };
    constructor(private _loginService:LoginService,private router:Router){

    };
    login(loginModel):void{
        this._loginService.authenticate(loginModel).then((response) => {
            if(response.status===ResponseStatus.Success){
                this.router.navigateByUrl(`/sales_HEHL/myApplications`);
            }
        })
    };
}
