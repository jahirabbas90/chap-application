(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-en-login-en-login-module"], {
    /***/
    "HHqo":
    /*!**************************************************!*\
      !*** ./src/app/page/en-login/en-login.module.ts ***!
      \**************************************************/

    /*! exports provided: EnLoginPageModule */

    /***/
    function HHqo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnLoginPageModule", function () {
        return EnLoginPageModule;
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


      var _en_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./en-login-routing.module */
      "womh");
      /* harmony import */


      var _en_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./en-login.page */
      "JBrz"); // import { Push } from '@awesome-cordova-plugins/push';


      var EnLoginPageModule = function EnLoginPageModule() {
        _classCallCheck(this, EnLoginPageModule);
      };

      EnLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _en_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnLoginPageRoutingModule"]],
        declarations: [_en_login_page__WEBPACK_IMPORTED_MODULE_6__["EnLoginPage"]]
      })], EnLoginPageModule);
      /***/
    },

    /***/
    "JBrz":
    /*!************************************************!*\
      !*** ./src/app/page/en-login/en-login.page.ts ***!
      \************************************************/

    /*! exports provided: EnLoginPage */

    /***/
    function JBrz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnLoginPage", function () {
        return EnLoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_en_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./en-login.page.html */
      "uvpG");
      /* harmony import */


      var _en_login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./en-login.page.scss */
      "alTT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_en_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/en-data.service */
      "Y4Ib");
      /* harmony import */


      var _services_my_connecter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/my-connecter.service */
      "wxrH");
      /* harmony import */


      var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */
      "lOSq"); // import { FCM } from '@ionic-native/fcm/ngx';


      var EnLoginPage = /*#__PURE__*/function () {
        function EnLoginPage(fb, router, alertController, loadingController, chatService, _connecter, fcm, platform) {
          var _this = this;

          _classCallCheck(this, EnLoginPage);

          this.fb = fb;
          this.router = router;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.chatService = chatService;
          this._connecter = _connecter;
          this.fcm = fcm;
          this.platform = platform;
          this.platform.ready().then(function () {
            _this.fcm.onNotification().subscribe(function (data) {
              if (data.wasTapped) {
                console.log("Received in background"); // alert("Received in background");
              } else {
                console.log("Received in foreground"); // alert("Received in foreground");
              }

              ;
            });

            _this.getToken();

            _this.fcm.onTokenRefresh().subscribe(function (token) {
              // alert("refresh_token :"+token);
              localStorage.setItem("user_fcm_token", "" + token);
            });
          });
          this.pushSetup();

          _connecter.authUser$.subscribe(function (data) {
            _this._authUsr = data;
            console.log(_this._authUsr);
            localStorage.setItem("user_id", "" + _this._authUsr.id);

            if (Object.keys(_this._authUsr).length === 0) {} else {
              _this.router.navigate(['/en-all-rooms']);
            }
          });
        }

        _createClass(EnLoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //Get User FCM Token
            // this.subscribeToTopic();
            // this.getToken();
            this.credentialForm = this.fb.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
            });
          }
        }, {
          key: "signUp",
          value: function signUp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return");

                    case 3:
                      loading = _context3.sent;
                      _context3.next = 6;
                      return loading.present();

                    case 6:
                      this.chatService.signup(this.credentialForm.value).then(function (user) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  loading.dismiss(); //this.router.navigateByUrl('/chat', { replaceUrl: true });

                                  _context.next = 3;
                                  return this.alertController.create({
                                    header: 'Sign up success',
                                    message: 'User created ',
                                    buttons: ['OK']
                                  });

                                case 3:
                                  alert = _context.sent;
                                  _context.next = 6;
                                  return alert.present();

                                case 6:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  loading.dismiss();
                                  _context2.next = 3;
                                  return this.alertController.create({
                                    header: 'Sign up failed',
                                    message: err.message,
                                    buttons: ['OK']
                                  });

                                case 3:
                                  alert = _context2.sent;
                                  _context2.next = 6;
                                  return alert.present();

                                case 6:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "signIn",
          value: function signIn() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!this.credentialForm.invalid) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 2:
                      _context5.next = 4;
                      return this.loadingController.create();

                    case 4:
                      loading = _context5.sent;
                      _context5.next = 7;
                      return loading.present();

                    case 7:
                      this.chatService.signIn(this.credentialForm.value).then(function (res) {
                        console.log(res['user']['uid']);
                        localStorage.setItem('currentUser', res['user']['uid']);
                        loading.dismiss();

                        _this3.router.navigateByUrl('/en-all-rooms'); // this.router.navigateByUrl('/en-new-individual-chat');

                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  loading.dismiss();
                                  _context4.next = 3;
                                  return this.alertController.create({
                                    header: 'Error',
                                    message: err.message,
                                    buttons: ['OK']
                                  });

                                case 3:
                                  alert = _context4.sent;
                                  _context4.next = 6;
                                  return alert.present();

                                case 6:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // Easy access for form fields

        }, {
          key: "email",
          get: function get() {
            return this.credentialForm.get('email');
          }
        }, {
          key: "password",
          get: function get() {
            return this.credentialForm.get('password');
          }
        }, {
          key: "openReset",
          value: function openReset() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this4 = this;

              var inputAlert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        header: 'Reset Password',
                        inputs: [{
                          name: 'email',
                          placeholder: 'Email'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel'
                        }, {
                          text: 'Reset',
                          handler: function handler(data) {
                            _this4.resetPw(data.email);
                          }
                        }]
                      });

                    case 2:
                      inputAlert = _context6.sent;
                      inputAlert.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "resetPw",
          value: function resetPw(email) {// this.chatService.resetPw(email).then(async (res) => {
            //   let toast = await this.toastCtrl.create({
            //     duration: 3000,
            //     message: 'Success! Check your Emails for more information.'
            //   });
            //   toast.present();
            // }, async (err) => {
            //   let alert = await this.alertController.create({
            //     header: 'Error',
            //     message: err.message,
            //     buttons: ['OK']
            //   });
            //   alert.present();
            // });
          }
        }, {
          key: "confirmPasscode",
          value: function confirmPasscode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Unauthorized!',
                        inputs: [{
                          name: 'passcode',
                          type: 'text',
                          placeholder: 'Enter your passcode'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(data) {
                            // console.log(data.passcode);
                            if (data.passcode == 'new') {
                              _this5.router.navigateByUrl('/en-register');
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "checkLogin",
          value: function checkLogin() {
            if (!this.credentialForm.valid) {
              this._connecter.presentToast('Invalid form value!');

              return;
            }

            this._connecter.userLogin(this.credentialForm.value.email, this.credentialForm.value.password);
          }
        }, {
          key: "subscribeToTopic",
          value: function subscribeToTopic() {
            this.fcm.subscribeToTopic('enappd');
          }
        }, {
          key: "getToken",
          value: function getToken() {
            // alert(1)
            this.fcm.getToken().then(function (token) {
              // alert(JSON.stringify(token));
              // alert(1)
              localStorage.setItem("user_fcm_token", "" + token); // localStorage.setItem("user_fcm_token","1234567890");      
            });
          }
        }, {
          key: "unsubscribeFromTopic",
          value: function unsubscribeFromTopic() {
            this.fcm.unsubscribeFromTopic('enappd');
          }
        }, {
          key: "pushSetup",
          value: function pushSetup() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.platform.ready();

                    case 2:
                      console.log('FCM SETUP INIT');

                      if (this.platform.is('cordova')) {
                        _context8.next = 5;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 5:
                      console.log('IN CORDOVA');
                      _context8.next = 8;
                      return this.fcm.requestPushPermission();

                    case 8:
                      this.hasPermission = _context8.sent;
                      console.log('CHECK hasPermission:', this.hasPermission);
                      _context8.next = 12;
                      return this.fcm.getToken();

                    case 12:
                      this.token = _context8.sent;
                      // alert('CHECK getToken: ' + this.token);
                      localStorage.setItem("user_fcm_token", "" + this.token);
                      /* console.log('ON NOTIFICATION SUBSCRIBE');
                      this.fcm
                        .onTokenRefresh()
                        .subscribe((newToken) => console.log('NEW TOKEN:', newToken));
                      this.fcm
                        .onNotification()
                        .subscribe((payload: object) => console.log('ON NOTIFICATION:', payload)); */

                    case 14:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return EnLoginPage;
      }();

      EnLoginPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _services_en_data_service__WEBPACK_IMPORTED_MODULE_7__["EnDataService"]
        }, {
          type: _services_my_connecter_service__WEBPACK_IMPORTED_MODULE_8__["MyConnecterService"]
        }, {
          type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_9__["FCM"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }];
      };

      EnLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-en-login',
        template: _raw_loader_en_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_en_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EnLoginPage);
      /* this.platform.ready().then(() => {
            this.fcm.getToken().then(token => {
              localStorage.setItem("user_fcm_token",""+token);
              console.log(token);
              alert(token);
              this.fcm.onNotification().subscribe(data => {
                console.log(data);
                if (data.wasTapped) {
                  console.log('Received in background');
                } else {
                  console.log('Received in foreground');
                }
              });
          
              // refresh the FCM token
              this.fcm.onTokenRefresh().subscribe(token => {
                console.log(token);
              });
            });
          }); */

      /***/
    },

    /***/
    "alTT":
    /*!**************************************************!*\
      !*** ./src/app/page/en-login/en-login.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function alTT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".errors {\n  font-size: small;\n  color: #cc5656;\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.auth-box {\n  padding: 2em;\n}\n\n.auth-box .title-header {\n  padding: 2em 0;\n  text-align: center;\n}\n\n.item-native {\n  -webkit-padding-start: initial;\n          padding-inline-start: initial;\n}\n\n.mb15 {\n  margin-bottom: 15px;\n}\n\n.mt30 {\n  margin-top: 30px;\n}\n\n.mb30 {\n  margin-bottom: 30px;\n}\n\nion-input {\n  --padding-end: 0px;\n}\n\n.input-note {\n  color: red;\n  font-size: 0.8em;\n}\n\n.color-bg {\n  --ion-background-color: #59EEE4;\n}\n\n.btn-pink-color button {\n  background: transparent;\n}\n\n.btn-pink-color {\n  --background: var(--ion-color-btn);\n  color: #fff;\n}\n\n.content-area {\n  padding: 1rem;\n}\n\n.content-area .login-img {\n  max-width: 70%;\n  margin-top: 10%;\n}\n\n.content-area h2 {\n  margin-bottom: 0.4em;\n}\n\n.content-area p {\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbi1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFBRTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUVOOztBQUNBO0VBQ0UsOEJBQUE7VUFBQSw2QkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxtQkFBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7QUFNRjs7QUFKQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQU9GOztBQUxBO0VBQ0UsK0JBQUE7QUFRRjs7QUFMSTtFQUNJLHVCQUFBO0FBUVI7O0FBSEE7RUFDSSxrQ0FBQTtFQUNBLFdBQUE7QUFNSjs7QUFIQTtFQUNJLGFBQUE7QUFNSjs7QUFMSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBT1I7O0FBTEk7RUFDSSxvQkFBQTtBQU9SOztBQUxJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBT1IiLCJmaWxlIjoiZW4tbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9ycyB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6IHJnYigyMDQsIDg2LCA4Nik7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5hdXRoLWJveHtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgLnRpdGxlLWhlYWRlcntcclxuICAgICAgcGFkZGluZzogMmVtIDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuLml0ZW0tbmF0aXZle1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBpbml0aWFsO1xyXG59XHJcbi5tYjE1e1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLm10MzB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4ubWIzMHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG59XHJcbi5pbnB1dC1ub3RlIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuLmNvbG9yLWJne1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1OUVFRTQ7XHJcbn1cclxuLmJ0bi1waW5rLWNvbG9ye1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5idG4tcGluay1jb2xvciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG4pO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250ZW50LWFyZWEge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIC5sb2dpbi1pbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjAuNGVtO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "uvpG":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/en-login/en-login.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function uvpG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " \n<!-- <ion-content class=\"color-bg\">\n\n  <div class=\"auth-box\">\n    <div class=\"title-header\">\n      <img src=\"assets/login-bg.svg\" alt=\"\">\n    </div>\n    <h2 class=\"text-center\">Login to Continue</h2>\n    <form [formGroup]=\"credentialForm\">\n      <ion-item>\n        <ion-input\n          placeholder=\"Email address\"\n          formControlName=\"email\"\n          autofocus=\"true\"\n          clearInput=\"true\"\n        ></ion-input>\n      </ion-item>\n      <div *ngIf=\"(email.dirty || email.touched) && email.errors\" class=\"errors\">\n        <span *ngIf=\"email.errors?.required\">Email is required</span>\n        <span *ngIf=\"email.errors?.email\">Email is invalid</span>\n      </div>\n  \n      <ion-item>\n        <ion-input\n        placeholder=\"Password\"\n        type=\"password\"\n        formControlName=\"password\"\n        clearInput=\"true\"\n      ></ion-input>\n      </ion-item>\n      <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\n        <span *ngIf=\"password.errors?.required\">Password is required</span>\n        <span *ngIf=\"password.errors?.minlength\">Password needs to be 6 characters</span>\n      </div>\n\n      <ion-button expand=\"block\" color=\"primary\" class=\"mb15\" mode=\"md\" (click)=\"signIn()\">Login</ion-button>\n\n      \n      <ion-button fill=\"clear\" expand=\"block\" class=\"btn-link-dark mb30 \" (click)=\"confirmPasscode()\">Sign Up</ion-button>\n    </form>\n  </div>\n </ion-content> -->\n\n<ion-content>\n\n  <div class=\"content-area\">\n    <img src=\"assets/login-img.svg\" alt=\"\" class=\"login-img\">\n    <h2>Login to Continue</h2>\n    <p>Provide your email address/phone and password to continue</p>\n  </div>\n\n  <div class=\"content-area\">\n\n    <form [formGroup]=\"credentialForm\">\n      <ion-item>\n        <ion-label position=\"floating\">Email/Phone</ion-label>\n        <ion-input formControlName=\"email\" autofocus=\"true\" clearInput=\"true\">\n        </ion-input>\n      </ion-item>\n      <div *ngIf=\"(email.dirty || email.touched) && email.errors\" class=\"errors\">\n        <span *ngIf=\"email.errors?.required\">Email is required</span>\n        <span *ngIf=\"email.errors?.email\">Email is invalid</span>\n      </div>\n    \n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input placeholder=\"Password\" type=\"password\" formControlName=\"password\" clearInput=\"true\"></ion-input>\n      </ion-item>\n      <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\n        <span *ngIf=\"password.errors?.required\">Password is required</span>\n        <span *ngIf=\"password.errors?.minlength\">Password needs to be 6 characters</span>\n      </div>\n    \n      <div class=\"content-area\">\n        <!-- <ion-button expand=\"block\" color=\"primary\" (click)=\"signIn()\">Login to Continue</ion-button> -->\n        <ion-button expand=\"block\" color=\"primary\" (click)=\"checkLogin()\">Login to Continue</ion-button>\n      </div>\n    \n      <!-- <div class=\"content-area\">\n        <ion-button fill=\"clear\" expand=\"block\"  routerLink=\"/en-register\">New User? Register Here\n        </ion-button>\n      </div> -->\n    \n    </form>\n    \n  </div>\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "womh":
    /*!**********************************************************!*\
      !*** ./src/app/page/en-login/en-login-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: EnLoginPageRoutingModule */

    /***/
    function womh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnLoginPageRoutingModule", function () {
        return EnLoginPageRoutingModule;
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


      var _en_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./en-login.page */
      "JBrz");

      var routes = [{
        path: '',
        component: _en_login_page__WEBPACK_IMPORTED_MODULE_3__["EnLoginPage"]
      }];

      var EnLoginPageRoutingModule = function EnLoginPageRoutingModule() {
        _classCallCheck(this, EnLoginPageRoutingModule);
      };

      EnLoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EnLoginPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=page-en-login-en-login-module-es5.js.map