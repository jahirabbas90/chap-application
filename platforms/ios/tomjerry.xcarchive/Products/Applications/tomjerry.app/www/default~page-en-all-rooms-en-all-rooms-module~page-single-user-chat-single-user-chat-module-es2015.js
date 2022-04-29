(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~page-en-all-rooms-en-all-rooms-module~page-single-user-chat-single-user-chat-module"],{

/***/ "0Xqp":
/*!**********************************************************!*\
  !*** ./src/app/page/en-all-rooms/en-all-rooms.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  padding: 0;\n}\n\nion-badge {\n  border-radius: 10px;\n}\n\nion-toolbar {\n  border-bottom-width: 0;\n}\n\nion-button[shape=circle] {\n  --border-radius: 50%;\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VuLWFsbC1yb29tcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7QUFHRjs7QUFBQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHRiIsImZpbGUiOiJlbi1hbGwtcm9vbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuaW9uLWJhZGdlIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG59XHJcblxyXG5pb24tYnV0dG9uW3NoYXBlPWNpcmNsZV0ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "UlBQ":
/*!********************************************************!*\
  !*** ./src/app/page/en-all-rooms/en-all-rooms.page.ts ***!
  \********************************************************/
/*! exports provided: EnAllRoomsPage, StarPipe, NotificationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnAllRoomsPage", function() { return EnAllRoomsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarPipe", function() { return StarPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPipe", function() { return NotificationPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_en_all_rooms_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./en-all-rooms.page.html */ "Xzfb");
/* harmony import */ var _en_all_rooms_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-all-rooms.page.scss */ "0Xqp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_my_connecter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/my-connecter.service */ "wxrH");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");








let EnAllRoomsPage = class EnAllRoomsPage {
    constructor(router, _connecter, alertCtrl, firestore, platform, _location) {
        this.router = router;
        this._connecter = _connecter;
        this.alertCtrl = alertCtrl;
        this.firestore = firestore;
        this.platform = platform;
        this._location = _location;
        this._allUsr = [];
        this._visibleUsr = [];
        this.chatIdArray = [];
        this.coversationList = [];
        this.message_count = 0;
        var bleep = new Audio();
        bleep.src = './assets/chatTone.mp3';
        bleep.play();
        /* this.platform.backButton.subscribeWithPriority(9999, () => {
          this.initializeApp();
        }); */
        _connecter.authUser$.subscribe(data => {
            this._authUsr = data;
            this._userNickName = this._authUsr.name;
            this._userid = this._authUsr.id;
            //check if user FCMToken register on not
            if (Object.keys(this._authUsr).length === 0) {
                this.router.navigate(['/en-login']);
            }
            else {
                // this.getAllChat();
            }
        });
        if (this._authUsr.fcm_token == null) {
            console.warn("null");
            console.warn("" + this._authUsr.fcm_token);
            this._connecter.updateUserFcmToken(localStorage.getItem("user_id"), "" + localStorage.getItem("user_fcm_token"));
        }
        else if (this._authUsr.fcm_token != null && this._authUsr.fcm_token != localStorage.getItem("user_fcm_token")) {
            console.warn("not_null");
            this._connecter.updateUserFcmToken(localStorage.getItem("user_id"), localStorage.getItem("user_fcm_token"));
        }
    }
    ngOnInit() {
        this.getAllPosts().subscribe((data) => {
            if (data.length > 0) {
                // console.log(data);
                this._allRoom = data;
                this._filteredRoom = data.filter(eachVal => {
                    let opt = eachVal.visible_name.some(({ uid }) => uid == this._authUsr.id);
                    return opt;
                });
                // console.warn("myData :" + JSON.stringify(this._filteredRoom))
                this._allRoom = this._filteredRoom;
                if (this._allRoom != undefined) {
                    this._visibleNameArray = [];
                    for (let index = 0; index < this._allRoom.length; index++) {
                        const visibleArray = this._allRoom[index].visible_name;
                        this._visibleNameArray.push(visibleArray);
                    }
                    // console.warn("visibleName  :" + JSON.stringify(this._visibleNameArray))
                    for (let index = 0; index < this._visibleNameArray.length; index++) {
                        const element = this._visibleNameArray[index];
                        if (element.uid === this._userid) {
                            this.message_count = element.unread;
                        }
                    }
                }
                // this.coversationList=data;
                /* for (let index = 0; index < data.length; index++) {
                  this.coversationList.push(data[index]['visible_name']);
                } */
                /* for (let index = 0; index < this.coversationList.length; index++) {
                  const element = this.coversationList[index];
                  console.log("visible_user_array_index :" + JSON.stringify(element));
                } */
                /* console.log("userId :" + this._authUsr.id);
                console.log(this.coversationList);
                for (let index = 0; index < this.coversationList.length; index++) {
                  const element1 = this.coversationList[index];
                  console.log("visible_user_array :" + JSON.stringify(element1));
                  console.log("userId :" + this._authUsr.id);
                } */
            }
        });
    }
    /* getAllChat() {
      this._allRoom = this._connecter.getGroups(this._authUsr.id);
    } */
    getAllPosts() {
        return this.firestore.collection("conversations", ref => ref
            .orderBy('ceatedAt', 'desc')).valueChanges({ idField: 'id' });
    }
    signOut() {
        this._connecter.removeAuth();
    }
    filterList(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const searchTerm = evt.srcElement.value;
            // console.log(this._allRoom)
            console.log(searchTerm);
            if (!searchTerm) {
                this._filteredRoom = this._allRoom;
                return;
            }
            this._filteredRoom = this._allRoom.filter(eachVal => {
                let opt = eachVal.visible_name.some(({ name }) => name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                return opt;
            });
            /* this.userListBackup = this.allGroups.filter(item => {
              return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
            }); */
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        // this.getAllChat();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    getAllUser(value, array) {
        for (let index = 0; index < array.length; index++) {
            this.userListBackup = this.userListBackup.push(value);
        }
        this.allGroups = this.userListBackup;
    }
    /* getAllChatUser(value){
      this.allChatUser=this.allChatUser.push(value);
    } */
    showPop(groupName, groupFriends) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: '' + groupName,
                message: '' + groupFriends
            });
            yield alert.present();
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
        });
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
            this.alertCtrl.getTop().then(r => {
                if (r) {
                    navigator['app'].exitApp();
                }
            }).catch(e => {
                console.log(e);
            });
        });
    }
    showExitConfirm() {
        this.alertCtrl.create({
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
EnAllRoomsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_my_connecter_service__WEBPACK_IMPORTED_MODULE_6__["MyConnecterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
EnAllRoomsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-en-all-rooms',
        template: _raw_loader_en_all_rooms_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_en_all_rooms_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EnAllRoomsPage);




let StarPipe = class StarPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value, event) {
        if (value) {
            if (value.group) {
                return value.title;
            }
            else {
                var arr = [];
                if (value.visible_name) {
                    var filteredArray = value.visible_name.filter(function (itm) {
                        return itm.uid == event;
                    });
                    if (filteredArray.length) {
                        return filteredArray[0].name;
                    }
                }
            }
        }
        return null;
    }
};
StarPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] }
];
StarPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Pipe"])({
        name: 'starPipe'
    })
], StarPipe);

let NotificationPipe = class NotificationPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value, event, group) {
        if (value) {
            if (group) {
                var filteredArray = value.filter(function (itm) {
                    return itm.uid == event;
                });
                if (filteredArray.length) {
                    return filteredArray[0].unread > 0 ? filteredArray[0].unread : null;
                }
            }
            else {
                var arr = [];
                var filteredArray = value.filter(function (itm) {
                    return itm.uid != event;
                });
                if (filteredArray.length) {
                    return filteredArray[0].unread > 0 ? filteredArray[0].unread : null;
                }
            }
        }
        return null;
    }
};
NotificationPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] }
];
NotificationPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Pipe"])({
        name: 'notificationPipe'
    })
], NotificationPipe);



/***/ }),

/***/ "Xzfb":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/en-all-rooms/en-all-rooms.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar >\n    \n    <ion-title>All Chats</ion-title>\n    <ion-buttons slot=\"primary\">\n      <!-- <ion-button routerLink=\"/en-create-room\"> -->\n      <ion-button routerLink=\"/en-new-individual-chat\">\n        <ion-icon name=\"create-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"signOut()\">\n        <ion-icon name=\"log-out\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar  showcancelbutton=\"\"\n    (ionInput)=\"filterList($event)\"\n    ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-list *ngIf=\"_allRoom\"> \n    <!-- <ion-item-sliding *ngFor=\"let group of groupsListBackup\">\n      <ion-item button detail='false' [routerLink]=\"['/', 'en-chat',group.id]\">\n        <ion-avatar slot=\"start\">\n          <img src=\"assets/avatar.svg\">\n        </ion-avatar>\n        <ion-label>\n          <h3>{{group.title }}</h3>          \n          <p>{{ group.last_text }}</p>\n        </ion-label>\n        \n      </ion-item>\n    </ion-item-sliding> -->\n\n   <!--  <ion-item button detail='false' *ngFor=\"let room of _allRoom  | async\" [routerLink]=\"['/', 'single-user-chat', (room | async)?.id || 0]\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/avatar.svg\">\n      </ion-avatar>\n\n      <ion-label>\n        <h3>{{ room| async | starPipe: _authUsr.id }}</h3>          \n        <p>{{ (room | async)?.last_message || null }}</p>\n      </ion-label>\n      \n    </ion-item>\n -->\n\n<ion-item button detail='false' *ngFor=\"let room of _filteredRoom\"\n  [routerLink]=\"['/', 'single-user-chat', room.id]\">\n  <ion-avatar slot=\"start\">\n    <img src=\"assets/avatar.svg\">\n  </ion-avatar>\n\n  <ion-badge color=\"primary\" slot=\"end\">{{ room.visible_name  |notificationPipe: _authUsr.id: room.group }}</ion-badge>\n\n  <ion-label>\n    <h3>{{ room  |starPipe: _authUsr.id }}</h3>\n    <p>{{ room.last_message}}</p>\n  </ion-label>\n</ion-item>\n\n\n  </ion-list>\n  \n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=default~page-en-all-rooms-en-all-rooms-module~page-single-user-chat-single-user-chat-module-es2015.js.map