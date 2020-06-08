(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./handler.ts":
/*!********************!*\
  !*** ./handler.ts ***!
  \********************/
/*! exports provided: getTermins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTermins\", function() { return getTermins; });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! puppeteer */ \"puppeteer\");\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(puppeteer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_chrome_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/chrome-script */ \"./src/chrome-script.ts\");\n\n\n\nconst getTermins = async (event, _context) => {\n    const url = 'https://formular.berlin.de/xima-forms-29/get/14963116144270000?mandantid=/OTVBerlin_LABO_XIMA/000-01/instantiationTasks.properties';\n    const chrome = await Object(_src_chrome_script__WEBPACK_IMPORTED_MODULE_2__[\"getChrome\"])();\n    const browser = await puppeteer__WEBPACK_IMPORTED_MODULE_1__[\"connect\"]({\n        browserWSEndpoint: chrome.endpoint,\n    });\n    const page = await browser.newPage();\n    await page.goto(url, { waitUntil: 'networkidle0' });\n    const rawScreenshot = await page.screenshot({});\n    await browser.close();\n    return {\n        statusCode: 200,\n        isBase64Encoded: true,\n        body: rawScreenshot.toString('base64'),\n        headers: {\n            'Content-Type': 'image/png',\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oYW5kbGVyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaGFuZGxlci50cz8zNmI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAqIGFzIHB1cHBldGVlciBmcm9tICdwdXBwZXRlZXInO1xuaW1wb3J0IHsgZ2V0Q2hyb21lIH0gZnJvbSAnLi9zcmMvY2hyb21lLXNjcmlwdCc7XG5cbmV4cG9ydCBjb25zdCBnZXRUZXJtaW5zOiBBUElHYXRld2F5UHJveHlIYW5kbGVyID0gYXN5bmMgKGV2ZW50LCBfY29udGV4dCkgPT4ge1xuICAvLyBjb25zdCB7IHVybCB9ID0gZXZlbnQucXVlcnlTdHJpbmdQYXJhbWV0ZXJzO1xuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9mb3JtdWxhci5iZXJsaW4uZGUveGltYS1mb3Jtcy0yOS9nZXQvMTQ5NjMxMTYxNDQyNzAwMDA/bWFuZGFudGlkPS9PVFZCZXJsaW5fTEFCT19YSU1BLzAwMC0wMS9pbnN0YW50aWF0aW9uVGFza3MucHJvcGVydGllcyc7XG4gIGNvbnN0IGNocm9tZSA9IGF3YWl0IGdldENocm9tZSgpO1xuICBcbiAgY29uc3QgYnJvd3NlciA9IGF3YWl0IHB1cHBldGVlci5jb25uZWN0KHtcbiAgICBicm93c2VyV1NFbmRwb2ludDogY2hyb21lLmVuZHBvaW50LFxuICB9KTtcblxuICBjb25zdCBwYWdlID0gYXdhaXQgYnJvd3Nlci5uZXdQYWdlKCk7XG4gIGF3YWl0IHBhZ2UuZ290byh1cmwsIHsgd2FpdFVudGlsOiAnbmV0d29ya2lkbGUwJyB9KTtcbiAgLy8gY29uc3QgY29udGVudCA9IGF3YWl0IHBhZ2UuZXZhbHVhdGUoKCkgPT4gZG9jdW1lbnQuYm9keS5pbm5lckhUTUwpO1xuICBjb25zdCByYXdTY3JlZW5zaG90ID0gYXdhaXQgcGFnZS5zY3JlZW5zaG90KHt9KTtcbiAgYXdhaXQgYnJvd3Nlci5jbG9zZSgpO1xuXG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGlzQmFzZTY0RW5jb2RlZDogdHJ1ZSxcbiAgICBib2R5OiByYXdTY3JlZW5zaG90LnRvU3RyaW5nKCdiYXNlNjQnKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2ltYWdlL3BuZycsXG4gICAgfVxuICB9O1xufVxuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./handler.ts\n");

/***/ }),

/***/ "./src/chrome-script.ts":
/*!******************************!*\
  !*** ./src/chrome-script.ts ***!
  \******************************/
/*! exports provided: getChrome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getChrome\", function() { return getChrome; });\n/* harmony import */ var _serverless_chrome_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @serverless-chrome/lambda */ \"@serverless-chrome/lambda\");\n/* harmony import */ var _serverless_chrome_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_serverless_chrome_lambda__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ \"superagent\");\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getChrome = async () => {\n    const chrome = await _serverless_chrome_lambda__WEBPACK_IMPORTED_MODULE_0___default()({\n        flags: ['--window-size=1280,1696', '--hide-scrollbars', '--headless']\n    });\n    const response = await superagent__WEBPACK_IMPORTED_MODULE_1___default.a\n        .get(`${chrome.url}/json/version`)\n        .set('Content-Type', 'application/json');\n    const endpoint = response.body.webSocketDebuggerUrl;\n    return {\n        endpoint,\n        instance: chrome,\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hyb21lLXNjcmlwdC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jaHJvbWUtc2NyaXB0LnRzP2MxNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxhdW5jaENocm9tZSBmcm9tICdAc2VydmVybGVzcy1jaHJvbWUvbGFtYmRhJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3N1cGVyYWdlbnQnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hyb21lID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjaHJvbWUgPSBhd2FpdCBsYXVuY2hDaHJvbWUoe1xuICAgIGZsYWdzOiBbJy0td2luZG93LXNpemU9MTI4MCwxNjk2JywgJy0taGlkZS1zY3JvbGxiYXJzJywgJy0taGVhZGxlc3MnXVxuICB9KTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RcbiAgICAuZ2V0KGAke2Nocm9tZS51cmx9L2pzb24vdmVyc2lvbmApXG4gICAgLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICBjb25zdCBlbmRwb2ludCA9IHJlc3BvbnNlLmJvZHkud2ViU29ja2V0RGVidWdnZXJVcmw7XG5cbiAgcmV0dXJuIHtcbiAgICBlbmRwb2ludCxcbiAgICBpbnN0YW5jZTogY2hyb21lLFxuICB9O1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/chrome-script.ts\n");

/***/ }),

/***/ "@serverless-chrome/lambda":
/*!********************************************!*\
  !*** external "@serverless-chrome/lambda" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@serverless-chrome/lambda\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQHNlcnZlcmxlc3MtY2hyb21lL2xhbWJkYS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBzZXJ2ZXJsZXNzLWNocm9tZS9sYW1iZGFcIj9hOGNjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzZXJ2ZXJsZXNzLWNocm9tZS9sYW1iZGFcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@serverless-chrome/lambda\n");

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"puppeteer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVwcGV0ZWVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHVwcGV0ZWVyXCI/MDZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdXBwZXRlZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///puppeteer\n");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"source-map-support/register\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI/ZGExNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///source-map-support/register\n");

/***/ }),

/***/ "superagent":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"superagent\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXJhZ2VudC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInN1cGVyYWdlbnRcIj9hMDI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN1cGVyYWdlbnRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///superagent\n");

/***/ })

/******/ })));