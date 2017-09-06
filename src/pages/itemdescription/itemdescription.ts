import { Directive, Renderer, ElementRef,Component,AfterContentInit } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemdescriptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-itemdescription',
  templateUrl: 'itemdescription.html',
})

export class ItemdescriptionPage implements AfterContentInit {
itemdescription:any;
node:string;
title:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams,private renderer: Renderer, private elementRef: ElementRef) {
	this.itemdescription=this.navParams.get('itemdescription');
	this.title=this.navParams.get('title');
  }

 ngAfterContentInit() {

    var tmp = document.createElement('ion-card');
    var el = this.itemdescription;
	console.log(el);
    tmp.appendChild(el);
    this.node = tmp.innerHTML;
	//this.title=document.get
  }

}
