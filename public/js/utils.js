/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/utils.js":
/*!*******************************!*\
  !*** ./resources/js/utils.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Utils =\n/*#__PURE__*/\nfunction () {\n  function Utils() {\n    _classCallCheck(this, Utils);\n  }\n\n  _createClass(Utils, null, [{\n    key: \"setFontStyle\",\n    value: function setFontStyle(text, style, maxWidth) {\n      var maxFontSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 40;\n      var minFontSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 18;\n      var align = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'center';\n      style.fontSize = maxFontSize;\n      style.wordWrap = false;\n      style.align = align;\n      var width = PIXI.TextMetrics.measureText(text, style).width;\n\n      while (width > maxWidth && style.fontSize > minFontSize) {\n        style.fontSize -= 1;\n        width = PIXI.TextMetrics.measureText(text, style).width;\n      }\n\n      if (width > maxWidth && style.fontSize === minFontSize) {\n        style.wordWrap = true;\n        style.breakWords = true;\n        style.wordWrapWidth = maxWidth;\n      }\n\n      return style;\n    }\n  }]);\n\n  return Utils;\n}();\n\nmodule.exports = Utils;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXRpbHMuanM/YTM0MyJdLCJuYW1lcyI6WyJVdGlscyIsInRleHQiLCJzdHlsZSIsIm1heFdpZHRoIiwibWF4Rm9udFNpemUiLCJtaW5Gb250U2l6ZSIsImFsaWduIiwiZm9udFNpemUiLCJ3b3JkV3JhcCIsIndpZHRoIiwiUElYSSIsIlRleHRNZXRyaWNzIiwibWVhc3VyZVRleHQiLCJicmVha1dvcmRzIiwid29yZFdyYXBXaWR0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxLOzs7Ozs7Ozs7aUNBR0FDLEksRUFBTUMsSyxFQUFPQyxRLEVBQ0s7QUFBQSxVQURLQyxXQUNMLHVFQURtQixFQUNuQjtBQUFBLFVBRHVCQyxXQUN2Qix1RUFEcUMsRUFDckM7QUFBQSxVQUFsQkMsS0FBa0IsdUVBQVYsUUFBVTtBQUNwQkosV0FBSyxDQUFDSyxRQUFOLEdBQWlCSCxXQUFqQjtBQUNBRixXQUFLLENBQUNNLFFBQU4sR0FBaUIsS0FBakI7QUFDQU4sV0FBSyxDQUFDSSxLQUFOLEdBQWNBLEtBQWQ7QUFDQSxVQUFJRyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsV0FBTCxDQUFpQkMsV0FBakIsQ0FBNkJYLElBQTdCLEVBQW1DQyxLQUFuQyxFQUEwQ08sS0FBdEQ7O0FBQ0EsYUFBT0EsS0FBSyxHQUFHTixRQUFSLElBQW9CRCxLQUFLLENBQUNLLFFBQU4sR0FBaUJGLFdBQTVDLEVBQXlEO0FBQ3ZESCxhQUFLLENBQUNLLFFBQU4sSUFBa0IsQ0FBbEI7QUFDQUUsYUFBSyxHQUFHQyxJQUFJLENBQUNDLFdBQUwsQ0FBaUJDLFdBQWpCLENBQTZCWCxJQUE3QixFQUFtQ0MsS0FBbkMsRUFBMENPLEtBQWxEO0FBQ0Q7O0FBQ0QsVUFBSUEsS0FBSyxHQUFHTixRQUFSLElBQW9CRCxLQUFLLENBQUNLLFFBQU4sS0FBbUJGLFdBQTNDLEVBQXdEO0FBQ3RESCxhQUFLLENBQUNNLFFBQU4sR0FBaUIsSUFBakI7QUFDQU4sYUFBSyxDQUFDVyxVQUFOLEdBQW1CLElBQW5CO0FBQ0FYLGFBQUssQ0FBQ1ksYUFBTixHQUFzQlgsUUFBdEI7QUFDRDs7QUFDRCxhQUFPRCxLQUFQO0FBQ0Q7Ozs7OztBQUlIYSxNQUFNLENBQUNDLE9BQVAsR0FBaUJoQixLQUFqQiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy91dGlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFV0aWxzIHtcblxuICBzdGF0aWMgc2V0Rm9udFN0eWxlKFxuICAgICAgdGV4dCwgc3R5bGUsIG1heFdpZHRoLCBtYXhGb250U2l6ZSA9IDQwLCBtaW5Gb250U2l6ZSA9IDE4LFxuICAgICAgYWxpZ24gPSAnY2VudGVyJykge1xuICAgIHN0eWxlLmZvbnRTaXplID0gbWF4Rm9udFNpemU7XG4gICAgc3R5bGUud29yZFdyYXAgPSBmYWxzZTtcbiAgICBzdHlsZS5hbGlnbiA9IGFsaWduO1xuICAgIGxldCB3aWR0aCA9IFBJWEkuVGV4dE1ldHJpY3MubWVhc3VyZVRleHQodGV4dCwgc3R5bGUpLndpZHRoO1xuICAgIHdoaWxlICh3aWR0aCA+IG1heFdpZHRoICYmIHN0eWxlLmZvbnRTaXplID4gbWluRm9udFNpemUpIHtcbiAgICAgIHN0eWxlLmZvbnRTaXplIC09IDE7XG4gICAgICB3aWR0aCA9IFBJWEkuVGV4dE1ldHJpY3MubWVhc3VyZVRleHQodGV4dCwgc3R5bGUpLndpZHRoO1xuICAgIH1cbiAgICBpZiAod2lkdGggPiBtYXhXaWR0aCAmJiBzdHlsZS5mb250U2l6ZSA9PT0gbWluRm9udFNpemUpIHtcbiAgICAgIHN0eWxlLndvcmRXcmFwID0gdHJ1ZTtcbiAgICAgIHN0eWxlLmJyZWFrV29yZHMgPSB0cnVlO1xuICAgICAgc3R5bGUud29yZFdyYXBXaWR0aCA9IG1heFdpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWxzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/utils.js\n");

/***/ }),

/***/ 5:
/*!*************************************!*\
  !*** multi ./resources/js/utils.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nino/IdeaProjects/Gaya_CardManager/resources/js/utils.js */"./resources/js/utils.js");


/***/ })

/******/ });