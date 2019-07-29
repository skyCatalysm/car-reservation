(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7__);



/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)

__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css", 7));
__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js", 7));


 // uncomment if you have legacy code that needs global variables
//global.$ = $;
//aos animation



aos__WEBPACK_IMPORTED_MODULE_6___default.a.init();
__webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! ./navbar-scroll-animation.js */ "./assets/js/navbar-scroll-animation.js", 7));
__webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! ./animated-arrow-down.js */ "./assets/js/animated-arrow-down.js", 7)); //jump js

__webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./homepage-jump.js */ "./assets/js/homepage-jump.js"));
var changeImage = document.getElementsByClassName('change-showcase-image');

for (var i = 0; i < changeImage.length; i++) {
  (function (index) {
    changeImage[index].addEventListener('click', function (event) {
      document.getElementById("showcase-title").innerHTML = changeImage[index].alt;
      document.getElementById("showcase-image").src = changeImage[index].src;
    });
  })(i);
}

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/js/app.js","runtime","vendors~app~app-admin-page-manager~app-login-register","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIl0sIm5hbWVzIjpbIkFPUyIsImluaXQiLCJjaGFuZ2VJbWFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJpbmRleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiYWx0Iiwic3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBQSwwQ0FBRyxDQUFDQyxJQUFKO0FBRUE7QUFDQSx5SixDQUVBOztBQUNBO0FBRUEsSUFBSUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLHVCQUFoQyxDQUFsQjs7QUFDQSxLQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0gsV0FBVyxDQUFDSSxNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxHQUFDLFVBQVNFLEtBQVQsRUFBZ0I7QUFDYkwsZUFBVyxDQUFDSyxLQUFELENBQVgsQ0FBbUJDLGdCQUFuQixDQUFvQyxPQUFwQyxFQUE2QyxVQUFVQyxLQUFWLEVBQWtCO0FBQzNETixjQUFRLENBQUNPLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDQyxTQUExQyxHQUFzRFQsV0FBVyxDQUFDSyxLQUFELENBQVgsQ0FBbUJLLEdBQXpFO0FBQ0FULGNBQVEsQ0FBQ08sY0FBVCxDQUF3QixnQkFBeEIsRUFBMENHLEdBQTFDLEdBQWdEWCxXQUFXLENBQUNLLEtBQUQsQ0FBWCxDQUFtQk0sR0FBbkU7QUFDSCxLQUhEO0FBSUgsR0FMRCxFQUtHUixDQUxIO0FBTUgsQzs7Ozs7Ozs7Ozs7QUNuQ0QsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpO1xyXG5pbXBvcnQoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcycpO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgJ3BvcHBlci5qcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwJztcclxuLy8gdW5jb21tZW50IGlmIHlvdSBoYXZlIGxlZ2FjeSBjb2RlIHRoYXQgbmVlZHMgZ2xvYmFsIHZhcmlhYmxlc1xyXG4vL2dsb2JhbC4kID0gJDtcclxuXHJcbi8vYW9zIGFuaW1hdGlvblxyXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XHJcbkFPUy5pbml0KCk7XHJcblxyXG5pbXBvcnQgKCcuL25hdmJhci1zY3JvbGwtYW5pbWF0aW9uLmpzJyk7XHJcbmltcG9ydCAoJy4vYW5pbWF0ZWQtYXJyb3ctZG93bi5qcycpO1xyXG5cclxuLy9qdW1wIGpzXHJcbmltcG9ydCAoJy4vaG9tZXBhZ2UtanVtcC5qcycpO1xyXG5cclxubGV0IGNoYW5nZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hhbmdlLXNob3djYXNlLWltYWdlJyk7XHJcbmZvcihsZXQgaSA9IDA7IGkgPCBjaGFuZ2VJbWFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgY2hhbmdlSW1hZ2VbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSAge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3djYXNlLXRpdGxlXCIpLmlubmVySFRNTCA9IGNoYW5nZUltYWdlW2luZGV4XS5hbHQ7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd2Nhc2UtaW1hZ2VcIikuc3JjID0gY2hhbmdlSW1hZ2VbaW5kZXhdLnNyYztcclxuICAgICAgICB9KVxyXG4gICAgfSkoaSk7XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9