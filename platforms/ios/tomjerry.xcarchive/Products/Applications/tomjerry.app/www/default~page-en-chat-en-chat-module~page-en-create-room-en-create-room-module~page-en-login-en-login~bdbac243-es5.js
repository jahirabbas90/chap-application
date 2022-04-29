(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-login-en-login~bdbac243"], {
    /***/
    "Y4Ib":
    /*!*********************************************!*\
      !*** ./src/app/services/en-data.service.ts ***!
      \*********************************************/

    /*! exports provided: EnDataService */

    /***/
    function Y4Ib(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnDataService", function () {
        return EnDataService;
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase/auth */
      "6nsN");
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase/firestore */
      "5x/H");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d"); // import { AngularFirestore } from '@angular/fire/firestore';
      // import * as firebase from 'firebase/app';


      var EnDataService = /*#__PURE__*/function () {
        function EnDataService(afAuth, afs, storage) {
          var _this = this;

          _classCallCheck(this, EnDataService);

          this.afAuth = afAuth;
          this.afs = afs;
          this.storage = storage;
          this.addedUser = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
          this.addedUser$ = this.addedUser.asObservable();
          this.authToken = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
          this.authToken$ = this.authToken.asObservable();
          this.loggedInUserToken = null;
          this.currentUser = null;
          this.afAuth.onAuthStateChanged(function (user) {
            //console.log(user);
            if (user != null) {
              _this.currentUser = user;
            }
          });
          this.isUploading = false;
          this.isUploaded = false;
          this.imageCollection = afs.collection('freakyImages');
          this.images = this.imageCollection.valueChanges();

          if (localStorage.getItem("currentUser") === null || localStorage.getItem("currentUser") === undefined) {
            this.loggedInUserToken = "";
          } else {
            this.loggedInUserToken = localStorage.getItem('currentUser');
          }

          this.authToken.next(this.loggedInUserToken);
        }

        _createClass(EnDataService, [{
          key: "signup",
          value: function signup(_ref) {
            var email = _ref.email,
                password = _ref.password,
                nickname = _ref.nickname,
                company = _ref.company;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var credential, uid;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.afAuth.createUserWithEmailAndPassword(email, password);

                    case 2:
                      credential = _context.sent;
                      uid = credential.user.uid;
                      return _context.abrupt("return", this.afs.doc("users/".concat(uid)).set({
                        uid: uid,
                        email: credential.user.email,
                        nickname: nickname,
                        company: company,
                        id: uid
                      }));

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "signIn",
          value: function signIn(_ref2) {
            var email = _ref2.email,
                password = _ref2.password;
            return this.afAuth.signInWithEmailAndPassword(email, password);
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return this.afAuth.signOut();
          }
        }, {
          key: "resetPw",
          value: function resetPw(email) {//return this.afAuth.auth.sendPasswordResetEmail(email);
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this2 = this;

            // console.log(this.currentUser.uid)
            return this.afs.collection('users', function (ref) {
              return ref.where('uid', '!=', _this2.currentUser.uid);
            }).valueChanges({
              idField: 'uid'
            }).subscribe(function (data) {
              _this2.addedUser.next(data);
            });
          }
        }, {
          key: "getUserForMsg",
          value: function getUserForMsg(msgFromId, users) {
            var _iterator = _createForOfIteratorHelper(users),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var usr = _step.value;

                if (usr.uid == msgFromId) {
                  return usr.email;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return 'Deleted';
          }
        }, {
          key: "getGroups",
          value: function getGroups() {
            var _this3 = this;

            var userId = localStorage.getItem('currentUser');
            /*  if (this.currentUser!=null) {
               return this.afs.collection(`users/${this.currentUser.uid}/groups`).snapshotChanges().pipe(
                 map(actions => actions.map(a => {
                   const data = a.payload.doc.data();
                   const user_group_key = a.payload.doc.id;
                   return this.getOneGroup(data['id'], user_group_key);
                 }))
               )
             }  */

            if (userId != null) {
              return this.afs.collection("users/".concat(userId, "/groups"), function (ref) {
                return ref.orderBy('createdAt');
              }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) {
                return actions.map(function (a) {
                  var data = a.payload.doc.data();
                  var user_group_key = a.payload.doc.id;
                  return _this3.getOneGroup(data['id'], user_group_key);
                });
              }));
            }
          }
        }, {
          key: "getOneGroup",
          value: function getOneGroup(id) {
            var user_group_key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return this.afs.doc("groups/".concat(id)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
              var data = changes.payload.data();
              var group_id = changes.payload.id;
              return Object.assign({
                user_group_key: user_group_key,
                id: group_id
              }, data);
            }));
          }
        }, {
          key: "findUser",
          value: function findUser(value) {
            var email = this.afs.collection('users', function (ref) {
              return ref.where('email', '==', value);
            }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return {
                  id: id,
                  data: data
                };
              });
            }));
            var nickname = this.afs.collection('users', function (ref) {
              return ref.where('nickname', '==', value);
            }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return {
                  id: id,
                  data: data
                };
              });
            }));
            return [email, nickname];
          }
        }, {
          key: "createGroup",
          value: function createGroup(group, title, users, emails) {
            var _this4 = this;

            var current = {
              email: this.currentUser.email,
              id: this.currentUser.uid,
              uid: this.currentUser.uid,
              nickname: 'owner',
              createdAt: new Date().getTime()
            }; // let allUsers = [current, users];
            //users.push(current)

            if (!group) {
              title = emails.toString().replace(",", " - ");
            } // emails.push(this.currentUser.email)


            return this.afs.collection('groups').add({
              title: title,
              users: users,
              group: group,
              emails: emails
            }).then(function (res) {
              var promises = []; //console.log(users);

              var _iterator2 = _createForOfIteratorHelper(users),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var usr = _step2.value;

                  var oneAdd = _this4.afs.collection("users/".concat(usr.uid, "/groups")).add({
                    id: res.id
                  });

                  promises.push(oneAdd);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              return Promise.all(promises);
            });
          }
        }, {
          key: "getChatMessages",
          value: function getChatMessages(groupId) {
            return this.afs.collection("groups/".concat(groupId, "/messages"), function (ref) {
              return ref.orderBy('createdAt');
            }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
          } // Chat functionality

        }, {
          key: "addOneChatMessage",
          value: function addOneChatMessage(msg, sender_id) {
            return this.afs.collection('messages').add({
              msg: msg,
              sender_id: sender_id,
              from: this.currentUser.uid,
              createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.Timestamp.now() // createdAt: firebase.firestore.FieldValue.serverTimestamp()

            });
          }
        }, {
          key: "getOneChatMessages",
          value: function getOneChatMessages() {
            var _this5 = this;

            var users = [];
            return this.getOneUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (res) {
              users = res;
              console.log(users);
              return _this5.afs.collection('messages', function (ref) {
                return ref.orderBy('createdAt');
              }).valueChanges({
                idField: 'id'
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (messages) {
              // Get the real name for each user
              var _iterator3 = _createForOfIteratorHelper(messages),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var m = _step3.value;
                  m.fromName = _this5.getOneUserForMsg(m.from, users);
                  m.myMsg = _this5.currentUser.uid === m.from;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              return messages;
            }));
          }
        }, {
          key: "getOneUsers",
          value: function getOneUsers() {
            return this.afs.collection('users').valueChanges({
              idField: 'uid'
            });
          }
        }, {
          key: "getOneUserForMsg",
          value: function getOneUserForMsg(msgFromId, users) {
            var _iterator4 = _createForOfIteratorHelper(users),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var usr = _step4.value;

                if (usr.uid == msgFromId) {
                  return usr.email;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return 'Deleted';
          }
        }, {
          key: "addChatMessage",
          value: function addChatMessage(msg, chatId, users) {
            var _this6 = this;

            // return this.afs.collection('groups/' + chatId + '/messages').add({
            //   msg: msg,
            //   from: this.currentUser.uid,
            //   createdAt: new Date().getTime()
            // });
            //console.log(users);
            return this.afs.collection('groups/' + chatId + '/messages').add({
              msg: msg,
              messageType: 'text',
              from: this.currentUser.uid,
              createdAt: new Date().getTime()
            }).then(function (res) {
              _this6.afs.collection('groups').doc(chatId).update({
                last_text: msg,
                users: users
              });

              var promises = [];
              return Promise.all(promises);
            });
          }
        }, {
          key: "deleteMessage",
          value: function deleteMessage(gId, msgId) {
            this.afs.collection('groups/' + gId + '/messages').doc(msgId).update({
              "delete": true,
              deletedBy: this.currentUser.uid
            });
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(event) {
            var _this7 = this;

            var file = event.item(0); // Validation for Images Only

            if (file.type.split('/')[0] !== 'image') {
              console.error('unsupported file type :( ');
              return;
            }

            this.isUploading = true;
            this.isUploaded = false;
            this.fileName = file.name;
            var path = "freakyStorage/".concat(new Date().getTime(), "_").concat(file.name);
            var customMetadata = {
              app: 'Freaky Image Upload Demo'
            };
            var fileRef = this.storage.ref(path);
            this.task = this.storage.upload(path, file, {
              customMetadata: customMetadata
            });
            this.percentage = this.task.percentageChanges();
            this.snapshot = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              // Get uploaded file storage path
              _this7.UploadedFileURL = fileRef.getDownloadURL();

              _this7.UploadedFileURL.subscribe(function (resp) {
                _this7.addImagetoDB({
                  name: file.name,
                  filepath: resp,
                  size: _this7.fileSize
                });

                _this7.isUploading = false;
                _this7.isUploaded = true;
              }, function (error) {
                console.error(error);
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (snap) {
              _this7.fileSize = snap.totalBytes;
            }));
          }
        }, {
          key: "addImagetoDB",
          value: function addImagetoDB(image) {
            //Create an ID for document
            var id = this.afs.createId();
            this.imageCollection.doc(id).set(image).then(function (resp) {
              console.log(resp);
            })["catch"](function (error) {
              console.log("error " + error);
            });
          }
          /*   addOneOnOneChatMessage(msg) {
              return this.afs.collection('messages').add({
                msg: msg,
                from: this.currentUser.uid,
                createdAt: firebase.afs.FieldValue.serverTimestamp()
              });
            } */

        }, {
          key: "addOneOnOneChatMessage",
          value: function addOneOnOneChatMessage(msg, chatId, users) {
            var _this8 = this;

            // return this.afs.collection('groups/' + chatId + '/messages').add({
            //   msg: msg,
            //   from: this.currentUser.uid,
            //   createdAt: new Date().getTime()
            // });
            //console.log(users);
            return this.afs.collection('groups/' + chatId + '/messages').add({
              msg: msg,
              messageType: 'text',
              from: this.currentUser.uid,
              createdAt: new Date().getTime()
            }).then(function (res) {
              _this8.afs.collection('users').doc(chatId).update({
                last_text: msg,
                users: users
              });

              var promises = [];
              return Promise.all(promises);
            });
          }
        }]);

        return EnDataService;
      }();

      EnDataService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"]
        }];
      };

      EnDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EnDataService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-login-en-login~bdbac243-es5.js.map