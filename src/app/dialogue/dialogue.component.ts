import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  data:any
}

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})

export class DialogueComponent {

  constructor(public dialogRef: MatDialogRef<DialogueComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}



