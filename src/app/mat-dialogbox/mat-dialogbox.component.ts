import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialogbox',
  templateUrl: './mat-dialogbox.component.html',
  styleUrls: ['./mat-dialogbox.component.css']
})
export class MatDialogboxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<MatDialogboxComponent>) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close(false);
  }

}
