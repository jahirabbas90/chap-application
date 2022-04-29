(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sanjay/Desktop/ChatUserApp/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyAZdBTn4XrFNCzeZaXO_p11keZiIMpBf-4",
        authDomain: "chatapp-d3458.firebaseapp.com",
        projectId: "chatapp-d3458",
        storageBucket: "chatapp-d3458.appspot.com",
        messagingSenderId: "872991429175",
        appId: "1:872991429175:web:48ba342f70a5d4f29325b2",
        measurementId: "G-KKDDZWY8TY"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






// import { FCM } from '@ionic-native/fcm/ngx';
// private fcm: FCM,
let AppComponent = class AppComponent {
    constructor(platform, _location, 
    // private fcm: FCM,
    alertController) {
        this.platform = platform;
        this._location = _location;
        this.alertController = alertController;
        this.initializeApp();
    }
    initializeApp() {
        // ionic push notification example
        this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
            console.log('Back press handler!');
            if (this._location.isCurrentPathEqualTo('/en-all-rooms')) {
                // Show Exit Alert!
                console.log('Show Exit Alert!');
                this.showExitConfirm();
                processNextHandler();
            }
            else {
                // Navigate to back page
                console.log('Navigate to back page');
                this._location.back();
            }
        });
        this.platform.backButton.subscribeWithPriority(5, () => {
            console.log('Handler called to force close!');
            this.alertController.getTop().then(r => {
                if (r) {
                    navigator['app'].exitApp();
                }
            }).catch(e => {
                console.log(e);
            });
        });
    }
    showExitConfirm() {
        this.alertController.create({
            header: 'Close App',
            message: 'Do you want to close the app?',
            backdropDismiss: false,
            buttons: [{
                    text: 'Stay',
                    role: 'cancel',
                    handler: () => {
                        console.log('Application exit prevented!');
                    }
                }, {
                    text: 'Exit',
                    handler: () => {
                        navigator['app'].exitApp();
                    }
                }]
        })
            .then(alert => {
            alert.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <!-- <ion-router-outlet [swipeGesture]=\"false\"></ion-router-outlet> -->\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ "lOSq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "tk/3");















// import { FileSizeFormatPipePipe } from './pipes/file-size-format-pipe.pipe';
//import { HeadingPipe } from './pipes/heading.pipe';

// import { FCM } from '@ionic-native/fcm/ngx';


let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]
        ],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_15__["FCM"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"], { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: 'group-fullview',
        loadChildren: () => __webpack_require__.e(/*! import() | page-group-fullview-group-fullview-module */ "page-group-fullview-group-fullview-module").then(__webpack_require__.bind(null, /*! ./page/group-fullview/group-fullview.module */ "2lxV")).then(m => m.GroupFullviewPageModule)
    },
    {
        path: '',
        redirectTo: 'en-login',
        pathMatch: 'full'
    },
    {
        path: 'en-all-rooms',
        loadChildren: () => Promise.all(/*! import() | page-en-all-rooms-en-all-rooms-module */[__webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-all-rooms-en-all-rooms-module~page-e~5dc47049"), __webpack_require__.e("default~page-en-all-rooms-en-all-rooms-module~page-single-user-chat-single-user-chat-module"), __webpack_require__.e("page-en-all-rooms-en-all-rooms-module")]).then(__webpack_require__.bind(null, /*! ./page/en-all-rooms/en-all-rooms.module */ "6w5g")).then(m => m.EnAllRoomsPageModule)
    },
    {
        path: 'en-chat/:id',
        loadChildren: () => Promise.all(/*! import() | page-en-chat-en-chat-module */[__webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-all-rooms-en-all-rooms-module~page-e~5dc47049"), __webpack_require__.e("default~firebase-auth~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-~fde2c000"), __webpack_require__.e("default~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-login-en-login~bdbac243"), __webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-chat-en-chat-module~page-en-one-on-o~30c01efb"), __webpack_require__.e("common"), __webpack_require__.e("page-en-chat-en-chat-module")]).then(__webpack_require__.bind(null, /*! ./page/en-chat/en-chat.module */ "oX4x")).then(m => m.EnChatPageModule)
    },
    {
        path: 'en-login',
        loadChildren: () => Promise.all(/*! import() | page-en-login-en-login-module */[__webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-all-rooms-en-all-rooms-module~page-e~5dc47049"), __webpack_require__.e("default~firebase-auth~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-~fde2c000"), __webpack_require__.e("default~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-login-en-login~bdbac243"), __webpack_require__.e("page-en-login-en-login-module")]).then(__webpack_require__.bind(null, /*! ./page/en-login/en-login.module */ "HHqo")).then(m => m.EnLoginPageModule)
    },
    {
        path: 'en-create-room',
        loadChildren: () => Promise.all(/*! import() | page-en-create-room-en-create-room-module */[__webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-all-rooms-en-all-rooms-module~page-e~5dc47049"), __webpack_require__.e("default~firebase-auth~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-~fde2c000"), __webpack_require__.e("default~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-login-en-login~bdbac243"), __webpack_require__.e("page-en-create-room-en-create-room-module")]).then(__webpack_require__.bind(null, /*! ./page/en-create-room/en-create-room.module */ "A5sr")).then(m => m.EnCreateRoomPageModule)
    },
    {
        path: 'en-register',
        loadChildren: () => Promise.all(/*! import() | page-register-register-module */[__webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-all-rooms-en-all-rooms-module~page-e~5dc47049"), __webpack_require__.e("default~firebase-auth~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-~fde2c000"), __webpack_require__.e("default~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-login-en-login~bdbac243"), __webpack_require__.e("page-register-register-module")]).then(__webpack_require__.bind(null, /*! ./page/register/register.module */ "xKWv")).then(m => m.RegisterPageModule)
    },
    {
        path: 'image-upload',
        loadChildren: () => Promise.all(/*! import() | page-image-upload-image-upload-module */[__webpack_require__.e("common"), __webpack_require__.e("page-image-upload-image-upload-module")]).then(__webpack_require__.bind(null, /*! ./page/image-upload/image-upload.module */ "tLqS")).then(m => m.ImageUploadPageModule)
    },
    {
        path: 'attachment-upload',
        loadChildren: () => Promise.all(/*! import() | page-attachment-upload-attachment-upload-module */[__webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-all-rooms-en-all-rooms-module~page-e~5dc47049"), __webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-chat-en-chat-module~page-en-one-on-o~30c01efb"), __webpack_require__.e("common"), __webpack_require__.e("page-attachment-upload-attachment-upload-module")]).then(__webpack_require__.bind(null, /*! ./page/attachment-upload/attachment-upload.module */ "MLpc")).then(m => m.AttachmentUploadPageModule)
    },
    {
        path: 'en-new-individual-chat',
        loadChildren: () => Promise.all(/*! import() | page-en-new-individual-chat-en-new-individual-chat-module */[__webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-all-rooms-en-all-rooms-module~page-e~5dc47049"), __webpack_require__.e("page-en-new-individual-chat-en-new-individual-chat-module")]).then(__webpack_require__.bind(null, /*! ./page/en-new-individual-chat/en-new-individual-chat.module */ "GuTU")).then(m => m.EnNewIndividualChatPageModule)
    },
    {
        path: 'en-one-on-one/:nickname/:id',
        loadChildren: () => Promise.all(/*! import() | page-en-one-on-one-en-one-on-one-module */[__webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-all-rooms-en-all-rooms-module~page-e~5dc47049"), __webpack_require__.e("default~firebase-auth~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-~fde2c000"), __webpack_require__.e("default~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-login-en-login~bdbac243"), __webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-chat-en-chat-module~page-en-one-on-o~30c01efb"), __webpack_require__.e("default~page-en-one-on-one-en-one-on-one-module~page-single-user-chat-single-user-chat-module"), __webpack_require__.e("page-en-one-on-one-en-one-on-one-module")]).then(__webpack_require__.bind(null, /*! ./page/en-one-on-one/en-one-on-one.module */ "GGee")).then(m => m.EnOneOnOnePageModule)
    },
    {
        path: 'file-preview',
        loadChildren: () => __webpack_require__.e(/*! import() | page-file-preview-file-preview-module */ "page-file-preview-file-preview-module").then(__webpack_require__.bind(null, /*! ./page/file-preview/file-preview.module */ "H4Xz")).then(m => m.FilePreviewPageModule)
    },
    {
        path: 'single-user-chat/:chatId',
        loadChildren: () => Promise.all(/*! import() | page-single-user-chat-single-user-chat-module */[__webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-all-rooms-en-all-rooms-module~page-e~5dc47049"), __webpack_require__.e("default~firebase-auth~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-~fde2c000"), __webpack_require__.e("default~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-login-en-login~bdbac243"), __webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-chat-en-chat-module~page-en-one-on-o~30c01efb"), __webpack_require__.e("default~page-en-one-on-one-en-one-on-one-module~page-single-user-chat-single-user-chat-module"), __webpack_require__.e("default~page-en-all-rooms-en-all-rooms-module~page-single-user-chat-single-user-chat-module"), __webpack_require__.e("common"), __webpack_require__.e("page-single-user-chat-single-user-chat-module")]).then(__webpack_require__.bind(null, /*! ./page/single-user-chat/single-user-chat.module */ "a/6K")).then(m => m.SingleUserChatPageModule)
    },
    {
        path: 'single-user-chat/:nickname/:id',
        loadChildren: () => Promise.all(/*! import() | page-single-user-chat-single-user-chat-module */[__webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-all-rooms-en-all-rooms-module~page-e~5dc47049"), __webpack_require__.e("default~firebase-auth~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-~fde2c000"), __webpack_require__.e("default~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-login-en-login~bdbac243"), __webpack_require__.e("default~page-attachment-upload-attachment-upload-module~page-en-chat-en-chat-module~page-en-one-on-o~30c01efb"), __webpack_require__.e("default~page-en-one-on-one-en-one-on-one-module~page-single-user-chat-single-user-chat-module"), __webpack_require__.e("default~page-en-all-rooms-en-all-rooms-module~page-single-user-chat-single-user-chat-module"), __webpack_require__.e("common"), __webpack_require__.e("page-single-user-chat-single-user-chat-module")]).then(__webpack_require__.bind(null, /*! ./page/single-user-chat/single-user-chat.module */ "a/6K")).then(m => m.SingleUserChatPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map