import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the LivingroomPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-livingroom',
  templateUrl: 'livingroom.html',
})
export class LivingroomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivingroomPage');
  }

}
