import { Component } from '@angular/core';
//import {LoaderComponent} from '../shared/loader/Component/loaderComponent';


@Component({
  selector: 'my-app',
  template:'<div class="bodyContainer"><router-outlet></router-outlet></div><a2Footer></a2Footer><http-progress-indicator></http-progress-indicator>',
})
export class AppComponent { 
   title:string="Angular 2"
  //  constructor(){
    
  //    this.title = "Now it should work";
  //  }
}
