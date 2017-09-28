import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NextPage } from '../next/next';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    nextpage = NextPage;
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
  eventSwipe(e){
    this.hate = 0;
    this.like = 0;
  }
  eventPress(e){
    this.hate+=30;
  }

}
