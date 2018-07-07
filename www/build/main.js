webpackJsonp([4],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';

var UserProvider = /** @class */ (function () {
    function UserProvider() {
    }
    UserProvider.prototype.createUser = function (name, user, pass) {
        //comunicação com o servidor
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorageProvider = /** @class */ (function () {
    function StorageProvider(storage, datepipe) {
        this.storage = storage;
        this.datepipe = datepipe;
    }
    StorageProvider.prototype.insert = function () {
        var key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
        return this.save(key, sala);
    };
    StorageProvider.prototype.update = function (key, sala) {
        return this.save(key, sala);
    };
    StorageProvider.prototype.save = function (key, sala) {
        return this.storage.set(key, sala);
    };
    StorageProvider.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, afDatabase, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.data = { usuario: '', mensagem: '' };
        this.afAuth.authState.subscribe(function (usr) {
            _this.usuario = usr.displayName;
            _this.mensagens = _this.afDatabase.list('/mensagens', function (ref) {
                return ref.limitToLast(10);
            });
        });
    }
    ChatPage.prototype.enviarMsg = function () {
        var newMsg = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["database"]().ref('/mensagens').push();
        newMsg.set({
            usuario: this.usuario.displayName,
            mensagem: this.data.mensagem
        });
        this.data.mensagem = '';
    };
    ChatPage.prototype.autenticar = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider())
            .then(function (res) { return _this.usuario = res.user; });
    };
    ChatPage.prototype.sair = function () {
        this.afAuth.auth.signOut();
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"D:\github\proj-ionic-firebase\src\pages\chat\chat.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="color-1">\n\n    <ion-title>Chat</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button ion-button *ngIf="!usuario?.uid" (click)="autenticar()">Autenticar</button>\n\n  <button ion-button *ngIf="usuario?.uid" (click)="sair()">Sair</button>\n\n\n\n  <ion-list *ngIf="usuario?.uid">\n\n    <ion-item *ngFor="let msg of mensagens">\n\n      <h1>Usuario: {{msg?.usuario}}</h1>\n\n      <p>Mensagem: {{msg?.mensagem}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-item>\n\n    <ion-label>Mensagem: </ion-label>\n\n    <ion-input type="text" placeholder="Digite sua mensagem" [(ngModel)]="data.mensagem" (keyup.enter)="enviarMsg()"></ion-input>\n\n  </ion-item>\n\n</ion-footer>'/*ion-inline-end:"D:\github\proj-ionic-firebase\src\pages\chat\chat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ChatPage);
    return ChatPage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateuserPage = /** @class */ (function () {
    function CreateuserPage(navCtrl, navParams, alertCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.user = { firstname: '', lastname: '', user: '', password: '', confirmpassword: '' };
        this.ref = __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref('users/');
    }
    CreateuserPage.prototype.setUser = function () {
        if (this.user.password === this.user.confirmpassword) {
            this.ref.push().set({
                firstname: this.user.firstname,
                lastname: this.user.lastname,
                user: this.user.user,
                password: this.user.password
            });
            console.log(this.user.firstname, this.user.lastname, this.user.user, this.user.password);
            this.toast.create({ message: 'Usuário criado.', duration: 3000, position: 'botton' }).present();
            this.navCtrl.pop();
        }
        else {
            this.showAlert();
        }
    };
    CreateuserPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Não foi possível criar Conta.',
            subTitle: 'Senhas não coincidem!',
            buttons: ['OK']
        });
        alert.present();
    };
    CreateuserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createuser',template:/*ion-inline-start:"D:\github\proj-ionic-firebase\src\pages\createuser\createuser.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Criar Conta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="setUser()">\n  <ion-item>\n    <ion-input type="text" placeholder="Nome" [(ngModel)]="user.firstname" name="firstname"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="text" placeholder="Sobrenome" [(ngModel)]="user.lastname" name="lastname"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="text" placeholder="Usuário" [(ngModel)]="user.user" name="user"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="password" placeholder="Senha" [(ngModel)]="user.password" name="password"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="password" placeholder="Confirme a senha" [(ngModel)]="user.confirmpassword" name="confirm"></ion-input>\n  </ion-item>\n\n  <button ion-button full type="submit" class="button">Criar</button>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"D:\github\proj-ionic-firebase\src\pages\createuser\createuser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], CreateuserPage);
    return CreateuserPage;
}());

//# sourceMappingURL=createuser.js.map

/***/ }),

/***/ 177:
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
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		729,
		3
	],
	"../pages/createuser/createuser.module": [
		730,
		2
	],
	"../pages/login/login.module": [
		731,
		1
	],
	"../pages/root/root.module": [
		732,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 222;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__salas_salas__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__salas_salas__["a" /* SalasPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* ConfigPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tabs',template:/*ion-inline-start:"D:\github\proj-ionic-firebase\src\pages\tabs\tabs.html"*/'<ion-tabs color="color-1">\n  <ion-tab [root]="tab1Root" tabIcon="md-people" tabTitle="Salas"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="md-add-circle" tabTitle="Criar"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="settings" tabTitle="Configurações"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\github\proj-ionic-firebase\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], TabsPage);
    return TabsPage;
    var _a;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, userProvider) {
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
    }
    ConfigPage.prototype.logOut = function () {
        localStorage.setItem("IsLogged", '');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        this.navCtrl.popToRoot();
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"D:\github\proj-ionic-firebase\src\pages\config\config.html"*/'<ion-content padding>\n\n\n\n  	<ion-item>\n\n    	<ion-label floating>Distância</ion-label>\n\n    	<ion-range min="1" max="30" pin="true" color="secondary" [(ngModel)]="singleValue4">\n\n    		<ion-label range-left> 1 km</ion-label>\n\n    		<ion-label range-right> 30 km</ion-label>\n\n    	</ion-range>\n\n  	</ion-item>\n\n\n\n    <button ion-button full class="button" (click)="logOut()">Sair</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\github\proj-ionic-firebase\src\pages\config\config.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_Firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SalasPage = /** @class */ (function () {
    function SalasPage(navCtrl, geolocation, storageProvider, toast) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.storageProvider = storageProvider;
        this.toast = toast;
        this.sala = { nomeSala: '', descricao: '', distancia: '' };
        this.ref = __WEBPACK_IMPORTED_MODULE_4_Firebase__["database"]().ref('rooms/');
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            //console.log(resp.coords);
            /* CALCULO DA DISTANCIA
            var lat1 = resp.coords.latitude*(Math.PI/180);
            var lon1 = resp.coords.longitude*(Math.PI/180);
            var lat2 = -20.626175*(Math.PI/180);
            var lon2 = -49.649654*(Math.PI/180);
      
            var latD = lat2 - lat1;
            var lonD = lon2 - lon1;
      
            var dist = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(latD/2),2)+Math.cos(lat1)*Math.cos(lat2)*Math.pow(Math.sin(lonD/2),2)));
            dist = dist*6371;
      
            console.log("distancia " + dist);
            */
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    SalasPage.prototype.setSala = function () {
        this.ref.push().set({
            nomeSala: this.sala.nomeSala,
            descricao: this.sala.descricao,
            distancia: this.sala.distancia
        });
        this.toast.create({ message: 'Sala criada.', duration: 3000, position: 'botton' }).present();
    };
    SalasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-salas',template:/*ion-inline-start:"D:\github\proj-ionic-firebase\src\pages\salas\salas.html"*/'<ion-content>\n	<form (ngSubmit)="setSala()">\n		<ion-item class="input-create-room">\n			<ion-label floating>Nome da sala</ion-label>\n	    	<ion-input type="text" [(ngModel)]="sala.nomeSala" name="nomeSala"></ion-input>\n	  </ion-item>\n\n	  <ion-item class="input-create-room">\n	  		<ion-label floating>Descrição</ion-label>\n	  		<ion-input type="text" [(ngModel)]="sala.descricao" name="descricao"></ion-input>\n	  </ion-item>\n\n		<ion-item class="input-create-room">\n			<ion-label>Distância</ion-label>\n			<ion-select [(ngModel)]="sala.distancia" name="distancia">\n				<ion-option value="6">6</ion-option>\n				<ion-option value="12">12</ion-option>\n				<ion-option value="18">18</ion-option>\n			</ion-select>\n		</ion-item>\n		<div class="center" text-center>\n			<button ion-button>Criar sala</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"D:\github\proj-ionic-firebase\src\pages\salas\salas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], SalasPage);
    return SalasPage;
}());

//# sourceMappingURL=salas.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_Firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, storageProvider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageProvider = storageProvider;
        this.toast = toast;
    }
    HomePage.prototype.getSalas = function () {
        return new Promise(function (resolve) {
            var ref = __WEBPACK_IMPORTED_MODULE_4_Firebase__["database"]().ref('rooms/');
            var rooms = [];
            ref.orderByChild('distancia').on('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    rooms.push(childSnapshot.val());
                });
                resolve(rooms);
            });
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.getSalas()
            .then(function (result) {
            _this.salas = result;
        });
    };
    Object.defineProperty(HomePage, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]]];
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.pushChatPage = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */], { item: item });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\github\proj-ionic-firebase\src\pages\home\home.html"*/'<ion-content padding>\n\n	<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n	<ion-list>\n\n		<ion-card *ngFor="let item of salas">\n\n			<div class="maps"></div>\n\n\n\n			<ion-item>\n\n				<div item-left class="img-card"></div>\n\n				<div class="text-card">\n\n					<h2>{{item.nomeSala}}</h2>\n\n					<p>{{item.descricao}}</p>\n\n				</div>\n\n			</ion-item>\n\n\n\n			<ion-item>\n\n				<ion-icon name="ios-pin" item-start small></ion-icon>\n\n				<span item-left class="dist-card">{{item.distancia}}km</span>\n\n				<button ion-button icon-left clear item-end (click)="pushChatPage(item)">\n\n					<ion-icon name="ios-send-outline"></ion-icon>\n\n					<p>Entrar</p>\n\n				</button>\n\n			</ion-item>\n\n\n\n		</ion-card>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\github\proj-ionic-firebase\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(sqlite) {
        this.sqlite = sqlite;
        this.isOpen = false;
    }
    DatabaseProvider.prototype.createDB = function () {
        var _this = this;
        return this.sqlite.create({
            name: 'db_proj.db',
            location: 'default'
        })
            .then(function (db) {
            _this.isOpen = true;
            _this.createTables(db);
            _this.insertDefaultItens(db);
        })
            .catch(function (e) { return console.error(e); });
    };
    DatabaseProvider.prototype.createTables = function (db) {
        db.sqlBatch(["CREATE TABLE IF NOT EXISTS salas (iduser integer primary key AUTOINCREMENT NOT NULL, name TEXT, desc TEXT, dist INTEGER)"])
            .then(function () { return console.log('Tabelas criadas'); })
            .catch(function (e) { return console.log(e); });
    };
    DatabaseProvider.prototype.insertDefaultItens = function (db) {
        db.executeSql('SELECT COUNT(id) AS qtd FROM salas', {})
            .then(function (data) {
            //Se não existe nenhum registro
            if (data.rows.item(0).qtd == 0) {
                //Inserindo dados padrões
                db.sqlBatch([
                    ['INSERT INTO salas (name, des, dist) VALUES (?, ?, ?)', ['Estudo Coletivo', 'Vamos todos estudar', 6]],
                    ['INSERT INTO salas (name, des, dist) VALUES (?, ?, ?)', ['Vamo pro Bar', 'Bora beber aí galera', 12]]
                ])
                    .then(function () { return console.log('Dados padrões incluídos'); })
                    .catch(function (e) { return console.log('Erro ao incluir dados padrões', e); });
            }
        })
            .catch(function (e) { return console.error('Erro ao consultar a qtd de categorias', e); });
    };
    DatabaseProvider.prototype.getIsOpen = function () {
        return this.isOpen;
    };
    DatabaseProvider.prototype.insert = function (nome, des, dist) {
        var db;
        console.log(nome, des, dist);
        db.executeSql('INSERT INTO salas (name, des, dist) VALUES (?, ?, ?)', [nome, des, dist]);
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(384);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_config_config__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_salas_salas__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_createuser_createuser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_user_user__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_salas_salas__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_database_database__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_storage__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_firebase__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_storage_storage__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var config = {
    apiKey: "AIzaSyBNxvxNzIdmfN7nlOJTUTGEchFl8LgrP0I",
    authDomain: "chat-proj-ionic.firebaseapp.com",
    databaseURL: "https://chat-proj-ionic.firebaseio.com",
    projectId: "chat-proj-ionic",
    storageBucket: "chat-proj-ionic.appspot.com",
    messagingSenderId: "62119085151"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_salas_salas__["a" /* SalasPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_createuser_createuser__["a" /* CreateuserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                }, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createuser/createuser.module#CreateuserPageModule', name: 'CreateuserPage', segment: 'createuser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/root/root.module#RootPageModule', name: 'RootPage', segment: 'root', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_salas_salas__["a" /* SalasPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_createuser_createuser__["a" /* CreateuserPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_14__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_salas_salas__["a" /* SalasProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_23__providers_storage_storage__["a" /* StorageProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var config = {
    apiKey: "AIzaSyBNxvxNzIdmfN7nlOJTUTGEchFl8LgrP0I",
    authDomain: "chat-proj-ionic.firebaseapp.com",
    databaseURL: "https://chat-proj-ionic.firebaseio.com",
    projectId: "chat-proj-ionic",
    storageBucket: "chat-proj-ionic.appspot.com",
    messagingSenderId: "62119085151"
};
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, db) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](config);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\github\proj-ionic-firebase\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\github\proj-ionic-firebase\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalasProvider = /** @class */ (function () {
    function SalasProvider() {
    }
    SalasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SalasProvider);
    return SalasProvider;
}());

//# sourceMappingURL=salas.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createuser_createuser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_Firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, alertCtrl, user) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.user = user;
        this.login = { user: '', password: '' };
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        if (localStorage.getItem("IsLogged")) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    LoginPage.prototype.signIn = function (user) {
        return new Promise(function (resolve) {
            var ref = __WEBPACK_IMPORTED_MODULE_5_Firebase__["database"]().ref('users/');
            ref.orderByChild('user').equalTo(user).once('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    resolve(childSnapshot.val());
                });
            });
        });
    };
    LoginPage.prototype.logIn = function () {
        var _this = this;
        this.signIn(this.login.user)
            .then(function (result) {
            console.log(_this.login);
            _this.value = result;
            if (_this.value.password === _this.login.password) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                localStorage.setItem("IsLogged", "yes");
            }
            else {
                _this.showAlert();
            }
        });
    };
    LoginPage.prototype.pushCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__createuser_createuser__["a" /* CreateuserPage */]);
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro!',
            subTitle: 'Usuário e/ou Senha inválidos!',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\github\proj-ionic-firebase\src\pages\login\login.html"*/'<ion-content padding>\n	<form (ngSubmit)="logIn()">\n		<ion-item>\n			<ion-label floating>Username</ion-label>\n			<ion-input type="text" [(ngModel)]="login.user" name="user"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label floating>Password</ion-label>\n    		<ion-input type="password" [(ngModel)]="login.password" name="password"></ion-input>\n		</ion-item>\n		  \n		<button ion-button full class="button" type="submit">Login</button>\n	</form>\n\n 	<p>Não tem uma conta?<br>\n 	<a href="#" (click)="pushCreatePage()">Cadastre-se</a></p>\n</ion-content>\n'/*ion-inline-end:"D:\github\proj-ionic-firebase\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[379]);
//# sourceMappingURL=main.js.map