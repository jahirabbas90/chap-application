(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~page-attachment-upload-attachment-upload-module~page-en-all-rooms-en-all-rooms-module~page-e~5dc47049"], {
    /***/
    "wxrH":
    /*!**************************************************!*\
      !*** ./src/app/services/my-connecter.service.ts ***!
      \**************************************************/

    /*! exports provided: MyConnecterService */

    /***/
    function wxrH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyConnecterService", function () {
        return MyConnecterService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3"); // import { AngularFirestoreCollection } from 'angularfire2/firestore';
      // import { AngularFireDatabase } from 'angularfire2/database';


      var MyConnecterService = /*#__PURE__*/function () {
        function MyConnecterService(httpClient, afs, toastCtrl, router) {
          _classCallCheck(this, MyConnecterService);

          this.httpClient = httpClient;
          this.afs = afs;
          this.toastCtrl = toastCtrl;
          this.router = router;
          this.authUser = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
          this.authUser$ = this.authUser.asObservable();
          this.loggedInUser = {};
          this.allUser = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
          this.allUser$ = this.allUser.asObservable();
          this.oldChats = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
          this.oldChats$ = this.oldChats.asObservable();
          this.currentChat = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
          this.currentChat$ = this.currentChat.asObservable();
          this.REST_API_SERVER_URL = "https://networkdemo.in/firebase.php?token=";
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          /*Auth*/

          if (localStorage.getItem("chat-user") === null || localStorage.getItem("chat-user") === undefined) {} else {
            this.loggedInUser = JSON.parse(localStorage.getItem('chat-user'));
          }

          this.authUser.next(this.loggedInUser);
          this.oldChats.next([]);
        }

        _createClass(MyConnecterService, [{
          key: "userLogin",
          value: function userLogin(_username, _password) {
            var _this = this;

            this.afs.collection('employee', function (ref) {
              return ref.where('email', '==', _username).where('password', '==', _password);
            }).valueChanges({
              idField: 'id'
            }).subscribe(function (data) {
              var u = data; // console.log(data);

              if (data && data.length) {
                _this.loggedInUser = data[0];
                localStorage.setItem('chat-user', JSON.stringify(_this.loggedInUser));

                _this.authUser.next(_this.loggedInUser);

                _this.userId = data[0]['uid'];
                localStorage.setItem("userId", _this.userId);
                localStorage.setItem("userFriends", data[0]['personal_chats']);
              } else {
                _this.presentToast('Credential Mismatch');
              }
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastCtrl.create({
                        message: msg,
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "removeAuth",
          value: function removeAuth() {
            var data = {};
            localStorage.removeItem('chat-user');
            this.authUser.next(data);
          }
        }, {
          key: "getGroups",
          value: function getGroups(id) {
            var _this2 = this;

            // eturn this.firestore.collection('employee', ref => ref.orderBy('name', 'desc')).snapshotChanges();
            var collection = this.afs.collection("employee/".concat(id, "/groups"), function (ref) {
              return ref.orderBy('ceatedAt', 'desc');
            });
            return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var user_group_key = a.payload.doc.id; // console.log("user_group_key :" +user_group_key )
                // console.log("all-rooms-data :" + JSON.stringify(data))

                return _this2.getOneGroup(data['chatId'], user_group_key);
              });
            })); // this.afs.collection(`employee/${id}/groups`).valueChanges({ idField: 'id' }).subscribe( data => {
            //   var u: any = data;
            //   console.log(data);
            //   // if(data && data.length) {
            //   //   this.loggedInUser = data[0];
            //   //   localStorage.setItem('chat-user', JSON.stringify(this.loggedInUser));
            //   //   this.authUser.next(this.loggedInUser);
            //   // }
            //   // else {
            //   //   this.presentToast('Credential Mismatch');
            //   // }
            // });
          }
        }, {
          key: "getOneGroup",
          value: function getOneGroup(id) {
            var user_group_key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return this.afs.doc("conversations/".concat(id)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
              var data = changes.payload.data();
              var group_id = changes.payload.id;
              return Object.assign({
                user_group_key: user_group_key,
                id: group_id
              }, data);
            }));
          }
        }, {
          key: "fetchChats",
          value: function fetchChats(id) {
            var _this3 = this;

            this.afs.collection("conversations/".concat(id, "/messages"), function (ref) {
              return ref.orderBy('createAt', 'asc');
            }).valueChanges({
              idField: 'id'
            }).subscribe(function (data) {
              if (data && data.length) {
                _this3.oldChats.next(data);
              } else {
                _this3.oldChats.next([]);
              }
            });
            this.afs.collection('conversations').doc(id).valueChanges({
              idField: 'id'
            }).subscribe(function (data) {
              _this3.currentChat.next(data);
            });
          }
        }, {
          key: "fetchUsers",
          value: function fetchUsers(email) {
            var _this4 = this;

            this.afs.collection('employee', function (ref) {
              return ref.where('email', '!=', email);
            }).valueChanges({
              idField: 'id'
            }).subscribe(function (data) {
              if (data && data.length) {
                var resultArray = Object.keys(data).map(function (index) {
                  var person = data[index];
                  return person;
                }); // console.log(resultArray);

                _this4.allUser.next(resultArray);
              }
            });
          }
        }, {
          key: "createNewChat",
          value: function createNewChat(val, id1, arr1, id2, arr2) {
            var _this5 = this;

            var members = [];
            return new Promise(function (resolve, reject) {
              _this5.afs.collection('conversations').add(val).then(function (res) {
                var nwAr = {
                  chat_id: res.id,
                  uid: id2
                };
                arr1.push(nwAr);
                var nwAr2 = {
                  chat_id: res.id,
                  uid: id1
                };
                arr2.push(nwAr2);

                _this5.updateUserChatDat1(res.id, id1, arr1);

                _this5.updateUserChatDat2(res.id, id2, arr2, res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "updateUserChatDat1",
          value: function updateUserChatDat1(chatId, id, arr) {
            this.afs.doc("employee/".concat(id)).update({
              personal_chats: arr
            });
            this.afs.collection("employee/".concat(id, "/groups")).add({
              chatId: chatId
            });
          }
        }, {
          key: "updateUserChatDat2",
          value: function updateUserChatDat2(chatId, id, arr, res) {
            this.afs.doc("employee/".concat(id)).update({
              personal_chats: arr
            });
            this.afs.collection("employee/".concat(id, "/groups")).add({
              chatId: chatId
            });
            this.gotToPage(res);
          }
        }, {
          key: "gotToPage",
          value: function gotToPage(res) {
            var _this6 = this;

            setTimeout(function () {
              return _this6.router.navigate(["/single-user-chat/".concat(res.id)]);
            }, 2500); // 2000 is millisecond
          }
        }, {
          key: "delay",
          value: function delay(ms, res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return new Promise(function (resolve) {
                        return setTimeout(function () {
                          return resolve();
                        }, ms);
                      }).then(function () {
                        return _this7.router.navigate(["/single-user-chat/".concat(res.id)]);
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "createNewChatGroup",
          value: function createNewChatGroup(val, users) {
            var _this8 = this;

            var members = [];
            return new Promise(function (resolve, reject) {
              _this8.afs.collection('conversations').add(val).then(function (res) {
                for (var index = 0; index < users.length; index++) {
                  _this8.updateUserChatGroup(res.id, users[index]);
                }

                _this8.router.navigate(["/single-user-chat/".concat(res.id)]);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "updateUserChatGroup",
          value: function updateUserChatGroup(chatId, id) {
            this.afs.collection("employee/".concat(id, "/groups")).add({
              chatId: chatId,
              ceatedAt: new Date().getTime()
            });
          }
        }, {
          key: "deleteMessage",
          value: function deleteMessage(cId, msgId) {
            /* this.afs.collection('conversations/' + cId + '/messages').doc(msgId).update({
              delete: true,
              deletedBy: this.userId
            }) */
            this.afs.doc("conversations/".concat(cId, "/messages/").concat(msgId)).update({
              "delete": true
            });
          }
        }, {
          key: "updateLastMessage",
          value: function updateLastMessage(id, lastMsg) {
            this.afs.doc("conversations/".concat(id)).update({
              last_message: lastMsg
            });
          }
        }, {
          key: "createNewUser",
          value: function createNewUser(val, email) {
            var _this9 = this;

            this.afs.collection('employee', function (ref) {
              return ref.where('email', '==', email);
            }).valueChanges({
              idField: 'id'
            }).subscribe(function (data) {
              // console.log(data)
              if (data && data.length) {
                _this9.router.navigate(["/en-login/"]);
              } else {
                _this9.presentToast('User added');

                _this9.afs.collection("employee").add(val);

                _this9.router.navigate(["/en-login/"]);
              }
            });
          }
        }, {
          key: "createNewMessage",
          value: function createNewMessage(val, id, lastMsg, ceatedAt, authuserId, msgCount, msgBy, visible_user_array) {
            var _this10 = this;

            var members = [];
            return new Promise(function (resolve, reject) {
              _this10.afs.collection("/conversations/".concat(id, "/messages")).add(val).then(function (res) {
                // console.log("msgId : "+JSON.stringify(res))     
                _this10.afs.doc("conversations/".concat(id)).update({
                  last_message: lastMsg,
                  message_count: msgCount,
                  message_by_name: msgBy,
                  ceatedAt: new Date().getTime()
                });

                _this10.afs.collection("employee/".concat(authuserId, "/groups"), function (ref) {
                  return ref.where('chatId', '==', id);
                }).get().subscribe(function (querySnap) {
                  querySnap.forEach(function (doc) {
                    // console.log(doc.id)
                    _this10.afs.doc("employee/".concat(authuserId, "/groups/").concat(doc.id)).update({
                      ceatedAt: new Date().getTime()
                    });

                    _this10.afs.doc("conversations/".concat(id)).update({
                      visible_name: visible_user_array
                    });
                  });
                  console.log(querySnap.docs);
                });
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "updateUserFcmToken",
          value: function updateUserFcmToken(id, token) {
            this.afs.doc("employee/".concat(id)).update({
              fcm_token: token
            });
          }
        }, {
          key: "messageSeenBy",
          value: function messageSeenBy(id, visible_user_array) {
            this.afs.doc("conversations/".concat(id)).update({
              visible_name: visible_user_array
            });
          }
        }, {
          key: "sendFirebasePush",
          value: function sendFirebasePush(token) {
            return this.httpClient.get(this.REST_API_SERVER_URL + token, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError)); // https://networkdemo.in/firebase.php?token=eEmXPgp1RSeTDYCKpUyGAA:APA91bFq4aNYQA9qtXoKacstxeF6ayi8OeAscc8mE-Lwyz6uQb43gYfYc4Fnr6aOi0hI4VASMskiSVleJ_IVpF-xkoXJd5lMucViHfyeOIJBAzc9Eps9gKmhwvQe4DnEGtWuvd14jrmf
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            var msg = 'Something bad happened; please try again later.';

            if (error.error instanceof ErrorEvent) {
              msg = error.message ? error.message : error.error.message;
            } else {
              msg = error.statusText;
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(msg);
          }
        }, {
          key: "copycreateNewMessage",
          value: function copycreateNewMessage(val, id, lastMsg) {
            var _this11 = this;

            var members = [];
            var msgId = this.afs.createId();
            return new Promise(function (resolve, reject) {
              _this11.afs.collection("/conversations/".concat(id, "/messages")).doc(msgId).set(val).then(function (res) {
                _this11.afs.doc("conversations/".concat(id)).update({
                  last_message: lastMsg
                });

                val.users.forEach(function (element) {
                  _this11.updateTimeOnChat(element.uid, msgId, Date.now());
                });
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "updateTimeOnChat",
          value: function updateTimeOnChat(id, groupId, time) {
            var _this12 = this;

            console.log("begin_groupid ", groupId);
            /*  return new Promise<any>((resolve, reject) => {
               this.afs.doc(`employee/${id}/groups`).update({ updated_at: time });
             }); */

            var collection = this.afs.collection("employee/".concat(id, "/groups"));
            return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
              return actions.map(function (a) {
                // console.log("groupId", a.payload.doc.id)
                var data = a.payload.doc.data();
                return Object.assign({
                  id: a.payload.doc.id
                }, data);
              });
            })).subscribe(function (res) {
              console.log("inside_subs : ", res);
              var groupInfo = res.find(function (data) {
                return data.chatId === groupId;
              });

              if (groupInfo) {
                console.log("groupId : " + groupInfo.id);
                return _this12.afs.doc("employee/".concat(id, "/groups/").concat(groupInfo.id)).update({
                  chatupdated_at: time
                }).then(function (res) {})["catch"](function (err) {
                  console.log("Error while update time on chat" + err);
                });
              }
            });
          }
        }]);

        return MyConnecterService;
      }();

      MyConnecterService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      MyConnecterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MyConnecterService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~page-attachment-upload-attachment-upload-module~page-en-all-rooms-en-all-rooms-module~page-e~5dc47049-es5.js.map