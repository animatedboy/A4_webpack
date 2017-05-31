import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { HttpProgressIndicatorFactory } from '../Service/httpProgressIndicator.factory'
@Component({
    moduleId:module.id,
    selector: 'http-progress-indicator',
    templateUrl: '../Templates/httpProgressIndicator.html',
    styleUrls: [
        '../Templates/httpProgressIndicator.css'
    ]
})
export class HttpProgressIndicatorComponent {

    constructor(private httpProgressIndicatorFactory: HttpProgressIndicatorFactory) {

    }
    
    isLoading  = () => this.httpProgressIndicatorFactory.isRequestInProgress();
}
