(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-register-register-module"],{

/***/ "/DoX":
/*!************************************************!*\
  !*** ./src/app/page/register/register.page.ts ***!
  \************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "4mq7");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "xFAb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_en_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/en-data.service */ "Y4Ib");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_my_connecter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/my-connecter.service */ "wxrH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");











let RegisterPage = class RegisterPage {
    constructor(fb, actRoute, router, alertController, loadingController, chatService, _connecter, datepipe) {
        this.fb = fb;
        this.actRoute = actRoute;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.chatService = chatService;
        this._connecter = _connecter;
        this.datepipe = datepipe;
        this.submitted = false;
        this.btnHide = false;
        this.actRoute.paramMap.subscribe(params => {
            this.company = params.get('company');
        });
    }
    ngOnInit() {
        // this.credentialForm = this.fb.group({
        //   email: ['ankit@webmaddy.com', [Validators.required, Validators.email]],
        //   password: ['123456', [Validators.required, Validators.minLength(6)]],
        //   uid: ['4']
        // });
        this.credentialForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            nickname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
            company: [this.company]
        });
    }
    signUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.credentialForm.value)
            // return;
            if (this.credentialForm.invalid) {
                return;
            }
            let obs = this.chatService.findUser(this.credentialForm.value.email);
            let exsist = 0;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(obs).subscribe(res => {
                for (let data of res) {
                    if (data.length > 0) {
                        alert('Email already exsist');
                        exsist = 1;
                    }
                }
                if (exsist == 0) {
                    this.btnHide = true;
                    this.chatService
                        .signup(this.credentialForm.value)
                        .then((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.btnHide = false;
                        //this.router.navigateByUrl('/chat', { replaceUrl: true });
                        const alert = yield this.alertController.create({
                            header: 'Sign up success',
                            message: 'User created ',
                            buttons: ['OK'],
                        });
                        yield alert.present();
                    }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.btnHide = false;
                        const alert = yield this.alertController.create({
                            header: 'Sign up failed',
                            message: err.message,
                            buttons: ['OK'],
                        });
                        yield alert.present();
                    }));
                }
            });
        });
    }
    get email() {
        return this.credentialForm.get('email');
    }
    get password() {
        return this.credentialForm.get('password');
    }
    get nickname() {
        return this.credentialForm.get('nickname');
    }
    createdUser() {
        if (!this.credentialForm.valid) {
            this._connecter.presentToast('Invalid form value');
            return;
        }
        let time = new Date();
        var _id = time.getTime() + Math.floor(Math.random());
        var ar = {
            name: this.credentialForm.value.nickname,
            email: this.credentialForm.value.email,
            password: this.credentialForm.value.password,
            personal_chats: [
                {
                    chat_id: null,
                    uid: _id
                }
            ],
            uid: _id
        };
        // console.log(ar)
        this._connecter.createNewUser(ar, this.credentialForm.value.email);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _services_en_data_service__WEBPACK_IMPORTED_MODULE_7__["EnDataService"] },
    { type: _services_my_connecter_service__WEBPACK_IMPORTED_MODULE_9__["MyConnecterService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "4mq7":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/register/register.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons> -->\n    <ion-title>\n      Sign Up\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"auth-box\">\n    <div class=\"title-header\">\n      <img src=\"assets/avatar.svg\" alt=\"\">\n    </div>\n\n    <form [formGroup]=\"credentialForm\" >\n\n      <ion-item class=\"form-control ion-no-padding\">\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input\n          placeholder=\"Email address\"\n          formControlName=\"email\"\n          autofocus=\"true\"\n          clearInput=\"true\"\n        ></ion-input>\n      </ion-item>\n      <div *ngIf=\"(email.dirty || email.touched) && email.errors\" class=\"errors\">\n        <span *ngIf=\"email.errors?.required\">Email is required</span>\n        <span *ngIf=\"email.errors?.email\">Email is invalid</span>\n      </div>\n      \n      <ion-item class=\"form-control ion-no-padding\">\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input\n          placeholder=\"Password\"\n          type=\"password\"\n          formControlName=\"password\"\n          clearInput=\"true\"\n        ></ion-input>\n      </ion-item>\n      <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\n        <span *ngIf=\"password.errors?.required\">Password is required</span>\n        <span *ngIf=\"password.errors?.minlength\">Password needs to be 6 characters</span>\n      </div>\n\n      <ion-item class=\"form-control ion-no-padding\">\n        <ion-label position=\"floating\">Nickname</ion-label>\n        <ion-input\n          placeholder=\"Nickname\"\n          type=\"text\"\n          formControlName=\"nickname\"\n          clearInput=\"true\"\n        ></ion-input>\n      </ion-item>\n      <div *ngIf=\"(nickname.dirty || nickname.touched) && nickname.errors\" class=\"errors\">\n        <span *ngIf=\"nickname.errors?.required\">Nickname is required</span>\n        <span *ngIf=\"nickname.errors?.minlength\">Nickname needs to be 2 characters</span>\n      </div>\n\n      <ion-button fill=\"clear\" expand=\"block\" class=\"btn-link-light mb15 mt30\" [routerLink]=\"['/en-login']\">Login</ion-button>\n\n      <ion-button expand=\"block\" color=\"primary\" class=\"mb15\" mode=\"md\" (click)=\"createdUser()\" *ngIf=\"!btnHide\">Sign Up</ion-button>\n      <p *ngIf=\"btnHide\">Please wait...</p>\n\n    </form>\n  </div>\n\n\n</ion-content>\n");

/***/ }),

/***/ "A5V4":
/*!**********************************************************!*\
  !*** ./src/app/page/register/register-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "/DoX");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "xFAb":
/*!**************************************************!*\
  !*** ./src/app/page/register/register.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".errors {\n  font-size: small;\n  color: #c04848;\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.auth-box {\n  padding: 2em;\n}\n\n.auth-box .title-header {\n  padding: 2em 0;\n  text-align: center;\n}\n\n.item-native {\n  -webkit-padding-start: initial;\n          padding-inline-start: initial;\n}\n\n.mb15 {\n  margin-bottom: 15px;\n}\n\n.mt30 {\n  margin-top: 30px;\n}\n\n.mb30 {\n  margin-bottom: 30px;\n}\n\nion-input {\n  --padding-end: 0px;\n}\n\n.input-note {\n  color: red;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUFFO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBRU47O0FBQ0E7RUFDRSw4QkFBQTtVQUFBLDZCQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQkFBQTtBQU1GOztBQUpBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBT0YiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9ycyB7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogcmdiKDE5MiwgNzIsIDcyKTtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYXV0aC1ib3h7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIC50aXRsZS1oZWFkZXJ7XHJcbiAgICAgIHBhZGRpbmc6IDJlbSAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbi5pdGVtLW5hdGl2ZXtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogaW5pdGlhbDtcclxufVxyXG4ubWIxNXtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5tdDMwe1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLm1iMzB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcclxufVxyXG4uaW5wdXQtbm90ZSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG59Il19 */");

/***/ }),

/***/ "xKWv":
/*!**************************************************!*\
  !*** ./src/app/page/register/register.module.ts ***!
  \**************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "A5V4");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "/DoX");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=page-register-register-module-es2015.js.map