import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { LocationPage } from '../pages/location/location';
import { PasswordresetPage } from '../pages/passwordreset/passwordreset';
import { StudyroomPage } from '../pages/studyroom/studyroom';
import { BedroomPage } from '../pages/bedroom/bedroom';
import { DinningroomPage } from '../pages/dinningroom/dinningroom';
import { LivingroomPage } from '../pages/livingroom/livingroom';
import { CuratedpackagesPage } from '../pages/curatedpackages/curatedpackages';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SuperTabsModule } from 'ionic2-super-tabs';
 var config = {
    apiKey: "AIzaSyDGUcsjv-Yt4B6rJ1SqjydnUhPcYEe8HKA",
    authDomain: "rentapp-76a39.firebaseapp.com",
    databaseURL: "https://rentapp-76a39.firebaseio.com",
    projectId: "rentapp-76a39",
    storageBucket: "rentapp-76a39.appspot.com",
    messagingSenderId: "467435736122"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,SigninPage,SignupPage,LocationPage,PasswordresetPage,CuratedpackagesPage,
	StudyroomPage,
	BedroomPage,
	DinningroomPage,
	LivingroomPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
		 AngularFireModule.initializeApp(config),
		 SuperTabsModule.forRoot(),
	 	AngularFireAuthModule,AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,SigninPage,SignupPage,LocationPage,PasswordresetPage,CuratedpackagesPage,StudyroomPage,
		BedroomPage,
	DinningroomPage,
	LivingroomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
