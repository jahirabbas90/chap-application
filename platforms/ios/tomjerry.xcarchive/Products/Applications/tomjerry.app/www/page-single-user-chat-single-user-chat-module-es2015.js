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
                var bleep = new Audio();
                bleep.src = './assets/chatTone.mp3';
                bleep.play();
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
                                        unread: newUserArray[index].unread * 1
                                    });
                                }
                                else {
                                    this._visible_name.push({
                                        uid: newUserArray[index].uid,
                                        name: newUserArray[index].name,
                                        unread: 0
                                    });
                                }
                            }
                            else {
                                if (newUserArray[index].uid != this._userId) {
                                    this._visible_name.push({
                                        uid: newUserArray[index].uid,
                                        name: newUserArray[index].name,
                                        unread: 0
                                    });
                                }
                                else {
                                    this._visible_name.push({
                                        uid: newUserArray[index].uid,
                                        name: newUserArray[index].name,
                                        unread: newUserArray[index].unread * 1
                                    });
                                }
                            }
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
            // this._connecter.messageSeenBy(this._chatId, this._authUsr.id,this._visible_name);
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
    /* this._zone.run(() => {
      setTimeout(() => {
        this.contentchat.scrollToBottom(300);
      });
    }); */
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
                for (let index = 0; index < newUserArray.length; index++) {
                    if (this._currentChat.group == true) {
                        if (newUserArray[index].uid != this._userId) {
                            if (newUserArray[index].fcm_token != undefined && newUserArray[index].fcm_token != null) {
                                _visible_name.push({
                                    uid: newUserArray[index].uid,
                                    name: newUserArray[index].name,
                                    unread: newUserArray[index].unread * 1 + 1,
                                    fcm_token: newUserArray[index].fcm_token
                                });
                            }
                            else {
                                _visible_name.push({
                                    uid: newUserArray[index].uid,
                                    name: newUserArray[index].name,
                                    unread: newUserArray[index].unread * 1 + 1,
                                    fcm_token: null
                                });
                            }
                            // alert(newUserArray[index].fcm_token);
                            if (newUserArray[index].fcm_token != undefined && newUserArray[index].fcm_token != null) {
                                this._connecter.sendFirebasePush(newUserArray[index].fcm_token)
                                    .subscribe(result => {
                                }, error => {
                                    this._connecter.presentToast('error : ' + error);
                                    // this._connecter.showSuccess('error', error);
                                });
                            }
                        }
                        else {
                            if (newUserArray[index].fcm_token != undefined && newUserArray[index].fcm_token != null) {
                                _visible_name.push({
                                    uid: newUserArray[index].uid,
                                    name: newUserArray[index].name,
                                    unread: 0,
                                    fcm_token: newUserArray[index].fcm_token
                                });
                            }
                            else {
                                _visible_name.push({
                                    uid: newUserArray[index].uid,
                                    name: newUserArray[index].name,
                                    unread: 0,
                                    fcm_token: null
                                });
                            }
                        }
                    }
                    else {
                        if (newUserArray[index].fcm_token != undefined) {
                            if (newUserArray[index].uid != this._userId) {
                                _visible_name.push({
                                    uid: newUserArray[index].uid,
                                    name: newUserArray[index].name,
                                    unread: 0,
                                    fcm_token: newUserArray[index].fcm_token
                                });
                                // alert(newUserArray[index].fcm_token);
                                //alert(1);
                                console.warn(JSON.stringify(newUserArray));
                                if (newUserArray[0].fcm_token != undefined) {
                                    this._connecter.sendFirebasePush(newUserArray[0].fcm_token)
                                        .subscribe(result => {
                                    }, error => {
                                        this._connecter.presentToast('error : ' + error);
                                        // this._connecter.showSuccess('error', error);
                                    });
                                }
                            }
                            else {
                                _visible_name.push({
                                    uid: newUserArray[index].uid,
                                    name: newUserArray[index].name,
                                    unread: newUserArray[index].unread * 1 + 1,
                                    fcm_token: newUserArray[index].fcm_token
                                });
                            }
                        }
                        else {
                            if (newUserArray[index].uid != this._userId) {
                                _visible_name.push({
                                    uid: newUserArray[index].uid,
                                    name: newUserArray[index].name,
                                    unread: 0,
                                    fcm_token: null
                                });
                                // alert(newUserArray[index].fcm_token);
                                //alert(1);
                                console.warn(JSON.stringify(newUserArray));
                                if (newUserArray[0].fcm_token != undefined && newUserArray[0].fcm_token != null) {
                                    this._connecter.sendFirebasePush(newUserArray[0].fcm_token)
                                        .subscribe(result => {
                                    }, error => {
                                        this._connecter.presentToast('error : ' + error);
                                        // this._connecter.showSuccess('error', error);
                                    });
                                }
                            }
                            else {
                                _visible_name.push({
                                    uid: newUserArray[index].uid,
                                    name: newUserArray[index].name,
                                    unread: newUserArray[index].unread * 1 + 1,
                                    fcm_token: null
                                });
                            }
                        }
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
                users: this._currentChat.visible_name
            };
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
            // console.warn("generatedName : "+JSON.stringify(this._visible_name));
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar .small-text {\n  font-weight: 400;\n  font-size: 0.6em;\n}\n\n.chat-textarea-outer {\n  display: flex;\n  align-items: center;\n}\n\n.chat-textarea-outer .attachment {\n  padding: 0.2em;\n}\n\n.chat-textarea-outer .attachment .clear-button {\n  width: 1.6em;\n  height: 1.8em;\n  font-size: 1.5em;\n  display: inline-block;\n  padding: 0.4em 0.3em;\n  display: inline-block;\n  position: relative;\n  border-radius: 1em;\n  -webkit-tap-highlight-color: var(--ion-color-primary);\n}\n\n.chat-textarea-outer .attachment .clear-button:focus {\n  color: var(--ion-color-primary);\n}\n\n.chat-textarea-outer .msg-textarea {\n  flex-grow: 1;\n  padding: 0.2em;\n}\n\n.chat-textarea-outer .msg-textarea textarea {\n  background-color: #ffffff;\n  color: #222222;\n  width: 100%;\n  border-radius: 0.4em;\n  min-height: 1.2em !important;\n  resize: none;\n  vertical-align: top;\n  padding-top: 0.4em;\n}\n\n.chat-textarea-outer .msg-textarea textarea:focus {\n  outline: none;\n}\n\n.chat-textarea-outer .send-button-outer {\n  padding: 0.2em;\n}\n\n.chat-textarea-outer .send-button-outer .send-button {\n  position: relative;\n  display: inline-block;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  padding: 0.4em 0.5em;\n  width: 1.8em;\n  height: 1.8em;\n  border-radius: 50%;\n  font-size: 1.3em;\n  line-height: 1;\n}\n\n.chat-row {\n  padding: 0.2em;\n}\n\n.chat-row .load-previous {\n  text-align: center;\n  padding: 0.4em 0.2em;\n}\n\n.chat-row .load-previous span {\n  font-size: 0.8em;\n  color: #ffffff;\n  background-color: #8f8f8f;\n  padding: 0.5em 1em;\n  border-radius: 3em;\n  display: inline-block;\n}\n\n.chat-row .chat-bubble-outer {\n  padding: 0.3em;\n}\n\n.chat-row .chat-bubble-outer .date-time {\n  font-size: 0.8em;\n  margin-top: 0.3em;\n}\n\n.chat-row .chat-bubble-outer .chat-bubble {\n  background-color: #f1f1f1;\n  max-width: 78%;\n  min-width: 50%;\n  padding: 0.8em 1em;\n  line-height: 1.4;\n  border-radius: 0.7em 0.7em 0.7em 0em;\n  color: #222222;\n}\n\n.chat-row .chat-bubble-outer .chat-bubble .name-area {\n  display: flex;\n  justify-content: space-between;\n}\n\n.chat-row .chat-bubble-outer .chat-bubble .name-area h5 {\n  margin: 0;\n  line-height: 1;\n  font-size: 1em;\n  color: var(--ion-color-primary);\n}\n\n.chat-row .chat-bubble-outer .chat-bubble .date-time {\n  color: #8f8f8f;\n}\n\n.chat-row .chat-bubble__right:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.chat-row .chat-bubble__right .chat-bubble {\n  border-radius: 0.7em 0.7em 0em 0.7em !important;\n  float: right;\n  background-color: var(--ion-color-primary);\n  color: #ffffff;\n}\n\n.chat-row .chat-bubble__right .chat-bubble .name-area h5 {\n  color: #fff;\n}\n\n.chat-row .chat-bubble__right .chat-bubble .date-time {\n  opacity: 0.8;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpbmdsZS11c2VyLWNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNTRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFyU0o7O0FBd1NBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBclNGOztBQXNTRTtFQUNFLGNBQUE7QUFwU0o7O0FBcVNJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtBQW5TTjs7QUFvU007RUFDRSwrQkFBQTtBQWxTUjs7QUFzU0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQXBTSjs7QUFxU0k7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDRixXQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBcFNOOztBQXFTTTtFQUNFLGFBQUE7QUFuU1I7O0FBdVNFO0VBQ0UsY0FBQTtBQXJTSjs7QUFzU0k7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBcFNOOztBQTBTQTtFQUNFLGNBQUE7QUF2U0Y7O0FBd1NFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQXRTSjs7QUF1U0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQXJTTjs7QUF3U0U7RUFDRSxjQUFBO0FBdFNKOztBQXVTSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFyU047O0FBdVNJO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUFyU047O0FBc1NNO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBcFNWOztBQXFTVTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FBblNkOztBQXNTTTtFQUNFLGNBQUE7QUFwU1I7O0FBMFNJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBeFNOOztBQTBTSTtFQUNFLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtBQXhTTjs7QUEwU1U7RUFDSSxXQUFBO0FBeFNkOztBQTJTTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBelNSIiwiZmlsZSI6InNpbmdsZS11c2VyLWNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIGlvbi10b29sYmFyIHtcclxuLy8gICAuc21hbGwtdGV4dCB7XHJcbi8vICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjZlbTtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gLmNoYXQtdGV4dGFyZWEtb3V0ZXIge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAuYXR0YWNobWVudCB7XHJcbi8vICAgICBwYWRkaW5nOiAwLjJlbTtcclxuLy8gICAgIC5jbGVhci1idXR0b24ge1xyXG4vLyAgICAgICB3aWR0aDogMS42ZW07XHJcbi8vICAgICAgIGhlaWdodDogMS44ZW07XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbi8vICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgICAgcGFkZGluZzogMC40ZW0gMC4zZW07XHJcbi8vICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbi8vICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgICY6Zm9jdXMge1xyXG4vLyAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgLm1zZy10ZXh0YXJlYSB7XHJcbi8vICAgICBmbGV4LWdyb3c6IDE7XHJcbi8vICAgICBwYWRkaW5nOiAwLjJlbTtcclxuLy8gICAgIHRleHRhcmVhIHtcclxuLy8gICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xyXG4vLyAgICAgICBtaW4taGVpZ2h0OiAxLjJlbSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAvL2xpbmUtaGVpZ2h0OiAxLjI7XHJcbi8vICAgICAgIHJlc2l6ZTogbm9uZTtcclxuLy8gICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuLy8gICAgICAgcGFkZGluZy10b3A6IDAuNGVtO1xyXG4vLyAgICAgICAmOmZvY3VzIHtcclxuLy8gICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIC5zZW5kLWJ1dHRvbi1vdXRlciB7XHJcbi8vICAgICBwYWRkaW5nOiAwLjJlbTtcclxuLy8gICAgIC5zZW5kLWJ1dHRvbiB7XHJcbi8vICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgICBwYWRkaW5nOiAwLjRlbSAwLjVlbTtcclxuLy8gICAgICAgd2lkdGg6IDEuOGVtO1xyXG4vLyAgICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbi8vICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi8vIC5jaGF0LXJvdyB7XHJcbi8vICAgcGFkZGluZzogMC4yZW07XHJcbi8vICAgLmxvYWQtcHJldmlvdXMge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgcGFkZGluZzogMC40ZW0gMC4yZW07XHJcbi8vICAgICBzcGFuIHtcclxuLy8gICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuLy8gICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZjhmOGY7XHJcbi8vICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIC5jaGF0LWJ1YmJsZS1vdXRlciB7XHJcbi8vICAgICBwYWRkaW5nOiAwLjNlbTtcclxuLy8gICAgIC5kYXRlLXRpbWUge1xyXG4vLyAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4vLyAgICAgICBtYXJnaW4tdG9wOiAwLjNlbTtcclxuLy8gICAgIH1cclxuLy8gICAgIC5jaGF0LWJ1YmJsZSB7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbi8vICAgICAgIG1heC13aWR0aDogNzUlO1xyXG4vLyAgICAgICBwYWRkaW5nOiAwLjhlbSAxZW0gO1xyXG4vLyAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAwLjdlbTtcclxuLy8gICAgICAgLmRhdGUtdGltZSB7XHJcbi8vICAgICAgICAgY29sb3I6ICM4ZjhmOGY7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgaDR7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuLy8gICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuICAgIFxyXG4vLyAgIH1cclxuLy8gICAuY2hhdC1idWJibGVfX3JpZ2h0IHtcclxuLy8gICAgICY6YWZ0ZXIge1xyXG4vLyAgICAgICBjb250ZW50OiBcIlwiO1xyXG4vLyAgICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgICAgY2xlYXI6IGJvdGg7XHJcbi8vICAgICB9XHJcbi8vICAgICAuY2hhdC1idWJibGUge1xyXG4vLyAgICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgIC5kYXRlLXRpbWUge1xyXG4vLyAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuLy8gICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICBoNHtcclxuLy8gICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4vLyAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG4vLyB9XHJcblxyXG4vLyAuY2hhdC1idWJibGUtZGVsZXRlZCB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMWMxY2FkO1xyXG4vLyAgIG1heC13aWR0aDogNzUlO1xyXG4vLyAgIHBhZGRpbmc6IDAuMWVtIDFlbTtcclxuLy8gICAvLyBsaW5lLWhlaWdodDogMS40O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDAuN2VtO1xyXG4gIFxyXG4vLyB9XHJcblxyXG5cclxuLy8gaW9uLXRvb2xiYXIge1xyXG4vLyAgIC5zbWFsbC10ZXh0IHtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgICBmb250LXNpemU6IDAuNmVtO1xyXG4vLyAgIH1cclxuLy8gICAuYmFjay1idXR0b257XHJcbi8vICAgICBtYXgtd2lkdGg6IDFlbTtcclxuLy8gICB9XHJcbi8vICAgLmNvbnRhY3QtbGlzdHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDFlbTtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuLy8gICAgIC5hdmF0YXIge1xyXG4vLyAgICAgICB3aWR0aDogMi4yZW07XHJcbi8vICAgICAgIGhlaWdodDogMi4yZW07XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4vLyAgICAgICBmbG9hdDogbGVmdDtcclxuLy8gICAgICAgbWFyZ2luLXJpZ2h0OiAwLjZlbTtcclxuLy8gICAgIH1cclxuLy8gICAgIC50b3AtdGl0bGUge1xyXG4vLyAgICAgICBwYWRkaW5nOiAwO1xyXG4vLyAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyAgICAgICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcclxuLy8gICAgIH1cclxuLy8gICAgIHAge1xyXG4vLyAgICAgICBwYWRkaW5nOiAwO1xyXG4vLyAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgIGNvbG9yOiAjYzBjMGMwO1xyXG4vLyAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyAuY2hhdC10ZXh0YXJlYS1vdXRlciB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIC5hdHRhY2htZW50IHtcclxuLy8gICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4vLyAgICAgLmNsZWFyLWJ1dHRvbiB7XHJcbi8vICAgICAgIHdpZHRoOiAxLjZlbTtcclxuLy8gICAgICAgaGVpZ2h0OiAxLjhlbTtcclxuLy8gICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuLy8gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICBwYWRkaW5nOiAwLjRlbSAwLjNlbTtcclxuLy8gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuLy8gICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgJjpmb2N1cyB7XHJcbi8vICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICAubXNnLXRleHRhcmVhIHtcclxuLy8gICAgIGZsZXgtZ3JvdzogMTtcclxuLy8gICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4vLyAgICAgdGV4dGFyZWEge1xyXG4vLyAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogMC40ZW07XHJcbi8vICAgICAgIG1pbi1oZWlnaHQ6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgIC8vbGluZS1oZWlnaHQ6IDEuMjtcclxuLy8gICAgICAgcmVzaXplOiBub25lO1xyXG4vLyAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4vLyAgICAgICBwYWRkaW5nLXRvcDogMC40ZW07XHJcbi8vICAgICAgICY6Zm9jdXMge1xyXG4vLyAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgLnNlbmQtYnV0dG9uLW91dGVyIHtcclxuLy8gICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4vLyAgICAgLnNlbmQtYnV0dG9uIHtcclxuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICAgIHBhZGRpbmc6IDAuNGVtIDAuNWVtO1xyXG4vLyAgICAgICB3aWR0aDogMS44ZW07XHJcbi8vICAgICAgIGhlaWdodDogMS44ZW07XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuLy8gICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5cclxuLy8gLmNoYXQtcm93IHtcclxuLy8gICBwYWRkaW5nOiAwLjJlbTtcclxuLy8gICAubG9hZC1wcmV2aW91cyB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nOiAwLjRlbSAwLjJlbTtcclxuLy8gICAgIHNwYW4ge1xyXG4vLyAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4vLyAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhmOGY4ZjtcclxuLy8gICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAzZW07XHJcbi8vICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgLmNoYXQtYnViYmxlLW91dGVyIHtcclxuLy8gICAgIHBhZGRpbmc6MC4yZW0gMC45ZW07XHJcbi8vICAgICAuZGF0ZS10aW1lIHtcclxuLy8gICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuLy8gICAgICAgbWFyZ2luLXRvcDogMC4zZW07XHJcbi8vICAgICB9XHJcbi8vICAgICAuY2hhdC1idWJibGUge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmOWY1O1xyXG4vLyAgICAgICBtYXgtd2lkdGg6IDg1JTtcclxuLy8gICAgICAgbWluLXdpZHRoOiA2NSU7XHJcbi8vICAgICAgIHBhZGRpbmc6IDAuOGVtIDFlbSA7XHJcbi8vICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbi8vICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuOGVtO1xyXG4vLyAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC44ZW07XHJcbi8vICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjhlbTtcclxuLy8gICAgICAgLmRhdGUtdGltZSB7XHJcbi8vICAgICAgICAgY29sb3I6ICM4ZjhmOGY7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICBoNHtcclxuLy8gICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4vLyAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIC5jaGF0LWJ1YmJsZV9fcmlnaHQge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vICAgICAmOmFmdGVyIHtcclxuLy8gICAgICAgY29udGVudDogXCJcIjtcclxuLy8gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICAgIGNsZWFyOiBib3RoO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNoYXQtYnViYmxlIHtcclxuLy8gICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBiYTY5O1xyXG4vLyAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC44ZW07XHJcbi8vICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjhlbTtcclxuLy8gICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC44ZW07XHJcbi8vICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4vLyAgICAgICAuZGF0ZS10aW1lIHtcclxuLy8gICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbi8vICAgICAgICAgY29sb3I6ICM4ZWYxYTU7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICBoNHtcclxuLy8gICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4vLyAgICAgICAgIGNvbG9yOiAjMTI2ODI3O1xyXG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAuc21hbGwtdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxuICB9XHJcbn1cclxuLmNoYXQtdGV4dGFyZWEtb3V0ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuYXR0YWNobWVudCB7XHJcbiAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgIC5jbGVhci1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMS42ZW07XHJcbiAgICAgIGhlaWdodDogMS44ZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZzogMC40ZW0gMC4zZW07XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm1zZy10ZXh0YXJlYSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC40ZW07XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMC40ZW07XHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnNlbmQtYnV0dG9uLW91dGVyIHtcclxuICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4gICAgLnNlbmQtYnV0dG9uIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDAuNGVtIDAuNWVtO1xyXG4gICAgICB3aWR0aDogMS44ZW07XHJcbiAgICAgIGhlaWdodDogMS44ZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmNoYXQtcm93IHtcclxuICBwYWRkaW5nOiAwLjJlbTtcclxuICAubG9hZC1wcmV2aW91cyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjRlbSAwLjJlbTtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhmOGY4ZjtcclxuICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzZW07XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgLmNoYXQtYnViYmxlLW91dGVyIHtcclxuICAgIHBhZGRpbmc6IDAuM2VtO1xyXG4gICAgLmRhdGUtdGltZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDAuM2VtO1xyXG4gICAgfVxyXG4gICAgLmNoYXQtYnViYmxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgICAgbWF4LXdpZHRoOiA3OCU7XHJcbiAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgICBwYWRkaW5nOiAwLjhlbSAxZW0gO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjdlbSAwLjdlbSAwLjdlbSAwZW07XHJcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAubmFtZS1hcmVhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmRhdGUtdGltZSB7XHJcbiAgICAgICAgY29sb3I6ICM4ZjhmOGY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNoYXQtYnViYmxlX19yaWdodCB7XHJcbiAgICAgIFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuICAgIC5jaGF0LWJ1YmJsZSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuN2VtIDAuN2VtIDBlbSAwLjdlbSAhaW1wb3J0YW50O1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIC5uYW1lLWFyZWEge1xyXG4gICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5kYXRlLXRpbWUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */");

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