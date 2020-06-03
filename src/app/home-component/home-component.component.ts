import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ShareddataService } from '../shareddata.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  
})
export class HomeComponentComponent implements OnInit {
showspinner:boolean=true;
  imageDetailList: AngularFireList<any>;
  imageList: any[];
  images = [0,1,2,3,4].map((n) => `assets/Vakuthatham/${n}.jpg`);
language:string='English';
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  showNavigationArrows=true;
  showNavigationIndicators=true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  constructor(private firebase: AngularFireDatabase,private sharedata:ShareddataService ) { }
  getImageDetailList() {
    this.imageDetailList = this.firebase.list('Vakkuthatham');
   
  }


  ngOnInit(): void {
    
    
    this.getImageDetailList();
    this.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => { return item.payload.val();
         });
        this.showspinner=false;
      
      }
   
    );
    this.sharedata.OnLanguageChange.subscribe(value=>this.language=value)
  }

  

}
