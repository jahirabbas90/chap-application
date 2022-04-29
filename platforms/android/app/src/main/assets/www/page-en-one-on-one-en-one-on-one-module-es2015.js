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
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar .small-text {\n  font-weight: 400;\n  font-size: 0.6em;\n}\n\n.chat-textarea-outer {\n  display: flex;\n  align-items: center;\n}\n\n.chat-textarea-outer .attachment {\n  padding: 0.2em;\n}\n\n.chat-textarea-outer .attachment .clear-button {\n  width: 1.6em;\n  height: 1.8em;\n  font-size: 1.5em;\n  display: inline-block;\n  padding: 0.4em 0.3em;\n  display: inline-block;\n  position: relative;\n  border-radius: 1em;\n  -webkit-tap-highlight-color: var(--ion-color-primary);\n}\n\n.chat-textarea-outer .attachment .clear-button:focus {\n  color: var(--ion-color-primary);\n}\n\n.chat-textarea-outer .msg-textarea {\n  flex-grow: 1;\n  padding: 0.2em;\n}\n\n.chat-textarea-outer .msg-textarea textarea {\n  background-color: #ffffff;\n  color: #222222;\n  width: 100%;\n  border-radius: 0.4em;\n  min-height: 1.2em !important;\n  resize: none;\n  vertical-align: top;\n  padding-top: 0.4em;\n}\n\n.chat-textarea-outer .msg-textarea textarea:focus {\n  outline: none;\n}\n\n.chat-textarea-outer .send-button-outer {\n  padding: 0.2em;\n}\n\n.chat-textarea-outer .send-button-outer .send-button {\n  position: relative;\n  display: inline-block;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  padding: 0.4em 0.5em;\n  width: 1.8em;\n  height: 1.8em;\n  border-radius: 50%;\n  font-size: 1.3em;\n  line-height: 1;\n}\n\n.chat-row {\n  padding: 0.2em;\n}\n\n.chat-row .load-previous {\n  text-align: center;\n  padding: 0.4em 0.2em;\n}\n\n.chat-row .load-previous span {\n  font-size: 0.8em;\n  color: #ffffff;\n  background-color: #8f8f8f;\n  padding: 0.5em 1em;\n  border-radius: 3em;\n  display: inline-block;\n}\n\n.chat-row .chat-bubble-outer {\n  padding: 0.3em;\n}\n\n.chat-row .chat-bubble-outer .date-time {\n  font-size: 0.8em;\n  margin-top: 0.3em;\n}\n\n.chat-row .chat-bubble-outer .chat-bubble {\n  background-color: #f1f1f1;\n  max-width: 78%;\n  min-width: 50%;\n  padding: 0.8em 1em;\n  line-height: 1.4;\n  border-radius: 0.7em 0.7em 0.7em 0em;\n  color: #222222;\n}\n\n.chat-row .chat-bubble-outer .chat-bubble .name-area {\n  display: flex;\n  justify-content: space-between;\n}\n\n.chat-row .chat-bubble-outer .chat-bubble .name-area h5 {\n  margin: 0;\n  line-height: 1;\n  font-size: 1em;\n  color: var(--ion-color-primary);\n}\n\n.chat-row .chat-bubble-outer .chat-bubble .date-time {\n  color: #8f8f8f;\n}\n\n.chat-row .chat-bubble__right:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.chat-row .chat-bubble__right .chat-bubble {\n  border-radius: 0.7em 0.7em 0em 0.7em !important;\n  float: right;\n  background-color: var(--ion-color-primary);\n  color: #ffffff;\n}\n\n.chat-row .chat-bubble__right .chat-bubble .name-area h5 {\n  color: #fff;\n}\n\n.chat-row .chat-bubble__right .chat-bubble .date-time {\n  opacity: 0.8;\n  color: #ffffff;\n}\n\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 6px;\n  background: #fff;\n  resize: none;\n  margin-top: 0px;\n  --padding-start: 8px;\n}\n\n.message {\n  padding: 10px !important;\n  border-radius: 10px !important;\n  margin-bottom: 4px !important;\n  white-space: pre-wrap;\n}\n\n.my-message {\n  background: var(--ion-color-tertiary);\n  color: #fff;\n}\n\n.other-message {\n  background: var(--ion-color-secondary);\n  color: #fff;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbi1vbmUtb24tb25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFETjs7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURKOztBQUVJO0VBQ0UsY0FBQTtBQUFOOztBQUNNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtBQUNSOztBQUFRO0VBQ0UsK0JBQUE7QUFFVjs7QUFFSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQU47O0FBQ007RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDRixXQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQVI7O0FBQ1E7RUFDRSxhQUFBO0FBQ1Y7O0FBR0k7RUFDRSxjQUFBO0FBRE47O0FBRU07RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQVI7O0FBTUU7RUFDRSxjQUFBO0FBSEo7O0FBSUk7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBRk47O0FBR007RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQURSOztBQUlJO0VBQ0UsY0FBQTtBQUZOOztBQUdNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQURSOztBQUdNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUFEUjs7QUFFUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUFaOztBQUNZO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7QUFDaEI7O0FBRVE7RUFDRSxjQUFBO0FBQVY7O0FBTU07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFKUjs7QUFNTTtFQUNFLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtBQUpSOztBQU1ZO0VBQ0ksV0FBQTtBQUpoQjs7QUFPUTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBTFY7O0FBV0E7RUFDSSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQVJKOztBQVdBO0VBQ0ksd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFSSjs7QUFXQTtFQUNJLHFDQUFBO0VBQ0EsV0FBQTtBQVJKOztBQVdBO0VBQ0ksc0NBQUE7RUFDQSxXQUFBO0FBUko7O0FBV0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBUkoiLCJmaWxlIjoiZW4tb25lLW9uLW9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLnNtYWxsLXRleHQge1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDAuNmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2hhdC10ZXh0YXJlYS1vdXRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5hdHRhY2htZW50IHtcclxuICAgICAgcGFkZGluZzogMC4yZW07XHJcbiAgICAgIC5jbGVhci1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxLjZlbTtcclxuICAgICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNGVtIDAuM2VtO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1zZy10ZXh0YXJlYSB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgcGFkZGluZzogMC4yZW07XHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxLjJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC40ZW07XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlbmQtYnV0dG9uLW91dGVyIHtcclxuICAgICAgcGFkZGluZzogMC4yZW07XHJcbiAgICAgIC5zZW5kLWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMC40ZW0gMC41ZW07XHJcbiAgICAgICAgd2lkdGg6IDEuOGVtO1xyXG4gICAgICAgIGhlaWdodDogMS44ZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNoYXQtcm93IHtcclxuICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4gICAgLmxvYWQtcHJldmlvdXMge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDAuNGVtIDAuMmVtO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZjhmOGY7XHJcbiAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGF0LWJ1YmJsZS1vdXRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDAuM2VtO1xyXG4gICAgICAuZGF0ZS10aW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuM2VtO1xyXG4gICAgICB9XHJcbiAgICAgIC5jaGF0LWJ1YmJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgICAgICBtYXgtd2lkdGg6IDc4JTtcclxuICAgICAgICBtaW4td2lkdGg6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAwLjhlbSAxZW0gO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC43ZW0gMC43ZW0gMC43ZW0gMGVtO1xyXG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgIC5uYW1lLWFyZWEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kYXRlLXRpbWUge1xyXG4gICAgICAgICAgY29sb3I6ICM4ZjhmOGY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hhdC1idWJibGVfX3JpZ2h0IHtcclxuICAgICAgICBcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgfVxyXG4gICAgICAuY2hhdC1idWJibGUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuN2VtIDAuN2VtIDBlbSAwLjdlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgLm5hbWUtYXJlYSB7XHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kYXRlLXRpbWUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4ubWVzc2FnZS1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG59XHJcbiBcclxuLm1lc3NhZ2Uge1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuIFxyXG4ubXktbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuIFxyXG4ub3RoZXItbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiBcclxuLnRpbWUge1xyXG4gICAgY29sb3I6ICNkZmRmZGY7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbiAgIl19 */");

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