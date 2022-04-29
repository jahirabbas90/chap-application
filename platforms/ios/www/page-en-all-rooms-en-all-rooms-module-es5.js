(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-en-all-rooms-en-all-rooms-module"], {
    /***/
    "6w5g":
    /*!**********************************************************!*\
      !*** ./src/app/page/en-all-rooms/en-all-rooms.module.ts ***!
      \**********************************************************/

    /*! exports provided: EnAllRoomsPageModule */

    /***/
    function w5g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnAllRoomsPageModule", function () {
        return EnAllRoomsPageModule;
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


      var _en_all_rooms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./en-all-rooms-routing.module */
      "hOOP");
      /* harmony import */


      var _en_all_rooms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./en-all-rooms.page */
      "UlBQ");

      var EnAllRoomsPageModule = function EnAllRoomsPageModule() {
        _classCallCheck(this, EnAllRoomsPageModule);
      };

      EnAllRoomsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _en_all_rooms_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnAllRoomsPageRoutingModule"]],
        declarations: [_en_all_rooms_page__WEBPACK_IMPORTED_MODULE_6__["EnAllRoomsPage"], _en_all_rooms_page__WEBPACK_IMPORTED_MODULE_6__["StarPipe"], _en_all_rooms_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPipe"]]
      })], EnAllRoomsPageModule);
      /***/
    },

    /***/
    "hOOP":
    /*!******************************************************************!*\
      !*** ./src/app/page/en-all-rooms/en-all-rooms-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: EnAllRoomsPageRoutingModule */

    /***/
    function hOOP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnAllRoomsPageRoutingModule", function () {
        return EnAllRoomsPageRoutingModule;
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


      var _en_all_rooms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./en-all-rooms.page */
      "UlBQ");

      var routes = [{
        path: '',
        component: _en_all_rooms_page__WEBPACK_IMPORTED_MODULE_3__["EnAllRoomsPage"]
      }];

      var EnAllRoomsPageRoutingModule = function EnAllRoomsPageRoutingModule() {
        _classCallCheck(this, EnAllRoomsPageRoutingModule);
      };

      EnAllRoomsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EnAllRoomsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=page-en-all-rooms-en-all-rooms-module-es5.js.map