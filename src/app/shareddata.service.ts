import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShareddataService {
 
  OnLanguageChange:BehaviorSubject<any>=new BehaviorSubject<any>('English');
  constructor() { }
}
