import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FirebasemanipulationService {
  carauseldatalist: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }
  getcaraouseldatadetails()
  {
    this.carauseldatalist = this.firebase.list('Vakkuthatham');
    return this.carauseldatalist.snapshotChanges();
  }
  insertImageDetails(imageDetails) {
    this.carauseldatalist = this.firebase.list('/Vakkuthatham');
    this.carauseldatalist.push(imageDetails);
  }
  deleteEmployee($key: string) {
    this.carauseldatalist.remove($key);
  }
  updatecarausel(key:string,imageDetails)
  {
    this.firebase.list('/Vakkuthatham').update(key,imageDetails);
  }
}
