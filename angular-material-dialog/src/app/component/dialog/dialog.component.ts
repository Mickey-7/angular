import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interface/dialog-data';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [
  ]
})
export class DialogComponent implements OnInit {

  //invoke the MatDialogRef of of this (DialogComponent) type
  //and @Inject(MAT_DIALOG_DATA) for data injection 
  //on AppComponent with DialogData interface type
  constructor(
    public dialogRef : MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : DialogData
  ) { }

  ngOnInit(): void {
  }

  //for closing dialog
  onNoClick(){
    this.dialogRef.close();
  }


}
