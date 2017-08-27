import { Component } from '@angular/core';
import {  NavController, NavParams ,AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import firebase from 'firebase';
import { SignupPage } from '../signup/signup';
import { PasswordresetPage } from '../passwordreset/passwordreset';
import { LocationPage } from '../location/location';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the SigninPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  firedata = firebase.database().ref('/users');
	 username: any = {};
email:any={};
     user = {
    email: '',
    password: ''	
	}
	facebook={
	name:''
	}
	google={
	name:''
	}
  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth,
      private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
     showAlert(title: string, message: string) {
      let alertBox = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['OK']
      });
      alertBox.present();
    }
      async loginUser() {
    this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
    .then(auth => {
      // Do custom things with auth
 this.firedata.child(firebase.auth().currentUser.uid).once('value',  (snap) => { 
	    let userdata = snap.val();
		// this.username = userdata.displayName;
	console.log(this.username);
	this.navCtrl.setRoot(LocationPage,{
	username:userdata.displayName
	});
		 });


    }) .catch(err => {
            this.showAlert('Error', 'Invalid Username or Password');
        });
    }
	passwordreset() {
	console.log("euri");
    this.navCtrl.push(PasswordresetPage,{
                email: this.user.email
            });
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }
  loginwithfacebook(){
  console.log("eh3ui");
   this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
   .then(res=>{
   this.facebook.name=res.user.displayName;
   console.log( this.facebook.name);
 this.navCtrl.setRoot(LocationPage,{
  username:this.facebook.name
 });

    }) .catch(err => {
            this.showAlert('Error', 'Invalid Credentials');
        });
    }
  loginwithgoogle(){
  console.log("eh3ui");
   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
   .then(res=>{
   this.google.name=res.user.displayName;
   console.log( this.google.name);
 this.navCtrl.setRoot(LocationPage,{
  username:this.google.name});

    }) .catch(err => {
            this.showAlert('Error', 'Invalid Credentials');
        });
    }
}
