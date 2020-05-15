import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  //create showLoader set to false
  showLoader = false;

  //create function to toggle (show & hide) on showLoader
  show(){
    this.showLoader = true;
  }
  hide(){
    this.showLoader = false;
  }
}
