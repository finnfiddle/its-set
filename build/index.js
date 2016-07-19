/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashGet = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lodash.get\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _lodashGet2 = _interopRequireDefault(_lodashGet);
	
	exports['default'] = function (val) {
	  var checkVal = function checkVal(v) {
	    return typeof v !== 'undefined' && v !== null;
	  };
	  if (val.constructor === Array) {
	    return val.every(function (v) {
	      return checkVal(v);
	    });
	  } else if (arguments.length === 2) {
	    return typeof (0, _lodashGet2['default'])(arguments[0], arguments[1]) !== 'undefined';
	  }
	  return checkVal(val);
	};
	
	;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map