import { Component, Directive, ElementRef } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ItemdescriptionPage } from '../itemdescription/itemdescription';
import { CuratedpackagesPage } from '../curatedpackages/curatedpackages';
import { App } from 'ionic-angular';
/**
 * Generated class for the StudyroomPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-studyroom',
  templateUrl: 'studyroom.html',
})

export class StudyroomPage {
	itemdescription:string;
	item:string;
	title:string;
	elr:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private app: App,public el: ElementRef) {
		
  }

	openPage($event:any){
	//this.navCtrl.pop(CuratedpackagesPage);
	this.app.getRootNav().push(ItemdescriptionPage,{
        itemdescription:$event.target.parentElement.cloneNode(true),
		title: $event.target.parentElement.querySelector('.card-description').innerHTML
            });
	console.log("title"+$event.target.parentElement.querySelector('.card-description').innerHTML);
	//console.log($event.target);
	
	}
  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyroomPage');
  }

}
