(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-image-upload-image-upload-module"], {
    /***/
    "7lVl":
    /*!******************************************************************!*\
      !*** ./src/app/page/image-upload/image-upload-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: ImageUploadPageRoutingModule */

    /***/
    function lVl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageUploadPageRoutingModule", function () {
        return ImageUploadPageRoutingModule;
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


      var _image_upload_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./image-upload.page */
      "u3rk");

      var routes = [{
        path: '',
        component: _image_upload_page__WEBPACK_IMPORTED_MODULE_3__["ImageUploadPage"]
      }];

      var ImageUploadPageRoutingModule = function ImageUploadPageRoutingModule() {
        _classCallCheck(this, ImageUploadPageRoutingModule);
      };

      ImageUploadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ImageUploadPageRoutingModule);
      /***/
    },

    /***/
    "RWf+":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/image-upload/image-upload.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RWf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>\n      Attachment Upload\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  \n  <ion-card class=\"ion-text-center\" *ngIf=\"!isUploading && !isUploaded\">\n    <ion-card-header>\n      <ion-card-title>Choose Images to Upload</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button color=\"success\" shape=\"round\" size=\"large\">\n        <span>Select Image</span>\n        <input id=\"uploadBtn\" type=\"file\" class=\"upload\" (change)=\"uploadFile($event.target.files)\" />\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"ion-text-center\" *ngIf=\"isUploading && !isUploaded\">\n    <ion-card-header>\n      <ion-card-title>Selected File:<b>{{ fileName }}</b></ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <div *ngIf=\"percentage | async as pct\">\n        Progress: {{ pct | number }}%\n        <ion-progress-bar value=\"{{ pct / 100 }}\"></ion-progress-bar>\n      </div>\n      <div *ngIf=\"snapshot | async as snap\">\n        File Size: {{ snap.totalBytes | fileSizeFormatPipe }} Transfered:\n        {{ snap.bytesTransferred | fileSizeFormatPipe }}\n        <div *ngIf=\"snapshot && snap.bytesTransferred != snap.totalBytes\">\n          <ion-button color=\"warning\" size=\"small\" (click)=\"task.pause()\" class=\"button is-warning\">Pause</ion-button>\n          <ion-button size=\"small\" (click)=\"task.resume()\" class=\"button is-info\">Resume</ion-button>\n          <ion-button color=\"danger\" size=\"small\" (click)=\"task.cancel()\" class=\"button is-danger\">Cancel</ion-button>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card class=\"ion-text-center\" *ngIf=\"!isUploading && isUploaded\">\n    <ion-card-header>\n      <ion-card-title>\n        <b>{{ fileName }}</b> Uploaded!\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <div *ngIf=\"UploadedFileURL | async as url\">\n        <img [src]=\"url\" />\n        <a [href]=\"url\" target=\"_blank\" rel=\"noopener\">Download</a>\n      </div>\n      File Size: {{ fileSize | fileSizeFormatPipe }}\n      <ion-button expand=\"full\" color=\"success\" (click)=\"isUploading = isUploaded = false\">Upload More</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <h2 class=\"ion-text-center\">Uploaded Freaky Images</h2>\n\n  <ion-card color=\"light\" class=\"ion-text-center\" *ngFor=\"let item of images | async\">\n    <ion-card-header>\n      <ion-card-title>\n        {{ item.name }}\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <img [src]=\"item.filepath\" />\n      <a [href]=\"item.filepath\" target=\"_blank\" rel=\"noopener\">Download</a>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
      /***/
    },

    /***/
    "tLqS":
    /*!**********************************************************!*\
      !*** ./src/app/page/image-upload/image-upload.module.ts ***!
      \**********************************************************/

    /*! exports provided: ImageUploadPageModule */

    /***/
    function tLqS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageUploadPageModule", function () {
        return ImageUploadPageModule;
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


      var _image_upload_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./image-upload-routing.module */
      "7lVl");
      /* harmony import */


      var _image_upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./image-upload.page */
      "u3rk");
      /* harmony import */


      var _pipes_file_size_format_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipes/file-size-format-pipe.pipe */
      "AMnY");

      var ImageUploadPageModule = function ImageUploadPageModule() {
        _classCallCheck(this, ImageUploadPageModule);
      };

      ImageUploadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _image_upload_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageUploadPageRoutingModule"]],
        declarations: [_image_upload_page__WEBPACK_IMPORTED_MODULE_6__["ImageUploadPage"], _pipes_file_size_format_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__["FileSizeFormatPipePipe"]]
      })], ImageUploadPageModule);
      /***/
    },

    /***/
    "u3rk":
    /*!********************************************************!*\
      !*** ./src/app/page/image-upload/image-upload.page.ts ***!
      \********************************************************/

    /*! exports provided: ImageUploadPage */

    /***/
    function u3rk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageUploadPage", function () {
        return ImageUploadPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_image_upload_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./image-upload.page.html */
      "RWf+");
      /* harmony import */


      var _image_upload_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./image-upload.page.scss */
      "x1+M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ImageUploadPage = /*#__PURE__*/function () {
        function ImageUploadPage(storage, database) {
          _classCallCheck(this, ImageUploadPage);

          this.storage = storage;
          this.database = database;
          this.isUploading = false;
          this.isUploaded = false; //Set collection where our documents/ images info will save

          this.imageCollection = database.collection('freakyImages');
          this.images = this.imageCollection.valueChanges();
        }

        _createClass(ImageUploadPage, [{
          key: "uploadFile",
          value: function uploadFile(event) {
            var _this = this;

            // The File object
            var file = event.item(0); // Validation for Images Only

            if (file.type.split('/')[0] !== 'image') {
              console.error('unsupported file type :( ');
              return;
            }

            this.isUploading = true;
            this.isUploaded = false;
            this.fileName = file.name; // The storage path

            var path = "freakyStorage/".concat(new Date().getTime(), "_").concat(file.name); // Totally optional metadata

            var customMetadata = {
              app: 'Freaky Image Upload Demo'
            }; //File reference

            var fileRef = this.storage.ref(path); // The main task

            this.task = this.storage.upload(path, file, {
              customMetadata: customMetadata
            }); // Get file progress percentage

            this.percentage = this.task.percentageChanges();
            this.snapshot = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              // Get uploaded file storage path
              _this.UploadedFileURL = fileRef.getDownloadURL();

              _this.UploadedFileURL.subscribe(function (resp) {
                _this.addImagetoDB({
                  name: file.name,
                  filepath: resp,
                  size: _this.fileSize
                });

                _this.isUploading = false;
                _this.isUploaded = true;
              }, function (error) {
                console.error(error);
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (snap) {
              _this.fileSize = snap.totalBytes;
            }));
          }
        }, {
          key: "addImagetoDB",
          value: function addImagetoDB(image) {
            //Create an ID for document
            var id = this.database.createId(); //Set document id with value in database

            this.imageCollection.doc(id).set(image).then(function (resp) {
              console.log(resp);
            })["catch"](function (error) {
              console.log("error " + error);
            });
          }
        }]);

        return ImageUploadPage;
      }();

      ImageUploadPage.ctorParameters = function () {
        return [{
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }];
      };

      ImageUploadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-image-upload',
        template: _raw_loader_image_upload_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_image_upload_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ImageUploadPage);
      /***/
    },

    /***/
    "x1+M":
    /*!**********************************************************!*\
      !*** ./src/app/page/image-upload/image-upload.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function x1M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS11cGxvYWQucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=page-image-upload-image-upload-module-es5.js.map