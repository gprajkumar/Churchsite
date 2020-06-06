import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogboxComponent } from './mat-dialogbox/mat-dialogbox.component';

@Injectable({
  providedIn: 'root'
})
export class DialogserviceService {

  constructor(private dialog:MatDialog) { }
  openConfirmDialog(msg){
    return this.dialog.open(MatDialogboxComponent,{
       width: '390px',
       panelClass: 'confirm-dialog-container',
       disableClose: true,
       position: { top: "10px" },
       data :{
         message : msg
       }
     });
   }
}
