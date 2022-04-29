(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-en-one-on-one-en-one-on-one-module"],{

/***/ "GGee":
/*!************************************************************!*\
  !*** ./src/app/page/en-one-on-one/en-one-on-one.module.ts ***!
  \************************************************************/
/*! exports provided: EnOneOnOnePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnOneOnOnePageModule", function() { return EnOneOnOnePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _en_one_on_one_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en-one-on-one-routing.module */ "IFRt");
/* harmony import */ var _en_one_on_one_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en-one-on-one.page */ "c8T2");







let EnOneOnOnePageModule = class EnOneOnOnePageModule {
};
EnOneOnOnePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _en_one_on_one_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnOneOnOnePageRoutingModule"]
        ],
        declarations: [_en_one_on_one_page__WEBPACK_IMPORTED_MODULE_6__["EnOneOnOnePage"]]
    })
], EnOneOnOnePageModule);



/***/ }),

/***/ "IFRt":
/*!********************************************************************!*\
  !*** ./src/app/page/en-one-on-one/en-one-on-one-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: EnOneOnOnePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnOneOnOnePageRoutingModule", function() { return EnOneOnOnePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _en_one_on_one_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-one-on-one.page */ "c8T2");





const routes = [
    {
        path: '',
        component: _en_one_on_one_page__WEBPACK_IMPORTED_MODULE_4__["EnOneOnOnePage"]
    }
];
let EnOneOnOnePageRoutingModule = class EnOneOnOnePageRoutingModule {
};
EnOneOnOnePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnOneOnOnePageRoutingModule);



/***/ }),

/***/ "ZZUz":
/*!************************************************************!*\
  !*** ./src/app/page/en-one-on-one/en-one-on-one.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar .small-text {\n  font-weight: 400;\n  font-size: 0.6em;\n}\n\n.chat-textarea-outer {\n  display: flex;\n  align-items: center;\n}\n\n.chat-textarea-outer .attachment {\n  padding: 0.2em;\n}\n\n.chat-textarea-outer .attachment .clear-button {\n  width: 1.6em;\n  height: 1.8em;\n  font-size: 1.5em;\n  display: inline-block;\n  padding: 0.4em 0.3em;\n  display: inline-block;\n  position: relative;\n  border-radius: 1em;\n  -webkit-tap-highlight-color: var(--ion-color-primary);\n}\n\n.chat-textarea-outer .attachment .clear-button:focus {\n  color: var(--ion-color-primary);\n}\n\n.chat-textarea-outer .msg-textarea {\n  flex-grow: 1;\n  padding: 0.2em;\n}\n\n.chat-textarea-outer .msg-textarea textarea {\n  background-color: #ffffff;\n  color: #222222;\n  width: 100%;\n  border-radius: 0.4em;\n  min-height: 1.2em !important;\n  resize: none;\n  vertical-align: top;\n  padding-top: 0.4em;\n}\n\n.chat-textarea-outer .msg-textarea textarea:focus {\n  outline: none;\n}\n\n.chat-textarea-outer .send-button-outer {\n  padding: 0.2em;\n}\n\n.chat-textarea-outer .send-button-outer .send-button {\n  position: relative;\n  display: inline-block;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  padding: 0.4em 0.5em;\n  width: 1.8em;\n  height: 1.8em;\n  border-radius: 50%;\n  font-size: 1.3em;\n  line-height: 1;\n}\n\n.chat-row {\n  padding: 0.2em;\n}\n\n.chat-row .load-previous {\n  text-align: center;\n  padding: 0.4em 0.2em;\n}\n\n.chat-row .load-previous span {\n  font-size: 0.8em;\n  color: #ffffff;\n  background-color: #8f8f8f;\n  padding: 0.5em 1em;\n  border-radius: 3em;\n  display: inline-block;\n}\n\n.chat-row .chat-bubble-outer {\n  padding: 0.3em;\n}\n\n.chat-row .chat-bubble-outer .date-time {\n  font-size: 0.8em;\n  margin-top: 0.3em;\n}\n\n.chat-row .chat-bubble-outer .chat-bubble {\n  background-color: #f1f1f1;\n  max-width: 78%;\n  min-width: 50%;\n  padding: 0.8em 1em;\n  line-height: 1.4;\n  border-radius: 0.7em 0.7em 0.7em 0em;\n  color: #222222;\n}\n\n.chat-row .chat-bubble-outer .chat-bubble .name-area {\n  display: flex;\n  justify-content: space-between;\n}\n\n.chat-row .chat-bubble-outer .chat-bubble .name-area h5 {\n  margin: 0;\n  line-height: 1;\n  font-size: 1em;\n  color: var(--ion-color-primary);\n}\n\n.chat-row .chat-bubble-outer .chat-bubble .date-time {\n  color: #8f8f8f;\n}\n\n.chat-row .chat-bubble__right:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.chat-row .chat-bubble__right .chat-bubble {\n  border-radius: 0.7em 0.7em 0em 0.7em !important;\n  float: right;\n  background-color: var(--ion-color-primary);\n  color: #ffffff;\n}\n\n.chat-row .chat-bubble__right .chat-bubble .name-area h5 {\n  color: #fff;\n}\n\n.chat-row .chat-bubble__right .chat-bubble .date-time {\n  opacity: 0.8;\n  color: #ffffff;\n}\n\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 6px;\n  background: #fff;\n  resize: none;\n  margin-top: 0px;\n  --padding-start: 8px;\n}\n\n.message {\n  padding: 10px !important;\n  border-radius: 10px !important;\n  margin-bottom: 4px !important;\n  white-space: pre-wrap;\n}\n\n.my-message {\n  background: var(--ion-color-tertiary);\n  color: #fff;\n}\n\n.other-message {\n  background: var(--ion-color-secondary);\n  color: #fff;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VuLW9uZS1vbi1vbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUROOztBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBRUk7RUFDRSxjQUFBO0FBQU47O0FBQ007RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0FBQ1I7O0FBQVE7RUFDRSwrQkFBQTtBQUVWOztBQUVJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFBTjs7QUFDTTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNGLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBUjs7QUFDUTtFQUNFLGFBQUE7QUFDVjs7QUFHSTtFQUNFLGNBQUE7QUFETjs7QUFFTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBUjs7QUFNRTtFQUNFLGNBQUE7QUFISjs7QUFJSTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFGTjs7QUFHTTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRFI7O0FBSUk7RUFDRSxjQUFBO0FBRk47O0FBR007RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRFI7O0FBR007RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQURSOztBQUVRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQVo7O0FBQ1k7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQUNoQjs7QUFFUTtFQUNFLGNBQUE7QUFBVjs7QUFNTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUpSOztBQU1NO0VBQ0UsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0FBSlI7O0FBTVk7RUFDSSxXQUFBO0FBSmhCOztBQU9RO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFMVjs7QUFXQTtFQUNJLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBUko7O0FBV0E7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQVJKOztBQVdBO0VBQ0kscUNBQUE7RUFDQSxXQUFBO0FBUko7O0FBV0E7RUFDSSxzQ0FBQTtFQUNBLFdBQUE7QUFSSjs7QUFXQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFSSiIsImZpbGUiOiJlbi1vbmUtb24tb25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAuc21hbGwtdGV4dCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaGF0LXRleHRhcmVhLW91dGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmF0dGFjaG1lbnQge1xyXG4gICAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgICAgLmNsZWFyLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEuNmVtO1xyXG4gICAgICAgIGhlaWdodDogMS44ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMC40ZW0gMC4zZW07XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubXNnLXRleHRhcmVhIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy9saW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjRlbTtcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VuZC1idXR0b24tb3V0ZXIge1xyXG4gICAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgICAgLnNlbmQtYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAwLjRlbSAwLjVlbTtcclxuICAgICAgICB3aWR0aDogMS44ZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAuY2hhdC1yb3cge1xyXG4gICAgcGFkZGluZzogMC4yZW07XHJcbiAgICAubG9hZC1wcmV2aW91cyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMC40ZW0gMC4yZW07XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhmOGY4ZjtcclxuICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoYXQtYnViYmxlLW91dGVyIHtcclxuICAgICAgcGFkZGluZzogMC4zZW07XHJcbiAgICAgIC5kYXRlLXRpbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC4zZW07XHJcbiAgICAgIH1cclxuICAgICAgLmNoYXQtYnViYmxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICAgIG1heC13aWR0aDogNzglO1xyXG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOGVtIDFlbSA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjdlbSAwLjdlbSAwLjdlbSAwZW07XHJcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgICAgLm5hbWUtYXJlYSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUtdGltZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzhmOGY4ZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGF0LWJ1YmJsZV9fcmlnaHQge1xyXG4gICAgICAgIFxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICB9XHJcbiAgICAgIC5jaGF0LWJ1YmJsZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC43ZW0gMC43ZW0gMGVtIDAuN2VtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAubmFtZS1hcmVhIHtcclxuICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUtdGltZSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbi5tZXNzYWdlLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbn1cclxuIFxyXG4ubWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG4gXHJcbi5teS1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4gXHJcbi5vdGhlci1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuIFxyXG4udGltZSB7XHJcbiAgICBjb2xvcjogI2RmZGZkZjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuICAiXX0= */");

/***/ }),

/***/ "c8T2":
/*!**********************************************************!*\
  !*** ./src/app/page/en-one-on-one/en-one-on-one.page.ts ***!
  \**********************************************************/
/*! exports provided: EnOneOnOnePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnOneOnOnePage", function() { return EnOneOnOnePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_en_one_on_one_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./en-one-on-one.page.html */ "hFTK");
/* harmony import */ var _en_one_on_one_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-one-on-one.page.scss */ "ZZUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var src_app_services_en_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/en-data.service */ "Y4Ib");
/* harmony import */ var _attachment_upload_attachment_upload_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../attachment-upload/attachment-upload.page */ "bzF1");










let EnOneOnOnePage = class EnOneOnOnePage {
    // @ViewChild('input', { read: ElementRef }) msgInput: ElementRef;
    constructor(route, chatService, router, alertCtrl, modalController, datepipe, popovercontroller) {
        this.route = route;
        this.chatService = chatService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.datepipe = datepipe;
        this.popovercontroller = popovercontroller;
        this.newMsg = '';
        this.chatTitle = '';
        this.chat = null;
        this._users = [];
        this.chats = [];
        /* this._currentUser = chatService.currentUser.uid;
        if (chatService.currentUser && 'uid' in chatService.currentUser) {
          this.myId = chatService.currentUser.uid
          this.uid = chatService.currentUser.uid
          console.log(this.myId);
        }
        else {
          this.router.navigateByUrl('/en-login');
        } */
        this.uid = localStorage.getItem('currentUser');
        this.o_uid = localStorage.getItem('other_id');
        console.log(this.uid);
        console.log(this.o_uid);
        this.route.params.subscribe(data => {
            /*  this.userId = data.id;
             this.o_uid = data.id; */
            this.userName = data.nickname;
        });
        firebase__WEBPACK_IMPORTED_MODULE_7__["default"].firestore().collection("chats").doc(this.uid).collection(this.o_uid).orderBy("time").onSnapshot(snap => {
            this.chats = [];
            snap.forEach(child => {
                this.chats.push(child.data());
            });
            // this.chat = this.chats;
        });
    }
    ngOnInit() {
        // this.messages = this.chatService.getOneChatMessages()
    }
    sendMessage() {
        /* this.chatService.addOneChatMessage(this.newMsg,this.userId).then(() => {
          this.newMsg = '';
          this.content.scrollToBottom();
        }); */
        firebase__WEBPACK_IMPORTED_MODULE_7__["default"].firestore().collection('chats').doc(this.uid).collection(this.o_uid).add({
            time: Date.now(),
            uid: this.uid,
            msg: this.newMsg,
            lastMsg: this.newMsg,
            // createAt: this.millisecondsToHuman(Date.now())
            // createAt: new Date().toJSON()
            createAt: this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss')
        });
        firebase__WEBPACK_IMPORTED_MODULE_7__["default"].firestore().collection('chats').doc(this.o_uid).collection(this.uid).add({
            time: Date.now(),
            uid: this.uid,
            msg: this.newMsg,
            lastMsg: this.newMsg,
            //createAt: new Date().getTime()
            // createAt: new Date().toJSON()
            createAt: this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss')
        }).then(() => {
            this.newMsg = "";
            this.content.scrollToBottom();
        });
    }
    atchFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.setItem('from_group', 'N');
            if (this.chat) {
                const modal = yield this.modalController.create({
                    component: _attachment_upload_attachment_upload_page__WEBPACK_IMPORTED_MODULE_9__["AttachmentUploadPage"],
                    swipeToClose: true,
                    componentProps: {
                        'chatId': this.chat.id,
                        'usrId': this.uid,
                        'ousrId': this.o_uid
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
    send() {
    }
};
EnOneOnOnePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_en_data_service__WEBPACK_IMPORTED_MODULE_8__["EnDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] }
];
EnOneOnOnePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"],] }]
};
EnOneOnOnePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-en-one-on-one',
        template: _raw_loader_en_one_on_one_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_en_one_on_one_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EnOneOnOnePage);



/***/ }),

/***/ "hFTK":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/en-one-on-one/en-one-on-one.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{userName}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content>\n\n  <div class=\"chat-row\">\n    <div class=\"load-previous\">\n      <span>See Previous Chats</span>\n    </div>\n  </div>\n\n  <ion-grid>\n    <ion-row *ngFor=\"let message of messages | async\">\n      <ion-col size=\"9\" class=\"message\" [offset]=\"message.myMsg ? 3 : 0\"\n        [ngClass]=\"{ 'my-message': message.myMsg, 'other-message': !message.myMsg }\">\n        <b>{{ message.fromName }}</b><br>\n        <span>{{ message.msg }}\n        </span>\n        <div class=\"time ion-text-right\"><br>{{ message.createdAt?.toMillis() | date:'short' }}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  </ion-content> -->\n\n <!--  <ion-content>\n    <div *ngFor=\"let chat of chats\">\n\n      <div class=\"chat-row\" *ngIf=\"chat.uid !=uid\">\n        <div class=\"chat-bubble-outer chat-bubble__right\">\n          <div class=\"chat-bubble\">\n            <div class=\"name-area\">\n              <h5>You</h5>\n              <div class=\"delete-area\">\n              </div>\n            </div>\n            {{chat.msg}}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"chat-bubble-outer\"  *ngIf=\"chat.uid ==uid\">\n        <div class=\"chat-bubble\">\n          <div class=\"name-area\">\n            <h5>{{chat.name}}</h5>\n            <div class=\"delete-area\">\n            </div>\n          </div>\n          {{chat.msg}}\n        </div>\n      </div>\n      </div>\n      </ion-content> -->\n\n      <!-- Original Start Here -->\n      <ion-content>\n        <div *ngFor=\"let chat of chats \">\n          <div class=\"chat-row\" *ngIf=\"chat.uid !=uid\">\n            <div class=\"chat-bubble-outer\">\n              <div class=\"chat-bubble\">\n                <div class=\"name-area\">\n                  <h5>{{userName}}</h5>\n                </div>\n                {{chat.msg}}\n                <div>\n                  <a href=\"{{chat.image}}\" target=\"_blank\" *ngIf=\"chat.messageType == 'image'\">\n                    <img src=\"{{chat.image}}\" alt=\"\">\n                  </a>\n                </div>\n                <div class=\"date-time\">\n                  {{ chat.createAt}}\n                </div>\n                <!-- <ng-container *ngIf=\"'lastMsg' as variable\">\n                      {{variable}}\n                    </ng-container> -->\n              </div>\n            </div>\n          </div>\n\n          <div class=\"chat-row\" *ngIf=\"chat.uid ==uid\">\n            <div class=\"chat-bubble-outer chat-bubble__right\">\n              <div class=\"chat-bubble\">\n                <div class=\"name-area\">\n                  <h5>You</h5>\n                </div>\n                <div>\n                <a href=\"{{chat.image}}\" target=\"_blank\" *ngIf=\"chat.messageType == 'image'\">\n                  <img src=\"{{chat.image}}\" alt=\"\">\n                </a>\n                </div>\n                {{chat.msg}}\n                <div class=\"date-time\">\n                  {{ chat.createAt}}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-content>\n      <!-- Original End Here -->\n\n      \n\n      <!-- <ion-item lines=\"none\" *ngIf=\"chat.uid !=uid\">\n        <ion-label class=\"chat-bubble-outer chat-bubble__right\">\n          <p>You</p>\n            <h2>\n              <b>\n                {{chat.msg}}\n              </b>\n            </h2>\n        </ion-label>\n      </ion-item> -->\n\n<!--       <ion-item lines=\"none\" *ngIf=\"chat.uid ==uid\">\n        <ion-label class=\"chat-bubble-outer\">\n          <p>{{chat.name}}</p>\n          <h2>\n            <b>\n              {{chat.msg}}\n            </b>\n          </h2>\n          \n        </ion-label>\n      </ion-item> -->\n    \n<!-- <ion-content>\n  <div *ngFor=\"let chat of chats\">\n    Other's Chat\n    <ion-item= *ngIf=\"cha.uid!=uid\" lines=\"none\" (click)=\"openFile(chat.msg)\">\n      <ion-label class=\"in-text-left\">\n        <p>\n          {{userName}}\n        </p>\n        <h2>{{chat.msg}}</h2>\n      </ion-label>\n      <ion-icon *ngIf=\"caht.fileType\" slot=\"start\" name=\"{{getIcon(chat.fileType)}}\"\n      color=\"{{getIconColor(chat.fileType)}}\"></ion-icon>\n    </ion-item>\n  My Chat\n  <ion-item *ngIf=\"cha.uid==uid\" lines=\"none\" (click)=\"openFile(chat.msg)\">\n    <ion-label class=\"in-text-right\" *ngIf=\"!chat.isUploading\">\n      <p>\n        You\n      </p>\n      <h2>{{chat.msg}}</h2>\n    </ion-label>\n    <ion-icon *ngIf=\"caht.fileType\" slot=\"start\" name=\"{{getIcon(chat.fileType)}}\"\n     color=\"{{getIconColor(chat.fileType)}}\">\n    </ion-icon>\n    <round-progress *ngIf=\"chat.isUploading\" slot=\"end\" [current]=\"chat.progress\" [animation]=\"'easeInOutQuart'\"\n    [animationDelay]=\"10\" [radious]=\"15\" [stroke]=\"3\" [color]=\"'#3171e0'\" [max]=\"100\">\n  </round-progress>\n  </ion-item>\n  </div>\n</ion-content> -->\n\n<ion-footer>\n    <ion-toolbar color=\"light\">\n      <div class=\"chat-textarea-outer\">\n        <div class=\"attachment\">\n          <div class=\"clear-button ion-activatable ripple-parent\">\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-icon name=\"attach-sharp\" (click)=\"atchFile()\"></ion-icon>\n          </div>\n        </div>\n        <div class=\"msg-textarea\">\n          <ion-textarea autoGrow=\"true\" class=\"message-input\" rows=\"1\" maxLength=\"500\" [(ngModel)]=\"newMsg\">\n          </ion-textarea>\n        </div>\n        <div class=\"send-button-outer\">\n          <div class=\"send-button ion-activatable ripple-parent\">\n            <ion-icon name=\"send-sharp\"  (click)=\"sendMessage()\"></ion-icon>\n            <ion-ripple-effect></ion-ripple-effect>\n          </div>\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n\n  <!-- <ion-footer>\n    <input type=\"file\" id=\"file\" style=\"display :none\" (change)=\"detectFiles()\" multiple>\n    <ion-item>\n      <ion-input [(ngModel)]=\"newMsg\" placeholder=\"Type...\" id=\"message\"></ion-input>\n      <ion-button fill=\"clear\" slot=\"end\" (click)=\"triggerFile()\">\n        <ion-icon slot=\"icon-only\" name=\"document-attach-outline\">\n        </ion-icon>\n      </ion-button>\n\n      <ion-button  fill=\"clear\" slot=\"end\" (click)=\"sendMessage()\">\n        <ion-icon slot=\"icon-only\" name=\"send-outline\">\n        </ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-footer> -->\n\n\n  <!-- Lattest Code -->\n  <!-- <ion-footer>\n    <ion-toolbar color=\"light\">\n      <div class=\"chat-textarea-outer\">\n        <div class=\"attachment\">\n          <div class=\"clear-button ion-activatable ripple-parent\">\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-icon name=\"attach-sharp\" (click)=\"atchFile()\"></ion-icon>\n          </div>\n          <div class=\"clear-button\" (click)=\"atchFile()\">\n            <ion-icon name=\"attach-sharp\"></ion-icon>\n          </div>\n        </div>\n        <div class=\"msg-textarea\">\n          <textarea autosize [(ngModel)]=\"newMsg\" name=\"newMsg\"></textarea>\n        </div>\n        <div class=\"msg-textarea\">\n          <ion-textarea autoGrow=\"true\" class=\"message-input\" rows=\"1\" maxLength=\"500\" [(ngModel)]=\"newMsg\">\n          </ion-textarea>\n        </div>\n        <div class=\"send-button-outer\">\n          <div class=\"send-button ion-activatable ripple-parent\">\n            <ion-icon name=\"send-sharp\"  (click)=\"sendMessage()\"></ion-icon>\n            <ion-ripple-effect></ion-ripple-effect>\n          </div>\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-footer> -->\n  <!-- Lattest code end here -->\n  \n\n\n  <!-- <div class=\"chat-row\">\n    <div class=\"chat-bubble-outer\">\n      <div class=\"chat-bubble\">\n        <div class=\"name-area\">\n          <h5>Jessica</h5>\n          <div class=\"delete-area\">\n            <ion-icon name=\"close\"></ion-icon>\n          </div>\n        </div>\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ducimus qui porro nesciunt eum deleniti\n        maiores earum, adipisci nemo expedita eligendi eaque illo. Modi commodi ipsa esse alias, deleniti vero?\n        <div class=\"date-time\">3 mins ago</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"chat-row\">\n    <div class=\"chat-bubble-outer chat-bubble__right\">\n      <div class=\"chat-bubble\">\n        <div class=\"name-area\">\n          <h5>Jessica</h5>\n          <div class=\"delete-area\">\n            <ion-icon name=\"close\"></ion-icon>\n          </div>\n        </div>\n        Hi\n        <div class=\"date-time\">3 mins ago</div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"chat-row\" *ngFor=\"let message of messages | async\">\n    <div class=\"chat-bubble-outer\" [ngClass]=\"{'chat-bubble__right': message.from === _currentUser }\">\n      <div class=\"chat-bubble\" *ngIf=\"!message.delete\">\n        <h4>{{ message.user }} <span (click)=\"showPop(message.id)\">\n            <ion-icon name=\"trash\"></ion-icon>\n          </span></h4>\n        <a href=\"{{ message.image }}\" target=\"_blank\" *ngIf=\"message.messageType == 'image'\">\n          <img src=\"{{ message.image }}\" alt=\"\">\n        </a>\n        <span *ngIf=\"message.messageType == 'others'\">\n          {{ message.file_name.substring(0,16) }}..\n          <a href=\"{{ message.image }}\" target=\"_blank\" style=\"color: #fff;\">\n            <ion-icon name=\"download\"></ion-icon>\n          </a>\n        </span>\n        <span *ngIf=\"message.messageType == 'text'\">{{ message.msg }}</span>\n        <div class=\"date-time\">{{ message.createdAt | heading }}</div>\n      </div>\n      <div class=\"chat-bubble-deleted\" *ngIf=\"message.delete\">\n        <p>Message deleted</p>\n      </div>\n    </div>\n  </div>\n</ion-content> -->\n\n<!-- <ion-footer>\n  <ion-toolbar color=\"light\">\n    <div class=\"chat-textarea-outer\">\n      <div class=\"attachment\">\n        <div class=\"clear-button\" (click)=\"atchFile()\">\n          <ion-icon name=\"attach-sharp\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"msg-textarea\">\n        <textarea autosize [(ngModel)]=\"newMsg\" name=\"newMsg\"></textarea>\n      </div>\n      <div class=\"send-button-outer\">\n\n        <div class=\"send-button ion-activatable ripple-parent\" *ngIf=\"newMsg != ''\" (click)=\"sendMessage()\">\n          <ion-icon name=\"send-sharp\"></ion-icon>\n          <ion-ripple-effect></ion-ripple-effect>\n        </div>\n\n        <div class=\"send-button ion-activatable ripple-parent\" *ngIf=\"newMsg === ''\">\n          <ion-icon name=\"send-sharp\"></ion-icon>\n          <ion-ripple-effect></ion-ripple-effect>\n        </div>\n\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer> -->\n");

/***/ })

}]);
//# sourceMappingURL=page-en-one-on-one-en-one-on-one-module-es2015.js.map