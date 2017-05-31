import { NgModule }  from '@angular/core';
//import { MaterialModule } from '@angular/material';
import {ConfirmDialog} from './Components/confirm.component';
import {AlertDialog} from './Components/alert.component';
import {DialogsService} from './Services/dialog.service';

@NgModule({
    imports: [],
    exports: [
        ConfirmDialog,AlertDialog
    ],
    declarations: [
        ConfirmDialog,AlertDialog
    ],
    providers: [
        DialogsService,
    ],
    entryComponents: [
        ConfirmDialog,AlertDialog
    ],
})

export class DialogModule {}