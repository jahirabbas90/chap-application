(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-file-preview-file-preview-module"],{

/***/ "AGO4":
/*!**********************************************************!*\
  !*** ./src/app/page/file-preview/file-preview.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLXByZXZpZXcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "H4Xz":
/*!**********************************************************!*\
  !*** ./src/app/page/file-preview/file-preview.module.ts ***!
  \**********************************************************/
/*! exports provided: FilePreviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePreviewPageModule", function() { return FilePreviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _file_preview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-preview-routing.module */ "x2Xz");
/* harmony import */ var _file_preview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file-preview.page */ "tba7");







let FilePreviewPageModule = class FilePreviewPageModule {
};
FilePreviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _file_preview_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilePreviewPageRoutingModule"]
        ],
        declarations: [_file_preview_page__WEBPACK_IMPORTED_MODULE_6__["FilePreviewPage"]]
    })
], FilePreviewPageModule);



/***/ }),

/***/ "HpbF":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/file-preview/file-preview.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>filePreview</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"send()\">\n        <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngFor=\"let preview of previews\">\n    <ion-icon slot=\"statrt\" name=\"{{getIcon(preview.type)}}\" color=\"{{getIconColor(preview.type)}}\">\n      <ion-label>\n        <h2>\n          {{preview.name}}\n        </h2>\n        <p>\n          {{byteToSize(preview.size)}}\n        </p>\n      </ion-label>\n    </ion-icon>\n  </ion-item>\n\n</ion-content>\n");

/***/ }),

/***/ "tba7":
/*!********************************************************!*\
  !*** ./src/app/page/file-preview/file-preview.page.ts ***!
  \********************************************************/
/*! exports provided: FilePreviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePreviewPage", function() { return FilePreviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_file_preview_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./file-preview.page.html */ "HpbF");
/* harmony import */ var _file_preview_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-preview.page.scss */ "AGO4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let FilePreviewPage = class FilePreviewPage {
    constructor(popovercontroller) {
        this.popovercontroller = popovercontroller;
        this.previews = [];
        this.previews = JSON.parse(sessionStorage.getItem("previews"));
    }
    ngOnInit() {
    }
    byteToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        for (var i = 0; i < sizes.length; i++) {
            if (bytes <= 1024) {
                return bytes + '' + sizes[i];
            }
            else {
                bytes = parseFloat(String(bytes / 1024)).toFixed(2);
            }
        }
    }
    send() {
        sessionStorage.setItem("send", "true");
        this.popovercontroller.dismiss();
    }
    getIcon(type) {
        if (type.startsWith("image")) {
            return "image-outline";
        }
        else if (type.startsWith("video")) {
            return "videocam-outline";
        }
        else if (type.startsWith("audio")) {
            return "musical-note-outline";
        }
        else {
            return "document-outline";
        }
    }
    getIconColor(type) {
        if (type.startsWith("image")) {
            return "primary";
        }
        else if (type.startsWith("video")) {
            return "success";
        }
        else if (type.startsWith("audio")) {
            return "danger";
        }
        else {
            return "warning";
        }
    }
};
FilePreviewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
FilePreviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-file-preview',
        template: _raw_loader_file_preview_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_file_preview_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FilePreviewPage);



/***/ }),

/***/ "x2Xz":
/*!******************************************************************!*\
  !*** ./src/app/page/file-preview/file-preview-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: FilePreviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePreviewPageRoutingModule", function() { return FilePreviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _file_preview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-preview.page */ "tba7");




const routes = [
    {
        path: '',
        component: _file_preview_page__WEBPACK_IMPORTED_MODULE_3__["FilePreviewPage"]
    }
];
let FilePreviewPageRoutingModule = class FilePreviewPageRoutingModule {
};
FilePreviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FilePreviewPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=page-file-preview-file-preview-module-es2015.js.map