import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'result-dialog',
    templateUrl:'../Templates/alert.html',
})
export class AlertDialog {

    public title: string;
    public message: string;

    constructor(public dialogRef: MatDialogRef<AlertDialog>) {

    }
}