import {Injectable , EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Rx'; //for returning promise from service request

@Injectable()
export class HeaderService{
    private headerText = new Subject();

   private getHeaderText():any{
    return  this.headerText.asObservable();
   }

   headerText$ = this.getHeaderText();

    setHeaderText(header:String){
       this.headerText.next(header);
    }

}