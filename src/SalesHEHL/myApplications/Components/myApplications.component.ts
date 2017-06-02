import { Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute,Route} from '@angular/router'
import {HeaderService} from '../../../core/header/Services/header.service';
import {MyApplicationService} from "../Services/myApplications.service"

@Component({
  
  selector: 'myApplications',
  templateUrl:'../Templates/myApplications.html',
  providers:[MyApplicationService],
})
export class MyApplicationsComponent implements OnInit { 
  
  constructor(private route:ActivatedRoute,private headerService :HeaderService,private myApplicationService:MyApplicationService){}
  
  vdo = {
    applicationList:[],
    totalRecord:0
  }

  setHeader(){
    this.route.data.subscribe(data=>{
        this.headerService.setHeaderText(data['headerText']);
     })
  };

  getApplicationList(vdo:Object){
    this.myApplicationService.getApplications(vdo).then();
  }

   ngOnInit(){
    this.setHeader();
    this.getApplicationList(this.vdo); 
     
   }

}