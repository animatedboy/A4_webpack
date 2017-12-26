import {Injectable , EventEmitter} from '@angular/core';
import{Http} from '@angular/http';
import { RestProxy  } from '../../restProxy/restProxy.service';// service provider for HttpModule
import {Observable} from 'rxjs'; //for returning promise from service request
import {URLCreater} from '../../../shared/utilities/URLCreater';
import {ResponseStatus,IBaseResponse} from '../../../shared/utilities/utility';
@Injectable()
export class LoginService{
     _vdo = {
         identity:{
             userData:{},
             isLoggedIn:false
         },
         
     };

    constructor(private _http:RestProxy){};

    get identity(){
        return this._vdo.identity;
    }

    private _handleError(error:any):Promise<any>{
        console.log('An error occurred', error);
        return Promise.reject(error.message||error);
    };

    private GETUSERS = new URLCreater('usermanagementapi/employees/entitlements');
    private AUTHUSERS = new URLCreater('usermanagementapi/auth/authenticate');

    private _getUserDetails():Promise<any>{
        return this._http.getData( this.GETUSERS.createGET({},{})).then((response) => {
            return response;
        });
    };

    authenticate(loginModel):Promise<IBaseResponse>{
             return this._http.saveData(this.AUTHUSERS.CreatePOST(undefined,undefined,loginModel)).then((response) => {
               if(response.status === ResponseStatus.Success){
                    return this._getUserDetails().then((response) => {
                        if (response.status === ResponseStatus.Success) {
                          this._vdo.identity.userData = response.data[0];
                          this._vdo.identity.isLoggedIn = true;
                        }
                       return response;
                    }).catch((response)=>{
                        this._vdo.identity.userData = {};
                        this._vdo.identity.isLoggedIn = false;
                         return response;
                    })
               }else{
                   return response
               }
            });    
    };

    authorizeUser(): Promise < IBaseResponse > {
      return this._getUserDetails().then((response) => {
        if (response.status === ResponseStatus.Success) {
          this._vdo.identity.userData = response.data[0];
          this._vdo.identity.isLoggedIn = true;
        }
        return response;
      }).catch((response) => {
        this._vdo.identity.userData = {};
        this._vdo.identity.isLoggedIn = false;
        return response;
      })

    }


}