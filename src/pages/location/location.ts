import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  username: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }
getlocation(element){
	console.log(element.textContent);
	 this.navCtrl.setRoot(HomePage);
}
}
