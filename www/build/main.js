webpackJsonp([0],{

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 206;

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, loadingCtrl, toastCtrl, afireauth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.afireauth = afireauth;
        this.firedata = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users');
        this.user = {
            email: '',
            password: '',
            displayName: ''
        };
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var toaster, loader;
            return __generator(this, function (_a) {
                toaster = this.toastCtrl.create({
                    duration: 3000,
                    position: 'bottom'
                });
                if (this.user.email == '' || this.user.password == '' || this.user.displayName == '') {
                    toaster.setMessage('All fields are required dude');
                    toaster.present();
                }
                else if (this.user.password.length < 7) {
                    toaster.setMessage('Password is not strong. Try giving more than six characters');
                    toaster.present();
                }
                else {
                    loader = this.loadingCtrl.create({
                        content: 'Please wait'
                    });
                    //loader.present();
                    this.afireauth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(function () {
                        _this.afireauth.auth.currentUser.updateProfile({
                            displayName: _this.user.displayName,
                            photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
                        }).then(function () {
                            _this.firedata.child(_this.afireauth.auth.currentUser.uid).set({
                                uid: _this.afireauth.auth.currentUser.uid,
                                displayName: _this.user.displayName,
                                photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
                            }).then(function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
                            }).catch(function (err) {
                                //reject(err);
                            });
                        }).catch(function (err) {
                            //reject(err);
                        });
                    }).catch(function (err) {
                        //reject(err);
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    SignupPage.prototype.goback = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\yashika.d\rentapp\src\pages\signup\signup.html"*/'<ion-content class="background">\n	<ion-card>\n		<ion-card-header>\n		<h1>Project Two</h1><br>\n			Sign Up\n		</ion-card-header>\n		<ion-card-content>\n			<ion-list no-line>\n				<ion-item>\n				\n					 <ion-input type="text" placeholder="Email" [(ngModel)]="user.email"></ion-input>\n				</ion-item>\n				<ion-item>\n					<ion-input type="password" placeholder="Password" [(ngModel)]="user.password"></ion-input>\n				</ion-item>\n				<ion-item>\n					<ion-input type="text" [(ngModel)]="user.displayName" placeholder="Username"></ion-input>\n				</ion-item>\n				<button ion-button block outline color="light" (click)="signup()">Sign up</button>\n				<!--<p>OR</p>\n				<button class="fb" ion-button block >\n					<ion-icon name="logo-facebook"></ion-icon> Sign up with facebook\n				</button>\n				<button class="google" ion-button block >\n					<ion-icon name="logo-googleplus"></ion-icon> Sign up with Google+\n				</button>-->\n				\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n	<button class="bottom" ion-button clear full color="light" (click)="goback()">Close</button>\n</ion-content>'/*ion-inline-end:"C:\Users\yashika.d\rentapp\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordresetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the PasswordresetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PasswordresetPage = (function () {
    function PasswordresetPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.email = this.navParams.get('email');
    }
    PasswordresetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordresetPage');
    };
    PasswordresetPage.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                alert = this.alertCtrl.create({
                    buttons: ['Ok']
                });
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().sendPasswordResetEmail(this.email).then(function () {
                    alert.setTitle('Email Sent');
                    alert.setSubTitle('Please follow the instructions in the email to reset your password');
                }).catch(function (err) {
                    alert.setTitle('Failed');
                });
                return [2 /*return*/];
            });
        });
    };
    PasswordresetPage.prototype.goback = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
    };
    return PasswordresetPage;
}());
PasswordresetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-passwordreset',template:/*ion-inline-start:"C:\Users\yashika.d\rentapp\src\pages\passwordreset\passwordreset.html"*/'<ion-content class="background">\n	<ion-card>\n		<ion-card-header>\n		<h1>Project Two</h1><br>\n			Reset Password\n		</ion-card-header>\n		<ion-card-content>\n			<ion-list no-line>\n				<ion-item>\n				\n					 <ion-input type="text" placeholder="Email" [(ngModel)]="email"></ion-input>\n				</ion-item>\n				<button ion-button block outline color="light"(click)="reset()">Reset my Password</button>\n      <button ion-button block color="danger" (click)="goback()">Go Back</button>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n	\n</ion-content>'/*ion-inline-end:"C:\Users\yashika.d\rentapp\src\pages\passwordreset\passwordreset.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PasswordresetPage);

//# sourceMappingURL=passwordreset.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LocationPage = (function () {
    function LocationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.username = '';
        this.username = this.navParams.get('username');
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.getlocation = function (element) {
        console.log(element.textContent);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-location',template:/*ion-inline-start:"C:\Users\yashika.d\rentapp\src\pages\location\location.html"*/'<!--\n  Generated template for the LocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>location</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h1></h1>\n<p>Welcome! {{username}}</p>\n<p>Please select the location</p>\n<button ion-button block style="background-color:rgb(41,127,84);margin-bottom:20px" (click)="getlocation($event.target)">Bengaluru</button>\n<button ion-button block color="danger" style="margin-bottom:20px" (click)="getlocation($event.target)">Mumbai</button>\n<button ion-button block style="background-color:rgb(0,39,79);margin-bottom:20px" (click)="getlocation($event.target)">Pune</button>\n<button ion-button block style="background-color:rgb(255,104,32);margin-bottom:20px" (click)="getlocation($event.target)">Chennai</button>\n<button ion-button block style="background-color:rgb(0,66,33);margin-bottom:20px" (click)="getlocation($event.target)">New Delhi</button>\n<button ion-button block style="background-color:rgb(121,0,0);" (click)="getlocation($event.target)">Gurugram</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yashika.d\rentapp\src\pages\location\location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curatedpackages_curatedpackages__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.openPage = function (element) {
        console.log(element);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__curatedpackages_curatedpackages__["a" /* CuratedpackagesPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\yashika.d\rentapp\src\pages\home\home.html"*/'<ion-content class="card-background-page">\n\n	<ion-card style="width:100% !important;margin:0px;">\n		<img src="../assets/card_bg.jpg" style="opacity:0.5"/>\n		<ion-header>\n  <ion-navbar>\n  <ion-buttons>\n  <button ion-button icon-only menuToggle>\n  <ion-icon name="menu"></ion-icon>\n  </button>\n  </ion-buttons>\n    <ion-title>\n      Project Two\n	   <ion-icon name="cart" style="float:right"></ion-icon>\n	    <ion-icon name="search" style="float:right;margin-right:20px;"></ion-icon>\n	  \n    </ion-title>\n	\n  </ion-navbar>\n</ion-header>\n		<div class="card-title">Be Different</div>\n		\n	</ion-card>\n  <ion-grid>\n	<ion-row>\n		<ion-col>\n			<ion-card (click)="openPage($event.target)" >\n			  <img src="../assets/livingroom_home_1.jpg"/>\n			  <ion-card-content>\n				<div class="card-description">LIVING ROOM</div>\n			  </ion-card-content>\n			</ion-card>\n		</ion-col>\n		<ion-col>\n			<ion-card (click)="openPage()">\n			  <img src="../assets/bed_2.jpg"/>\n			  <ion-card-content>\n					<div class="card-description">\n				  BEDROOM\n				 </div>\n			  </ion-card-content>\n			</ion-card>\n		</ion-col>\n	</ion-row>\n  </ion-grid>\n  <ion-grid>\n	<ion-row>\n		<ion-col>\n			<ion-card (click)="openPage()">\n			  <img src="../assets/study_table.jpeg"/>\n			  <ion-card-content>\n				<div class="card-description">STUDY ROOM</div>\n			  </ion-card-content>\n			</ion-card>\n		</ion-col>\n		<ion-col>\n			<ion-card (click)="openPage()">\n			  <img src="../assets/diningtable_1.jpg"/>\n			  <ion-card-content>\n					<div class="card-description">\n				  DINNING ROOM\n				 </div>\n			  </ion-card-content>\n			</ion-card>\n		</ion-col>\n	</ion-row>\n  </ion-grid>\n    <ion-grid>\n	<ion-row>\n		<ion-col>\n			<ion-card (click)="openPage()">\n			  <img src="../assets/fullroom.jpg"/>\n			  <ion-card-content>\n				<div class="card-description">FULL ROOM</div>\n			  </ion-card-content>\n			</ion-card>\n		</ion-col>\n		<ion-col>\n			<ion-card (click)="openPage()">\n			  <img src="../assets/appliances_combos.png"/>\n			  <ion-card-content>\n					<div class="card-description">\n				  APPLIANCES\n				 </div>\n			  </ion-card-content>\n			</ion-card>\n		</ion-col>\n	</ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\yashika.d\rentapp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuratedpackagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_super_tabs__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studyroom_studyroom__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bedroom_bedroom__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dinningroom_dinningroom__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__livingroom_livingroom__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CuratedpackagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CuratedpackagesPage = (function () {
    function CuratedpackagesPage(navCtrl, navParams, superTabsCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.superTabsCtrl = superTabsCtrl;
        this.studyroom = __WEBPACK_IMPORTED_MODULE_3__studyroom_studyroom__["a" /* StudyroomPage */];
        this.bedroom = __WEBPACK_IMPORTED_MODULE_4__bedroom_bedroom__["a" /* BedroomPage */];
        this.dinningroom = __WEBPACK_IMPORTED_MODULE_5__dinningroom_dinningroom__["a" /* DinningroomPage */];
        this.livingroom = __WEBPACK_IMPORTED_MODULE_6__livingroom_livingroom__["a" /* LivingroomPage */];
        this.showIcons = true;
        this.showTitles = true;
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
    CuratedpackagesPage.prototype.ngAfterViewInit = function () {
        // this.superTabsCtrl.increaseBadge('page1', 10);
        // this.superTabsCtrl.enableTabSwipe('page3', false);
        // this.superTabsCtrl.enableTabsSwipe(false);
    };
    CuratedpackagesPage.prototype.onTabSelect = function (tab) {
        console.log("Selected tab: ", tab);
    };
    return CuratedpackagesPage;
}());
CuratedpackagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-curatedpackages',template:/*ion-inline-start:"C:\Users\yashika.d\rentapp\src\pages\curatedpackages\curatedpackages.html"*/'<ion-header no-shadow no-border>\n  <ion-navbar>\n\n    <ion-title>\n	 Project Two\n	   <ion-icon name="cart" style="float:right"></ion-icon>\n	   <ion-icon name="heart" style="float:right;margin-right:20px;"></ion-icon>\n	</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-bounce>\n  <super-tabs id="mainTabs" [config]="{ sideMenu: \'left\' }" scrollTabs toolbarColor="light"  indicatorColor="yellow" badgeColor="yellow" (tabSelect)="onTabSelect($event)">\n    <super-tab [swipeBackEnabled]="false" [root]="studyroom" [title]="showTitles? \'StudyRoom\' : \'\'" [icon]="showIcons? \'home\': \'\'" id="page1"></super-tab>\n    <super-tab [root]="bedroom" badge="5" [title]="showTitles? \'Bedroom\' : \'\'" [icon]="showIcons? \'trending-up\' : \'\'" id="page2"></super-tab>\n    <super-tab [root]="dinningroom" [title]="showTitles? \'Dinning Room\' : \'\'" [icon]="showIcons? \'heart\' : \'\'" id="page3"></super-tab>\n    <super-tab [root]="studyroom" [title]="showTitles? \'StudyRoom\' : \'\'" [icon]="showIcons? \'flame\': \'\'" id="page4"></super-tab>\n    <super-tab [root]="bedroom" [title]="showTitles? \'Bedroom\' : \'\'" [icon]="showIcons? \'pin\' : \'\'" id="page5"></super-tab>\n    <super-tab [root]="livingroom" [title]="showTitles? \'LivingRoom\' : \'\'" [icon]="showIcons? \'analytics\' : \'\'" id="page6"></super-tab>\n\n\n    <!-- more tabs for testing -->\n \n  </super-tabs>\n</ion-content>'/*ion-inline-end:"C:\Users\yashika.d\rentapp\src\pages\curatedpackages\curatedpackages.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic2_super_tabs__["a" /* SuperTabsController */]])
], CuratedpackagesPage);

//# sourceMappingURL=curatedpackages.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itemdescription_itemdescription__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the StudyroomPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StudyroomPage = (function () {
    function StudyroomPage(navCtrl, navParams, app, el) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.el = el;
    }
    StudyroomPage.prototype.openPage = function ($event) {
        //this.navCtrl.pop(CuratedpackagesPage);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__itemdescription_itemdescription__["a" /* ItemdescriptionPage */], {
            itemdescription: $event.target.parentElement.cloneNode(true),
            title: $event.target.parentElement.querySelector('.card-description').innerHTML
        });
        console.log("title" + $event.target.parentElement.querySelector('.card-description').innerHTML);
        //console.log($event.target);
    };
    StudyroomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudyroomPage');
    };
    return StudyroomPage;
}());
StudyroomPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-studyroom',template:/*ion-inline-start:"C:\Users\yashika.d\rentapp\src\pages\studyroom\studyroom.html"*/'<!--\n  Generated template for the StudyroomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n	<ion-card>\n	  <img src="../assets/studyroom_1.jpg"  (click)="openPage($event)"/>\n	  <ion-card-content>\n		<div desc class="card-description">Lorem ipsum 1 </div>\n		<div><strong>$200</strong> per month<ion-icon name="heart-outline" style="float:right"></ion-icon></div>\n	  </ion-card-content>\n	</ion-card>\n		<ion-card>\n	  <img src="../assets/livingroom_2.jpg" (click)="openPage($event)" >\n	  <ion-card-content>\n		<div desc class="card-description">Lorem ipsum 2 </div>\n		<div><strong>$250</strong> per month<ion-icon name="heart-outline" style="float:right"></ion-icon></div>\n	  </ion-card-content>\n	</ion-card>\n		<ion-card>\n	  <img src="../assets/livingroom_1.jpg" (click)="openPage($event)">\n	  <ion-card-content>\n		<div desc class="card-description">Lorem ipsum 3</div>\n		<div><strong>$350</strong> per month<ion-icon name="heart-outline" style="float:right"></ion-icon></div>\n	  </ion-card-content>\n	</ion-card>\n		<ion-card>\n	  <img src="../assets/livingroom_2.jpg" (click)="openPage($event)">\n	  <ion-card-content>\n		<div desc class="card-description">Lorem ipsum 4</div>\n		<div><strong>$450</strong> per month<ion-icon name="heart-outline" style="float:right"></ion-icon></div>\n	  </ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yashika.d\rentapp\src\pages\studyroom\studyroom.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], StudyroomPage);

//# sourceMappingURL=studyroom.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemdescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ItemdescriptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ItemdescriptionPage = (function () {
    function ItemdescriptionPage(navCtrl, navParams, renderer, elementRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.title = "";
        this.itemdescription = this.navParams.get('itemdescription');
        this.title = this.navParams.get('title');
    }
    ItemdescriptionPage.prototype.ngAfterContentInit = function () {
        var tmp = document.createElement('ion-card');
        var el = this.itemdescription;
        console.log(el);
        tmp.appendChild(el);
        this.node = tmp.innerHTML;
        //this.title=document.get
    };
    return ItemdescriptionPage;
}());
ItemdescriptionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-itemdescription',template:/*ion-inline-start:"C:\Users\yashika.d\rentapp\src\pages\itemdescription\itemdescription.html"*/'<!--\n  Generated template for the ItemdescriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  padding >\n<ion-card [innerHTML]="node"></ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yashika.d\rentapp\src\pages\itemdescription\itemdescription.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], ItemdescriptionPage);

//# sourceMappingURL=itemdescription.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BedroomPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BedroomPage = (function () {
    function BedroomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BedroomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BedroomPage');
    };
    return BedroomPage;
}());
BedroomPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bedroom',template:/*ion-inline-start:"C:\Users\yashika.d\rentapp\src\pages\bedroom\bedroom.html"*/'<!--\n  Generated template for the BedroomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n\n\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et iaculis mauris. Nunc blandit viverra enim vehicula efficitur. Sed neque neque, tempus ac molestie non, blandit ut eros. Cras vulputate id nunc eget efficitur. Maecenas a dictum orci. Nullam sodales et est in euismod. Ut eget nibh consequat, molestie metus in, tristique lacus. Phasellus a elementum lectus. Morbi cursus mauris dapibus odio convallis convallis. Nulla et nisi nec augue consectetur rhoncus. Ut in tellus sit amet eros bibendum placerat ut a mi.\n  </p>\n  <p>\n    Quisque sagittis et nunc id dapibus. Curabitur placerat nec sem id hendrerit. Mauris tempus ante ac ante semper, non semper lacus maximus. Mauris in sem eros. Cras interdum nisl mollis magna lacinia, vitae vehicula enim ornare. Curabitur et lectus vel dolor venenatis pulvinar. Nullam malesuada vitae turpis at cursus.\n  </p>\n  <p>\n    Quisque turpis nisl, semper vel scelerisque sit amet, accumsan eu tellus. Maecenas non justo interdum, bibendum nisi eget, egestas enim. Aliquam suscipit ultrices magna, porttitor dapibus ipsum rhoncus at. Vivamus consectetur tortor a accumsan finibus. Aenean eleifend a tortor non porta. Sed iaculis eros sed lorem lacinia, ac imperdiet nisl molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nullam finibus condimentum eleifend. Pellentesque vel sapien et sem posuere ornare eu ac leo.\n  </p>\n  <p>\n    Praesent non ullamcorper turpis. Praesent eleifend est eget iaculis lobortis. Fusce elementum arcu lacus. Cras sed erat convallis, euismod augue at, euismod nisi. Morbi ac ligula rhoncus, venenatis sem et, posuere dui. Vivamus porta viverra massa, elementum vehicula diam euismod sed. Curabitur euismod justo magna, dapibus gravida est cursus sed. Ut nec blandit purus. Phasellus a auctor nibh.\n  </p>\n  <p>\n    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut faucibus mauris et sapien fermentum vehicula. Cras consectetur, nisi vel elementum viverra, turpis nibh tempor lacus, sit amet faucibus mi ex lobortis tellus. Aenean lobortis, augue et laoreet vehicula, arcu massa molestie mauris, vitae ullamcorper enim tortor vel ligula. Suspendisse quis facilisis leo, nec tempus tortor. Sed quis faucibus nisi. Cras molestie ornare aliquam. Integer faucibus commodo mauris a tempor. Aliquam rhoncus magna vulputate erat posuere sagittis. Vivamus tincidunt finibus ante quis condimentum. Vestibulum eget elit sed sapien suscipit aliquam ut nec ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut eget erat turpis. Nunc vitae maximus augue, et lacinia sapien.\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\yashika.d\rentapp\src\pages\bedroom\bedroom.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], BedroomPage);

//# sourceMappingURL=bedroom.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DinningroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DinningroomPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DinningroomPage = (function () {
    function DinningroomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DinningroomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DinningroomPage');
    };
    return DinningroomPage;
}());
DinningroomPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dinningroom',template:/*ion-inline-start:"C:\Users\yashika.d\rentapp\src\pages\dinningroom\dinningroom.html"*/'<!--\n  Generated template for the DinningroomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n <p>\n    Praesent non ullamcorper turpis. Praesent eleifend est eget iaculis lobortis. Fusce elementum arcu lacus. Cras sed erat convallis, euismod augue at, euismod nisi. Morbi ac ligula rhoncus, venenatis sem et, posuere dui. Vivamus porta viverra massa, elementum vehicula diam euismod sed. Curabitur euismod justo magna, dapibus gravida est cursus sed. Ut nec blandit purus. Phasellus a auctor nibh.\n  </p>\n  <p>\n    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut faucibus mauris et sapien fermentum vehicula. Cras consectetur, nisi vel elementum viverra, turpis nibh tempor lacus, sit amet faucibus mi ex lobortis tellus. Aenean lobortis, augue et laoreet vehicula, arcu massa molestie mauris, vitae ullamcorper enim tortor vel ligula. Suspendisse quis facilisis leo, nec tempus tortor. Sed quis faucibus nisi. Cras molestie ornare aliquam. Integer faucibus commodo mauris a tempor. Aliquam rhoncus magna vulputate erat posuere sagittis. Vivamus tincidunt finibus ante quis condimentum. Vestibulum eget elit sed sapien suscipit aliquam ut nec ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut eget erat turpis. Nunc vitae maximus augue, et lacinia sapien.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yashika.d\rentapp\src\pages\dinningroom\dinningroom.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], DinningroomPage);

//# sourceMappingURL=dinningroom.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivingroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LivingroomPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LivingroomPage = (function () {
    function LivingroomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LivingroomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LivingroomPage');
    };
    return LivingroomPage;
}());
LivingroomPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-livingroom',template:/*ion-inline-start:"C:\Users\yashika.d\rentapp\src\pages\livingroom\livingroom.html"*/'<!--\n  Generated template for the LivingroomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n	<ion-card (click)="openPage($event.target)" >\n	  <img src="../assets/livingroom_1.jpg"/>\n	  <ion-card-content>\n		<div class="card-description">LIVING ROOM</div>\n	  </ion-card-content>\n	</ion-card>\n		<ion-card (click)="openPage($event.target)" >\n	  <img src="../assets/livingroom_2.jpg"/>\n	  <ion-card-content>\n		<div class="card-description">LIVING ROOM</div>\n	  </ion-card-content>\n	</ion-card>\n		<ion-card (click)="openPage($event.target)" >\n	  <img src="../assets/livingroom_1.jpg"/>\n	  <ion-card-content>\n		<div class="card-description">LIVING ROOM</div>\n	  </ion-card-content>\n	</ion-card>\n		<ion-card (click)="openPage($event.target)" >\n	  <img src="../assets/livingroom_2.jpg"/>\n	  <ion-card-content>\n		<div class="card-description">LIVING ROOM</div>\n	  </ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yashika.d\rentapp\src\pages\livingroom\livingroom.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], LivingroomPage);

//# sourceMappingURL=livingroom.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(333);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_location_location__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_passwordreset_passwordreset__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_studyroom_studyroom__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_bedroom_bedroom__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_dinningroom_dinningroom__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_livingroom_livingroom__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_curatedpackages_curatedpackages__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic2_super_tabs__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_itemdescription_itemdescription__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var config = {
    apiKey: "AIzaSyDGUcsjv-Yt4B6rJ1SqjydnUhPcYEe8HKA",
    authDomain: "rentapp-76a39.firebaseapp.com",
    databaseURL: "https://rentapp-76a39.firebaseio.com",
    projectId: "rentapp-76a39",
    storageBucket: "rentapp-76a39.appspot.com",
    messagingSenderId: "467435736122"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */], __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */], __WEBPACK_IMPORTED_MODULE_10__pages_location_location__["a" /* LocationPage */], __WEBPACK_IMPORTED_MODULE_11__pages_passwordreset_passwordreset__["a" /* PasswordresetPage */], __WEBPACK_IMPORTED_MODULE_16__pages_curatedpackages_curatedpackages__["a" /* CuratedpackagesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_studyroom_studyroom__["a" /* StudyroomPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_bedroom_bedroom__["a" /* BedroomPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_dinningroom_dinningroom__["a" /* DinningroomPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_livingroom_livingroom__["a" /* LivingroomPage */], __WEBPACK_IMPORTED_MODULE_21__pages_itemdescription_itemdescription__["a" /* ItemdescriptionPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_17_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_20_ionic2_super_tabs__["b" /* SuperTabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["b" /* AngularFireAuthModule */], __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["a" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */], __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */], __WEBPACK_IMPORTED_MODULE_10__pages_location_location__["a" /* LocationPage */], __WEBPACK_IMPORTED_MODULE_11__pages_passwordreset_passwordreset__["a" /* PasswordresetPage */], __WEBPACK_IMPORTED_MODULE_16__pages_curatedpackages_curatedpackages__["a" /* CuratedpackagesPage */], __WEBPACK_IMPORTED_MODULE_12__pages_studyroom_studyroom__["a" /* StudyroomPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_bedroom_bedroom__["a" /* BedroomPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_dinningroom_dinningroom__["a" /* DinningroomPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_livingroom_livingroom__["a" /* LivingroomPage */], __WEBPACK_IMPORTED_MODULE_21__pages_itemdescription_itemdescription__["a" /* ItemdescriptionPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, push, alertCtrl, splashScreen) {
        var _this = this;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.pushsetup();
        });
    }
    MyApp.prototype.pushsetup = function () {
        var _this = this;
        var options = {
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
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            if (notification.additionalData.foreground) {
                var youralert = _this.alertCtrl.create({
                    title: 'New Push notification',
                    message: notification.message
                });
                youralert.present();
            }
        });
        pushObject.on('registration').subscribe(function (registration) {
            alert('Device registered' + registration);
        });
        pushObject.on('error').subscribe(function (error) { return alert('Error with Push plugin' + error); });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\yashika.d\rentapp\src\app\app.html"*/'<ion-menu [content]="mycontent">\n\n  <ion-content>\n    <ion-list>\n      <button ion-item >\n        Home\n      </button>\n      <button ion-item >\n        Friends\n      </button>\n      <button ion-item >\n        Events\n      </button>\n      <button ion-item>\n        Close Menu\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\yashika.d\rentapp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__passwordreset_passwordreset__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location_location__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the SigninPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, afAuth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.firedata = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/users');
        this.username = {};
        this.email = {};
        this.user = {
            email: '',
            password: ''
        };
        this.facebook = {
            name: ''
        };
        this.google = {
            name: ''
        };
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.showAlert = function (title, message) {
        var alertBox = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alertBox.present();
    };
    SigninPage.prototype.loginUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
                    .then(function (auth) {
                    // Do custom things with auth
                    _this.firedata.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).once('value', function (snap) {
                        var userdata = snap.val();
                        // this.username = userdata.displayName;
                        console.log(_this.username);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__location_location__["a" /* LocationPage */], {
                            username: userdata.displayName
                        });
                    });
                }).catch(function (err) {
                    _this.showAlert('Error', 'Invalid Username or Password');
                });
                return [2 /*return*/];
            });
        });
    };
    SigninPage.prototype.passwordreset = function () {
        console.log("euri");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__passwordreset_passwordreset__["a" /* PasswordresetPage */], {
            email: this.user.email
        });
    };
    SigninPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.loginwithfacebook = function () {
        var _this = this;
        console.log("eh3ui");
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth.FacebookAuthProvider())
            .then(function (res) {
            _this.facebook.name = res.user.displayName;
            console.log(_this.facebook.name);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__location_location__["a" /* LocationPage */], {
                username: _this.facebook.name
            });
        }).catch(function (err) {
            _this.showAlert('Error', 'Invalid Credentials');
        });
    };
    SigninPage.prototype.loginwithgoogle = function () {
        var _this = this;
        console.log("eh3ui");
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth.GoogleAuthProvider())
            .then(function (res) {
            _this.google.name = res.user.displayName;
            console.log(_this.google.name);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__location_location__["a" /* LocationPage */], {
                username: _this.google.name
            });
        }).catch(function (err) {
            _this.showAlert('Error', 'Invalid Credentials');
        });
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"C:\Users\yashika.d\rentapp\src\pages\signin\signin.html"*/'<ion-content class="background">\n	<ion-card>\n		<ion-card-header>\n		<h1>Project Two</h1><br>\n			Sign In\n		</ion-card-header>\n		<ion-card-content>\n			<ion-list no-line>\n				<ion-item>\n				\n					 <ion-input type="text" placeholder="Username" [(ngModel)]="user.email"></ion-input>\n				</ion-item>\n				<ion-item>\n					<ion-input type="password" placeholder="Password" [(ngModel)]="user.password"></ion-input>\n				</ion-item>\n				<a (click)="passwordreset()">Forgot your login detail? <b>Get help signing in</b></a>\n				<button ion-button block outline color="light" (click)="loginUser()">Sign in</button>\n				<p>OR</p>\n				<button class="fb" ion-button block color="facebook" (click)="loginwithfacebook()">\n					<ion-icon name="logo-facebook" ></ion-icon>Sign in with facebook\n				</button>\n				<button class="google" ion-button block (click)="loginwithgoogle()" >\n					<ion-icon name="logo-googleplus"></ion-icon>Sign in with Google+\n				</button>\n				\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n	<button class="bottom" ion-button clear full color="light" (click)="signup()">Don\'t have an account? Sign up</button>\n</ion-content>'/*ion-inline-end:"C:\Users\yashika.d\rentapp\src\pages\signin\signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ })

},[317]);
//# sourceMappingURL=main.js.map