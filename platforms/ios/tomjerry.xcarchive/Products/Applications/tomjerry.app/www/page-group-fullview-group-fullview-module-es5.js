(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-group-fullview-group-fullview-module"], {
    /***/
    "2lxV":
    /*!**************************************************************!*\
      !*** ./src/app/page/group-fullview/group-fullview.module.ts ***!
      \**************************************************************/

    /*! exports provided: GroupFullviewPageModule */

    /***/
    function lxV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupFullviewPageModule", function () {
        return GroupFullviewPageModule;
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


      var _group_fullview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./group-fullview-routing.module */
      "DUwp");
      /* harmony import */


      var _group_fullview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./group-fullview.page */
      "Pe90");

      var GroupFullviewPageModule = function GroupFullviewPageModule() {
        _classCallCheck(this, GroupFullviewPageModule);
      };

      GroupFullviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _group_fullview_routing_module__WEBPACK_IMPORTED_MODULE_5__["GroupFullviewPageRoutingModule"]],
        declarations: [_group_fullview_page__WEBPACK_IMPORTED_MODULE_6__["GroupFullviewPage"]]
      })], GroupFullviewPageModule);
      /***/
    },

    /***/
    "DUwp":
    /*!**********************************************************************!*\
      !*** ./src/app/page/group-fullview/group-fullview-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: GroupFullviewPageRoutingModule */

    /***/
    function DUwp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupFullviewPageRoutingModule", function () {
        return GroupFullviewPageRoutingModule;
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


      var _group_fullview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./group-fullview.page */
      "Pe90");

      var routes = [{
        path: '',
        component: _group_fullview_page__WEBPACK_IMPORTED_MODULE_3__["GroupFullviewPage"]
      }];

      var GroupFullviewPageRoutingModule = function GroupFullviewPageRoutingModule() {
        _classCallCheck(this, GroupFullviewPageRoutingModule);
      };

      GroupFullviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GroupFullviewPageRoutingModule);
      /***/
    },

    /***/
    "EnSQ":
    /*!******************************************!*\
      !*** ./src/app/services/data.service.ts ***!
      \******************************************/

    /*! exports provided: DataService */

    /***/
    function EnSQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DataService = /*#__PURE__*/function () {
        function DataService(_firestore, toastCtrl, router) {
          _classCallCheck(this, DataService);

          this._firestore = _firestore;
          this.toastCtrl = toastCtrl;
          this.router = router;
          this.authUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this.authUser$ = this.authUser.asObservable();
          this.allChatRecords = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this.allChatRecords$ = this.allChatRecords.asObservable();
          this.perticularChatDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this.perticularChatDetails$ = this.perticularChatDetails.asObservable();
          this.perticularChatMessages = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this.perticularChatMessages$ = this.perticularChatMessages.asObservable();
          this.allUsers = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this.allUsers$ = this.allUsers.asObservable();
        }

        _createClass(DataService, [{
          key: "login",
          value: function login(_username, _password) {
            var _this = this;

            this._firestore.collection('users', function (ref) {
              return ref.where('email', '==', _username).where('password', '==', _password);
            }).valueChanges({
              idField: 'id'
            }).subscribe(function (data) {
              var u = data; //console.log(data);

              if (data && data.length) {
                _this.authUser.next(u[0]);

                _this.getChats(u[0]);

                _this.getAllUsers(u[0]);
              } else {
                _this.showSuccess('error', 'Usernam or password mismatch');

                _this.authUser.next(null);
              }
            });
          }
        }, {
          key: "setUserOnline",
          value: function setUserOnline(id) {
            var usersUpdate = {};
            usersUpdate["state.online"] = true;

            this._firestore.collection('users').doc(id).update(usersUpdate).then(function () {//console.log("Document successfully updated!");
            })["catch"](function (error) {// The document probably doesn't exist.
              //console.error("Error updating document: ", error);
            });
          } // updateOnDisconnect() {
          //   return this.afAuth.authState.pipe(
          //     tap(user => {
          //       if (user) {
          //         this.db.object(`status/${user.uid}`).query.ref.onDisconnect()
          //           .update({
          //             status: 'offline',
          //             timestamp: this.timestamp
          //         });
          //       }
          //     })
          //   );
          // }

        }, {
          key: "addNewUser",
          value: function addNewUser() {
            var _this2 = this;

            var val = {
              company: "webmaddy",
              email: "jahir@webmaddy.com",
              img_url: "https://via.placeholder.com/150",
              name: "",
              password: "123456",
              salt: "hashing code",
              user_id: "2",
              username: "jahir",
              state: {
                available: true,
                online: true
              },
              logs: {
                last_login: new Date().getTime(),
                last_password_reset: new Date().getTime()
              },
              timestamp: new Date().getTime()
            }; //console.log(val);

            var docRef = this._firestore.collection('users');

            docRef.add(val).then(function () {
              _this2.showSuccess('success', 'User added');
            })["catch"](function (error) {
              console.error("Error writing document: ", error);

              _this2.showSuccess('error', 'Something went wrong!');
            });
          }
        }, {
          key: "addGroupChat",
          value: function addGroupChat(auth, group_name, user, members) {
            var _this3 = this;

            if (auth) {
              var val = {
                group: true,
                group_name: group_name,
                last_text: "",
                users: user,
                members: members,
                timestamp: new Date().getTime()
              }; //console.log(val);

              var docRef = this._firestore.collection('chat_rooms');

              docRef.add(val).then(function (docRef) {// console.log(docRef.id);
              })["catch"](function (error) {
                // console.error("Error writing document: ", error);
                _this3.showSuccess('error', 'Something went wrong!');
              });
            }
          }
        }, {
          key: "getChats",
          value: function getChats(auth) {
            var _this4 = this;

            if (auth) {
              this._firestore.collection('chat_rooms', function (ref) {
                return ref.where('users', 'array-contains', auth.user_id.toString());
              }).valueChanges({
                idField: 'id'
              }) // .pipe(
              //   map(actions => actions.map(a =>{
              //     const data = a.payload.doc.data();
              //     const id = a.payload.doc.id;
              //     return { id, data };
              //   }))
              // )
              .subscribe(function (data) {
                // console.log(data);
                _this4.allChatRecords.next(data);
              });
            }
          }
        }, {
          key: "getAllUsers",
          value: function getAllUsers(auth) {
            var _this5 = this;

            if (auth) {
              // console.log( auth.user_id);   
              this._firestore.collection('users', function (ref) {
                return ref.where('user_id', '!=', auth.user_id.toString());
              }).valueChanges({
                idField: 'id'
              }) // .pipe(
              //   map(actions => actions.map(a =>{
              //     const data = a.payload.doc.data();
              //     const id = a.payload.doc.id;
              //     return { id, data };
              //   }))
              // )
              .subscribe(function (data) {
                //console.log(data);
                _this5.allUsers.next(data);
              });
            }
          }
        }, {
          key: "startChat",
          value: function startChat(auth, rec) {
            var _this6 = this;

            if (auth) {
              var user = [auth.user_id, rec.user_id];
              var members = [{
                deleted: false,
                unread_count: 0,
                user_id: auth.user_id,
                user_name: auth.username
              }, {
                deleted: false,
                unread_count: 0,
                user_id: rec.user_id,
                user_name: rec.username
              }];
              var val = {
                group: false,
                group_name: "",
                last_text: "",
                users: user,
                members: members,
                timestamp: new Date().getTime()
              }; // this._firestore.collection<any>('chat_rooms', ref => ref.where('users', '==', user)).snapshotChanges()
              // .pipe(
              //   map(actions => actions.map(a =>{
              //     const data = a.payload.doc.data();
              //     const id = a.payload.doc.id;
              //     return { id, data };
              //   }))
              // ).subscribe(data => {
              //   if(data.length) {
              //     console.log('existing data');
              //     console.log(data);
              //     // this.router.navigate(['/chat', data[0].id]);
              //   } 
              //   else {
              //     const docRef = this._firestore.collection('chat_rooms')
              //     docRef.add(val).then((docRef) => {
              //       console.log('new data');
              //       console.log(docRef);
              //       // this.getParticularChatDetail(docRef.id);
              //       //this.router.navigate(['/chat', docRef.id]);
              //       // this.newlyCreatedChatId.next(docRef.id);
              //     })
              //     .catch((error) => {
              //         // console.error("Error writing document: ", error);
              //         this.showSuccess('error', 'Something went wrong!');
              //     });
              //   }
              // });
              // return;

              var docRef = this._firestore.collection('chat_rooms');

              return new Promise(function (resolve, reject) {
                docRef.add(val).then(function (res) {
                  _this6.setChatMembers(res.id, members);
                }, function (err) {
                  return reject(err);
                });
              });
            }
          }
        }, {
          key: "setChatMembers",
          value: function setChatMembers(id, members) {
            this._firestore.collection('chat_rooms/' + id + '/membercol').add({
              members: members
            });
          }
        }, {
          key: "getParticularChats",
          value: function getParticularChats(auth, id) {
            var _this7 = this;

            if (auth) {
              var docRef = this._firestore.collection('chat_rooms').doc(id).collection('messages', function (ref) {
                return ref //.limit(5)
                .orderBy('timestamp', 'asc');
              });

              this.chatInfo = docRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
                return actions.map(function (a) {
                  var data = a.payload.doc.data();
                  var id = a.payload.doc.id;
                  return {
                    id: id,
                    data: data
                  };
                });
              })).subscribe(function (data) {
                //console.log(data);
                _this7.perticularChatMessages.next(data);
              });

              var docRefNew = this._firestore.collection('chat_rooms').doc(id);

              docRefNew.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) {
                var data = action.payload.data();
                var id = action.payload.id;
                return {
                  id: id,
                  data: data
                };
              })).subscribe(function (data) {
                // console.log(data);
                _this7.perticularChatDetails.next(data);
              });
            }
          }
        }, {
          key: "addChatMsg",
          value: function addChatMsg(auth, msg, id) {
            var _this8 = this;

            if (auth) {
              var val = {
                from: auth.user_id,
                user_name: auth.username,
                text: msg,
                timestamp: new Date().getTime()
              }; // console.log(id);
              // return ;

              var docRef = this._firestore.collection('chat_rooms').doc(id).collection('messages');

              docRef.add(val).then(function () {
                _this8._firestore.collection('chat_rooms').doc(id).update({
                  last_text: msg
                }).then(function () {//console.log("Document successfully updated!");
                })["catch"](function (error) {// The document probably doesn't exist.
                  //console.error("Error updating document: ", error);
                });
              })["catch"](function (error) {
                //console.error("Error writing document: ", error);
                _this8.showSuccess('error', 'Something went wrong!');
              }); //console.log(id);
              // return;
            }
          }
        }, {
          key: "updateChatMembersData",
          value: function updateChatMembersData(auth, id, members) {
            if (auth) {
              var key = "members";
              var property = members;

              var docRefN = this._firestore.collection('chat_rooms').doc(id);

              docRefN.update(_defineProperty({}, key, property)).then(function () {})["catch"](function (error) {// The document probably doesn't exist.
                //console.error("Error updating document: ", error);
              });
            }
          }
        }, {
          key: "showSuccess",
          value: function showSuccess(type, msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastCtrl.create({
                        message: msg,
                        duration: 3000,
                        position: 'bottom'
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
        }]);

        return DataService;
      }();

      DataService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DataService);
      /***/
    },

    /***/
    "Pe90":
    /*!************************************************************!*\
      !*** ./src/app/page/group-fullview/group-fullview.page.ts ***!
      \************************************************************/

    /*! exports provided: GroupFullviewPage */

    /***/
    function Pe90(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupFullviewPage", function () {
        return GroupFullviewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_group_fullview_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./group-fullview.page.html */
      "Rve1");
      /* harmony import */


      var _group_fullview_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./group-fullview.page.scss */
      "eaRT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/data.service */
      "EnSQ");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var GroupFullviewPage = /*#__PURE__*/function () {
        function GroupFullviewPage(_firestore, router, route, modalController, _data) {
          var _this9 = this;

          _classCallCheck(this, GroupFullviewPage);

          this._firestore = _firestore;
          this.router = router;
          this.route = route;
          this.modalController = modalController;
          this._data = _data;

          _data.authUser$.subscribe(function (data) {
            _this9._authUser = data;

            if (_this9._authUser != null) {} else {
              _this9.router.navigate(['/login']);
            } //console.log(this._authUser);

          });
        }

        _createClass(GroupFullviewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {//console.log(this.selected);
            //console.log(this.all_user);
          } // createGroup() {
          //   this.router.navigate(['/all-chat']);
          // }

        }, {
          key: "updateSelected",
          value: function updateSelected(id, type) {
            if (type == 'userName') {
              var index = this.all_user.findIndex(function (x) {
                return x.data.username == id;
              });

              if (index > -1) {
                if (this.all_user[index].data.checked) {
                  this.all_user[index].data.checked = false;
                  var index = this.selected.indexOf(this.all_user[index].data.username);

                  if (index !== -1) {
                    this.selected.splice(index, 1);
                  }
                } else {
                  this.all_user[index].data.checked = true;
                  this.selected.push(this.all_user[index].data.username);
                }
              }
            }
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      data = {
                        selected: this.selected,
                        all_user: this.all_user
                      };
                      _context2.next = 3;
                      return this.modalController.dismiss(data);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "createGroup",
          value: function createGroup() {
            var _this10 = this;

            if (this.group_name && this.group_name.trim() && this.selected && this.selected.length) {
              var user = [this._authUser.user_id];
              var members = [{
                deleted: false,
                unread_count: 0,
                user_id: this._authUser.user_id,
                user_name: this._authUser.username
              }];

              for (var index = 0; index < this.all_user.length; index++) {
                if (this.all_user[index].data.checked) {
                  user.push(this.all_user[index].data.user_id);
                  var m = {
                    deleted: false,
                    unread_count: 0,
                    user_id: this.all_user[index].data.user_id,
                    user_name: this.all_user[index].data.username
                  };
                  members.push(m);
                }
              }

              console.log(user);

              this._firestore.collection('chat_rooms', function (ref) {
                return ref.where('users', '==', user);
              }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (actions) {
                return actions.map(function (a) {
                  var data = a.payload.doc.data();
                  var id = a.payload.doc.id;
                  return {
                    id: id,
                    data: data
                  };
                });
              })).subscribe(function (data) {
                if (data.length) {
                  _this10._data.showSuccess('error', 'Same group already exsist');

                  _this10.closeModal();
                } else {
                  _this10._data.addGroupChat(_this10._authUser, _this10.group_name, user, members);

                  _this10.closeModal();
                }
              });
            } else {
              this._data.showSuccess('error', 'Something went wrong');
            }
          }
        }]);

        return GroupFullviewPage;
      }();

      GroupFullviewPage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }];
      };

      GroupFullviewPage.propDecorators = {
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        all_user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      GroupFullviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-group-fullview',
        template: _raw_loader_group_fullview_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_group_fullview_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GroupFullviewPage);
      /***/
    },

    /***/
    "Rve1":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/group-fullview/group-fullview.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Rve1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>    \n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"closeModal()\">\n        Back\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Add New Group\n    </ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-router-outlet id=\"main\"></ion-router-outlet>\n\n<ion-content [fullscreen]=\"true\">\n  <form class=\"body-spacing\">\n    <ion-item class=\"form-control ion-no-padding\">\n      <ion-label position=\"floating\">Group Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"group_name\" name=\"group_name\"></ion-input>\n    </ion-item>\n  </form>\n  <div class=\"body-spacing\">\n    <ion-chip class=\"list-spacing\" *ngFor=\"let u of selected;\">\n      <ion-label>{{u}}</ion-label>\n      <ion-icon name=\"close-circle\" (click)=\"updateSelected(u, 'userName')\"></ion-icon>\n    </ion-chip>\n    \n  </div>\n  <ion-button expand=\"block\" color=\"primary\" class=\"mb15\" mode=\"md\" (click)=\"createGroup()\">Create Group</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "eaRT":
    /*!**************************************************************!*\
      !*** ./src/app/page/group-fullview/group-fullview.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function eaRT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".body-spacing {\n  padding: 0 1em;\n}\n.body-spacing .list-spacing {\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dyb3VwLWZ1bGx2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUFFO0VBQ0ksY0FBQTtBQUVOIiwiZmlsZSI6Imdyb3VwLWZ1bGx2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5LXNwYWNpbmd7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbiAgLmxpc3Qtc3BhY2luZ3tcclxuICAgICAgbWFyZ2luLWxlZnQ6MCA7XHJcbiAgfVxyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=page-group-fullview-group-fullview-module-es5.js.map