import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import { StudyroomPage } from '../studyroom/studyroom';
import { BedroomPage } from '../bedroom/bedroom';
import { DinningroomPage } from '../dinningroom/dinningroom';
import { LivingroomPage } from '../livingroom/livingroom';
/**
 * Generated class for the CuratedpackagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-curatedpackages',
  templateUrl: 'curatedpackages.html',
})
export class CuratedpackagesPage {
  studyroom: any =   StudyroomPage;
  bedroom: any = BedroomPage;
  dinningroom: any = DinningroomPage;
  livingroom: any = LivingroomPage;

  showIcons: boolean = true;
  showTitles: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,private superTabsCtrl: SuperTabsController) {
 /* const type = navParams.get('type');
    switch (type) {
      case 'icons-only':
        this.showTitles = false;
        this.pageTitle += ' - Icons only';
        break;

      case 'titles-only':
        this.showIcons = false;
        this.pageTitle += ' - Titles only';
        break;
    }*/
  }

  ngAfterViewInit() {
    // this.superTabsCtrl.increaseBadge('page1', 10);
    // this.superTabsCtrl.enableTabSwipe('page3', false);
    // this.superTabsCtrl.enableTabsSwipe(false);
  }

  onTabSelect(tab: { index: number; id: string; }) {
    console.log(`Selected tab: `, tab);
  }

}
