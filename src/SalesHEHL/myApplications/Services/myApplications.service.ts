import {Injectable, EventEmitter} from '@angular/core';
import {Http} from '@angular/http';
import {RestProxy} from '../../../shared/httpProxy/restProxy/restProxy.service'; // service provider for HttpModule
import {Observable} from 'rxjs'; //for returning promise from service request
import {URLCreater} from '../../../shared/utilities/URLCreater';
import {ResponseStatus, IBaseResponse} from '../../../shared/utilities/utility';
@Injectable()
export class MyApplicationService {

    constructor(private _http : RestProxy) {};

    private GETAPPLICATIONS = new URLCreater('salesHEHLapi/v1.0/hehl/applications');

    getApplications(vdo) : Promise < IBaseResponse > {
        return this._http.getData(this.GETAPPLICATIONS.createGET({}, {
            limitValue:10,
            skipValue:0
        })).then((response) => {
                if (response.status === ResponseStatus.Success) {
                    vdo.applicationList = response.data;
                    vdo.totalRecord = response.meta.totalCount;
                    return response;
                }
            })
            .catch((response) => {
                 vdo.applicationList = [];
                 vdo.totalRecord = 0;
                return response;
            });
    };

}