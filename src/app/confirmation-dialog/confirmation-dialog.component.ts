import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {}

    onDontAllow(): void {
    this.dialogRef.close();
    console.log('dont allow')
   }
   onAllow(): void {
    this.dialogRef.close();
    console.log(' allow')
   }


}

