(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-attachment-upload-attachment-upload-module"],{

/***/ "M7r/":
/*!****************************************************************************!*\
  !*** ./src/app/page/attachment-upload/attachment-upload-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AttachmentUploadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentUploadPageRoutingModule", function() { return AttachmentUploadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _attachment_upload_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attachment-upload.page */ "bzF1");




const routes = [
    {
        path: '',
        component: _attachment_upload_page__WEBPACK_IMPORTED_MODULE_3__["AttachmentUploadPage"]
    }
];
let AttachmentUploadPageRoutingModule = class AttachmentUploadPageRoutingModule {
};
AttachmentUploadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AttachmentUploadPageRoutingModule);



/***/ }),

/***/ "MLpc":
/*!********************************************************************!*\
  !*** ./src/app/page/attachment-upload/attachment-upload.module.ts ***!
  \********************************************************************/
/*! exports provided: AttachmentUploadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentUploadPageModule", function() { return AttachmentUploadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _attachment_upload_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attachment-upload-routing.module */ "M7r/");
/* harmony import */ var _attachment_upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attachment-upload.page */ "bzF1");
/* harmony import */ var _pipes_file_size_format_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/file-size-format-pipe.pipe */ "AMnY");








let AttachmentUploadPageModule = class AttachmentUploadPageModule {
};
AttachmentUploadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _attachment_upload_routing_module__WEBPACK_IMPORTED_MODULE_5__["AttachmentUploadPageRoutingModule"]
        ],
        declarations: [_attachment_upload_page__WEBPACK_IMPORTED_MODULE_6__["AttachmentUploadPage"], _pipes_file_size_format_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__["FileSizeFormatPipePipe"]]
    })
], AttachmentUploadPageModule);



/***/ })

}]);
//# sourceMappingURL=page-attachment-upload-attachment-upload-module-es2015.js.map