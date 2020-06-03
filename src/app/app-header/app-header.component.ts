import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ShareddataService } from '../shareddata.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],

})
export class AppHeaderComponent implements OnInit {
  ischecked:boolean=false;
  language:string='English';
condition:boolean=true;
  
  constructor(private sharedata:ShareddataService) { }

  ngOnInit(): void {
    this.sharedata.OnLanguageChange.subscribe(value=>{
      
      this.language=value;
    if(value=='தமிழ்')
    {
      this.condition=false;
    }
    else
    {
      this.condition=true;
    }
    })
  

  }
  selectlanguage(event:MatSlideToggleChange)
  {
    if(event.checked)
    {
      this.language='தமிழ்';
     
      this.sharedata.OnLanguageChange.next(this.language);
    }
    else
    {
      this.language='English';
    
      this.sharedata.OnLanguageChange.next(this.language);
    }

  }
  collapsed = true;

}
