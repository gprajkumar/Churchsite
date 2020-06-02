import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AdminComponent } from './admin/admin.component';
import { CreateEventComponent } from './admin/create-event/create-event.component';
import { UploadImageComponent } from './admin/upload-image/upload-image.component';
import { AddGalleryCategoryComponent } from './admin/add-gallery-category/add-gallery-category.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule} from './my-material/my-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoadingSpinnerComponent } from './admin/loading-spinner/loading-spinner.component';
import { UpcomingeventsComponent } from './upcomingevents/upcomingevents.component'


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponentComponent,
    FooterComponent,
    AdminComponent,
    CreateEventComponent,
    UploadImageComponent,
    AddGalleryCategoryComponent,
    AboutComponent,
    ContactComponent,
    UpcomingEventsComponent,
    LoadingSpinnerComponent,
    UpcomingeventsComponent
  

  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
{path:'', component: HomeComponentComponent},
{path:'\admin', component: AdminComponent},
{path: 'admin', component: AdminComponent, children: [
  { path: 'create-event', component: CreateEventComponent},
  { path: 'add-gallery-category', component: AddGalleryCategoryComponent },
  { path: 'upload-image', component: UploadImageComponent}
]},
{path:'\contact', component: ContactComponent}




    ]),
   
    MyMaterialModule,
    ReactiveFormsModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
