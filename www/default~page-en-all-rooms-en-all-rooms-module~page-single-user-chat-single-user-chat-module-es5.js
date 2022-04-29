(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~page-en-all-rooms-en-all-rooms-module~page-single-user-chat-single-user-chat-module"], {
    /***/
    "0Xqp":
    /*!**********************************************************!*\
      !*** ./src/app/page/en-all-rooms/en-all-rooms.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function Xqp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-list {\n  padding: 0;\n}\n\nion-badge {\n  border-radius: 10px;\n}\n\nion-toolbar {\n  border-bottom-width: 0;\n}\n\nion-button[shape=circle] {\n  --border-radius: 50%;\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbi1hbGwtcm9vbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0FBR0Y7O0FBQUE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR0YiLCJmaWxlIjoiZW4tYWxsLXJvb21zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbmlvbi1iYWRnZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbltzaGFwZT1jaXJjbGVdIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "UlBQ":
    /*!********************************************************!*\
      !*** ./src/app/page/en-all-rooms/en-all-rooms.page.ts ***!
      \********************************************************/

    /*! exports provided: EnAllRoomsPage, StarPipe, NotificationPipe */

    /***/
    function UlBQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnAllRoomsPage", function () {
        return EnAllRoomsPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StarPipe", function () {
        return StarPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationPipe", function () {
        return NotificationPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_en_all_rooms_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./en-all-rooms.page.html */
      "Xzfb");
      /* harmony import */


      var _en_all_rooms_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./en-all-rooms.page.scss */
      "0Xqp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _services_my_connecter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/my-connecter.service */
      "wxrH");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */
      "lOSq");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var EnAllRoomsPage = /*#__PURE__*/function () {
        function EnAllRoomsPage(router, _connecter, alertCtrl, firestore, platform, _location, fcm) {
          var _this = this;

          _classCallCheck(this, EnAllRoomsPage);

          this.router = router;
          this._connecter = _connecter;
          this.alertCtrl = alertCtrl;
          this.firestore = firestore;
          this.platform = platform;
          this._location = _location;
          this.fcm = fcm;
          this._allUsr = [];
          this._visibleUsr = [];
          this.chatIdArray = [];
          this.coversationList = [];
          this.message_count = 0;
          this.platform.ready().then(function () {
            _this.fcm.onNotification().subscribe(function (data) {
              if (data.wasTapped) {
                console.log("Received in background"); // alert("Received in background");
              } else {
                console.log("Received in foreground");
                var bleep = new Audio();
                bleep.src = './assets/chatTone.mp3';
                bleep.play(); // alert("Received in foreground");
              }

              ;
            });

            _this.fcm.onTokenRefresh().subscribe(function (token) {// alert("refresh_token :"+token);  
            });
          });

          _connecter.authUser$.subscribe(function (data) {
            _this._authUsr = data;
            _this._userNickName = _this._authUsr.name;
            _this._userid = _this._authUsr.id; //check if user FCMToken register on not

            if (Object.keys(_this._authUsr).length === 0) {
              _this.router.navigate(['/en-login']);
            } else {// this.getAllChat();
            }
          });

          if (this._authUsr.fcm_token == null) {
            console.warn("null");
            console.warn("" + this._authUsr.fcm_token);

            this._connecter.updateUserFcmToken(localStorage.getItem("user_id"), "" + localStorage.getItem("user_fcm_token"));
          } else if (this._authUsr.fcm_token != null && this._authUsr.fcm_token != localStorage.getItem("user_fcm_token")) {
            console.warn("not_null");

            this._connecter.updateUserFcmToken(localStorage.getItem("user_id"), localStorage.getItem("user_fcm_token"));
          }
        }

        _createClass(EnAllRoomsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.getAllPosts().subscribe(function (data) {
              if (data.length > 0) {
                // console.log(data);
                _this2._allRoom = data;
                _this2._filteredRoom = data.filter(function (eachVal) {
                  var opt = eachVal.visible_name.some(function (_ref) {
                    var uid = _ref.uid;
                    return uid == _this2._authUsr.id;
                  });
                  return opt;
                }); // console.warn("myData :" + JSON.stringify(this._filteredRoom))

                _this2._allRoom = _this2._filteredRoom;

                if (_this2._allRoom != undefined) {
                  _this2._visibleNameArray = [];

                  for (var index = 0; index < _this2._allRoom.length; index++) {
                    var visibleArray = _this2._allRoom[index].visible_name;

                    _this2._visibleNameArray.push(visibleArray);
                  } // console.warn("visibleName  :" + JSON.stringify(this._visibleNameArray))


                  for (var _index = 0; _index < _this2._visibleNameArray.length; _index++) {
                    var element = _this2._visibleNameArray[_index];

                    if (element.uid === _this2._userid) {
                      _this2.message_count = element.unread;
                    }
                  }
                } // this.coversationList=data;

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

        }, {
          key: "getAllPosts",
          value: function getAllPosts() {
            return this.firestore.collection("conversations", function (ref) {
              return ref.orderBy('ceatedAt', 'desc');
            }).valueChanges({
              idField: 'id'
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this._connecter.removeAuth();
          }
        }, {
          key: "filterList",
          value: function filterList(evt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var searchTerm;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      searchTerm = evt.srcElement.value; // console.log(this._allRoom)

                      console.log(searchTerm);

                      if (searchTerm) {
                        _context.next = 5;
                        break;
                      }

                      this._filteredRoom = this._allRoom;
                      return _context.abrupt("return");

                    case 5:
                      this._filteredRoom = this._allRoom.filter(function (eachVal) {
                        var opt = eachVal.visible_name.some(function (_ref2) {
                          var name = _ref2.name;
                          return name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                        });
                        return opt;
                      });
                      /* this.userListBackup = this.allGroups.filter(item => {
                        return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
                      }); */

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation'); // this.getAllChat();

            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "getAllUser",
          value: function getAllUser(value, array) {
            for (var index = 0; index < array.length; index++) {
              this.userListBackup = this.userListBackup.push(value);
            }

            this.allGroups = this.userListBackup;
          }
          /* getAllChatUser(value){
            this.allChatUser=this.allChatUser.push(value);
          } */

        }, {
          key: "showPop",
          value: function showPop(groupName, groupFriends) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: '' + groupName,
                        message: '' + groupFriends
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this3 = this;

            this.platform.ready().then(function () {});
            this.platform.backButton.subscribeWithPriority(10, function (processNextHandler) {
              console.log('Back press handler!');

              if (_this3._location.isCurrentPathEqualTo('/en-all-rooms')) {
                // Show Exit Alert!
                console.log('Show Exit Alert!');

                _this3.showExitConfirm();

                processNextHandler();
              } else {
                // Navigate to back page
                console.log('Navigate to back page');

                _this3._location.back();
              }
            });
            this.platform.backButton.subscribeWithPriority(5, function () {
              console.log('Handler called to force close!');

              _this3.alertCtrl.getTop().then(function (r) {
                if (r) {
                  navigator['app'].exitApp();
                }
              })["catch"](function (e) {
                console.log(e);
              });
            });
          }
        }, {
          key: "showExitConfirm",
          value: function showExitConfirm() {
            this.alertCtrl.create({
              header: 'Close App',
              message: 'Do you want to close the app?',
              backdropDismiss: false,
              buttons: [{
                text: 'Stay',
                role: 'cancel',
                handler: function handler() {
                  console.log('Application exit prevented!');
                }
              }, {
                text: 'Exit',
                handler: function handler() {
                  navigator['app'].exitApp();
                }
              }]
            }).then(function (alert) {
              alert.present();
            });
          }
        }]);

        return EnAllRoomsPage;
      }();

      EnAllRoomsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_my_connecter_service__WEBPACK_IMPORTED_MODULE_6__["MyConnecterService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"]
        }];
      };

      EnAllRoomsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-en-all-rooms',
        template: _raw_loader_en_all_rooms_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_en_all_rooms_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EnAllRoomsPage);

      var StarPipe = /*#__PURE__*/function () {
        function StarPipe(_sanitizer) {
          _classCallCheck(this, StarPipe);

          this._sanitizer = _sanitizer;
        }

        _createClass(StarPipe, [{
          key: "transform",
          value: function transform(value, event) {
            if (value) {
              if (value.group) {
                return value.title;
              } else {
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
        }]);

        return StarPipe;
      }();

      StarPipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
        }];
      };

      StarPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Pipe"])({
        name: 'starPipe'
      })], StarPipe);

      var NotificationPipe = /*#__PURE__*/function () {
        function NotificationPipe(_sanitizer) {
          _classCallCheck(this, NotificationPipe);

          this._sanitizer = _sanitizer;
        }

        _createClass(NotificationPipe, [{
          key: "transform",
          value: function transform(value, event, group) {
            if (value) {
              if (group) {
                var filteredArray = value.filter(function (itm) {
                  return itm.uid == event;
                });

                if (filteredArray.length) {
                  return filteredArray[0].unread > 0 ? filteredArray[0].unread : null;
                }
              } else {
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
        }]);

        return NotificationPipe;
      }();

      NotificationPipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
        }];
      };

      NotificationPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Pipe"])({
        name: 'notificationPipe'
      })], NotificationPipe);
      /***/
    },

    /***/
    "Xzfb":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/en-all-rooms/en-all-rooms.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xzfb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar >\n    \n    <ion-title>All Chats</ion-title>\n    <ion-buttons slot=\"primary\">\n      <!-- <ion-button routerLink=\"/en-create-room\"> -->\n      <ion-button routerLink=\"/en-new-individual-chat\">\n        <ion-icon name=\"create-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"signOut()\">\n        <ion-icon name=\"log-out\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar  showcancelbutton=\"\"\n    (ionInput)=\"filterList($event)\"\n    ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-list *ngIf=\"_allRoom\"> \n    <!-- <ion-item-sliding *ngFor=\"let group of groupsListBackup\">\n      <ion-item button detail='false' [routerLink]=\"['/', 'en-chat',group.id]\">\n        <ion-avatar slot=\"start\">\n          <img src=\"assets/avatar.svg\">\n        </ion-avatar>\n        <ion-label>\n          <h3>{{group.title }}</h3>          \n          <p>{{ group.last_text }}</p>\n        </ion-label>\n        \n      </ion-item>\n    </ion-item-sliding> -->\n\n   <!--  <ion-item button detail='false' *ngFor=\"let room of _allRoom  | async\" [routerLink]=\"['/', 'single-user-chat', (room | async)?.id || 0]\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/avatar.svg\">\n      </ion-avatar>\n\n      <ion-label>\n        <h3>{{ room| async | starPipe: _authUsr.id }}</h3>          \n        <p>{{ (room | async)?.last_message || null }}</p>\n      </ion-label>\n      \n    </ion-item>\n -->\n\n<ion-item button detail='false' *ngFor=\"let room of _filteredRoom\"\n  [routerLink]=\"['/', 'single-user-chat', room.id]\">\n  <ion-avatar slot=\"start\">\n    <img src=\"assets/avatar.svg\">\n  </ion-avatar>\n\n  <ion-badge color=\"primary\" slot=\"end\">{{ room.visible_name  |notificationPipe: _authUsr.id: room.group }}</ion-badge>\n\n  <ion-label>\n    <h3>{{ room  |starPipe: _authUsr.id }}</h3>\n    <p>{{ room.last_message}}</p>\n  </ion-label>\n</ion-item>\n\n\n  </ion-list>\n  \n\n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~page-en-all-rooms-en-all-rooms-module~page-single-user-chat-single-user-chat-module-es5.js.map