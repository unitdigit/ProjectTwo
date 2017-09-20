import { Component } from '@angular/core';
import { Platform,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { CuratedpackagesPage } from '../pages/curatedpackages/curatedpackages';
import { SigninPage } from '../pages/signin/signin';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, public push: Push, public alertCtrl: AlertController, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
	   this.pushsetup();
    });
  }
pushsetup() {
    const options: PushOptions = {
     android: {
         senderID: '467435736122'
     },
     ios: {
         alert: 'true',
         badge: true,
         sound: 'false'
     },
     windows: {}
  };
 
  const pushObject: PushObject = this.push.init(options);
 
  pushObject.on('notification').subscribe((notification: any) => {
    if (notification.additionalData.foreground) {
      let youralert = this.alertCtrl.create({
        title: 'New Push notification',
        message: notification.message
		 
      });
      youralert.present();
    }
  });
 
  pushObject.on('registration').subscribe((registration: any) => {
   alert('Device registered' + registration);
  });
 
  pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
  }
 
  
    
}

