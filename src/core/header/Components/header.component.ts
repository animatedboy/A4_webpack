import { Component,OnInit } from '@angular/core';
import { LoginService } from '../../auth/Services/login.service';
import { HeaderService } from '../Services/header.service'

@Component({
    
   selector: 'a2Header',
   templateUrl:'../Templates/header.html',
   styleUrls: [
        '../Templates/header.css'
    ]
})

export class HeaderComponent implements OnInit { 
    constructor(private authService:LoginService,private headerService:HeaderService){
        
    }  

    headerVDO ={
        userDetails:{}
    };
    headerText;

     menuItems:Array<Object> =  [] ;

    ngOnInit(){
        this.headerVDO.userDetails = this.authService.identity.userData;
        this.headerService.headerText$.subscribe(headerText => {
             this.headerText=headerText;
        })
    }
}