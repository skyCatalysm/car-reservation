(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./assets/js/homepage-jump.js":
/*!************************************!*\
  !*** ./assets/js/homepage-jump.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jump.js */ "./node_modules/jump.js/dist/jump.module.js");
//jump js
 //for each classname called

var jumpOne = document.getElementsByClassName('jump-one');

for (var i = 0; i < jumpOne.length; i++) {
  (function (index) {
    jumpOne[index].addEventListener('click', function (event) {
      Object(jump_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#target-one');
    });
  })(i);
}

var jumpTwo = document.getElementsByClassName('jump-two');

for (var _i = 0; _i < jumpTwo.length; _i++) {
  (function (index) {
    jumpTwo[index].addEventListener('click', function (event) {
      Object(jump_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#target-two');
    });
  })(_i);
}

/***/ }),

/***/ "./node_modules/jump.js/dist/jump.module.js":
/*!**************************************************!*\
  !*** ./node_modules/jump.js/dist/jump.module.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Robert Penner's easeInOutQuad

// find the rest of his easing functions here: http://robertpenner.com/easing/
// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js

var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var jumper = function jumper() {
  // private variable cache
  // no variables are created during a jump, preventing memory leaks

  var element = void 0; // element to scroll to                   (node)

  var start = void 0; // where scroll starts                    (px)
  var stop = void 0; // where scroll stops                     (px)

  var offset = void 0; // adjustment from the stop position      (px)
  var easing = void 0; // easing function                        (function)
  var a11y = void 0; // accessibility support flag             (boolean)

  var distance = void 0; // distance of scroll                     (px)
  var duration = void 0; // scroll duration                        (ms)

  var timeStart = void 0; // time scroll started                    (ms)
  var timeElapsed = void 0; // time spent scrolling thus far          (ms)

  var next = void 0; // next scroll position                   (px)

  var callback = void 0; // to call when done scrolling            (function)

  // scroll position helper

  function location() {
    return window.scrollY || window.pageYOffset;
  }

  // element offset helper

  function top(element) {
    return element.getBoundingClientRect().top + start;
  }

  // rAF loop helper

  function loop(timeCurrent) {
    // store time scroll started, if not started already
    if (!timeStart) {
      timeStart = timeCurrent;
    }

    // determine time spent scrolling so far
    timeElapsed = timeCurrent - timeStart;

    // calculate next scroll position
    next = easing(timeElapsed, start, distance, duration);

    // scroll to it
    window.scrollTo(0, next);

    // check progress
    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop
    : done(); // scrolling is done
  }

  // scroll finished helper

  function done() {
    // account for rAF time rounding inaccuracies
    window.scrollTo(0, start + distance);

    // if scrolling to an element, and accessibility is enabled
    if (element && a11y) {
      // add tabindex indicating programmatic focus
      element.setAttribute('tabindex', '-1');

      // focus the element
      element.focus();
    }

    // if it exists, fire the callback
    if (typeof callback === 'function') {
      callback();
    }

    // reset time for next jump
    timeStart = false;
  }

  // API

  function jump(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // resolve options, or use defaults
    duration = options.duration || 1000;
    offset = options.offset || 0;
    callback = options.callback; // "undefined" is a suitable default, and won't be called
    easing = options.easing || easeInOutQuad;
    a11y = options.a11y || false;

    // cache starting position
    start = location();

    // resolve target
    switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
      // scroll from current position
      case 'number':
        element = undefined; // no element to scroll to
        a11y = false; // make sure accessibility is off
        stop = start + target;
        break;

      // scroll to element (node)
      // bounding rect is relative to the viewport
      case 'object':
        element = target;
        stop = top(element);
        break;

      // scroll to element (selector)
      // bounding rect is relative to the viewport
      case 'string':
        element = document.querySelector(target);
        stop = top(element);
        break;
    }

    // resolve scroll distance, accounting for offset
    distance = stop - start + offset;

    // resolve duration
    switch (_typeof(options.duration)) {
      // number in ms
      case 'number':
        duration = options.duration;
        break;

      // function passed the distance of the scroll
      case 'function':
        duration = options.duration(distance);
        break;
    }

    // start the loop
    window.requestAnimationFrame(loop);
  }

  // expose only the jump method
  return jump;
};

// export singleton

var singleton = jumper();

/* harmony default export */ __webpack_exports__["default"] = (singleton);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaG9tZXBhZ2UtanVtcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanVtcC5qcy9kaXN0L2p1bXAubW9kdWxlLmpzIl0sIm5hbWVzIjpbImp1bXBPbmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwiaW5kZXgiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJqdW1wIiwianVtcFR3byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBLElBQUlBLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxVQUFoQyxDQUFkOztBQUNBLEtBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHSCxPQUFPLENBQUNJLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLEdBQUMsVUFBU0UsS0FBVCxFQUFnQjtBQUNiTCxXQUFPLENBQUNLLEtBQUQsQ0FBUCxDQUFlQyxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxVQUFVQyxLQUFWLEVBQWtCO0FBQ3ZEQyw2REFBSSxDQUFDLGFBQUQsQ0FBSjtBQUNILEtBRkQ7QUFHSCxHQUpELEVBSUdMLENBSkg7QUFLSDs7QUFDRCxJQUFJTSxPQUFPLEdBQUdSLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsVUFBaEMsQ0FBZDs7QUFDQSxLQUFJLElBQUlDLEVBQUMsR0FBRyxDQUFaLEVBQWVBLEVBQUMsR0FBR00sT0FBTyxDQUFDTCxNQUEzQixFQUFtQ0QsRUFBQyxFQUFwQyxFQUF3QztBQUNwQyxHQUFDLFVBQVNFLEtBQVQsRUFBZ0I7QUFDYkksV0FBTyxDQUFDSixLQUFELENBQVAsQ0FBZUMsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBVUMsS0FBVixFQUFrQjtBQUN2REMsNkRBQUksQ0FBQyxhQUFELENBQUo7QUFDSCxLQUZEO0FBR0gsR0FKRCxFQUlHTCxFQUpIO0FBS0gsQzs7Ozs7Ozs7Ozs7O0FDbkJEO0FBQUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCLHFCQUFxQjtBQUNyQixvQkFBb0I7O0FBRXBCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsb0JBQW9COztBQUVwQix3QkFBd0I7QUFDeEIsd0JBQXdCOztBQUV4Qix5QkFBeUI7QUFDekIsMkJBQTJCOztBQUUzQixvQkFBb0I7O0FBRXBCLHdCQUF3Qjs7QUFFeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRWUsd0VBQVMsRUFBQyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9qdW1wIGpzXHJcbmltcG9ydCBqdW1wIGZyb20gJ2p1bXAuanMnO1xyXG5cclxuLy9mb3IgZWFjaCBjbGFzc25hbWUgY2FsbGVkXHJcbmxldCBqdW1wT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnanVtcC1vbmUnKTtcclxuZm9yKGxldCBpID0gMDsgaSA8IGp1bXBPbmUubGVuZ3RoOyBpKyspIHtcclxuICAgIChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgIGp1bXBPbmVbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSAge1xyXG4gICAgICAgICAgICBqdW1wKCcjdGFyZ2V0LW9uZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KShpKTtcclxufVxyXG5sZXQganVtcFR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2p1bXAtdHdvJyk7XHJcbmZvcihsZXQgaSA9IDA7IGkgPCBqdW1wVHdvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAoZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICBqdW1wVHdvW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkgIHtcclxuICAgICAgICAgICAganVtcCgnI3RhcmdldC10d28nKTtcclxuICAgICAgICB9KVxyXG4gICAgfSkoaSk7XHJcbn0iLCIvLyBSb2JlcnQgUGVubmVyJ3MgZWFzZUluT3V0UXVhZFxuXG4vLyBmaW5kIHRoZSByZXN0IG9mIGhpcyBlYXNpbmcgZnVuY3Rpb25zIGhlcmU6IGh0dHA6Ly9yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbi8vIGZpbmQgdGhlbSBleHBvcnRlZCBmb3IgRVM2IGNvbnN1bXB0aW9uIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qYXhnZWxsZXIvZXouanNcblxudmFyIGVhc2VJbk91dFF1YWQgPSBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQsIGIsIGMsIGQpIHtcbiAgdCAvPSBkIC8gMjtcbiAgaWYgKHQgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XG4gIHQtLTtcbiAgcmV0dXJuIC1jIC8gMiAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcbn07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG52YXIganVtcGVyID0gZnVuY3Rpb24ganVtcGVyKCkge1xuICAvLyBwcml2YXRlIHZhcmlhYmxlIGNhY2hlXG4gIC8vIG5vIHZhcmlhYmxlcyBhcmUgY3JlYXRlZCBkdXJpbmcgYSBqdW1wLCBwcmV2ZW50aW5nIG1lbW9yeSBsZWFrc1xuXG4gIHZhciBlbGVtZW50ID0gdm9pZCAwOyAvLyBlbGVtZW50IHRvIHNjcm9sbCB0byAgICAgICAgICAgICAgICAgICAobm9kZSlcblxuICB2YXIgc3RhcnQgPSB2b2lkIDA7IC8vIHdoZXJlIHNjcm9sbCBzdGFydHMgICAgICAgICAgICAgICAgICAgIChweClcbiAgdmFyIHN0b3AgPSB2b2lkIDA7IC8vIHdoZXJlIHNjcm9sbCBzdG9wcyAgICAgICAgICAgICAgICAgICAgIChweClcblxuICB2YXIgb2Zmc2V0ID0gdm9pZCAwOyAvLyBhZGp1c3RtZW50IGZyb20gdGhlIHN0b3AgcG9zaXRpb24gICAgICAocHgpXG4gIHZhciBlYXNpbmcgPSB2b2lkIDA7IC8vIGVhc2luZyBmdW5jdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbilcbiAgdmFyIGExMXkgPSB2b2lkIDA7IC8vIGFjY2Vzc2liaWxpdHkgc3VwcG9ydCBmbGFnICAgICAgICAgICAgIChib29sZWFuKVxuXG4gIHZhciBkaXN0YW5jZSA9IHZvaWQgMDsgLy8gZGlzdGFuY2Ugb2Ygc2Nyb2xsICAgICAgICAgICAgICAgICAgICAgKHB4KVxuICB2YXIgZHVyYXRpb24gPSB2b2lkIDA7IC8vIHNjcm9sbCBkdXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIChtcylcblxuICB2YXIgdGltZVN0YXJ0ID0gdm9pZCAwOyAvLyB0aW1lIHNjcm9sbCBzdGFydGVkICAgICAgICAgICAgICAgICAgICAobXMpXG4gIHZhciB0aW1lRWxhcHNlZCA9IHZvaWQgMDsgLy8gdGltZSBzcGVudCBzY3JvbGxpbmcgdGh1cyBmYXIgICAgICAgICAgKG1zKVxuXG4gIHZhciBuZXh0ID0gdm9pZCAwOyAvLyBuZXh0IHNjcm9sbCBwb3NpdGlvbiAgICAgICAgICAgICAgICAgICAocHgpXG5cbiAgdmFyIGNhbGxiYWNrID0gdm9pZCAwOyAvLyB0byBjYWxsIHdoZW4gZG9uZSBzY3JvbGxpbmcgICAgICAgICAgICAoZnVuY3Rpb24pXG5cbiAgLy8gc2Nyb2xsIHBvc2l0aW9uIGhlbHBlclxuXG4gIGZ1bmN0aW9uIGxvY2F0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIH1cblxuICAvLyBlbGVtZW50IG9mZnNldCBoZWxwZXJcblxuICBmdW5jdGlvbiB0b3AoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHN0YXJ0O1xuICB9XG5cbiAgLy8gckFGIGxvb3AgaGVscGVyXG5cbiAgZnVuY3Rpb24gbG9vcCh0aW1lQ3VycmVudCkge1xuICAgIC8vIHN0b3JlIHRpbWUgc2Nyb2xsIHN0YXJ0ZWQsIGlmIG5vdCBzdGFydGVkIGFscmVhZHlcbiAgICBpZiAoIXRpbWVTdGFydCkge1xuICAgICAgdGltZVN0YXJ0ID0gdGltZUN1cnJlbnQ7XG4gICAgfVxuXG4gICAgLy8gZGV0ZXJtaW5lIHRpbWUgc3BlbnQgc2Nyb2xsaW5nIHNvIGZhclxuICAgIHRpbWVFbGFwc2VkID0gdGltZUN1cnJlbnQgLSB0aW1lU3RhcnQ7XG5cbiAgICAvLyBjYWxjdWxhdGUgbmV4dCBzY3JvbGwgcG9zaXRpb25cbiAgICBuZXh0ID0gZWFzaW5nKHRpbWVFbGFwc2VkLCBzdGFydCwgZGlzdGFuY2UsIGR1cmF0aW9uKTtcblxuICAgIC8vIHNjcm9sbCB0byBpdFxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBuZXh0KTtcblxuICAgIC8vIGNoZWNrIHByb2dyZXNzXG4gICAgdGltZUVsYXBzZWQgPCBkdXJhdGlvbiA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCkgLy8gY29udGludWUgc2Nyb2xsIGxvb3BcbiAgICA6IGRvbmUoKTsgLy8gc2Nyb2xsaW5nIGlzIGRvbmVcbiAgfVxuXG4gIC8vIHNjcm9sbCBmaW5pc2hlZCBoZWxwZXJcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIC8vIGFjY291bnQgZm9yIHJBRiB0aW1lIHJvdW5kaW5nIGluYWNjdXJhY2llc1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzdGFydCArIGRpc3RhbmNlKTtcblxuICAgIC8vIGlmIHNjcm9sbGluZyB0byBhbiBlbGVtZW50LCBhbmQgYWNjZXNzaWJpbGl0eSBpcyBlbmFibGVkXG4gICAgaWYgKGVsZW1lbnQgJiYgYTExeSkge1xuICAgICAgLy8gYWRkIHRhYmluZGV4IGluZGljYXRpbmcgcHJvZ3JhbW1hdGljIGZvY3VzXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICAgICAgLy8gZm9jdXMgdGhlIGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBpZiBpdCBleGlzdHMsIGZpcmUgdGhlIGNhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICAvLyByZXNldCB0aW1lIGZvciBuZXh0IGp1bXBcbiAgICB0aW1lU3RhcnQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIEFQSVxuXG4gIGZ1bmN0aW9uIGp1bXAodGFyZ2V0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgLy8gcmVzb2x2ZSBvcHRpb25zLCBvciB1c2UgZGVmYXVsdHNcbiAgICBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gfHwgMTAwMDtcbiAgICBvZmZzZXQgPSBvcHRpb25zLm9mZnNldCB8fCAwO1xuICAgIGNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjazsgLy8gXCJ1bmRlZmluZWRcIiBpcyBhIHN1aXRhYmxlIGRlZmF1bHQsIGFuZCB3b24ndCBiZSBjYWxsZWRcbiAgICBlYXNpbmcgPSBvcHRpb25zLmVhc2luZyB8fCBlYXNlSW5PdXRRdWFkO1xuICAgIGExMXkgPSBvcHRpb25zLmExMXkgfHwgZmFsc2U7XG5cbiAgICAvLyBjYWNoZSBzdGFydGluZyBwb3NpdGlvblxuICAgIHN0YXJ0ID0gbG9jYXRpb24oKTtcblxuICAgIC8vIHJlc29sdmUgdGFyZ2V0XG4gICAgc3dpdGNoICh0eXBlb2YgdGFyZ2V0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0YXJnZXQpKSB7XG4gICAgICAvLyBzY3JvbGwgZnJvbSBjdXJyZW50IHBvc2l0aW9uXG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBlbGVtZW50ID0gdW5kZWZpbmVkOyAvLyBubyBlbGVtZW50IHRvIHNjcm9sbCB0b1xuICAgICAgICBhMTF5ID0gZmFsc2U7IC8vIG1ha2Ugc3VyZSBhY2Nlc3NpYmlsaXR5IGlzIG9mZlxuICAgICAgICBzdG9wID0gc3RhcnQgKyB0YXJnZXQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBzY3JvbGwgdG8gZWxlbWVudCAobm9kZSlcbiAgICAgIC8vIGJvdW5kaW5nIHJlY3QgaXMgcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBlbGVtZW50ID0gdGFyZ2V0O1xuICAgICAgICBzdG9wID0gdG9wKGVsZW1lbnQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gc2Nyb2xsIHRvIGVsZW1lbnQgKHNlbGVjdG9yKVxuICAgICAgLy8gYm91bmRpbmcgcmVjdCBpcyByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnRcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gICAgICAgIHN0b3AgPSB0b3AoZWxlbWVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIHJlc29sdmUgc2Nyb2xsIGRpc3RhbmNlLCBhY2NvdW50aW5nIGZvciBvZmZzZXRcbiAgICBkaXN0YW5jZSA9IHN0b3AgLSBzdGFydCArIG9mZnNldDtcblxuICAgIC8vIHJlc29sdmUgZHVyYXRpb25cbiAgICBzd2l0Y2ggKF90eXBlb2Yob3B0aW9ucy5kdXJhdGlvbikpIHtcbiAgICAgIC8vIG51bWJlciBpbiBtc1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gZnVuY3Rpb24gcGFzc2VkIHRoZSBkaXN0YW5jZSBvZiB0aGUgc2Nyb2xsXG4gICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbihkaXN0YW5jZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIHN0YXJ0IHRoZSBsb29wXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgfVxuXG4gIC8vIGV4cG9zZSBvbmx5IHRoZSBqdW1wIG1ldGhvZFxuICByZXR1cm4ganVtcDtcbn07XG5cbi8vIGV4cG9ydCBzaW5nbGV0b25cblxudmFyIHNpbmdsZXRvbiA9IGp1bXBlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b247XG4iXSwic291cmNlUm9vdCI6IiJ9