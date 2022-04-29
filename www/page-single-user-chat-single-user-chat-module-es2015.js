(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-single-user-chat-single-user-chat-module"],{

/***/ "8HyE":
/*!****************************************************************!*\
  !*** ./src/app/page/single-user-chat/single-user-chat.page.ts ***!
  \****************************************************************/
/*! exports provided: SingleUserChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleUserChatPage", function() { return SingleUserChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_single_user_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./single-user-chat.page.html */ "aoxH");
/* harmony import */ var _single_user_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-user-chat.page.scss */ "eMre");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_en_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/en-data.service */ "Y4Ib");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _attachment_upload_attachment_upload_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../attachment-upload/attachment-upload.page */ "bzF1");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _services_my_connecter_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/my-connecter.service */ "wxrH");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/core */ "1Bn7");
















let SingleUserChatPage = class SingleUserChatPage {
    constructor(route, chatService, firestore, router, alertCtrl, modalController, datepipe, _connecter, actionSheetController, _zone) {
        this.route = route;
        this.chatService = chatService;
        this.firestore = firestore;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.datepipe = datepipe;
        this._connecter = _connecter;
        this.actionSheetController = actionSheetController;
        this._zone = _zone;
        this.newMsg = '';
        this.chatTitle = '';
        this.chatLength = 20;
        this.showMoreChat = true;
        this.chat = null;
        this._users = [];
        this._visible_name = [];
        this.chats = [];
        this._existingChat = [];
        this._mesageCount = 0;
        this._oldChats = [];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        _connecter.authUser$.subscribe(data => {
            this._authUsr = data;
            this._userNickName = this._authUsr.name;
            this._userId = this._authUsr.id;
            console.error("loggedinUserId :" + this._userId);
        });
        this.route.params.subscribe(data => {
            this._chatId = data.chatId;
            if (this._chatId) {
                this.fetchOldChat();
            }
        });
        _connecter.oldChats$.subscribe(data => {
            this._oldChats = data;
            // var milliseconds = today.getMilliseconds();
        });
        for (let index = 0; index < this._oldChats.length; index++) {
            const element = this._oldChats[index];
            const dateAppointment = new Date(element['createAt']);
            const currentDate = new Date();
            // console.log(`currentDate is `, currentDate.getTime() );
            // console.log(`OldDate is `, dateAppointment.getTime() );
            const diffTime = Math.abs(currentDate.getTime() - dateAppointment.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays > 7) {
                if (this._oldChats[this._oldChats.length - 1].mesage == element) {
                    this._connecter.deleteMessage(this._chatId, element['id']);
                    if (this._chatId) {
                        this.fetchOldChat();
                    }
                    this._connecter.updateLastMessage(this._chatId, "");
                }
                else {
                    this._connecter.deleteMessage(this._chatId, element['id']);
                }
            }
        }
        this.subscriptions.add(_connecter.currentChat$.subscribe(data => {
            this._currentChat = data;
            if (data && data.visible_name != null) {
                // console.warn("currentChat",""+JSON.stringify(data.visible_name));
                console.warn("currentChat", "" + JSON.stringify(data));
                if (data && data.visible_name != null) {
                    var newUserArray = data.visible_name;
                    this._visible_name = [];
                    if (newUserArray != undefined && newUserArray.length > 0) {
                        for (let index = 0; index < newUserArray.length; index++) {
                            if (this._currentChat.group == true) {
                                if (newUserArray[index].uid != this._userId) {
                                    this._visible_name.push({
                                        uid: newUserArray[index].uid,
                                        name: newUserArray[index].name,
                                        unread: newUserArray[index].unread * 1,
                                        fcm_token: newUserArray[index].fcm_token
                                        // fcm_token:localStorage.getItem("ousr_fcm_token")
                                    });
                                }
                                else {
                                    this._visible_name.push({
                                        uid: newUserArray[index].uid,
                                        name: newUserArray[index].name,
                                        unread: 0,
                                        fcm_token: localStorage.getItem("user_fcm_token")
                                    });
                                }
                            }
                            else {
                                if (newUserArray[index].uid != this._userId) {
                                    this._visible_name.push({
                                        uid: newUserArray[index].uid,
                                        name: newUserArray[index].name,
                                        unread: 0,
                                        fcm_token: newUserArray[index].fcm_token
                                        // fcm_token:localStorage.getItem("user_fcm_token")
                                    });
                                }
                                else {
                                    this._visible_name.push({
                                        uid: newUserArray[index].uid,
                                        name: newUserArray[index].name,
                                        unread: newUserArray[index].unread * 1,
                                        fcm_token: newUserArray[index].fcm_token
                                        // fcm_token:localStorage.getItem("ousr_fcm_token")
                                    });
                                }
                            }
                            localStorage.setItem("visible_array", "" + this._visible_name);
                        }
                    }
                }
            }
        }));
        window.scrollTo(0, document.body.scrollHeight);
    }
    ngOnInit() {
        if (this._currentChat != null) {
            console.warn(this._currentChat);
        }
    }
    ngAfterViewInit() {
        this.content.scrollToBottom(); // For messsages already present
        this.messageContainers.changes.subscribe((list) => {
            this.content.scrollToBottom(); // For messages added later
        });
    }
    handleButtonClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield _ionic_core__WEBPACK_IMPORTED_MODULE_13__["loadingController"].create({
                message: 'Please wait...',
                duration: 1000
            });
            if (this._oldChats.length < 20 && this._oldChats.length > 10) {
                // this.chatLength=this._oldChats.length;
                this.chatLength = 20;
            }
            else if (this._oldChats.length < 40 && this._oldChats.length > 20) {
                this.chatLength = 40;
                this.chatLength = this._oldChats.length;
                this.showMoreChat = false;
            }
            else if (this._oldChats.length < 60 && this._oldChats.length > 40) {
                this.chatLength = this._oldChats.length;
                this.showMoreChat = false;
            }
            else {
                this.showMoreChat = false;
            }
            yield loading.present();
        });
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this._currentChat);
            var ar = [];
            if (this._currentChat) {
                for (let index = 0; index < this._currentChat.visible_name.length; index++) {
                    ar.push({
                        text: this._currentChat.visible_name[index]['name'],
                        icon: 'share',
                    });
                }
            }
            const actionSheet = yield this.actionSheetController.create({
                header: 'Members',
                cssClass: 'my-custom-class',
                buttons: ar
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    getMsgFromName(userId) {
        for (let usr of this.chat.users) {
            if (usr.id == userId) {
                return usr.nickname;
            }
        }
        return 'Deleted';
    }
    sendMessage() {
        firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().collection('chats').doc(this.uid).collection(this.o_uid).add({
            time: Date.now(),
            uid: this.uid,
            msg: this.newMsg,
            lastMsg: this.newMsg,
            createAt: this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss')
        });
        firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().collection('chats').doc(this.o_uid).collection(this.uid).add({
            time: Date.now(),
            uid: this.uid,
            msg: this.newMsg,
            lastMsg: this.newMsg,
            createAt: this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss')
        }).then(() => {
            this.newMsg = "";
            this.content.scrollToBottom();
        });
    }
    showPop(msgId, mesage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Delete Confirmation!',
                message: 'Are you sure you want to <strong>delete</strong>?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            //this._connecter.deleteMessage(this._chatId, msgId);
                            console.warn(this._oldChats[this._oldChats.length - 1].mesage);
                            if (this._oldChats[this._oldChats.length - 1].mesage == mesage) {
                                this._connecter.deleteMessage(this._chatId, msgId);
                                if (this._chatId) {
                                    this.fetchOldChat();
                                }
                                this._connecter.updateLastMessage(this._chatId, "");
                                console.warn(1);
                                console.warn(this._oldChats[this._oldChats.length - 2].mesage);
                            }
                            else {
                                console.warn(2);
                                this._connecter.deleteMessage(this._chatId, msgId);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    atchFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this._chatId) {
                const modal = yield this.modalController.create({
                    component: _attachment_upload_attachment_upload_page__WEBPACK_IMPORTED_MODULE_8__["AttachmentUploadPage"],
                    swipeToClose: true,
                    componentProps: {
                        'chatId': this._chatId,
                        'messageCount': this._mesageCount,
                        'currentChat': this._currentChat
                    }
                });
                modal.onDidDismiss()
                    .then((data) => {
                    //const user = data['data'];
                });
                return yield modal.present();
            }
        });
    }
    sendChat() {
        if (this._chatId) {
            // console.log(this.newMsg)
            var msg = this.newMsg.trim();
            var _visible_name = [];
            if (this._currentChat.visible_name) {
                var newUserArray = this._currentChat.visible_name;
                console.warn(newUserArray);
                var ureadCount = 0;
                var recieverToken = "";
                if (this._currentChat.group) {
                    console.warn("enter into the group");
                    for (let index = 0; index < newUserArray.length; index++) {
                        console.warn(this._authUsr.id);
                        console.warn(newUserArray[index].uid);
                        if (newUserArray[index].uid != this._authUsr.id) {
                            _visible_name.push({
                                uid: newUserArray[index].uid,
                                name: newUserArray[index].name,
                                unread: newUserArray[index].unread * 1 + 1,
                                fcm_token: newUserArray[index].fcm_token
                            });
                            this._connecter.sendFirebasePush(newUserArray[index].fcm_token)
                                .subscribe(result => {
                            }, error => {
                                // this._connecter.presentToast('error : '+error);
                            });
                        }
                        else {
                            _visible_name.push({
                                uid: newUserArray[index].uid,
                                name: newUserArray[index].name,
                                unread: 0,
                                fcm_token: localStorage.getItem("user_fcm_token")
                            });
                        }
                    }
                }
                else {
                    // If message to a single person
                    console.warn("enter into a non group");
                    /*  console.warn(newUserArray[0].fcm_token);
                     console.warn(newUserArray[1].fcm_token);
                     console.warn(newUserArray[0].uid);
                     console.warn(newUserArray[1].uid);
                     console.warn(this._authUsr.id); */
                    if (newUserArray[0].uid == this._authUsr.id) {
                        _visible_name.push({
                            uid: newUserArray[0].uid,
                            name: newUserArray[0].name,
                            unread: newUserArray[0].unread * 1 + 1,
                            fcm_token: newUserArray[0].fcm_token
                        });
                        this._connecter.sendFirebasePush(newUserArray[0].fcm_token)
                            .subscribe(result => {
                        }, error => {
                            // this._connecter.presentToast('error : '+error);
                        });
                    }
                    else if (newUserArray[1].uid == this._authUsr.id) {
                        _visible_name.push({
                            uid: newUserArray[1].uid,
                            name: newUserArray[1].name,
                            unread: newUserArray[1].unread * 1 + 1,
                            fcm_token: newUserArray[1].fcm_token
                        });
                        this._connecter.sendFirebasePush(newUserArray[1].fcm_token)
                            .subscribe(result => {
                        }, error => {
                            // this._connecter.presentToast('error : '+error);
                        });
                    }
                    if (newUserArray[0].uid != this._authUsr.id) {
                        _visible_name.push({
                            uid: newUserArray[0].uid,
                            name: newUserArray[0].name,
                            unread: 0,
                            fcm_token: newUserArray[0].fcm_token
                            // fcm_token: localStorage.getItem("user_fcm_token")
                        });
                    }
                    else if (newUserArray[1].uid != this._authUsr.id) {
                        _visible_name.push({
                            uid: newUserArray[1].uid,
                            name: newUserArray[1].name,
                            unread: 0,
                            fcm_token: newUserArray[1].fcm_token
                            // fcm_token:""+localStorage.getItem("user_fcm_token")
                        });
                    }
                }
                console.warn(_visible_name);
            }
            var ar = {
                mesage: msg,
                image: null,
                createAt: this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss'),
                message_by: this._authUsr.id,
                message_by_name: this._authUsr.name,
                users: _visible_name
            };
            console.warn(JSON.stringify(ar));
            // this._connecter.createNewMessage(ar, this._chatId, msg);
            this._connecter.createNewMessage(ar, this._chatId, msg, this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss'), this._authUsr.id, (this._mesageCount * 1 + 1), this._authUsr.name, _visible_name);
            this.newMsg = '';
            this.content.scrollToBottom();
        }
    }
    fetchOldChat() {
        this._connecter.fetchChats(this._chatId);
    }
    deleteMsg(msgId) {
        this._connecter.deleteMessage(this._chatId, msgId);
    }
    getOtherId(OtherId) {
        if (OtherId === this._authUsr.id) {
        }
        else {
            this.o_uid = OtherId;
            localStorage.setItem("other_id", OtherId);
            localStorage.setItem("userName", this._currentChat.visible_name);
        }
    }
    ngOnDestroy() {
        if (this._visible_name != null && this._visible_name.length > 0) {
            console.warn("generatedName : " + JSON.stringify(this._visible_name));
            this._connecter.messageSeenBy(this._chatId, this._visible_name);
        }
        this.subscriptions.unsubscribe();
    }
    copyToClipboard(item) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', (item));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
    calculateDiff(data) {
        let date = new Date(data.sent);
        let currentDate = new Date();
        let days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
        console.log(currentDate.getTime());
        console.log(days);
        return days;
    }
};
SingleUserChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _services_en_data_service__WEBPACK_IMPORTED_MODULE_6__["EnDataService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] },
    { type: _services_my_connecter_service__WEBPACK_IMPORTED_MODULE_12__["MyConnecterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
SingleUserChatPage.propDecorators = {
    messageContainers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: ["content",] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false },] }],
    msgInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['input', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
SingleUserChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-single-user-chat',
        template: _raw_loader_single_user_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_single_user_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SingleUserChatPage);



/***/ }),

/***/ "a/6K":
/*!******************************************************************!*\
  !*** ./src/app/page/single-user-chat/single-user-chat.module.ts ***!
  \******************************************************************/
/*! exports provided: SingleUserChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleUserChatPageModule", function() { return SingleUserChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _single_user_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-user-chat-routing.module */ "rti/");
/* harmony import */ var _single_user_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-user-chat.page */ "8HyE");
/* harmony import */ var src_app_pipes_heading_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/heading.pipe */ "Yy/E");
/* harmony import */ var src_app_pipes_file_size_format_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/file-size-format-pipe.pipe */ "AMnY");
/* harmony import */ var _en_all_rooms_en_all_rooms_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../en-all-rooms/en-all-rooms.page */ "UlBQ");










let SingleUserChatPageModule = class SingleUserChatPageModule {
};
SingleUserChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _single_user_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["SingleUserChatPageRoutingModule"]
        ],
        declarations: [_single_user_chat_page__WEBPACK_IMPORTED_MODULE_6__["SingleUserChatPage"], src_app_pipes_heading_pipe__WEBPACK_IMPORTED_MODULE_7__["HeadingPipe"], src_app_pipes_file_size_format_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__["FileSizeFormatPipePipe"], _en_all_rooms_en_all_rooms_page__WEBPACK_IMPORTED_MODULE_9__["StarPipe"]]
    })
], SingleUserChatPageModule);



/***/ }),

/***/ "aoxH":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/single-user-chat/single-user-chat.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" routerLink=\"/en-all-rooms\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title>{{ _currentChat | starPipe: _authUsr.id }}</ion-title>\n    <ion-buttons *ngIf=\"_currentChat && _currentChat.group\" (click)=\"presentActionSheet()\" slot=\"end\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-button *ngIf=\"showMoreChat\" expand=\"block\" (click)=\"handleButtonClick()\">Show More</ion-button> -->\n  <div class=\"chat-row\" *ngIf=\"showMoreChat && _oldChats.length>20 \" (click)=\"handleButtonClick()\">\n    <div class=\"load-previous\" >\n      <span>See Previous Chats</span>\n    </div>\n  </div>\n  <div #content>\n    \n  <div class=\"chat-row\" *ngFor=\"let message of _oldChats| slice: (_oldChats.length > chatLength ? _oldChats.length - chatLength : 0); index as i\" >\n    \n    <div class=\"chat-bubble-outer\" [ngClass]=\"{'chat-bubble__right': message.message_by === _authUsr.id }\">\n      <div *ngIf=\"message.length\">\n        {{getOtherId(message.message_by)}}\n      </div>\n\n      <div class=\"chat-bubble\"  *ngIf=\"!message.delete\">\n        <div class=\"name-area\">\n          <h5>{{message.message_by === _authUsr.id ? 'you' : message.message_by_name}}</h5>\n          <div class=\"delete-area\">\n            <ion-icon name=\"close\"  (click)=\"showPop(message.id,message.mesage)\"></ion-icon>\n          </div>\n        </div>\n\n        <!-- <h4>{{message.message_by === _authUsr.id ? 'you' : message.message_by_name}} \n          <span *ngIf=\"message.message_by === _authUsr.id\" (click)=\"showPop(message.id)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </span></h4> -->\n        <a href=\"{{ message.image }}\" target=\"_blank\" *ngIf=\"message.image\">\n          <img src=\"{{ message.image }}\" alt=\"\">\n        </a>\n        <!-- <span *ngIf=\"message.messageType == 'others'\">\n          {{ message.file_name.substring(0,16) }}..\n          <a href=\"{{ message.image }}\" target=\"_blank\" style=\"color: #fff;\">\n            <ion-icon name=\"download\"></ion-icon>\n          </a>\n        </span> -->\n        <div class=\"ion-activatable ripple-parent\">\n          <span (click)=\"copyToClipboard(message.mesage)\">{{ message.mesage }}</span>\n          <ion-ripple-effect></ion-ripple-effect>\n        </div>\n        \n        <div class=\"date-time\">{{ message.createAt}}</div>\n      </div>\n\n      <div class=\"chat-bubble-deleted\" *ngIf=\"message.delete\">\n        <!-- <p>Message deleted</p> -->\n      </div>\n    </div>\n  </div>\n\n  <!-- <div *ngFor=\"let chat of chats\">\n    <div class=\"chat-row\" *ngIf=\"chat.uid !=uid\">\n      <div class=\"chat-bubble-outer\">\n        <div class=\"chat-bubble\">\n          <div class=\"name-area\">\n            <h5>{{userName}}</h5>\n          </div>\n          {{chat.msg}}\n          <div>\n            <a href=\"{{chat.image}}\" target=\"_blank\" *ngIf=\"chat.messageType == 'image'\">\n              <img src=\"{{chat.image}}\" alt=\"\">\n            </a>\n          </div>\n          <div class=\"date-time\">\n            {{ chat.createAt}}\n          </div>\n          <ng-container *ngIf=\"'lastMsg' as variable\">\n                          {{variable}}\n                        </ng-container>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"chat-row\" *ngIf=\"chat.uid ==uid\">\n      <div class=\"chat-bubble-outer chat-bubble__right\">\n        <div class=\"chat-bubble\">\n          <div class=\"name-area\">\n            <h5>You</h5>\n          </div>\n          <div>\n            <a href=\"{{chat.image}}\" target=\"_blank\" *ngIf=\"chat.messageType == 'image'\">\n              <img src=\"{{chat.image}}\" alt=\"\">\n            </a>\n          </div>\n          {{chat.msg}}\n          <div class=\"date-time\">\n            {{ chat.createAt}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <div class=\"chat-textarea-outer\">\n      <div class=\"attachment\">\n        <div class=\"clear-button\" (click)=\"atchFile()\">\n          <ion-icon name=\"attach-sharp\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"msg-textarea\">\n        <textarea autosize [(ngModel)]=\"newMsg\" name=\"newMsg\"></textarea>\n      </div>\n      <div class=\"send-button-outer\">\n\n        <div class=\"send-button ion-activatable ripple-parent\" *ngIf=\"newMsg.trim() != ''\" (click)=\"sendChat()\">\n          <ion-icon name=\"send-sharp\"></ion-icon>\n          <ion-ripple-effect></ion-ripple-effect>\n        </div>\n\n        <div class=\"send-button ion-activatable ripple-parent\" *ngIf=\"newMsg.trim() === ''\">\n          <ion-icon name=\"send-sharp\"></ion-icon>\n          <ion-ripple-effect></ion-ripple-effect>\n        </div>\n\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "eMre":
/*!******************************************************************!*\
  !*** ./src/app/page/single-user-chat/single-user-chat.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar .small-text {\n  font-weight: 400;\n  font-size: 0.6em;\n}\n\n.chat-textarea-outer {\n  display: flex;\n  align-items: center;\n}\n\n.chat-textarea-outer .attachment {\n  padding: 0.2em;\n}\n\n.chat-textarea-outer .attachment .clear-button {\n  width: 1.6em;\n  height: 1.8em;\n  font-size: 1.5em;\n  display: inline-block;\n  padding: 0.4em 0.3em;\n  display: inline-block;\n  position: relative;\n  border-radius: 1em;\n  -webkit-tap-highlight-color: var(--ion-color-primary);\n}\n\n.chat-textarea-outer .attachment .clear-button:focus {\n  color: var(--ion-color-primary);\n}\n\n.chat-textarea-outer .msg-textarea {\n  flex-grow: 1;\n  padding: 0.2em;\n}\n\n.chat-textarea-outer .msg-textarea textarea {\n  background-color: #ffffff;\n  color: #222222;\n  width: 100%;\n  border-radius: 0.4em;\n  min-height: 1.2em !important;\n  resize: none;\n  vertical-align: top;\n  padding-top: 0.4em;\n}\n\n.chat-textarea-outer .msg-textarea textarea:focus {\n  outline: none;\n}\n\n.chat-textarea-outer .send-button-outer {\n  padding: 0.2em;\n}\n\n.chat-textarea-outer .send-button-outer .send-button {\n  position: relative;\n  display: inline-block;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  padding: 0.4em 0.5em;\n  width: 1.8em;\n  height: 1.8em;\n  border-radius: 50%;\n  font-size: 1.3em;\n  line-height: 1;\n}\n\n.chat-row {\n  padding: 0.2em;\n}\n\n.chat-row .load-previous {\n  text-align: center;\n  padding: 0.4em 0.2em;\n}\n\n.chat-row .load-previous span {\n  font-size: 0.8em;\n  color: #ffffff;\n  background-color: #8f8f8f;\n  padding: 0.5em 1em;\n  border-radius: 3em;\n  display: inline-block;\n}\n\n.chat-row .chat-bubble-outer {\n  padding: 0.3em;\n}\n\n.chat-row .chat-bubble-outer .date-time {\n  font-size: 0.8em;\n  margin-top: 0.3em;\n}\n\n.chat-row .chat-bubble-outer .chat-bubble {\n  background-color: #f1f1f1;\n  max-width: 78%;\n  min-width: 50%;\n  padding: 0.8em 1em;\n  line-height: 1.4;\n  border-radius: 0.7em 0.7em 0.7em 0em;\n  color: #222222;\n}\n\n.chat-row .chat-bubble-outer .chat-bubble .name-area {\n  display: flex;\n  justify-content: space-between;\n}\n\n.chat-row .chat-bubble-outer .chat-bubble .name-area h5 {\n  margin: 0;\n  line-height: 1;\n  font-size: 1em;\n  color: var(--ion-color-primary);\n}\n\n.chat-row .chat-bubble-outer .chat-bubble .date-time {\n  color: #8f8f8f;\n}\n\n.chat-row .chat-bubble__right:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.chat-row .chat-bubble__right .chat-bubble {\n  border-radius: 0.7em 0.7em 0em 0.7em !important;\n  float: right;\n  background-color: var(--ion-color-primary);\n  color: #ffffff;\n}\n\n.chat-row .chat-bubble__right .chat-bubble .name-area h5 {\n  color: #fff;\n}\n\n.chat-row .chat-bubble__right .chat-bubble .date-time {\n  opacity: 0.8;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaW5nbGUtdXNlci1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzU0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBclNKOztBQXdTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQXJTRjs7QUFzU0U7RUFDRSxjQUFBO0FBcFNKOztBQXFTSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7QUFuU047O0FBb1NNO0VBQ0UsK0JBQUE7QUFsU1I7O0FBc1NFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFwU0o7O0FBcVNJO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0YsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXBTTjs7QUFxU007RUFDRSxhQUFBO0FBblNSOztBQXVTRTtFQUNFLGNBQUE7QUFyU0o7O0FBc1NJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXBTTjs7QUEwU0E7RUFDRSxjQUFBO0FBdlNGOztBQXdTRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUF0U0o7O0FBdVNJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFyU047O0FBd1NFO0VBQ0UsY0FBQTtBQXRTSjs7QUF1U0k7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBclNOOztBQXVTSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FBclNOOztBQXNTTTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQXBTVjs7QUFxU1U7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQW5TZDs7QUFzU007RUFDRSxjQUFBO0FBcFNSOztBQTBTSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQXhTTjs7QUEwU0k7RUFDRSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7QUF4U047O0FBMFNVO0VBQ0ksV0FBQTtBQXhTZDs7QUEyU007RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQXpTUiIsImZpbGUiOiJzaW5nbGUtdXNlci1jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBpb24tdG9vbGJhciB7XHJcbi8vICAgLnNtYWxsLXRleHQge1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vIC5jaGF0LXRleHRhcmVhLW91dGVyIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgLmF0dGFjaG1lbnQge1xyXG4vLyAgICAgcGFkZGluZzogMC4yZW07XHJcbi8vICAgICAuY2xlYXItYnV0dG9uIHtcclxuLy8gICAgICAgd2lkdGg6IDEuNmVtO1xyXG4vLyAgICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4vLyAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICAgIHBhZGRpbmc6IDAuNGVtIDAuM2VtO1xyXG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4vLyAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyAgICAgICAmOmZvY3VzIHtcclxuLy8gICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIC5tc2ctdGV4dGFyZWEge1xyXG4vLyAgICAgZmxleC1ncm93OiAxO1xyXG4vLyAgICAgcGFkZGluZzogMC4yZW07XHJcbi8vICAgICB0ZXh0YXJlYSB7XHJcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAwLjRlbTtcclxuLy8gICAgICAgbWluLWhlaWdodDogMS4yZW0gIWltcG9ydGFudDtcclxuLy8gICAgICAgLy9saW5lLWhlaWdodDogMS4yO1xyXG4vLyAgICAgICByZXNpemU6IG5vbmU7XHJcbi8vICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbi8vICAgICAgIHBhZGRpbmctdG9wOiAwLjRlbTtcclxuLy8gICAgICAgJjpmb2N1cyB7XHJcbi8vICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICAuc2VuZC1idXR0b24tb3V0ZXIge1xyXG4vLyAgICAgcGFkZGluZzogMC4yZW07XHJcbi8vICAgICAuc2VuZC1idXR0b24ge1xyXG4vLyAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyAgICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgICAgcGFkZGluZzogMC40ZW0gMC41ZW07XHJcbi8vICAgICAgIHdpZHRoOiAxLjhlbTtcclxuLy8gICAgICAgaGVpZ2h0OiAxLjhlbTtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4vLyAgICAgICBsaW5lLWhlaWdodDogMTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcblxyXG4vLyAuY2hhdC1yb3cge1xyXG4vLyAgIHBhZGRpbmc6IDAuMmVtO1xyXG4vLyAgIC5sb2FkLXByZXZpb3VzIHtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDAuNGVtIDAuMmVtO1xyXG4vLyAgICAgc3BhbiB7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbi8vICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY4ZjhmO1xyXG4vLyAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDNlbTtcclxuLy8gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICAuY2hhdC1idWJibGUtb3V0ZXIge1xyXG4vLyAgICAgcGFkZGluZzogMC4zZW07XHJcbi8vICAgICAuZGF0ZS10aW1lIHtcclxuLy8gICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuLy8gICAgICAgbWFyZ2luLXRvcDogMC4zZW07XHJcbi8vICAgICB9XHJcbi8vICAgICAuY2hhdC1idWJibGUge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4vLyAgICAgICBtYXgtd2lkdGg6IDc1JTtcclxuLy8gICAgICAgcGFkZGluZzogMC44ZW0gMWVtIDtcclxuLy8gICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogMC43ZW07XHJcbi8vICAgICAgIC5kYXRlLXRpbWUge1xyXG4vLyAgICAgICAgIGNvbG9yOiAjOGY4ZjhmO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGg0e1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbiAgICBcclxuLy8gICB9XHJcbi8vICAgLmNoYXQtYnViYmxlX19yaWdodCB7XHJcbi8vICAgICAmOmFmdGVyIHtcclxuLy8gICAgICAgY29udGVudDogXCJcIjtcclxuLy8gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICAgIGNsZWFyOiBib3RoO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNoYXQtYnViYmxlIHtcclxuLy8gICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgICAuZGF0ZS10aW1lIHtcclxuLy8gICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbi8vICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgaDR7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuLy8gICAgICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuLy8gfVxyXG5cclxuLy8gLmNoYXQtYnViYmxlLWRlbGV0ZWQge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMyMTFjMWNhZDtcclxuLy8gICBtYXgtd2lkdGg6IDc1JTtcclxuLy8gICBwYWRkaW5nOiAwLjFlbSAxZW07XHJcbi8vICAgLy8gbGluZS1oZWlnaHQ6IDEuNDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAwLjdlbTtcclxuICBcclxuLy8gfVxyXG5cclxuXHJcbi8vIGlvbi10b29sYmFyIHtcclxuLy8gICAuc21hbGwtdGV4dCB7XHJcbi8vICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjZlbTtcclxuLy8gICB9XHJcbi8vICAgLmJhY2stYnV0dG9ue1xyXG4vLyAgICAgbWF4LXdpZHRoOiAxZW07XHJcbi8vICAgfVxyXG4vLyAgIC5jb250YWN0LWxpc3R7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbi8vICAgICAuYXZhdGFyIHtcclxuLy8gICAgICAgd2lkdGg6IDIuMmVtO1xyXG4vLyAgICAgICBoZWlnaHQ6IDIuMmVtO1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuLy8gICAgICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgICAgIG1hcmdpbi1yaWdodDogMC42ZW07XHJcbi8vICAgICB9XHJcbi8vICAgICAudG9wLXRpdGxlIHtcclxuLy8gICAgICAgcGFkZGluZzogMDtcclxuLy8gICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgICBmb250LXNpemU6IDFlbTtcclxuLy8gICAgICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XHJcbi8vICAgICB9XHJcbi8vICAgICBwIHtcclxuLy8gICAgICAgcGFkZGluZzogMDtcclxuLy8gICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICBjb2xvcjogI2MwYzBjMDtcclxuLy8gICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuLy8gLmNoYXQtdGV4dGFyZWEtb3V0ZXIge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAuYXR0YWNobWVudCB7XHJcbi8vICAgICBwYWRkaW5nOiAwLjJlbTtcclxuLy8gICAgIC5jbGVhci1idXR0b24ge1xyXG4vLyAgICAgICB3aWR0aDogMS42ZW07XHJcbi8vICAgICAgIGhlaWdodDogMS44ZW07XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbi8vICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgICAgcGFkZGluZzogMC40ZW0gMC4zZW07XHJcbi8vICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbi8vICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgICY6Zm9jdXMge1xyXG4vLyAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgLm1zZy10ZXh0YXJlYSB7XHJcbi8vICAgICBmbGV4LWdyb3c6IDE7XHJcbi8vICAgICBwYWRkaW5nOiAwLjJlbTtcclxuLy8gICAgIHRleHRhcmVhIHtcclxuLy8gICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xyXG4vLyAgICAgICBtaW4taGVpZ2h0OiAxLjJlbSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAvL2xpbmUtaGVpZ2h0OiAxLjI7XHJcbi8vICAgICAgIHJlc2l6ZTogbm9uZTtcclxuLy8gICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuLy8gICAgICAgcGFkZGluZy10b3A6IDAuNGVtO1xyXG4vLyAgICAgICAmOmZvY3VzIHtcclxuLy8gICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIC5zZW5kLWJ1dHRvbi1vdXRlciB7XHJcbi8vICAgICBwYWRkaW5nOiAwLjJlbTtcclxuLy8gICAgIC5zZW5kLWJ1dHRvbiB7XHJcbi8vICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgICBwYWRkaW5nOiAwLjRlbSAwLjVlbTtcclxuLy8gICAgICAgd2lkdGg6IDEuOGVtO1xyXG4vLyAgICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbi8vICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi8vIC5jaGF0LXJvdyB7XHJcbi8vICAgcGFkZGluZzogMC4yZW07XHJcbi8vICAgLmxvYWQtcHJldmlvdXMge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgcGFkZGluZzogMC40ZW0gMC4yZW07XHJcbi8vICAgICBzcGFuIHtcclxuLy8gICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuLy8gICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZjhmOGY7XHJcbi8vICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIC5jaGF0LWJ1YmJsZS1vdXRlciB7XHJcbi8vICAgICBwYWRkaW5nOjAuMmVtIDAuOWVtO1xyXG4vLyAgICAgLmRhdGUtdGltZSB7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbi8vICAgICAgIG1hcmdpbi10b3A6IDAuM2VtO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNoYXQtYnViYmxlIHtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjlmNTtcclxuLy8gICAgICAgbWF4LXdpZHRoOiA4NSU7XHJcbi8vICAgICAgIG1pbi13aWR0aDogNjUlO1xyXG4vLyAgICAgICBwYWRkaW5nOiAwLjhlbSAxZW0gO1xyXG4vLyAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4vLyAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjhlbTtcclxuLy8gICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuOGVtO1xyXG4vLyAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC44ZW07XHJcbi8vICAgICAgIC5kYXRlLXRpbWUge1xyXG4vLyAgICAgICAgIGNvbG9yOiAjOGY4ZjhmO1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgaDR7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuLy8gICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICAuY2hhdC1idWJibGVfX3JpZ2h0IHtcclxuLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4vLyAgICAgJjphZnRlciB7XHJcbi8vICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICBjbGVhcjogYm90aDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5jaGF0LWJ1YmJsZSB7XHJcbi8vICAgICAgIGZsb2F0OiByaWdodDtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUwYmE2OTtcclxuLy8gICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuOGVtO1xyXG4vLyAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC44ZW07XHJcbi8vICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuOGVtO1xyXG4vLyAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuLy8gICAgICAgLmRhdGUtdGltZSB7XHJcbi8vICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4vLyAgICAgICAgIGNvbG9yOiAjOGVmMWE1O1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgaDR7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuLy8gICAgICAgICBjb2xvcjogIzEyNjgyNztcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLnNtYWxsLXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgfVxyXG59XHJcbi5jaGF0LXRleHRhcmVhLW91dGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmF0dGFjaG1lbnQge1xyXG4gICAgcGFkZGluZzogMC4yZW07XHJcbiAgICAuY2xlYXItYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEuNmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDAuNGVtIDAuM2VtO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tc2ctdGV4dGFyZWEge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgcGFkZGluZzogMC4yZW07XHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxLjJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAvL2xpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgcGFkZGluZy10b3A6IDAuNGVtO1xyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZW5kLWJ1dHRvbi1vdXRlciB7XHJcbiAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgIC5zZW5kLWJ1dHRvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBwYWRkaW5nOiAwLjRlbSAwLjVlbTtcclxuICAgICAgd2lkdGg6IDEuOGVtO1xyXG4gICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5jaGF0LXJvdyB7XHJcbiAgcGFkZGluZzogMC4yZW07XHJcbiAgLmxvYWQtcHJldmlvdXMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC40ZW0gMC4yZW07XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZjhmOGY7XHJcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaGF0LWJ1YmJsZS1vdXRlciB7XHJcbiAgICBwYWRkaW5nOiAwLjNlbTtcclxuICAgIC5kYXRlLXRpbWUge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjNlbTtcclxuICAgIH1cclxuICAgIC5jaGF0LWJ1YmJsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgIG1heC13aWR0aDogNzglO1xyXG4gICAgICBtaW4td2lkdGg6IDUwJTtcclxuICAgICAgcGFkZGluZzogMC44ZW0gMWVtIDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC43ZW0gMC43ZW0gMC43ZW0gMGVtO1xyXG4gICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgLm5hbWUtYXJlYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5kYXRlLXRpbWUge1xyXG4gICAgICAgIGNvbG9yOiAjOGY4ZjhmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaGF0LWJ1YmJsZV9fcmlnaHQge1xyXG4gICAgICBcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbiAgICAuY2hhdC1idWJibGUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjdlbSAwLjdlbSAwZW0gMC43ZW0gIWltcG9ydGFudDtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAubmFtZS1hcmVhIHtcclxuICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZGF0ZS10aW1lIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "rti/":
/*!**************************************************************************!*\
  !*** ./src/app/page/single-user-chat/single-user-chat-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: SingleUserChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleUserChatPageRoutingModule", function() { return SingleUserChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _single_user_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-user-chat.page */ "8HyE");




const routes = [
    {
        path: '',
        component: _single_user_chat_page__WEBPACK_IMPORTED_MODULE_3__["SingleUserChatPage"]
    }
];
let SingleUserChatPageRoutingModule = class SingleUserChatPageRoutingModule {
};
SingleUserChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SingleUserChatPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=page-single-user-chat-single-user-chat-module-es2015.js.map