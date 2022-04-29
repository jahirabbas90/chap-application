(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-en-chat-en-chat-module"],{

/***/ "GJ4S":
/*!**********************************************!*\
  !*** ./src/app/page/en-chat/en-chat.page.ts ***!
  \**********************************************/
/*! exports provided: EnChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnChatPage", function() { return EnChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_en_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./en-chat.page.html */ "poIv");
/* harmony import */ var _en_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-chat.page.scss */ "kj7r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_en_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/en-data.service */ "Y4Ib");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _attachment_upload_attachment_upload_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../attachment-upload/attachment-upload.page */ "bzF1");







// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';



let EnChatPage = class EnChatPage {
    constructor(route, chatService, router, alertCtrl, modalController) {
        this.route = route;
        this.chatService = chatService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.newMsg = '';
        this.chatTitle = '';
        this.chat = null;
        this._users = [];
        // alert(1);
        this._currentUser = chatService.currentUser.uid;
        console.log(this._currentUser);
        if (chatService.currentUser && 'uid' in chatService.currentUser) {
            this.myId = chatService.currentUser.uid;
        }
        else {
            this.router.navigateByUrl('/en-login');
        }
    }
    ngOnInit() {
        this.route.params.subscribe(data => {
            //console.log(data);
            this.groupId = data.id;
            this.chatService.getOneGroup(data.id).subscribe(res => {
                //console.log(res);
                this.chat = res;
                this._users = this.chat.users;
                //console.log('my chat: ', this.chat);
                this.messages = this.chatService.getChatMessages(this.chat.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(messages => {
                    this.content.scrollToBottom();
                    for (let msg of messages) {
                        msg['user'] = this.getMsgFromName(msg['from']);
                    }
                    //console.log(messages);
                    return messages;
                }));
            });
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
        for (let index = 0; index < this._users.length; index++) {
            if (this._currentUser && this._currentUser != this._users[index].uid) {
                if (this._users[index].unread_count > 0)
                    this._users[index].unread_count = this._users[index].unread_count + 1;
                else
                    this._users[index].unread_count = 1;
            }
        }
        this.chatService.addChatMessage(this.newMsg, this.chat.id, this._users).then(() => {
            this.newMsg = '';
            this.content.scrollToBottom();
        });
    }
    showPop(id) {
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
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.deleteMsg(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteMsg(id) {
        this.chatService.deleteMessage(this.groupId, id);
    }
    leave() {
        // let newUsers = this.chat.users.filter(usr => usr.id != this.auth.currentUserId);
        // this.chatService.leaveGroup(this.chat.id, newUsers).subscribe(res => {
        //   this.router.navigateByUrl('/en-all-rooms');
        // });
    }
    sendFile() {
        // const options: CameraOptions = {
        //   quality: 70,
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE,
        //   sourceType: this.camera.PictureSourceType.CAMERA,
        //   correctOrientation: true
        // }
        // this.camera.getPicture(options).then(data => {
        //   let obj = this.chatService.addFileMessage(data, this.chat.id);
        //   let task = obj.task;
        //   task.then(res => {
        //     obj.ref.getDownloadURL().subscribe(url => {
        //       this.chatService.saveFileMessage(url, this.chat.id);
        //     })
        //   });
        //   task.percentageChanges().subscribe(change => {
        //     console.log('change: ', change);
        //   })
        // });
    }
    atchFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.setItem('from_group', 'Y');
            if (this.chat) {
                const modal = yield this.modalController.create({
                    component: _attachment_upload_attachment_upload_page__WEBPACK_IMPORTED_MODULE_8__["AttachmentUploadPage"],
                    swipeToClose: true,
                    componentProps: {
                        'chatId': this.chat.id,
                        'usrId': this._currentUser
                    }
                });
                modal.onDidDismiss()
                    .then((data) => {
                    //const user = data['data'];
                    console.log(data);
                });
                return yield modal.present();
            }
        });
    }
};
EnChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_en_data_service__WEBPACK_IMPORTED_MODULE_5__["EnDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
EnChatPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"],] }],
    msgInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['input', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
EnChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-en-chat',
        template: _raw_loader_en_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_en_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EnChatPage);



/***/ }),

/***/ "kj7r":
/*!************************************************!*\
  !*** ./src/app/page/en-chat/en-chat.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar .small-text {\n  font-weight: 400;\n  font-size: 0.6em;\n}\nion-toolbar .back-button {\n  max-width: 1em;\n}\nion-toolbar .contact-list {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\nion-toolbar .contact-list .avatar {\n  width: 2.2em;\n  height: 2.2em;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n  float: left;\n  margin-right: 0.6em;\n}\nion-toolbar .contact-list .top-title {\n  padding: 0;\n  margin: 0;\n  font-weight: 400;\n  font-size: 1em;\n  margin-bottom: 0.1em;\n}\nion-toolbar .contact-list p {\n  padding: 0;\n  margin: 0;\n  color: #c0c0c0;\n  font-size: 0.7em;\n}\n.chat-textarea-outer {\n  display: flex;\n  align-items: center;\n}\n.chat-textarea-outer .attachment {\n  padding: 0.2em;\n}\n.chat-textarea-outer .attachment .clear-button {\n  width: 1.6em;\n  height: 1.8em;\n  font-size: 1.5em;\n  display: inline-block;\n  padding: 0.4em 0.3em;\n  display: inline-block;\n  position: relative;\n  border-radius: 1em;\n  -webkit-tap-highlight-color: var(--ion-color-primary);\n}\n.chat-textarea-outer .attachment .clear-button:focus {\n  color: var(--ion-color-primary);\n}\n.chat-textarea-outer .msg-textarea {\n  flex-grow: 1;\n  padding: 0.2em;\n}\n.chat-textarea-outer .msg-textarea textarea {\n  width: 100%;\n  border-radius: 0.4em;\n  min-height: 1.2em !important;\n  resize: none;\n  vertical-align: top;\n  padding-top: 0.4em;\n}\n.chat-textarea-outer .msg-textarea textarea:focus {\n  outline: none;\n}\n.chat-textarea-outer .send-button-outer {\n  padding: 0.2em;\n}\n.chat-textarea-outer .send-button-outer .send-button {\n  position: relative;\n  display: inline-block;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  padding: 0.4em 0.5em;\n  width: 1.8em;\n  height: 1.8em;\n  border-radius: 50%;\n  font-size: 1.3em;\n  line-height: 1;\n}\n.chat-row {\n  padding: 0.2em;\n}\n.chat-row .load-previous {\n  text-align: center;\n  padding: 0.4em 0.2em;\n}\n.chat-row .load-previous span {\n  font-size: 0.8em;\n  color: #ffffff;\n  background-color: #8f8f8f;\n  padding: 0.5em 1em;\n  border-radius: 3em;\n  display: inline-block;\n}\n.chat-row .chat-bubble-outer {\n  padding: 0.2em 0.9em;\n}\n.chat-row .chat-bubble-outer .date-time {\n  font-size: 0.8em;\n  margin-top: 0.3em;\n}\n.chat-row .chat-bubble-outer .chat-bubble {\n  background-color: #f3f9f5;\n  max-width: 85%;\n  min-width: 65%;\n  padding: 0.8em 1em;\n  line-height: 1.4;\n  border-top-left-radius: 0.8em;\n  border-top-right-radius: 0.8em;\n  border-bottom-right-radius: 0.8em;\n}\n.chat-row .chat-bubble-outer .chat-bubble .date-time {\n  color: #8f8f8f;\n  font-size: 0.6em;\n}\n.chat-row .chat-bubble-outer .chat-bubble h4 {\n  font-size: 0.7em;\n  color: var(--ion-color-primary);\n  margin-top: 0;\n  font-weight: 500;\n}\n.chat-row .chat-bubble__right {\n  text-align: right;\n}\n.chat-row .chat-bubble__right:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.chat-row .chat-bubble__right .chat-bubble {\n  float: right;\n  background-color: #50ba69;\n  color: #ffffff;\n  border-top-left-radius: 0.8em;\n  border-top-right-radius: 0.8em;\n  border-bottom-left-radius: 0.8em;\n  border-bottom-right-radius: 0;\n}\n.chat-row .chat-bubble__right .chat-bubble .date-time {\n  opacity: 0.8;\n  color: #8ef1a5;\n  font-size: 0.6em;\n}\n.chat-row .chat-bubble__right .chat-bubble h4 {\n  font-size: 0.7em;\n  color: #126827;\n  margin-top: 0;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbi1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBcElKO0FBc0lFO0VBQ0UsY0FBQTtBQXBJSjtBQXNJRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQXBJSjtBQXFJSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBbklOO0FBcUlJO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQW5JTjtBQXFJSTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBbklOO0FBdUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBcElGO0FBcUlFO0VBQ0UsY0FBQTtBQW5JSjtBQW9JSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7QUFsSU47QUFtSU07RUFDRSwrQkFBQTtBQWpJUjtBQXFJRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBbklKO0FBb0lJO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQW5JTjtBQW9JTTtFQUNFLGFBQUE7QUFsSVI7QUFzSUU7RUFDRSxjQUFBO0FBcElKO0FBcUlJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQW5JTjtBQXlJQTtFQUNFLGNBQUE7QUF0SUY7QUF1SUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBcklKO0FBc0lJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFwSU47QUF1SUU7RUFDRSxvQkFBQTtBQXJJSjtBQXNJSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFwSU47QUFzSUk7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQXBJTjtBQXFJTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQW5JUjtBQXFJTTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFuSVI7QUF1SUU7RUFDRSxpQkFBQTtBQXJJSjtBQXNJSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQXBJTjtBQXNJSTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQXBJTjtBQXFJTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFuSVI7QUFxSU07RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFuSVIiLCJmaWxlIjoiZW4tY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gaW9uLXRvb2xiYXIge1xyXG4vLyAgIC5zbWFsbC10ZXh0IHtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgICBmb250LXNpemU6IDAuNmVtO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyAuY2hhdC10ZXh0YXJlYS1vdXRlciB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIC5hdHRhY2htZW50IHtcclxuLy8gICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4vLyAgICAgLmNsZWFyLWJ1dHRvbiB7XHJcbi8vICAgICAgIHdpZHRoOiAxLjZlbTtcclxuLy8gICAgICAgaGVpZ2h0OiAxLjhlbTtcclxuLy8gICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuLy8gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICBwYWRkaW5nOiAwLjRlbSAwLjNlbTtcclxuLy8gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuLy8gICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgJjpmb2N1cyB7XHJcbi8vICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICAubXNnLXRleHRhcmVhIHtcclxuLy8gICAgIGZsZXgtZ3JvdzogMTtcclxuLy8gICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4vLyAgICAgdGV4dGFyZWEge1xyXG4vLyAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogMC40ZW07XHJcbi8vICAgICAgIG1pbi1oZWlnaHQ6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgIC8vbGluZS1oZWlnaHQ6IDEuMjtcclxuLy8gICAgICAgcmVzaXplOiBub25lO1xyXG4vLyAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4vLyAgICAgICBwYWRkaW5nLXRvcDogMC40ZW07XHJcbi8vICAgICAgICY6Zm9jdXMge1xyXG4vLyAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgLnNlbmQtYnV0dG9uLW91dGVyIHtcclxuLy8gICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4vLyAgICAgLnNlbmQtYnV0dG9uIHtcclxuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICAgIHBhZGRpbmc6IDAuNGVtIDAuNWVtO1xyXG4vLyAgICAgICB3aWR0aDogMS44ZW07XHJcbi8vICAgICAgIGhlaWdodDogMS44ZW07XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuLy8gICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5cclxuLy8gLmNoYXQtcm93IHtcclxuLy8gICBwYWRkaW5nOiAwLjJlbTtcclxuLy8gICAubG9hZC1wcmV2aW91cyB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nOiAwLjRlbSAwLjJlbTtcclxuLy8gICAgIHNwYW4ge1xyXG4vLyAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4vLyAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhmOGY4ZjtcclxuLy8gICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAzZW07XHJcbi8vICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgLmNoYXQtYnViYmxlLW91dGVyIHtcclxuLy8gICAgIHBhZGRpbmc6IDAuM2VtO1xyXG4vLyAgICAgLmRhdGUtdGltZSB7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbi8vICAgICAgIG1hcmdpbi10b3A6IDAuM2VtO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNoYXQtYnViYmxlIHtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuLy8gICAgICAgbWF4LXdpZHRoOiA3NSU7XHJcbi8vICAgICAgIHBhZGRpbmc6IDAuOGVtIDFlbSA7XHJcbi8vICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDAuN2VtO1xyXG4vLyAgICAgICAuZGF0ZS10aW1lIHtcclxuLy8gICAgICAgICBjb2xvcjogIzhmOGY4ZjtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICBoNHtcclxuLy8gICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4vLyAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4gICAgXHJcbi8vICAgfVxyXG4vLyAgIC5jaGF0LWJ1YmJsZV9fcmlnaHQge1xyXG4vLyAgICAgJjphZnRlciB7XHJcbi8vICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICBjbGVhcjogYm90aDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5jaGF0LWJ1YmJsZSB7XHJcbi8vICAgICAgIGZsb2F0OiByaWdodDtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgICAgLmRhdGUtdGltZSB7XHJcbi8vICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4vLyAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGg0e1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vICAgICAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi8vIH1cclxuXHJcbi8vIC5jaGF0LWJ1YmJsZS1kZWxldGVkIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjExYzFjYWQ7XHJcbi8vICAgbWF4LXdpZHRoOiA3NSU7XHJcbi8vICAgcGFkZGluZzogMC4xZW0gMWVtO1xyXG4vLyAgIC8vIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMC43ZW07XHJcbiAgXHJcbi8vIH1cclxuXHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLnNtYWxsLXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgfVxyXG4gIC5iYWNrLWJ1dHRvbntcclxuICAgIG1heC13aWR0aDogMWVtO1xyXG4gIH1cclxuICAuY29udGFjdC1saXN0e1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgIHdpZHRoOiAyLjJlbTtcclxuICAgICAgaGVpZ2h0OiAyLjJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNmVtO1xyXG4gICAgfVxyXG4gICAgLnRvcC10aXRsZSB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMWVtO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgY29sb3I6ICNjMGMwYzA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jaGF0LXRleHRhcmVhLW91dGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmF0dGFjaG1lbnQge1xyXG4gICAgcGFkZGluZzogMC4yZW07XHJcbiAgICAuY2xlYXItYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEuNmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDAuNGVtIDAuM2VtO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tc2ctdGV4dGFyZWEge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgcGFkZGluZzogMC4yZW07XHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjRlbTtcclxuICAgICAgbWluLWhlaWdodDogMS4yZW0gIWltcG9ydGFudDtcclxuICAgICAgLy9saW5lLWhlaWdodDogMS4yO1xyXG4gICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwLjRlbTtcclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuc2VuZC1idXR0b24tb3V0ZXIge1xyXG4gICAgcGFkZGluZzogMC4yZW07XHJcbiAgICAuc2VuZC1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgcGFkZGluZzogMC40ZW0gMC41ZW07XHJcbiAgICAgIHdpZHRoOiAxLjhlbTtcclxuICAgICAgaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uY2hhdC1yb3cge1xyXG4gIHBhZGRpbmc6IDAuMmVtO1xyXG4gIC5sb2FkLXByZXZpb3VzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNGVtIDAuMmVtO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY4ZjhmO1xyXG4gICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNlbTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2hhdC1idWJibGUtb3V0ZXIge1xyXG4gICAgcGFkZGluZzowLjJlbSAwLjllbTtcclxuICAgIC5kYXRlLXRpbWUge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjNlbTtcclxuICAgIH1cclxuICAgIC5jaGF0LWJ1YmJsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y5ZjU7XHJcbiAgICAgIG1heC13aWR0aDogODUlO1xyXG4gICAgICBtaW4td2lkdGg6IDY1JTtcclxuICAgICAgcGFkZGluZzogMC44ZW0gMWVtIDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC44ZW07XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjhlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuOGVtO1xyXG4gICAgICAuZGF0ZS10aW1lIHtcclxuICAgICAgICBjb2xvcjogIzhmOGY4ZjtcclxuICAgICAgICBmb250LXNpemU6IDAuNmVtO1xyXG4gICAgICB9XHJcbiAgICAgIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNoYXQtYnViYmxlX19yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbiAgICAuY2hhdC1idWJibGUge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MGJhNjk7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjhlbTtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuOGVtO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjhlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgIC5kYXRlLXRpbWUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICBjb2xvcjogIzhlZjFhNTtcclxuICAgICAgICBmb250LXNpemU6IDAuNmVtO1xyXG4gICAgICB9XHJcbiAgICAgIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgICAgY29sb3I6ICMxMjY4Mjc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "oX4x":
/*!************************************************!*\
  !*** ./src/app/page/en-chat/en-chat.module.ts ***!
  \************************************************/
/*! exports provided: EnChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnChatPageModule", function() { return EnChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _en_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en-chat-routing.module */ "putm");
/* harmony import */ var _en_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en-chat.page */ "GJ4S");
/* harmony import */ var _pipes_heading_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/heading.pipe */ "Yy/E");
/* harmony import */ var _pipes_file_size_format_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/file-size-format-pipe.pipe */ "AMnY");









let EnChatPageModule = class EnChatPageModule {
};
EnChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _en_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnChatPageRoutingModule"]
        ],
        declarations: [_en_chat_page__WEBPACK_IMPORTED_MODULE_6__["EnChatPage"], _pipes_heading_pipe__WEBPACK_IMPORTED_MODULE_7__["HeadingPipe"], _pipes_file_size_format_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__["FileSizeFormatPipePipe"]]
    })
], EnChatPageModule);



/***/ }),

/***/ "poIv":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/en-chat/en-chat.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/en-all-rooms\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ chat?.title }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button color=\"danger\" fill=\"clear\" (click)=\"leave()\">\n        Leave Chat\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div class=\"chat-row\" *ngIf=\"_messages && _messages.length > 20\">\n    <div class=\"load-previous\">\n      <span>See Previous Chats</span>\n    </div>\n  </div> -->\n  <div class=\"chat-row\" *ngFor=\"let message of messages | async\">\n    <div class=\"chat-bubble-outer\" [ngClass]=\"{'chat-bubble__right': message.from === _currentUser }\" >\n      <div class=\"chat-bubble\" *ngIf=\"!message.delete\">\n        <div class=\"name-area\">\n          <h5>{{ message.user }}</h5>\n          <div class=\"delete-area\">\n            <ion-icon name=\"close\" (click)=\"showPop(message.id)\"></ion-icon>\n          </div>\n        </div>\n\n        <!-- <h4>{{ message.user }} <span (click)=\"showPop(message.id)\"><ion-icon name=\"trash\"></ion-icon></span></h4> -->\n        <a href=\"{{ message.image }}\" target=\"_blank\" *ngIf=\"message.messageType == 'image'\">\n          <img src=\"{{ message.image }}\" alt=\"\">\n        </a>        \n        <span *ngIf=\"message.messageType == 'others'\">\n          {{ message.file_name.substring(0,16) }}..\n          <a href=\"{{ message.image }}\" target=\"_blank\" style=\"color: #fff;\"><ion-icon name=\"download\"></ion-icon></a>\n        </span>\n        <span *ngIf=\"message.messageType == 'text'\">{{ message.msg }}</span>\n        <div class=\"date-time\">{{ message.createdAt | heading }}</div>\n      </div>\n      <div class=\"chat-bubble-deleted\" *ngIf=\"message.delete\">\n        <p>Message deleted</p>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n      <div class=\"chat-textarea-outer\">\n        <div class=\"attachment\">\n          <div class=\"clear-button\" (click)=\"atchFile()\">\n            <ion-icon name=\"attach-sharp\"></ion-icon>\n          </div>\n        </div>\n        <div class=\"msg-textarea\">\n          <textarea autosize [(ngModel)]=\"newMsg\" name=\"newMsg\"></textarea>\n        </div>\n        <div class=\"send-button-outer\">\n\n          <div class=\"send-button ion-activatable ripple-parent\" *ngIf=\"newMsg != ''\" (click)=\"sendMessage()\">\n            <ion-icon name=\"send-sharp\"></ion-icon>\n            <ion-ripple-effect></ion-ripple-effect>\n          </div>\n\n          <div class=\"send-button ion-activatable ripple-parent\" *ngIf=\"newMsg === ''\">\n            <ion-icon name=\"send-sharp\"></ion-icon>\n            <ion-ripple-effect></ion-ripple-effect>\n          </div>\n\n        </div>\n      </div>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "putm":
/*!********************************************************!*\
  !*** ./src/app/page/en-chat/en-chat-routing.module.ts ***!
  \********************************************************/
/*! exports provided: EnChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnChatPageRoutingModule", function() { return EnChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _en_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-chat.page */ "GJ4S");




const routes = [
    {
        path: '',
        component: _en_chat_page__WEBPACK_IMPORTED_MODULE_3__["EnChatPage"]
    }
];
let EnChatPageRoutingModule = class EnChatPageRoutingModule {
};
EnChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnChatPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=page-en-chat-en-chat-module-es2015.js.map