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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/backend.js":
/*!*********************************!*\
  !*** ./resources/js/backend.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Backend =\n/*#__PURE__*/\nfunction () {\n  function Backend() {\n    _classCallCheck(this, Backend);\n  }\n\n  _createClass(Backend, [{\n    key: \"callBackend\",\n    value: function callBackend(url, data, callback, failure, async) {\n      jQuery.ajax({\n        url: url,\n        async: async,\n        data: data,\n        success: function success(d) {\n          callback(d);\n        },\n        error: function error(d) {\n          failure(d);\n        }\n      });\n    }\n  }]);\n\n  return Backend;\n}();\n\nmodule.exports = Backend;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC5qcz9iODcxIl0sIm5hbWVzIjpbIkJhY2tlbmQiLCJ1cmwiLCJkYXRhIiwiY2FsbGJhY2siLCJmYWlsdXJlIiwiYXN5bmMiLCJqUXVlcnkiLCJhamF4Iiwic3VjY2VzcyIsImQiLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxPOzs7QUFFSixxQkFBYztBQUFBO0FBRWI7Ozs7Z0NBRVdDLEcsRUFBS0MsSSxFQUFNQyxRLEVBQVVDLE8sRUFBU0MsSyxFQUFPO0FBQy9DQyxZQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNWTixXQUFHLEVBQUVBLEdBREs7QUFFVkksYUFBSyxFQUFFQSxLQUZHO0FBR1ZILFlBQUksRUFBRUEsSUFISTtBQUlWTSxlQUFPLEVBQUUsaUJBQVNDLENBQVQsRUFBWTtBQUNuQk4sa0JBQVEsQ0FBQ00sQ0FBRCxDQUFSO0FBQ0QsU0FOUztBQU9WQyxhQUFLLEVBQUUsZUFBU0QsQ0FBVCxFQUFZO0FBQ2pCTCxpQkFBTyxDQUFDSyxDQUFELENBQVA7QUFDRDtBQVRTLE9BQVo7QUFXRDs7Ozs7O0FBR0hFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlosT0FBakIiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYmFja2VuZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhY2tlbmQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBjYWxsQmFja2VuZCh1cmwsIGRhdGEsIGNhbGxiYWNrLCBmYWlsdXJlLCBhc3luYykge1xuICAgIGpRdWVyeS5hamF4KHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgYXN5bmM6IGFzeW5jLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgY2FsbGJhY2soZCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgZmFpbHVyZShkKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrZW5kOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/backend.js\n");

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi ./resources/js/backend.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ngrippa/workspace/gaya/resources/js/backend.js */"./resources/js/backend.js");


/***/ })

/******/ });