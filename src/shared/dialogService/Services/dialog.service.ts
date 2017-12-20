import {Observable} from 'rxjs/Rx';
import {ConfirmDialog} from '../Components/confirm.component'
import {AlertDialog} from '../Components/alert.component'
import {MatDialogRef, MatDialog, MatDialogConfig} from '@angular/material';
import {Injectable, ViewContainerRef} from '@angular/core';

@Injectable()
export class DialogsService {

    constructor(private dialog : MatDialog) {}

    public confirm(title : string, message : string, viewContainerRef? : any) {
        let confirmDialogRef : MatDialogRef < ConfirmDialog >;
        let config = new MatDialogConfig();
        return this.showDialog(title, message, ConfirmDialog, config, viewContainerRef);
    }

    public alert(title : string, message : string, viewContainerRef? : any) {
        let confirmDialogRef : MatDialogRef < AlertDialog >;
        let config = new MatDialogConfig();
        return this.showDialog(title, message, AlertDialog, config, viewContainerRef);
    }

    public showDialog(title : string, message : string, componentRef : any, config : any, viewContainerRef : any) : Observable < boolean > {
        let dialogRef;
        //config.viewContainerRef = viewContainerRef;
       dialogRef = this.dialog.open(componentRef, config);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();

    }

}