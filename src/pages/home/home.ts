import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public hate: number = 0;
    public like: number = 0;
  constructor(public navCtrl: NavController) {

  }
  eventHate(e){
    this.hate++;
  }
  eventLike(e){
    this.like++;
  }

}
