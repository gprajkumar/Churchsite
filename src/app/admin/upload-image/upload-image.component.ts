import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import { FirebasemanipulationService } from '../firebasemanipulation.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  imageDetailList: AngularFireList<any>;
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;
  carouseldata: MatTableDataSource<any>;
  displayedColumns: string[] = ['imageUrl', 'caption','actions'];
  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
 
    imageUrl: new FormControl('', Validators.required)
  })
  constructor(private storage: AngularFireStorage,private firebase: AngularFireDatabase,private dataservice:FirebasemanipulationService) { }

  ngOnInit(): void {
    this.dataservice.getcaraouseldatadetails().subscribe(
      list => {
        let array = list.map(item => {
         
          return {
            key: item.key,
           
            ...item.payload.val()
          };
        });
   
        this.carouseldata = new MatTableDataSource(array);
        console.log(array);
      }
   
    );

    this.resetForm();
  }
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '/assets/Vakuthatham/0.jpg';
      this.selectedImage = null;
    }
  }
  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `Vakuthatham/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.dataservice.insertImageDetails(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }
  showDeleteModal(row) {
  
    this.dataservice.deleteEmployee(row.key);
 }
 
  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      imageUrl: ''
    
    });
    this.imgSrc = '/assets/Vakuthatham/0.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }
  

}
