(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-en-create-room-en-create-room-module"],{

/***/ "0b9Q":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/en-create-room/en-create-room.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/en-all-rooms\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Group</ion-title>\n    <!-- <ion-toolbar>\n      <ion-searchbar></ion-searchbar>\n    </ion-toolbar> -->\n    \n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar showcancelbutton=\"\"\n    (ionInput)=\"filterList($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"\" *ngIf=\"groupChat\">\n    <ion-item>\n      <ion-input placeholder=\"Group Name\"  type=\"text\" [(ngModel)]=\"title\" name=\"title\"></ion-input>\n    </ion-item>\n    <ion-list-header>All Users</ion-list-header>\n  </div>\n  <ion-list class=\"body-spacing\">\n    <ion-item class=\"ion-no-padding\" *ngFor=\"let u of _visibleUsr; let c_i = index\">\n      <ion-label><h3>{{u.name}}</h3></ion-label>\n      <ion-icon name=\"radio-button-off\" *ngIf=\"!u.checked\"  (click)=\"updateSelected(c_i)\"></ion-icon>\n      <ion-icon name=\"radio-button-on\" *ngIf=\"u.checked\"  (click)=\"updateSelected(c_i)\"></ion-icon>\n    </ion-item>\n    \n  </ion-list>\n  <!-- <ion-button expand=\"block\" color=\"primary\" class=\"mb15\" mode=\"md\" [disabled]=\"users.length == 0\"   (click)=\"createGroup()\">Create </ion-button> -->\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"block\" class=\"btn-rounded\" (click)=\"createGroupChat()\" [disabled]=\"title.trim() === ''\">Create Group</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "A5sr":
/*!**************************************************************!*\
  !*** ./src/app/page/en-create-room/en-create-room.module.ts ***!
  \**************************************************************/
/*! exports provided: EnCreateRoomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnCreateRoomPageModule", function() { return EnCreateRoomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _en_create_room_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en-create-room-routing.module */ "j0+n");
/* harmony import */ var _en_create_room_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en-create-room.page */ "Gt5/");







let EnCreateRoomPageModule = class EnCreateRoomPageModule {
};
EnCreateRoomPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _en_create_room_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnCreateRoomPageRoutingModule"]
        ],
        declarations: [_en_create_room_page__WEBPACK_IMPORTED_MODULE_6__["EnCreateRoomPage"]]
    })
], EnCreateRoomPageModule);



/***/ }),

/***/ "Gt5/":
/*!************************************************************!*\
  !*** ./src/app/page/en-create-room/en-create-room.page.ts ***!
  \************************************************************/
/*! exports provided: EnCreateRoomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnCreateRoomPage", function() { return EnCreateRoomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_en_create_room_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./en-create-room.page.html */ "0b9Q");
/* harmony import */ var _en_create_room_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-create-room.page.scss */ "cO+s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_en_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/en-data.service */ "Y4Ib");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_my_connecter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/my-connecter.service */ "wxrH");









let EnCreateRoomPage = class EnCreateRoomPage {
    constructor(chatService, router, loadingController, alertController, _connecter) {
        // this._currentUserId = chatService.currentUser.uid; 
        // this._currentU = chatService.currentUser; 
        // //console.log(this._currentUserId)
        // if(chatService.currentUser && 'uid' in chatService.currentUser) {
        //   this.addUser(this._currentU.email, 'own')
        // }
        // else {
        //   this.router.navigateByUrl('/en-login');
        // }
        this.chatService = chatService;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this._connecter = _connecter;
        this.users = [];
        this.userEmails = [];
        this.title = '';
        this.participant = '';
        this.groupChat = true;
        this.checkedUser = [];
        this._allUsr = [];
        this._visibleUsr = [];
        // chatService.addedUser$.subscribe(data => {
        //   if(data) {
        //     this.checkedUser = data;
        //   }
        //   // console.log(data);
        // });
        _connecter.authUser$.subscribe(data => {
            this._authUsr = data;
            //console.log(this._authUsr)
            if (Object.keys(this._authUsr).length === 0) {
                this.router.navigate(['/en-login']);
            }
            else {
                this.getUsers();
            }
        });
        _connecter.allUser$.subscribe(data1 => {
            this._allUsr = data1;
            this._visibleUsr = this._allUsr;
        });
    }
    ngOnInit() {
    }
    addUser(x, y) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            // let obs = this.chatService.findUser(this.participant);
            let obs = this.chatService.findUser(x);
            var self = this;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(obs).subscribe(res => {
                //console.log(res);
                for (let data of res) {
                    if (data.length > 0) {
                        var d = data[0].data;
                        var cret = true;
                        if (self._currentUserId == d.uid) {
                            cret = false;
                            if (y == 'own') {
                                this.auth = d;
                            }
                        }
                        // console.log(cret)
                        // if(cret ) {
                        //   if(!this.groupChat) {
                        //     this.users = []
                        //     this.userEmails = []
                        //     this.users.push(data[0].data);
                        //     this.userEmails.push(d.nickname);
                        //   }
                        //   else {
                        //     var filteredArray = this.users.filter(function(itm){                
                        //       return itm.uid == d.uid;
                        //     });
                        //     //console.log(filteredArray)
                        //     if(filteredArray && filteredArray.length > 0) {
                        //     }
                        //     else {
                        //       this.users.push(data[0].data);
                        //       this.userEmails.push(d.nickname);
                        //     }
                        //   }
                        // }
                        //console.log(this.users)
                    }
                }
                this.participant = '';
            });
            loading.dismiss();
        });
    }
    createGroup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.users.push(this.auth);
            // this.userEmails.push(this.auth.nickname)
            if (this.users.length < 1) {
                let alert = yield this.alertController.create({
                    header: 'Error',
                    message: 'No user',
                    buttons: ['OK']
                });
                yield alert.present();
                return;
            }
            if (this.groupChat) {
                if (this.title == undefined || this.title.trim() == '') {
                    let alert = yield this.alertController.create({
                        header: 'Error',
                        message: 'Group name is required',
                        buttons: ['OK']
                    });
                    yield alert.present();
                    return;
                }
            }
            else {
                this.userEmails = [];
                // this.userEmails.push(this.auth.nickname);
                for (let index = 0; index < this.users.length; index++) {
                    this.userEmails.push(this.users[index].nickname);
                }
            }
            const loading = yield this.loadingController.create();
            yield loading.present();
            // console.log(this.userEmails)
            // return;
            this.chatService.createGroup(this.groupChat, this.title, this.users, this.userEmails).then(res => {
                this.router.navigateByUrl('/en-all-rooms');
            });
            loading.dismiss();
        });
    }
    filterList(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const searchTerm = evt.srcElement.value;
            console.log(searchTerm);
            if (!searchTerm) {
                this._visibleUsr = this._allUsr;
                return;
            }
            this._visibleUsr = this._allUsr.filter(item => {
                return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
        });
    }
    updateSelected(indx) {
        if (this._allUsr[indx].checked == true) {
            this._allUsr[indx].checked = false;
        }
        else {
            this._allUsr[indx].checked = true;
        }
    }
    getUsers() {
        this._connecter.fetchUsers(this._authUsr.email);
    }
    createGroupChat() {
        var selected = this._allUsr.filter(t => t.checked === true);
        console.log(selected);
        if (selected.length) {
            var _visible_name = [];
            var _usersA = [];
            _visible_name.push({
                uid: this._authUsr.id,
                name: this._authUsr.name,
                unread: 0,
                fcm_token: this._authUsr.fcm_token
            });
            _usersA.push(this._authUsr.id);
            for (let index = 0; index < selected.length; index++) {
                _visible_name.push({
                    uid: selected[index].id,
                    name: selected[index].name,
                    unread: 0,
                    fcm_token: selected[index].fcm_token
                });
                _usersA.push(selected[index].id);
            }
            var ar = {
                message_count: 0,
                title: this.title.trim(),
                group: true,
                visible_name: _visible_name,
                last_message: null
            };
            this._connecter.createNewChatGroup(ar, _usersA);
        }
        else {
            this._connecter.presentToast('Please select user');
        }
    }
};
EnCreateRoomPage.ctorParameters = () => [
    { type: _services_en_data_service__WEBPACK_IMPORTED_MODULE_6__["EnDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _services_my_connecter_service__WEBPACK_IMPORTED_MODULE_8__["MyConnecterService"] }
];
EnCreateRoomPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-en-create-room',
        template: _raw_loader_en_create_room_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_en_create_room_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EnCreateRoomPage);



/***/ }),

/***/ "cO+s":
/*!**************************************************************!*\
  !*** ./src/app/page/en-create-room/en-create-room.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  padding: 0;\n}\n\n.contacts-list-all .seperator {\n  background-color: #e1e1e1;\n  padding: 0.5em 0.8em;\n  font-weight: 600;\n}\n\n.contacts-list-all .contact-list {\n  padding: 0.6em 0.6em;\n  border-bottom: 1px solid #e1e1e1;\n  position: relative;\n}\n\n.contacts-list-all .contact-list h4 {\n  padding: 0;\n  margin: 0;\n  font-weight: 400;\n  font-size: 1em;\n  margin-bottom: 0.1em;\n}\n\n.contacts-list-all .contact-list p {\n  padding: 0;\n  margin: 0;\n  color: #c0c0c0;\n  font-size: 0.7em;\n}\n\n.group-create {\n  max-width: 2.2em;\n}\n\n.ios .group-create {\n  max-width: 2em;\n}\n\n.avatar {\n  width: 2.2em;\n  height: 2.2em;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n  float: left;\n  margin-right: 0.6em;\n}\n\n.page-padding {\n  padding: 0.5em;\n}\n\n.page-padding .check-width {\n  width: 1.2em;\n  height: 1.2em;\n}\n\n.body-spacing {\n  padding: 0 1em;\n}\n\n.body-spacing .list-spacing {\n  margin-left: 0;\n}\n\nion-footer ion-toolbar {\n  padding: 0.1em 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbi1jcmVhdGUtcm9vbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUFJO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUVOOztBQUFJO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFFTjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUU7RUFDRSxjQUFBO0FBQ0o7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUFFO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFFTjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFBRTtFQUNJLGNBQUE7QUFFTjs7QUFHSTtFQUNJLG9CQUFBO0FBQVIiLCJmaWxlIjoiZW4tY3JlYXRlLXJvb20ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNvbnRhY3RzLWxpc3QtYWxsIHtcclxuICAuc2VwZXJhdG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTE7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5jb250YWN0LWxpc3Qge1xyXG4gICAgcGFkZGluZzogMC42ZW0gMC42ZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGg0IHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBjb2xvcjogI2MwYzBjMDtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmdyb3VwLWNyZWF0ZSB7XHJcbiAgbWF4LXdpZHRoOiAyLjJlbTtcclxufVxyXG4uaW9zIHtcclxuICAuZ3JvdXAtY3JlYXRlIHtcclxuICAgIG1heC13aWR0aDogMmVtO1xyXG4gIH1cclxufVxyXG4uYXZhdGFyIHtcclxuICB3aWR0aDogMi4yZW07XHJcbiAgaGVpZ2h0OiAyLjJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjZlbTtcclxufVxyXG5cclxuLnBhZ2UtcGFkZGluZ3tcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICAuY2hlY2std2lkdGh7XHJcbiAgICAgIHdpZHRoOiAxLjJlbTtcclxuICAgICAgaGVpZ2h0OiAxLjJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5ib2R5LXNwYWNpbmd7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbiAgLmxpc3Qtc3BhY2luZ3tcclxuICAgICAgbWFyZ2luLWxlZnQ6MCA7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "j0+n":
/*!**********************************************************************!*\
  !*** ./src/app/page/en-create-room/en-create-room-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: EnCreateRoomPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnCreateRoomPageRoutingModule", function() { return EnCreateRoomPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _en_create_room_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-create-room.page */ "Gt5/");




const routes = [
    {
        path: '',
        component: _en_create_room_page__WEBPACK_IMPORTED_MODULE_3__["EnCreateRoomPage"]
    }
];
let EnCreateRoomPageRoutingModule = class EnCreateRoomPageRoutingModule {
};
EnCreateRoomPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnCreateRoomPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=page-en-create-room-en-create-room-module-es2015.js.map