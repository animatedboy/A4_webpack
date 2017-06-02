import {Component,OnInit} from '@angular/core';
import {HeaderService} from '../../../core/header/Services/header.service';
import {Router,ActivatedRoute,Route} from '@angular/router'

@Component({
  selector: 'loan_Application',
  template:"<h4>In to LoanApplication</h4>"
})

export class LoanApplicationComponent implements OnInit {
 constructor(private route:ActivatedRoute,private headerService :HeaderService){}

 setHeader(){
    this.route.data.subscribe(data=>{
        this.headerService.setHeaderText(data['headerText']);
     })
  };

  ngOnInit(){
      this.setHeader();
  }
 
}