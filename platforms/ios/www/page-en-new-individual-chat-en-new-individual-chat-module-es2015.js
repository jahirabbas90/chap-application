(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-en-new-individual-chat-en-new-individual-chat-module"],{

/***/ "1cn0":
/*!****************************************************************************!*\
  !*** ./src/app/page/en-new-individual-chat/en-new-individual-chat.page.ts ***!
  \****************************************************************************/
/*! exports provided: EnNewIndividualChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnNewIndividualChatPage", function() { return EnNewIndividualChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_en_new_individual_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./en-new-individual-chat.page.html */ "G8CX");
/* harmony import */ var _en_new_individual_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-new-individual-chat.page.scss */ "fONW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_my_connecter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/my-connecter.service */ "wxrH");






let EnNewIndividualChatPage = class EnNewIndividualChatPage {
    constructor(router, _connecter) {
        this.router = router;
        this._connecter = _connecter;
        this.checkedUser = [];
        this._allUsr = [];
        this._visibleUsr = [];
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
    viewNewGroup() {
        this.router.navigate(['/en-create-room']);
    }
    filterList(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const searchTerm = evt.srcElement.value;
            if (!searchTerm) {
                this._visibleUsr = this._allUsr;
                return;
            }
            this._visibleUsr = this._allUsr.filter(item => {
                return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
        });
    }
    signOut() {
        this._connecter.removeAuth();
    }
    getUsers() {
        this._connecter.fetchUsers(this._authUsr.email);
    }
    startNewChat(usr) {
        // routerLink='/single-user-chat/{{u.name}}'
        // console.log(this._authUsr.personal_chats)
        if (this._authUsr.personal_chats) {
            let indx = usr.personal_chats.findIndex(item => item.uid == this._authUsr.id);
            // console.log(indx);
            if (indx > -1) {
                console.log(JSON.stringify(usr.fcm_token));
                localStorage.setItem("ousr_fcm_token", "" + usr.fcm_token);
                // alert(1)
                this.router.navigate(['/single-user-chat', usr.personal_chats[indx]['chat_id']]);
            }
            else {
                console.log(JSON.stringify(usr));
                var ar = {
                    message_count: 0,
                    title: null,
                    group: false,
                    visible_name: [
                        {
                            uid: this._authUsr.id,
                            name: usr.name,
                            unread: 0,
                            fcm_token: usr.fcm_token
                        },
                        {
                            uid: usr.id,
                            name: this._authUsr.name,
                            unread: 0,
                            fcm_token: this._authUsr.fcm_token
                        }
                    ],
                    last_message: null
                };
                var cAr1 = this._authUsr.personal_chats;
                var cAr2 = usr.personal_chats;
                // localStorage.setItem("other_fcm_token",""+usr.fcm_token);
                console.warn("OtherUser : " + JSON.stringify(usr.fcm_token));
                console.warn("OwnUser : " + JSON.stringify(this._authUsr.fcm_token));
                console.warn("ar  : " + JSON.stringify(ar));
                this._connecter.createNewChat(ar, this._authUsr.id, cAr1, usr.id, cAr2);
            }
        }
    }
};
EnNewIndividualChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_my_connecter_service__WEBPACK_IMPORTED_MODULE_5__["MyConnecterService"] }
];
EnNewIndividualChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-en-new-individual-chat',
        template: _raw_loader_en_new_individual_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_en_new_individual_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EnNewIndividualChatPage);



/***/ }),

/***/ "G8CX":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/en-new-individual-chat/en-new-individual-chat.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" routerLink=\"/en-all-rooms\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title>New Chat</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar showcancelbutton=\"\"\n    (ionInput)=\"filterList($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-list>\n    <ion-item button (click)=\"viewNewGroup()\">\n      <ion-icon slot=\"start\" name=\"people\"></ion-icon>\n      <ion-label>New Group</ion-label>\n    </ion-item>\n    <!-- <ion-item button *ngFor=\"let u of checkedUser; let c_i = index\"  (click)=\"findId(u.id)\" [routerLink]=\"['/', 'single-user-chat',u.nickname,u.id]\">\n      <ion-avatar slot=\"start\">\n        <img src=\"https://via.placeholder.com/200x200\">\n      </ion-avatar>\n      <ion-label >\n        <h3>{{u.nickname}}</h3>\n        <p>Test Message</p>\n      </ion-label>\n    </ion-item> -->\n    <ion-item button *ngFor=\"let u of _visibleUsr\" (click)=\"startNewChat(u)\"  >\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/avatar.svg\">\n      </ion-avatar>\n      <ion-label >\n        <h3>{{u.name}}</h3>\n        <!-- <p>Test Message</p> -->\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "GuTU":
/*!******************************************************************************!*\
  !*** ./src/app/page/en-new-individual-chat/en-new-individual-chat.module.ts ***!
  \******************************************************************************/
/*! exports provided: EnNewIndividualChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnNewIndividualChatPageModule", function() { return EnNewIndividualChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _en_new_individual_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en-new-individual-chat-routing.module */ "pR4d");
/* harmony import */ var _en_new_individual_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en-new-individual-chat.page */ "1cn0");







let EnNewIndividualChatPageModule = class EnNewIndividualChatPageModule {
};
EnNewIndividualChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _en_new_individual_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnNewIndividualChatPageRoutingModule"]
        ],
        declarations: [_en_new_individual_chat_page__WEBPACK_IMPORTED_MODULE_6__["EnNewIndividualChatPage"]]
    })
], EnNewIndividualChatPageModule);



/***/ }),

/***/ "fONW":
/*!******************************************************************************!*\
  !*** ./src/app/page/en-new-individual-chat/en-new-individual-chat.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbi1uZXctaW5kaXZpZHVhbC1jaGF0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "pR4d":
/*!**************************************************************************************!*\
  !*** ./src/app/page/en-new-individual-chat/en-new-individual-chat-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: EnNewIndividualChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnNewIndividualChatPageRoutingModule", function() { return EnNewIndividualChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _en_new_individual_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-new-individual-chat.page */ "1cn0");




const routes = [
    {
        path: '',
        component: _en_new_individual_chat_page__WEBPACK_IMPORTED_MODULE_3__["EnNewIndividualChatPage"]
    }
];
let EnNewIndividualChatPageRoutingModule = class EnNewIndividualChatPageRoutingModule {
};
EnNewIndividualChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnNewIndividualChatPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=page-en-new-individual-chat-en-new-individual-chat-module-es2015.js.map