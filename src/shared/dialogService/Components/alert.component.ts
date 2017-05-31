import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'result-dialog',
    templateUrl:'build/shared/dialogService/Templates/alert.html',
})
export class AlertDialog {

    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<AlertDialog>) {

    }
}