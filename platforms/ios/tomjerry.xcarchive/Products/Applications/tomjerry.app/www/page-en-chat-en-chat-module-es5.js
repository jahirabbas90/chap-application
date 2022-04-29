(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-en-chat-en-chat-module"], {
    /***/
    "GJ4S":
    /*!**********************************************!*\
      !*** ./src/app/page/en-chat/en-chat.page.ts ***!
      \**********************************************/

    /*! exports provided: EnChatPage */

    /***/
    function GJ4S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnChatPage", function () {
        return EnChatPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_en_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./en-chat.page.html */
      "poIv");
      /* harmony import */


      var _en_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./en-chat.page.scss */
      "kj7r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_en_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/en-data.service */
      "Y4Ib");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _attachment_upload_attachment_upload_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../attachment-upload/attachment-upload.page */
      "bzF1"); // import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


      var EnChatPage = /*#__PURE__*/function () {
        function EnChatPage(route, chatService, router, alertCtrl, modalController) {
          _classCallCheck(this, EnChatPage);

          this.route = route;
          this.chatService = chatService;
          this.router = router;
          this.alertCtrl = alertCtrl;
          this.modalController = modalController;
          this.newMsg = '';
          this.chatTitle = '';
          this.chat = null;
          this._users = []; // alert(1);

          this._currentUser = chatService.currentUser.uid;
          console.log(this._currentUser);

          if (chatService.currentUser && 'uid' in chatService.currentUser) {
            this.myId = chatService.currentUser.uid;
          } else {
            this.router.navigateByUrl('/en-login');
          }
        }

        _createClass(EnChatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.params.subscribe(function (data) {
              //console.log(data);
              _this.groupId = data.id;

              _this.chatService.getOneGroup(data.id).subscribe(function (res) {
                //console.log(res);
                _this.chat = res;
                _this._users = _this.chat.users; //console.log('my chat: ', this.chat);

                _this.messages = _this.chatService.getChatMessages(_this.chat.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (messages) {
                  _this.content.scrollToBottom();

                  var _iterator = _createForOfIteratorHelper(messages),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var msg = _step.value;
                      msg['user'] = _this.getMsgFromName(msg['from']);
                    } //console.log(messages);

                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  return messages;
                }));
              });
            });
          }
        }, {
          key: "getMsgFromName",
          value: function getMsgFromName(userId) {
            var _iterator2 = _createForOfIteratorHelper(this.chat.users),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var usr = _step2.value;

                if (usr.id == userId) {
                  return usr.nickname;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return 'Deleted';
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            var _this2 = this;

            for (var index = 0; index < this._users.length; index++) {
              if (this._currentUser && this._currentUser != this._users[index].uid) {
                if (this._users[index].unread_count > 0) this._users[index].unread_count = this._users[index].unread_count + 1;else this._users[index].unread_count = 1;
              }
            }

            this.chatService.addChatMessage(this.newMsg, this.chat.id, this._users).then(function () {
              _this2.newMsg = '';

              _this2.content.scrollToBottom();
            });
          }
        }, {
          key: "showPop",
          value: function showPop(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Delete Confirmation!',
                        message: 'Are you sure you want to <strong>delete</strong>?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {// console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            _this3.deleteMsg(id);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deleteMsg",
          value: function deleteMsg(id) {
            this.chatService.deleteMessage(this.groupId, id);
          }
        }, {
          key: "leave",
          value: function leave() {// let newUsers = this.chat.users.filter(usr => usr.id != this.auth.currentUserId);
            // this.chatService.leaveGroup(this.chat.id, newUsers).subscribe(res => {
            //   this.router.navigateByUrl('/en-all-rooms');
            // });
          }
        }, {
          key: "sendFile",
          value: function sendFile() {// const options: CameraOptions = {
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
        }, {
          key: "atchFile",
          value: function atchFile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      localStorage.setItem('from_group', 'Y');

                      if (!this.chat) {
                        _context2.next = 9;
                        break;
                      }

                      _context2.next = 4;
                      return this.modalController.create({
                        component: _attachment_upload_attachment_upload_page__WEBPACK_IMPORTED_MODULE_8__["AttachmentUploadPage"],
                        swipeToClose: true,
                        componentProps: {
                          'chatId': this.chat.id,
                          'usrId': this._currentUser
                        }
                      });

                    case 4:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (data) {
                        //const user = data['data'];
                        console.log(data);
                      });
                      _context2.next = 8;
                      return modal.present();

                    case 8:
                      return _context2.abrupt("return", _context2.sent);

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return EnChatPage;
      }();

      EnChatPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _services_en_data_service__WEBPACK_IMPORTED_MODULE_5__["EnDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      EnChatPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]]
        }],
        msgInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['input', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }]
      };
      EnChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-en-chat',
        template: _raw_loader_en_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_en_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EnChatPage);
      /***/
    },

    /***/
    "kj7r":
    /*!************************************************!*\
      !*** ./src/app/page/en-chat/en-chat.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function kj7r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar .small-text {\n  font-weight: 400;\n  font-size: 0.6em;\n}\nion-toolbar .back-button {\n  max-width: 1em;\n}\nion-toolbar .contact-list {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\nion-toolbar .contact-list .avatar {\n  width: 2.2em;\n  height: 2.2em;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: center;\n  float: left;\n  margin-right: 0.6em;\n}\nion-toolbar .contact-list .top-title {\n  padding: 0;\n  margin: 0;\n  font-weight: 400;\n  font-size: 1em;\n  margin-bottom: 0.1em;\n}\nion-toolbar .contact-list p {\n  padding: 0;\n  margin: 0;\n  color: #c0c0c0;\n  font-size: 0.7em;\n}\n.chat-textarea-outer {\n  display: flex;\n  align-items: center;\n}\n.chat-textarea-outer .attachment {\n  padding: 0.2em;\n}\n.chat-textarea-outer .attachment .clear-button {\n  width: 1.6em;\n  height: 1.8em;\n  font-size: 1.5em;\n  display: inline-block;\n  padding: 0.4em 0.3em;\n  display: inline-block;\n  position: relative;\n  border-radius: 1em;\n  -webkit-tap-highlight-color: var(--ion-color-primary);\n}\n.chat-textarea-outer .attachment .clear-button:focus {\n  color: var(--ion-color-primary);\n}\n.chat-textarea-outer .msg-textarea {\n  flex-grow: 1;\n  padding: 0.2em;\n}\n.chat-textarea-outer .msg-textarea textarea {\n  width: 100%;\n  border-radius: 0.4em;\n  min-height: 1.2em !important;\n  resize: none;\n  vertical-align: top;\n  padding-top: 0.4em;\n}\n.chat-textarea-outer .msg-textarea textarea:focus {\n  outline: none;\n}\n.chat-textarea-outer .send-button-outer {\n  padding: 0.2em;\n}\n.chat-textarea-outer .send-button-outer .send-button {\n  position: relative;\n  display: inline-block;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  padding: 0.4em 0.5em;\n  width: 1.8em;\n  height: 1.8em;\n  border-radius: 50%;\n  font-size: 1.3em;\n  line-height: 1;\n}\n.chat-row {\n  padding: 0.2em;\n}\n.chat-row .load-previous {\n  text-align: center;\n  padding: 0.4em 0.2em;\n}\n.chat-row .load-previous span {\n  font-size: 0.8em;\n  color: #ffffff;\n  background-color: #8f8f8f;\n  padding: 0.5em 1em;\n  border-radius: 3em;\n  display: inline-block;\n}\n.chat-row .chat-bubble-outer {\n  padding: 0.2em 0.9em;\n}\n.chat-row .chat-bubble-outer .date-time {\n  font-size: 0.8em;\n  margin-top: 0.3em;\n}\n.chat-row .chat-bubble-outer .chat-bubble {\n  background-color: #f3f9f5;\n  max-width: 85%;\n  min-width: 65%;\n  padding: 0.8em 1em;\n  line-height: 1.4;\n  border-top-left-radius: 0.8em;\n  border-top-right-radius: 0.8em;\n  border-bottom-right-radius: 0.8em;\n}\n.chat-row .chat-bubble-outer .chat-bubble .date-time {\n  color: #8f8f8f;\n  font-size: 0.6em;\n}\n.chat-row .chat-bubble-outer .chat-bubble h4 {\n  font-size: 0.7em;\n  color: var(--ion-color-primary);\n  margin-top: 0;\n  font-weight: 500;\n}\n.chat-row .chat-bubble__right {\n  text-align: right;\n}\n.chat-row .chat-bubble__right:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.chat-row .chat-bubble__right .chat-bubble {\n  float: right;\n  background-color: #50ba69;\n  color: #ffffff;\n  border-top-left-radius: 0.8em;\n  border-top-right-radius: 0.8em;\n  border-bottom-left-radius: 0.8em;\n  border-bottom-right-radius: 0;\n}\n.chat-row .chat-bubble__right .chat-bubble .date-time {\n  opacity: 0.8;\n  color: #8ef1a5;\n  font-size: 0.6em;\n}\n.chat-row .chat-bubble__right .chat-bubble h4 {\n  font-size: 0.7em;\n  color: #126827;\n  margin-top: 0;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VuLWNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFJRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFwSUo7QUFzSUU7RUFDRSxjQUFBO0FBcElKO0FBc0lFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBcElKO0FBcUlJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFuSU47QUFxSUk7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBbklOO0FBcUlJO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFuSU47QUF1SUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFwSUY7QUFxSUU7RUFDRSxjQUFBO0FBbklKO0FBb0lJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtBQWxJTjtBQW1JTTtFQUNFLCtCQUFBO0FBaklSO0FBcUlFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFuSUo7QUFvSUk7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBbklOO0FBb0lNO0VBQ0UsYUFBQTtBQWxJUjtBQXNJRTtFQUNFLGNBQUE7QUFwSUo7QUFxSUk7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBbklOO0FBeUlBO0VBQ0UsY0FBQTtBQXRJRjtBQXVJRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFySUo7QUFzSUk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQXBJTjtBQXVJRTtFQUNFLG9CQUFBO0FBcklKO0FBc0lJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQXBJTjtBQXNJSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FBcElOO0FBcUlNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBbklSO0FBcUlNO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQW5JUjtBQXVJRTtFQUNFLGlCQUFBO0FBcklKO0FBc0lJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBcElOO0FBc0lJO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBcElOO0FBcUlNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQW5JUjtBQXFJTTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQW5JUiIsImZpbGUiOiJlbi1jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBpb24tdG9vbGJhciB7XHJcbi8vICAgLnNtYWxsLXRleHQge1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vIC5jaGF0LXRleHRhcmVhLW91dGVyIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgLmF0dGFjaG1lbnQge1xyXG4vLyAgICAgcGFkZGluZzogMC4yZW07XHJcbi8vICAgICAuY2xlYXItYnV0dG9uIHtcclxuLy8gICAgICAgd2lkdGg6IDEuNmVtO1xyXG4vLyAgICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4vLyAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICAgIHBhZGRpbmc6IDAuNGVtIDAuM2VtO1xyXG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4vLyAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyAgICAgICAmOmZvY3VzIHtcclxuLy8gICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIC5tc2ctdGV4dGFyZWEge1xyXG4vLyAgICAgZmxleC1ncm93OiAxO1xyXG4vLyAgICAgcGFkZGluZzogMC4yZW07XHJcbi8vICAgICB0ZXh0YXJlYSB7XHJcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAwLjRlbTtcclxuLy8gICAgICAgbWluLWhlaWdodDogMS4yZW0gIWltcG9ydGFudDtcclxuLy8gICAgICAgLy9saW5lLWhlaWdodDogMS4yO1xyXG4vLyAgICAgICByZXNpemU6IG5vbmU7XHJcbi8vICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbi8vICAgICAgIHBhZGRpbmctdG9wOiAwLjRlbTtcclxuLy8gICAgICAgJjpmb2N1cyB7XHJcbi8vICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICAuc2VuZC1idXR0b24tb3V0ZXIge1xyXG4vLyAgICAgcGFkZGluZzogMC4yZW07XHJcbi8vICAgICAuc2VuZC1idXR0b24ge1xyXG4vLyAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyAgICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgICAgcGFkZGluZzogMC40ZW0gMC41ZW07XHJcbi8vICAgICAgIHdpZHRoOiAxLjhlbTtcclxuLy8gICAgICAgaGVpZ2h0OiAxLjhlbTtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4vLyAgICAgICBsaW5lLWhlaWdodDogMTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcblxyXG4vLyAuY2hhdC1yb3cge1xyXG4vLyAgIHBhZGRpbmc6IDAuMmVtO1xyXG4vLyAgIC5sb2FkLXByZXZpb3VzIHtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDAuNGVtIDAuMmVtO1xyXG4vLyAgICAgc3BhbiB7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbi8vICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY4ZjhmO1xyXG4vLyAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDNlbTtcclxuLy8gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICAuY2hhdC1idWJibGUtb3V0ZXIge1xyXG4vLyAgICAgcGFkZGluZzogMC4zZW07XHJcbi8vICAgICAuZGF0ZS10aW1lIHtcclxuLy8gICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuLy8gICAgICAgbWFyZ2luLXRvcDogMC4zZW07XHJcbi8vICAgICB9XHJcbi8vICAgICAuY2hhdC1idWJibGUge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4vLyAgICAgICBtYXgtd2lkdGg6IDc1JTtcclxuLy8gICAgICAgcGFkZGluZzogMC44ZW0gMWVtIDtcclxuLy8gICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogMC43ZW07XHJcbi8vICAgICAgIC5kYXRlLXRpbWUge1xyXG4vLyAgICAgICAgIGNvbG9yOiAjOGY4ZjhmO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGg0e1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbiAgICBcclxuLy8gICB9XHJcbi8vICAgLmNoYXQtYnViYmxlX19yaWdodCB7XHJcbi8vICAgICAmOmFmdGVyIHtcclxuLy8gICAgICAgY29udGVudDogXCJcIjtcclxuLy8gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICAgIGNsZWFyOiBib3RoO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNoYXQtYnViYmxlIHtcclxuLy8gICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgICAuZGF0ZS10aW1lIHtcclxuLy8gICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbi8vICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgaDR7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuLy8gICAgICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuLy8gfVxyXG5cclxuLy8gLmNoYXQtYnViYmxlLWRlbGV0ZWQge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMyMTFjMWNhZDtcclxuLy8gICBtYXgtd2lkdGg6IDc1JTtcclxuLy8gICBwYWRkaW5nOiAwLjFlbSAxZW07XHJcbi8vICAgLy8gbGluZS1oZWlnaHQ6IDEuNDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAwLjdlbTtcclxuICBcclxuLy8gfVxyXG5cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAuc21hbGwtdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxuICB9XHJcbiAgLmJhY2stYnV0dG9ue1xyXG4gICAgbWF4LXdpZHRoOiAxZW07XHJcbiAgfVxyXG4gIC5jb250YWN0LWxpc3R7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAuYXZhdGFyIHtcclxuICAgICAgd2lkdGg6IDIuMmVtO1xyXG4gICAgICBoZWlnaHQ6IDIuMmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC42ZW07XHJcbiAgICB9XHJcbiAgICAudG9wLXRpdGxlIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBjb2xvcjogI2MwYzBjMDtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmNoYXQtdGV4dGFyZWEtb3V0ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuYXR0YWNobWVudCB7XHJcbiAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgIC5jbGVhci1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMS42ZW07XHJcbiAgICAgIGhlaWdodDogMS44ZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZzogMC40ZW0gMC4zZW07XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm1zZy10ZXh0YXJlYSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxLjJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAvL2xpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgcGFkZGluZy10b3A6IDAuNGVtO1xyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZW5kLWJ1dHRvbi1vdXRlciB7XHJcbiAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgIC5zZW5kLWJ1dHRvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBwYWRkaW5nOiAwLjRlbSAwLjVlbTtcclxuICAgICAgd2lkdGg6IDEuOGVtO1xyXG4gICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5jaGF0LXJvdyB7XHJcbiAgcGFkZGluZzogMC4yZW07XHJcbiAgLmxvYWQtcHJldmlvdXMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC40ZW0gMC4yZW07XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZjhmOGY7XHJcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaGF0LWJ1YmJsZS1vdXRlciB7XHJcbiAgICBwYWRkaW5nOjAuMmVtIDAuOWVtO1xyXG4gICAgLmRhdGUtdGltZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDAuM2VtO1xyXG4gICAgfVxyXG4gICAgLmNoYXQtYnViYmxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjlmNTtcclxuICAgICAgbWF4LXdpZHRoOiA4NSU7XHJcbiAgICAgIG1pbi13aWR0aDogNjUlO1xyXG4gICAgICBwYWRkaW5nOiAwLjhlbSAxZW0gO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjhlbTtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuOGVtO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC44ZW07XHJcbiAgICAgIC5kYXRlLXRpbWUge1xyXG4gICAgICAgIGNvbG9yOiAjOGY4ZjhmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICAgIH1cclxuICAgICAgaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY2hhdC1idWJibGVfX3JpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuICAgIC5jaGF0LWJ1YmJsZSB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUwYmE2OTtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuOGVtO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC44ZW07XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuOGVtO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgLmRhdGUtdGltZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIGNvbG9yOiAjOGVmMWE1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICAgIH1cclxuICAgICAgaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICBjb2xvcjogIzEyNjgyNztcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "oX4x":
    /*!************************************************!*\
      !*** ./src/app/page/en-chat/en-chat.module.ts ***!
      \************************************************/

    /*! exports provided: EnChatPageModule */

    /***/
    function oX4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnChatPageModule", function () {
        return EnChatPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _en_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./en-chat-routing.module */
      "putm");
      /* harmony import */


      var _en_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./en-chat.page */
      "GJ4S");
      /* harmony import */


      var _pipes_heading_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipes/heading.pipe */
      "Yy/E");
      /* harmony import */


      var _pipes_file_size_format_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pipes/file-size-format-pipe.pipe */
      "AMnY");

      var EnChatPageModule = function EnChatPageModule() {
        _classCallCheck(this, EnChatPageModule);
      };

      EnChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _en_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnChatPageRoutingModule"]],
        declarations: [_en_chat_page__WEBPACK_IMPORTED_MODULE_6__["EnChatPage"], _pipes_heading_pipe__WEBPACK_IMPORTED_MODULE_7__["HeadingPipe"], _pipes_file_size_format_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__["FileSizeFormatPipePipe"]]
      })], EnChatPageModule);
      /***/
    },

    /***/
    "poIv":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/en-chat/en-chat.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function poIv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/en-all-rooms\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ chat?.title }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button color=\"danger\" fill=\"clear\" (click)=\"leave()\">\n        Leave Chat\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div class=\"chat-row\" *ngIf=\"_messages && _messages.length > 20\">\n    <div class=\"load-previous\">\n      <span>See Previous Chats</span>\n    </div>\n  </div> -->\n  <div class=\"chat-row\" *ngFor=\"let message of messages | async\">\n    <div class=\"chat-bubble-outer\" [ngClass]=\"{'chat-bubble__right': message.from === _currentUser }\" >\n      <div class=\"chat-bubble\" *ngIf=\"!message.delete\">\n        <div class=\"name-area\">\n          <h5>{{ message.user }}</h5>\n          <div class=\"delete-area\">\n            <ion-icon name=\"close\" (click)=\"showPop(message.id)\"></ion-icon>\n          </div>\n        </div>\n\n        <!-- <h4>{{ message.user }} <span (click)=\"showPop(message.id)\"><ion-icon name=\"trash\"></ion-icon></span></h4> -->\n        <a href=\"{{ message.image }}\" target=\"_blank\" *ngIf=\"message.messageType == 'image'\">\n          <img src=\"{{ message.image }}\" alt=\"\">\n        </a>        \n        <span *ngIf=\"message.messageType == 'others'\">\n          {{ message.file_name.substring(0,16) }}..\n          <a href=\"{{ message.image }}\" target=\"_blank\" style=\"color: #fff;\"><ion-icon name=\"download\"></ion-icon></a>\n        </span>\n        <span *ngIf=\"message.messageType == 'text'\">{{ message.msg }}</span>\n        <div class=\"date-time\">{{ message.createdAt | heading }}</div>\n      </div>\n      <div class=\"chat-bubble-deleted\" *ngIf=\"message.delete\">\n        <p>Message deleted</p>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n      <div class=\"chat-textarea-outer\">\n        <div class=\"attachment\">\n          <div class=\"clear-button\" (click)=\"atchFile()\">\n            <ion-icon name=\"attach-sharp\"></ion-icon>\n          </div>\n        </div>\n        <div class=\"msg-textarea\">\n          <textarea autosize [(ngModel)]=\"newMsg\" name=\"newMsg\"></textarea>\n        </div>\n        <div class=\"send-button-outer\">\n\n          <div class=\"send-button ion-activatable ripple-parent\" *ngIf=\"newMsg != ''\" (click)=\"sendMessage()\">\n            <ion-icon name=\"send-sharp\"></ion-icon>\n            <ion-ripple-effect></ion-ripple-effect>\n          </div>\n\n          <div class=\"send-button ion-activatable ripple-parent\" *ngIf=\"newMsg === ''\">\n            <ion-icon name=\"send-sharp\"></ion-icon>\n            <ion-ripple-effect></ion-ripple-effect>\n          </div>\n\n        </div>\n      </div>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "putm":
    /*!********************************************************!*\
      !*** ./src/app/page/en-chat/en-chat-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: EnChatPageRoutingModule */

    /***/
    function putm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnChatPageRoutingModule", function () {
        return EnChatPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _en_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./en-chat.page */
      "GJ4S");

      var routes = [{
        path: '',
        component: _en_chat_page__WEBPACK_IMPORTED_MODULE_3__["EnChatPage"]
      }];

      var EnChatPageRoutingModule = function EnChatPageRoutingModule() {
        _classCallCheck(this, EnChatPageRoutingModule);
      };

      EnChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EnChatPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=page-en-chat-en-chat-module-es5.js.map