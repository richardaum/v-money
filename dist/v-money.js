(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VMoney"] = factory();
	else
		root["VMoney"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ".";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  prefix: '',
  suffix: '',
  thousands: ',',
  decimal: '.',
  precision: 2
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9vcHRpb25zLmpzIl0sIm5hbWVzIjpbInByZWZpeCIsInN1ZmZpeCIsInRob3VzYW5kcyIsImRlY2ltYWwiLCJwcmVjaXNpb24iXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7QUFDYkEsVUFBUSxFQURLO0FBRWJDLFVBQVEsRUFGSztBQUdiQyxhQUFXLEdBSEU7QUFJYkMsV0FBUyxHQUpJO0FBS2JDLGFBQVc7QUFMRSxDQUFmIiwiZmlsZSI6Im9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmljaGFyZGF1bS9wcm9qZWN0cy92LW1vbmV5Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBwcmVmaXg6ICcnLFxuICBzdWZmaXg6ICcnLFxuICB0aG91c2FuZHM6ICcsJyxcbiAgZGVjaW1hbDogJy4nLFxuICBwcmVjaXNpb246IDJcbn1cbiJdfQ==

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(0);




/* harmony default export */ __webpack_exports__["a"] = (function (el, binding) {
  if (!binding.value) return;
  var opt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__assign__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__options__["a" /* default */], binding.value);

  // v-money used on a component that's not a input
  if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
    var els = el.getElementsByTagName('input');
    if (els.length !== 1) {
      // throw new Error("v-money requires 1 input, found " + els.length)
    } else {
      el = els[0];
    }
  }

  el.oninput = function () {
    var positionFromEnd = el.value.length - el.selectionEnd;
    el.value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* format */])(el.value, opt);
    positionFromEnd = Math.max(positionFromEnd, opt.suffix.length); // right
    positionFromEnd = el.value.length - positionFromEnd;
    positionFromEnd = Math.max(positionFromEnd, opt.prefix.length + 1); // left
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* setCursor */])(el, positionFromEnd);
    el.dispatchEvent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* event */])('change')); // v-model.lazy
  };

  el.onfocus = function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* setCursor */])(el, el.value.length - opt.suffix.length);
  };

  el.oninput();
  el.dispatchEvent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* event */])('input')); // force format after initialization
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kaXJlY3RpdmUuanMiXSwibmFtZXMiOlsiZm9ybWF0Iiwic2V0Q3Vyc29yIiwiZXZlbnQiLCJhc3NpZ24iLCJkZWZhdWx0cyIsImVsIiwiYmluZGluZyIsInZhbHVlIiwib3B0IiwidGFnTmFtZSIsInRvTG9jYWxlVXBwZXJDYXNlIiwiZWxzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJvbmlucHV0IiwicG9zaXRpb25Gcm9tRW5kIiwic2VsZWN0aW9uRW5kIiwiTWF0aCIsIm1heCIsInN1ZmZpeCIsInByZWZpeCIsImRpc3BhdGNoRXZlbnQiLCJvbmZvY3VzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFRQSxNQUFSLEVBQWdCQyxTQUFoQixFQUEyQkMsS0FBM0IsUUFBdUMsU0FBdkM7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFVBQW5CO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixXQUFyQjs7QUFFQSxlQUFlLFVBQVVDLEVBQVYsRUFBY0MsT0FBZCxFQUF1QjtBQUNwQyxNQUFJLENBQUNBLFFBQVFDLEtBQWIsRUFBb0I7QUFDcEIsTUFBSUMsTUFBTUwsT0FBT0MsUUFBUCxFQUFpQkUsUUFBUUMsS0FBekIsQ0FBVjs7QUFFQTtBQUNBLE1BQUlGLEdBQUdJLE9BQUgsQ0FBV0MsaUJBQVgsT0FBbUMsT0FBdkMsRUFBZ0Q7QUFDOUMsUUFBSUMsTUFBTU4sR0FBR08sb0JBQUgsQ0FBd0IsT0FBeEIsQ0FBVjtBQUNBLFFBQUlELElBQUlFLE1BQUosS0FBZSxDQUFuQixFQUFzQjtBQUNwQjtBQUNELEtBRkQsTUFFTztBQUNMUixXQUFLTSxJQUFJLENBQUosQ0FBTDtBQUNEO0FBQ0Y7O0FBRUROLEtBQUdTLE9BQUgsR0FBYSxZQUFZO0FBQ3ZCLFFBQUlDLGtCQUFrQlYsR0FBR0UsS0FBSCxDQUFTTSxNQUFULEdBQWtCUixHQUFHVyxZQUEzQztBQUNBWCxPQUFHRSxLQUFILEdBQVdQLE9BQU9LLEdBQUdFLEtBQVYsRUFBaUJDLEdBQWpCLENBQVg7QUFDQU8sc0JBQWtCRSxLQUFLQyxHQUFMLENBQVNILGVBQVQsRUFBMEJQLElBQUlXLE1BQUosQ0FBV04sTUFBckMsQ0FBbEIsQ0FIdUIsQ0FHd0M7QUFDL0RFLHNCQUFrQlYsR0FBR0UsS0FBSCxDQUFTTSxNQUFULEdBQWtCRSxlQUFwQztBQUNBQSxzQkFBa0JFLEtBQUtDLEdBQUwsQ0FBU0gsZUFBVCxFQUEwQlAsSUFBSVksTUFBSixDQUFXUCxNQUFYLEdBQW9CLENBQTlDLENBQWxCLENBTHVCLENBSzRDO0FBQ25FWixjQUFVSSxFQUFWLEVBQWNVLGVBQWQ7QUFDQVYsT0FBR2dCLGFBQUgsQ0FBaUJuQixNQUFNLFFBQU4sQ0FBakIsRUFQdUIsQ0FPVztBQUNuQyxHQVJEOztBQVVBRyxLQUFHaUIsT0FBSCxHQUFhLFlBQVk7QUFDdkJyQixjQUFVSSxFQUFWLEVBQWNBLEdBQUdFLEtBQUgsQ0FBU00sTUFBVCxHQUFrQkwsSUFBSVcsTUFBSixDQUFXTixNQUEzQztBQUNELEdBRkQ7O0FBSUFSLEtBQUdTLE9BQUg7QUFDQVQsS0FBR2dCLGFBQUgsQ0FBaUJuQixNQUFNLE9BQU4sQ0FBakIsRUE3Qm9DLENBNkJIO0FBQ2xDIiwiZmlsZSI6ImRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWNoYXJkYXVtL3Byb2plY3RzL3YtbW9uZXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Zvcm1hdCwgc2V0Q3Vyc29yLCBldmVudH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBhc3NpZ24gZnJvbSAnLi9hc3NpZ24nXG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9vcHRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZWwsIGJpbmRpbmcpIHtcbiAgaWYgKCFiaW5kaW5nLnZhbHVlKSByZXR1cm5cbiAgdmFyIG9wdCA9IGFzc2lnbihkZWZhdWx0cywgYmluZGluZy52YWx1ZSlcblxuICAvLyB2LW1vbmV5IHVzZWQgb24gYSBjb21wb25lbnQgdGhhdCdzIG5vdCBhIGlucHV0XG4gIGlmIChlbC50YWdOYW1lLnRvTG9jYWxlVXBwZXJDYXNlKCkgIT09ICdJTlBVVCcpIHtcbiAgICB2YXIgZWxzID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylcbiAgICBpZiAoZWxzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwidi1tb25leSByZXF1aXJlcyAxIGlucHV0LCBmb3VuZCBcIiArIGVscy5sZW5ndGgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsID0gZWxzWzBdXG4gICAgfVxuICB9XG5cbiAgZWwub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9zaXRpb25Gcm9tRW5kID0gZWwudmFsdWUubGVuZ3RoIC0gZWwuc2VsZWN0aW9uRW5kXG4gICAgZWwudmFsdWUgPSBmb3JtYXQoZWwudmFsdWUsIG9wdClcbiAgICBwb3NpdGlvbkZyb21FbmQgPSBNYXRoLm1heChwb3NpdGlvbkZyb21FbmQsIG9wdC5zdWZmaXgubGVuZ3RoKSAvLyByaWdodFxuICAgIHBvc2l0aW9uRnJvbUVuZCA9IGVsLnZhbHVlLmxlbmd0aCAtIHBvc2l0aW9uRnJvbUVuZFxuICAgIHBvc2l0aW9uRnJvbUVuZCA9IE1hdGgubWF4KHBvc2l0aW9uRnJvbUVuZCwgb3B0LnByZWZpeC5sZW5ndGggKyAxKSAvLyBsZWZ0XG4gICAgc2V0Q3Vyc29yKGVsLCBwb3NpdGlvbkZyb21FbmQpXG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCgnY2hhbmdlJykpIC8vIHYtbW9kZWwubGF6eVxuICB9XG5cbiAgZWwub25mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRDdXJzb3IoZWwsIGVsLnZhbHVlLmxlbmd0aCAtIG9wdC5zdWZmaXgubGVuZ3RoKVxuICB9XG5cbiAgZWwub25pbnB1dCgpXG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQoJ2lucHV0JykpIC8vIGZvcmNlIGZvcm1hdCBhZnRlciBpbml0aWFsaXphdGlvblxufVxuIl19

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unformat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return event; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__options__ = __webpack_require__(0);


function format(input) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_0__options__["a" /* default */];

  if (typeof input === 'number') {
    input = input.toFixed(fixed(opt.precision));
  }
  var negative = input.indexOf('-') >= 0 ? '-' : '';

  var numbers = onlyNumbers(input);
  var currency = numbersToCurrency(numbers, opt.precision);
  var parts = toStr(currency).split('.');
  var integer = parts[0];
  var decimal = parts[1];
  integer = addThousandSeparator(integer, opt.thousands);
  return negative + opt.prefix + joinIntegerAndDecimal(integer, decimal, opt.decimal) + opt.suffix;
}

function unformat(input, precision) {
  var negative = input.indexOf('-') >= 0 ? -1 : 1;
  var numbers = onlyNumbers(input);
  var currency = numbersToCurrency(numbers, precision);
  return parseFloat(currency) * negative;
}

function onlyNumbers(input) {
  return toStr(input).replace(/\D+/g, '') || '0';
}

// Uncaught RangeError: toFixed() digits argument must be between 0 and 20 at Number.toFixed
function fixed(precision) {
  return between(0, precision, 20);
}

function between(min, n, max) {
  return Math.max(min, Math.min(n, max));
}

function numbersToCurrency(numbers, precision) {
  var exp = Math.pow(10, precision);
  var float = parseFloat(numbers) / exp;
  return float.toFixed(fixed(precision));
}

function addThousandSeparator(integer, separator) {
  return integer.replace(/(\d)(?=(?:\d{3})+\b)/gm, '$1' + separator);
}

function currencyToIntegerAndDecimal(float) {
  return toStr(float).split('.');
}

function joinIntegerAndDecimal(integer, decimal, separator) {
  return decimal ? integer + separator + decimal : integer;
}

function toStr(value) {
  return value ? value.toString() : '';
}

function setCursor(el, position) {
  var setSelectionRange = function setSelectionRange() {
    el.setSelectionRange(position, position);
  };
  if (el === document.activeElement) {
    setSelectionRange();
    setTimeout(setSelectionRange, 1); // Android Fix
  }
}

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way
function event(name) {
  var evt = document.createEvent('Event');
  evt.initEvent(name, true, true);
  return evt;
}


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsImZvcm1hdCIsImlucHV0Iiwib3B0IiwidG9GaXhlZCIsImZpeGVkIiwicHJlY2lzaW9uIiwibmVnYXRpdmUiLCJpbmRleE9mIiwibnVtYmVycyIsIm9ubHlOdW1iZXJzIiwiY3VycmVuY3kiLCJudW1iZXJzVG9DdXJyZW5jeSIsInBhcnRzIiwidG9TdHIiLCJzcGxpdCIsImludGVnZXIiLCJkZWNpbWFsIiwiYWRkVGhvdXNhbmRTZXBhcmF0b3IiLCJ0aG91c2FuZHMiLCJwcmVmaXgiLCJqb2luSW50ZWdlckFuZERlY2ltYWwiLCJzdWZmaXgiLCJ1bmZvcm1hdCIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwiYmV0d2VlbiIsIm1pbiIsIm4iLCJtYXgiLCJNYXRoIiwiZXhwIiwicG93IiwiZmxvYXQiLCJzZXBhcmF0b3IiLCJjdXJyZW5jeVRvSW50ZWdlckFuZERlY2ltYWwiLCJ2YWx1ZSIsInRvU3RyaW5nIiwic2V0Q3Vyc29yIiwiZWwiLCJwb3NpdGlvbiIsInNldFNlbGVjdGlvblJhbmdlIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwic2V0VGltZW91dCIsImV2ZW50IiwibmFtZSIsImV2dCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxRQUFQLE1BQXFCLFdBQXJCOztBQUVBLFNBQVNDLE1BQVQsQ0FBaUJDLEtBQWpCLEVBQXdDO0FBQUEsTUFBaEJDLEdBQWdCLHVFQUFWSCxRQUFVOztBQUN0QyxNQUFJLE9BQU9FLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0JBLFlBQVFBLE1BQU1FLE9BQU4sQ0FBY0MsTUFBTUYsSUFBSUcsU0FBVixDQUFkLENBQVI7QUFDRDtBQUNELE1BQUlDLFdBQVdMLE1BQU1NLE9BQU4sQ0FBYyxHQUFkLEtBQXNCLENBQXRCLEdBQTBCLEdBQTFCLEdBQWdDLEVBQS9DOztBQUVBLE1BQUlDLFVBQVVDLFlBQVlS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QThCLENBQTlCLEVBRmlDLENBRUE7QUFDbEM7QUFDRjs7QUFFRDtBQUNBLFNBQVNJLEtBQVQsQ0FBZ0JDLElBQWhCLEVBQXNCO0FBQ3BCLE1BQUlDLE1BQU1MLFNBQVNNLFdBQVQsQ0FBcUIsT0FBckIsQ0FBVjtBQUNBRCxNQUFJRSxTQUFKLENBQWNILElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsSUFBMUI7QUFDQSxTQUFPQyxHQUFQO0FBQ0Q7O0FBRUQsU0FDRTlDLE1BREYsRUFFRXNCLFFBRkYsRUFHRWUsU0FIRixFQUlFTyxLQUpGIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpY2hhcmRhdW0vcHJvamVjdHMvdi1tb25leSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWZhdWx0cyBmcm9tICcuL29wdGlvbnMnXG5cbmZ1bmN0aW9uIGZvcm1hdCAoaW5wdXQsIG9wdCA9IGRlZmF1bHRzKSB7XG4gIGlmICh0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInKSB7XG4gICAgaW5wdXQgPSBpbnB1dC50b0ZpeGVkKGZpeGVkKG9wdC5wcmVjaXNpb24pKVxuICB9XG4gIHZhciBuZWdhdGl2ZSA9IGlucHV0LmluZGV4T2YoJy0nKSA+PSAwID8gJy0nIDogJydcblxuICB2YXIgbnVtYmVycyA9IG9ubHlOdW1iZXJzKGlucHV0KVxuICB2YXIgY3VycmVuY3kgPSBudW1iZXJzVG9DdXJyZW5jeShudW1iZXJzLCBvcHQucHJlY2lzaW9uKVxuICB2YXIgcGFydHMgPSB0b1N0cihjdXJyZW5jeSkuc3BsaXQoJy4nKVxuICB2YXIgaW50ZWdlciA9IHBhcnRzWzBdXG4gIHZhciBkZWNpbWFsID0gcGFydHNbMV1cbiAgaW50ZWdlciA9IGFkZFRob3VzYW5kU2VwYXJhdG9yKGludGVnZXIsIG9wdC50aG91c2FuZHMpXG4gIHJldHVybiBuZWdhdGl2ZSArIG9wdC5wcmVmaXggKyBqb2luSW50ZWdlckFuZERlY2ltYWwoaW50ZWdlciwgZGVjaW1hbCwgb3B0LmRlY2ltYWwpICsgb3B0LnN1ZmZpeFxufVxuXG5mdW5jdGlvbiB1bmZvcm1hdCAoaW5wdXQsIHByZWNpc2lvbikge1xuICB2YXIgbmVnYXRpdmUgPSBpbnB1dC5pbmRleE9mKCctJykgPj0gMCA/IC0xIDogMVxuICB2YXIgbnVtYmVycyA9IG9ubHlOdW1iZXJzKGlucHV0KVxuICB2YXIgY3VycmVuY3kgPSBudW1iZXJzVG9DdXJyZW5jeShudW1iZXJzLCBwcmVjaXNpb24pXG4gIHJldHVybiBwYXJzZUZsb2F0KGN1cnJlbmN5KSAqIG5lZ2F0aXZlXG59XG5cbmZ1bmN0aW9uIG9ubHlOdW1iZXJzIChpbnB1dCkge1xuICByZXR1cm4gdG9TdHIoaW5wdXQpLnJlcGxhY2UoL1xcRCsvZywgJycpIHx8ICcwJ1xufVxuXG4vLyBVbmNhdWdodCBSYW5nZUVycm9yOiB0b0ZpeGVkKCkgZGlnaXRzIGFyZ3VtZW50IG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyMCBhdCBOdW1iZXIudG9GaXhlZFxuZnVuY3Rpb24gZml4ZWQgKHByZWNpc2lvbikge1xuICByZXR1cm4gYmV0d2VlbigwLCBwcmVjaXNpb24sIDIwKVxufVxuXG5mdW5jdGlvbiBiZXR3ZWVuIChtaW4sIG4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihuLCBtYXgpKVxufVxuXG5mdW5jdGlvbiBudW1iZXJzVG9DdXJyZW5jeSAobnVtYmVycywgcHJlY2lzaW9uKSB7XG4gIHZhciBleHAgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKVxuICB2YXIgZmxvYXQgPSBwYXJzZUZsb2F0KG51bWJlcnMpIC8gZXhwXG4gIHJldHVybiBmbG9hdC50b0ZpeGVkKGZpeGVkKHByZWNpc2lvbikpXG59XG5cbmZ1bmN0aW9uIGFkZFRob3VzYW5kU2VwYXJhdG9yIChpbnRlZ2VyLCBzZXBhcmF0b3IpIHtcbiAgcmV0dXJuIGludGVnZXIucmVwbGFjZSgvKFxcZCkoPz0oPzpcXGR7M30pK1xcYikvZ20sIGAkMSR7c2VwYXJhdG9yfWApXG59XG5cbmZ1bmN0aW9uIGN1cnJlbmN5VG9JbnRlZ2VyQW5kRGVjaW1hbCAoZmxvYXQpIHtcbiAgcmV0dXJuIHRvU3RyKGZsb2F0KS5zcGxpdCgnLicpXG59XG5cbmZ1bmN0aW9uIGpvaW5JbnRlZ2VyQW5kRGVjaW1hbCAoaW50ZWdlciwgZGVjaW1hbCwgc2VwYXJhdG9yKSB7XG4gIHJldHVybiBkZWNpbWFsID8gaW50ZWdlciArIHNlcGFyYXRvciArIGRlY2ltYWwgOiBpbnRlZ2VyXG59XG5cbmZ1bmN0aW9uIHRvU3RyICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyB2YWx1ZS50b1N0cmluZygpIDogJydcbn1cblxuZnVuY3Rpb24gc2V0Q3Vyc29yIChlbCwgcG9zaXRpb24pIHtcbiAgdmFyIHNldFNlbGVjdGlvblJhbmdlID0gZnVuY3Rpb24gKCkgeyBlbC5zZXRTZWxlY3Rpb25SYW5nZShwb3NpdGlvbiwgcG9zaXRpb24pIH1cbiAgaWYgKGVsID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgc2V0U2VsZWN0aW9uUmFuZ2UoKVxuICAgIHNldFRpbWVvdXQoc2V0U2VsZWN0aW9uUmFuZ2UsIDEpIC8vIEFuZHJvaWQgRml4XG4gIH1cbn1cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvR3VpZGUvRXZlbnRzL0NyZWF0aW5nX2FuZF90cmlnZ2VyaW5nX2V2ZW50cyNUaGVfb2xkLWZhc2hpb25lZF93YXlcbmZ1bmN0aW9uIGV2ZW50IChuYW1lKSB7XG4gIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuICBldnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpXG4gIHJldHVybiBldnRcbn1cblxuZXhwb3J0IHtcbiAgZm9ybWF0LFxuICB1bmZvcm1hdCxcbiAgc2V0Q3Vyc29yLFxuICBldmVudFxufVxuIl19

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(0);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Money", function() { return __WEBPACK_IMPORTED_MODULE_0__component___default.a; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VMoney", function() { return __WEBPACK_IMPORTED_MODULE_1__directive__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return __WEBPACK_IMPORTED_MODULE_2__options__["a"]; });



var VERSION = "0.8.1";



function install(Vue, globalOptions) {
  if (globalOptions) {
    Object.keys(globalOptions).map(function (key) {
      __WEBPACK_IMPORTED_MODULE_2__options__["a" /* default */][key] = globalOptions[key];
    });
  }
  Vue.directive('money', __WEBPACK_IMPORTED_MODULE_1__directive__["a" /* default */]);
  Vue.component('money', __WEBPACK_IMPORTED_MODULE_0__component___default.a);
}

/* harmony default export */ __webpack_exports__["default"] = (install);

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb25leSIsIlZNb25leSIsIm9wdGlvbnMiLCJWRVJTSU9OIiwicHJvY2Nlc3MiLCJlbnYiLCJpbnN0YWxsIiwiVnVlIiwiZ2xvYmFsT3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJkaXJlY3RpdmUiLCJjb21wb25lbnQiLCJ3aW5kb3ciLCJ1c2UiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsYUFBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixXQUFwQjtBQUNBLElBQU1DLFVBQVVDLFNBQVNDLEdBQVQsQ0FBYUYsT0FBN0I7O0FBRUEsU0FDRUgsS0FERixFQUVFQyxNQUZGLEVBR0VDLE9BSEYsRUFJRUMsT0FKRjs7QUFPQSxTQUFTRyxPQUFULENBQWtCQyxHQUFsQixFQUF1QkMsYUFBdkIsRUFBc0M7QUFDcEMsTUFBSUEsYUFBSixFQUFtQjtBQUNqQkMsV0FBT0MsSUFBUCxDQUFZRixhQUFaLEVBQTJCRyxHQUEzQixDQUErQixVQUFTQyxHQUFULEVBQWE7QUFDMUNWLGNBQVFVLEdBQVIsSUFBZUosY0FBY0ksR0FBZCxDQUFmO0FBQ0QsS0FGRDtBQUdEO0FBQ0RMLE1BQUlNLFNBQUosQ0FBYyxPQUFkLEVBQXVCWixNQUF2QjtBQUNBTSxNQUFJTyxTQUFKLENBQWMsT0FBZCxFQUF1QmQsS0FBdkI7QUFDRDs7QUFFRCxlQUFlTSxPQUFmOztBQUVBO0FBQ0EsSUFBSSxPQUFPUyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPUixHQUE1QyxFQUFpRDtBQUMvQ1EsU0FBT1IsR0FBUCxDQUFXUyxHQUFYLENBQWVWLE9BQWY7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWNoYXJkYXVtL3Byb2plY3RzL3YtbW9uZXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9uZXkgZnJvbSAnLi9jb21wb25lbnQnXG5pbXBvcnQgVk1vbmV5IGZyb20gJy4vZGlyZWN0aXZlJ1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJ1xuY29uc3QgVkVSU0lPTiA9IHByb2NjZXNzLmVudi5WRVJTSU9OXG5cbmV4cG9ydCB7XG4gIE1vbmV5LFxuICBWTW9uZXksXG4gIG9wdGlvbnMsXG4gIFZFUlNJT05cbn1cblxuZnVuY3Rpb24gaW5zdGFsbCAoVnVlLCBnbG9iYWxPcHRpb25zKSB7XG4gIGlmIChnbG9iYWxPcHRpb25zKSB7XG4gICAgT2JqZWN0LmtleXMoZ2xvYmFsT3B0aW9ucykubWFwKGZ1bmN0aW9uKGtleSl7XG4gICAgICBvcHRpb25zW2tleV0gPSBnbG9iYWxPcHRpb25zW2tleV1cbiAgICB9KVxuICB9XG4gIFZ1ZS5kaXJlY3RpdmUoJ21vbmV5JywgVk1vbmV5KVxuICBWdWUuY29tcG9uZW50KCdtb25leScsIE1vbmV5KVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbnN0YWxsXG5cbi8vIEluc3RhbGwgYnkgZGVmYXVsdCBpZiBpbmNsdWRlZCBmcm9tIHNjcmlwdCB0YWdcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWUudXNlKGluc3RhbGwpXG59XG4iXX0=

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Money',
  props: {
    value: {
      required: true,
      type: [Number, String],
      default: 0
    },
    masked: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].precision;
      }
    },
    decimal: {
      type: String,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].decimal;
      }
    },
    thousands: {
      type: String,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].thousands;
      }
    },
    prefix: {
      type: String,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].prefix;
      }
    },
    suffix: {
      type: String,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_1__options__["a" /* default */].suffix;
      }
    }
  },

  directives: { money: __WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */] },

  data: function data() {
    return {
      formattedValue: ''
    };
  },


  watch: {
    value: {
      immediate: true,
      handler: function handler(newValue, oldValue) {
        var formatted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* format */])(newValue, this.$props);
        if (formatted !== this.formattedValue) {
          this.formattedValue = formatted;
        }
      }
    }
  },

  methods: {
    change: function change(evt) {
      this.$emit('input', this.masked ? evt.target.value : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* unformat */])(evt.target.value, this.precision));
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnQudnVlIl0sIm5hbWVzIjpbIm1vbmV5IiwiZGVmYXVsdHMiLCJmb3JtYXQiLCJ1bmZvcm1hdCIsIm5hbWUiLCJwcm9wcyIsInZhbHVlIiwicmVxdWlyZWQiLCJ0eXBlIiwiTnVtYmVyIiwiU3RyaW5nIiwiZGVmYXVsdCIsIm1hc2tlZCIsIkJvb2xlYW4iLCJwcmVjaXNpb24iLCJkZWNpbWFsIiwidGhvdXNhbmRzIiwicHJlZml4Iiwic3VmZml4IiwiZGlyZWN0aXZlcyIsImRhdGEiLCJmb3JtYXR0ZWRWYWx1ZSIsIndhdGNoIiwiaW1tZWRpYXRlIiwiaGFuZGxlciIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJmb3JtYXR0ZWQiLCIkcHJvcHMiLCJtZXRob2RzIiwiY2hhbmdlIiwiZXZ0IiwiJGVtaXQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBT0EsS0FBUCxNQUFrQixhQUFsQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsV0FBckI7QUFDQSxTQUFRQyxNQUFSLEVBQWdCQyxRQUFoQixRQUErQixTQUEvQjs7QUFFQSxlQUFlO0FBQ2JDLFFBQU0sT0FETztBQUViQyxTQUFPO0FBQ0xDLFdBQU87QUFDTEMsZ0JBQVUsSUFETDtBQUVMQyxZQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQUZEO0FBR0xDLGVBQVM7QUFISixLQURGO0FBTUxDLFlBQVE7QUFDTkosWUFBTUssT0FEQTtBQUVORixlQUFTO0FBRkgsS0FOSDtBQVVMRyxlQUFXO0FBQ1ROLFlBQU1DLE1BREc7QUFFVEUsZUFBUztBQUFBLGVBQU1WLFNBQVNhLFNBQWY7QUFBQTtBQUZBLEtBVk47QUFjTEMsYUFBUztBQUNQUCxZQUFNRSxNQURDO0FBRVBDLGVBQVM7QUFBQSxlQUFNVixTQUFTYyxPQUFmO0FBQUE7QUFGRixLQWRKO0FBa0JMQyxlQUFXO0FBQ1RSLFlBQU1FLE1BREc7QUFFVEMsZUFBUztBQUFBLGVBQU1WLFNBQVNlLFNBQWY7QUFBQTtBQUZBLEtBbEJOO0FBc0JMQyxZQUFRO0FBQ05ULFlBQU1FLE1BREE7QUFFTkMsZUFBUztBQUFBLGVBQU1WLFNBQVNnQixNQUFmO0FBQUE7QUFGSCxLQXRCSDtBQTBCTEMsWUFBUTtBQUNOVixZQUFNRSxNQURBO0FBRU5DLGVBQVM7QUFBQSxlQUFNVixTQUFTaUIsTUFBZjtBQUFBO0FBRkg7QUExQkgsR0FGTTs7QUFrQ2JDLGNBQVksRUFBQ25CLFlBQUQsRUFsQ0M7O0FBb0Nib0IsTUFwQ2Esa0JBb0NMO0FBQ04sV0FBTztBQUNMQyxzQkFBZ0I7QUFEWCxLQUFQO0FBR0QsR0F4Q1k7OztBQTBDYkMsU0FBTztBQUNMaEIsV0FBTztBQUNMaUIsaUJBQVcsSUFETjtBQUVMQyxhQUZLLG1CQUVJQyxRQUZKLEVBRWNDLFFBRmQsRUFFd0I7QUFDM0IsWUFBSUMsWUFBWXpCLE9BQU91QixRQUFQLEVBQWlCLEtBQUtHLE1BQXRCLENBQWhCO0FBQ0EsWUFBSUQsY0FBYyxLQUFLTixjQUF2QixFQUF1QztBQUNyQyxlQUFLQSxjQUFMLEdBQXNCTSxTQUF0QjtBQUNEO0FBQ0Y7QUFQSTtBQURGLEdBMUNNOztBQXNEYkUsV0FBUztBQUNQQyxVQURPLGtCQUNDQyxHQURELEVBQ007QUFDWCxXQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQixLQUFLcEIsTUFBTCxHQUFjbUIsSUFBSUUsTUFBSixDQUFXM0IsS0FBekIsR0FBaUNILFNBQVM0QixJQUFJRSxNQUFKLENBQVczQixLQUFwQixFQUEyQixLQUFLUSxTQUFoQyxDQUFyRDtBQUNEO0FBSE07QUF0REksQ0FBZiIsImZpbGUiOiJjb21wb25lbnQudnVlIiwic291cmNlUm9vdCI6Ii9ob21lL3JpY2hhcmRhdW0vcHJvamVjdHMvdi1tb25leSIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5pbXBvcnQgbW9uZXkgZnJvbSAnLi9kaXJlY3RpdmUnXG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9vcHRpb25zJ1xuaW1wb3J0IHtmb3JtYXQsIHVuZm9ybWF0fSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdNb25leScsXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIG1hc2tlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBwcmVjaXNpb246IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6ICgpID0+IGRlZmF1bHRzLnByZWNpc2lvblxuICAgIH0sXG4gICAgZGVjaW1hbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogKCkgPT4gZGVmYXVsdHMuZGVjaW1hbFxuICAgIH0sXG4gICAgdGhvdXNhbmRzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAoKSA9PiBkZWZhdWx0cy50aG91c2FuZHNcbiAgICB9LFxuICAgIHByZWZpeDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogKCkgPT4gZGVmYXVsdHMucHJlZml4XG4gICAgfSxcbiAgICBzdWZmaXg6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IGRlZmF1bHRzLnN1ZmZpeFxuICAgIH1cbiAgfSxcblxuICBkaXJlY3RpdmVzOiB7bW9uZXl9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZTogJydcbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZToge1xuICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgaGFuZGxlciAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHZhciBmb3JtYXR0ZWQgPSBmb3JtYXQobmV3VmFsdWUsIHRoaXMuJHByb3BzKVxuICAgICAgICBpZiAoZm9ybWF0dGVkICE9PSB0aGlzLmZvcm1hdHRlZFZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5mb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdHRlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjaGFuZ2UgKGV2dCkge1xuICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLm1hc2tlZCA/IGV2dC50YXJnZXQudmFsdWUgOiB1bmZvcm1hdChldnQudGFyZ2V0LnZhbHVlLCB0aGlzLnByZWNpc2lvbikpXG4gICAgfVxuICB9XG59XG4iXX0=

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (defaults, extras) {
  defaults = defaults || {};
  extras = extras || {};
  return Object.keys(defaults).concat(Object.keys(extras)).reduce(function (acc, val) {
    acc[val] = extras[val] === undefined ? defaults[val] : extras[val];
    return acc;
  }, {});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NpZ24uanMiXSwibmFtZXMiOlsiZGVmYXVsdHMiLCJleHRyYXMiLCJPYmplY3QiLCJrZXlzIiwiY29uY2F0IiwicmVkdWNlIiwiYWNjIiwidmFsIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLFVBQVVBLFFBQVYsRUFBb0JDLE1BQXBCLEVBQTRCO0FBQ3pDRCxhQUFXQSxZQUFZLEVBQXZCO0FBQ0FDLFdBQVNBLFVBQVUsRUFBbkI7QUFDQSxTQUFPQyxPQUFPQyxJQUFQLENBQVlILFFBQVosRUFBc0JJLE1BQXRCLENBQTZCRixPQUFPQyxJQUFQLENBQVlGLE1BQVosQ0FBN0IsRUFBa0RJLE1BQWxELENBQTBELFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUNuRkQsUUFBSUMsR0FBSixJQUFXTixPQUFPTSxHQUFQLE1BQWdCQyxTQUFoQixHQUE0QlIsU0FBU08sR0FBVCxDQUE1QixHQUE0Q04sT0FBT00sR0FBUCxDQUF2RDtBQUNBLFdBQU9ELEdBQVA7QUFDRCxHQUhNLEVBR0osRUFISSxDQUFQO0FBSUQiLCJmaWxlIjoiYXNzaWduLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpY2hhcmRhdW0vcHJvamVjdHMvdi1tb25leSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkZWZhdWx0cywgZXh0cmFzKSB7XG4gIGRlZmF1bHRzID0gZGVmYXVsdHMgfHwge31cbiAgZXh0cmFzID0gZXh0cmFzIHx8IHt9XG4gIHJldHVybiBPYmplY3Qua2V5cyhkZWZhdWx0cykuY29uY2F0KE9iamVjdC5rZXlzKGV4dHJhcykpLnJlZHVjZSggZnVuY3Rpb24gKGFjYywgdmFsKSB7XG4gICAgYWNjW3ZhbF0gPSBleHRyYXNbdmFsXSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdHNbdmFsXSA6IGV4dHJhc1t2YWxdXG4gICAgcmV0dXJuIGFjY1xuICB9LCB7fSlcbn1cbiJdfQ==

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    directives: [{
      name: "money",
      rawName: "v-money",
      value: ({
        precision: _vm.precision,
        decimal: _vm.decimal,
        thousands: _vm.thousands,
        prefix: _vm.prefix,
        suffix: _vm.suffix
      }),
      expression: "{precision, decimal, thousands, prefix, suffix}"
    }],
    staticClass: "v-money",
    attrs: {
      "type": "tel"
    },
    domProps: {
      "value": _vm.formattedValue
    },
    on: {
      "change": _vm.change
    }
  })
},staticRenderFns: []}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
});