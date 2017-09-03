import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { LivingroomPage } from '../livingroom/livingroom';
import { CuratedpackagesPage } from '../curatedpackages/curatedpackages';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
openPage(element){
console.log(element);
	this.navCtrl.push(CuratedpackagesPage);
}
}
