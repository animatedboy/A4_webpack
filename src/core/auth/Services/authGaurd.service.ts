import {CanActivate,CanActivateChild,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import {Injectable} from  '@angular/core';
import {LoginService} from './login.service';
import {ResponseStatus} from '../../../shared/utilities/utility';
//import {Observable} from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private loginService:LoginService, private router:Router) { }

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
        return this.loginService.authorizeUser().then((e) => {
            if (e.status == ResponseStatus.Success) {
                return true;
            }else{
              this.router.navigate(['/login']);
              return false;
            }
        }).catch(() => {
            this.router.navigate(['/login']);
            return false;
        });
    }   
}