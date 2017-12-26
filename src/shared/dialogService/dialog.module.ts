import { NgModule }  from '@angular/core';
//import { MaterialModule } from '@angular/material';
import {ConfirmDialog} from './Components/confirm.component';
import {AlertDialog} from './Components/alert.component';


@NgModule({
    imports: [],
    exports: [
        ConfirmDialog,AlertDialog
    ],
    declarations: [
        ConfirmDialog,AlertDialog
    ],
    providers: [],
    entryComponents: [
        ConfirmDialog,AlertDialog
    ],
})

export class DialogModule {}