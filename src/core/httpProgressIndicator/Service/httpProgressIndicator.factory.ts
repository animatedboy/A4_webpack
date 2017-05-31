import {Injectable} from '@angular/core';

@Injectable()
export class HttpProgressIndicatorFactory {
    public count: number;
    public _requestStatusDictionary ={};
    constructor() {
        this.count = 0;
    }

    public onRequestStart(key: string) {
        if (key) {
            this._requestStatusDictionary[key] = {
                status: "Loading",
                startDate: new Date()
            };
        }
        this.count += 1;
    }

    public onRequestSuccess(key: string) {
        if (key && this._requestStatusDictionary[key]) {
            this._requestStatusDictionary[key].status = "Loaded";
            this._requestStatusDictionary[key].endDate = new Date();
            this._requestStatusDictionary[key].timeLapse = this._requestStatusDictionary[key].endDate - this._requestStatusDictionary[key].startDate;
        } else {

        }
        this.count = this.count !== 0 ? this.count - 1 : 0;
    }
    public onRequestError(key: string) {
        if (key && this._requestStatusDictionary[key]) {
            this._requestStatusDictionary[key].status = "Error";
            this._requestStatusDictionary[key].endDate = new Date();
            this._requestStatusDictionary[key].timeLapse = this._requestStatusDictionary[key].endDate - this._requestStatusDictionary[key].startDate;
        } else {

        }
        this.count = this.count !== 0 ? this.count - 1 : 0;
    }
    public getRequestStatus = (key: string) => key && this._requestStatusDictionary[key] ? this._requestStatusDictionary[key].status : '';

    public isRequestInProgress = () => this.count > 0;



}