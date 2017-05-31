import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';
import { RouterModule }        from '@angular/router';

import {contactRoutes} from './contact.routes';

@NgModule({
  imports:      [ CommonModule, FormsModule, RouterModule.forChild(contactRoutes) ],
  declarations: [ ContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }
