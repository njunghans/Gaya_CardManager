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

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Backend =\n/*#__PURE__*/\nfunction () {\n  function Backend() {\n    _classCallCheck(this, Backend);\n  }\n\n  _createClass(Backend, [{\n    key: \"callBackend\",\n    value: function callBackend(url, callback) {\n      var async = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      var failure = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n      jQuery.ajax({\n        url: url,\n        async: async,\n        success: function success(data) {\n          callback(data);\n        },\n        error: function error(data) {\n          failure(data);\n        }\n      });\n    }\n  }]);\n\n  return Backend;\n}();\n\nmodule.exports = Backend;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC5qcz9iODcxIl0sIm5hbWVzIjpbIkJhY2tlbmQiLCJ1cmwiLCJjYWxsYmFjayIsImFzeW5jIiwiZmFpbHVyZSIsImpRdWVyeSIsImFqYXgiLCJzdWNjZXNzIiwiZGF0YSIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLE87OztBQUVKLHFCQUFjO0FBQUE7QUFFYjs7OztnQ0FFV0MsRyxFQUFLQyxRLEVBQXlDO0FBQUEsVUFBL0JDLEtBQStCLHVFQUF2QixLQUF1QjtBQUFBLFVBQWhCQyxPQUFnQix1RUFBTixJQUFNO0FBQ3hEQyxZQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNWTCxXQUFHLEVBQUVBLEdBREs7QUFFVkUsYUFBSyxFQUFFQSxLQUZHO0FBR1ZJLGVBQU8sRUFBRSxpQkFBU0MsSUFBVCxFQUFlO0FBQ3RCTixrQkFBUSxDQUFDTSxJQUFELENBQVI7QUFDRCxTQUxTO0FBTVZDLGFBQUssRUFBRSxlQUFTRCxJQUFULEVBQWU7QUFDcEJKLGlCQUFPLENBQUNJLElBQUQsQ0FBUDtBQUNEO0FBUlMsT0FBWjtBQVVEOzs7Ozs7QUFHSEUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWCxPQUFqQiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9iYWNrZW5kLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFja2VuZCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIGNhbGxCYWNrZW5kKHVybCwgY2FsbGJhY2ssIGFzeW5jID0gZmFsc2UsIGZhaWx1cmUgPSBudWxsKSB7XG4gICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBhc3luYzogYXN5bmMsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGZhaWx1cmUoZGF0YSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2VuZDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/backend.js\n");

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi ./resources/js/backend.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nino/IdeaProjects/Gaya_CardManager/resources/js/backend.js */"./resources/js/backend.js");


/***/ })

/******/ });