/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/Explore.jpg */ \"./src/assets/img/Explore.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/travel-bk.jpg */ \"./src/assets/img/travel-bk.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ------------------- */\r\n/* Custom properties   */\r\n/* ------------------- */\r\n\r\n:root {\r\n  /* colors */\r\n  --clr-white: #ffffff;\r\n  --clr-light-green: #0d606f;\r\n  --clr-orange: #f2785c;\r\n  --clr-orange-light: rgba(242, 120, 92, 0.5);\r\n\r\n  /* font-families */\r\n  --ff-main: 'Aleo', serif;\r\n  --ff-button-h: 'Red Hat Text', sans-serif;\r\n  --ff-logo: 'Magra', sans-serif;\r\n}\r\n\r\n/* ------------------- */\r\n/* Reset               */\r\n/* ------------------- */\r\n\r\n/* https://piccalil.li/blog/a-modern-css-reset/ */\r\n\r\n/* Box sizing */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Reset margins */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nfigure,\r\npicture {\r\n  margin: 0;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np {\r\n  font-weight: 400;\r\n}\r\n\r\n/* set up the body */\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: var(--ff-main);\r\n  color: var(--clr-light-green);\r\n  background-color: var(--clr-white);\r\n  min-height: 100vh;\r\n}\r\n/* \r\n.body__wrapper {\r\n  overflow: hidden;\r\n  width: 100%;\r\n  position: relative;\r\n} */\r\n\r\n/* make images easier to work with */\r\nimg {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* make form elements easier to work with */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* remove animations for people who've turned them off */\r\n@media (prefers-reduced-motion: reduce) {\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n  }\r\n}\r\n\r\n/* ------------------- */\r\n/* Basic elements      */\r\n/* ------------------- */\r\nh1 {\r\n  font-size: 80px;\r\n  font-weight: 700;\r\n  line-height: 96px;\r\n  color: var(--clr-white);\r\n}\r\n\r\nh2 {\r\n  font-family: var(--ff-button-h);\r\n  font-size: 40px;\r\n  font-weight: 500;\r\n  line-height: 52.92px;\r\n  color: var(--clr-orange);\r\n}\r\n\r\nh3 {\r\n  font-size: 35px;\r\n  line-height: 42px;\r\n}\r\nh5 {\r\n  font-family: var(--ff-button-h);\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  line-height: 21.17px;\r\n  color: var(--clr-white);\r\n}\r\np {\r\n  font-size: 20px;\r\n  line-height: 24px;\r\n}\r\nbutton {\r\n  font-family: var(--ff-button-h);\r\n  color: var(--clr-white);\r\n  background-color: var(--clr-light-green);\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  transition: 0.5s;\r\n}\r\n\r\nbutton:hover {\r\n  color: var(--clr-orange);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--clr-white);\r\n}\r\n\r\n/* HEADER */\r\n.header {\r\n  position: absolute;\r\n  top: 40px;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%); /* центрует header*/\r\n  z-index: 10;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n  max-width: 1440px;\r\n  margin: 0 auto;\r\n  padding: 20px 16px;\r\n  background-color: rgba(242, 120, 92, 0.7);\r\n  box-shadow: 0px 4px 4px rgba(13, 96, 111, 0.5);\r\n}\r\n\r\n.header__wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  max-width: 1210px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.logo a {\r\n  display: flex;\r\n  gap: 6px;\r\n  margin-left: 14px;\r\n}\r\n\r\n.logo-text {\r\n  font-family: var(--ff-logo);\r\n  font-weight: 600;\r\n  font-size: 32px;\r\n  line-height: 38.88px;\r\n  letter-spacing: 0.02em;\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n  max-width: 527px;\r\n}\r\n\r\n.navigation {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  list-style: none;\r\n  font-family: var(--ff-button-h);\r\n  font-style: 500;\r\n  line-height: 21.17px;\r\n  padding: 0;\r\n}\r\n\r\nheader button {\r\n  padding: 10px 30px;\r\n  margin-left: 15px;\r\n}\r\n\r\n/* Explore */\r\n\r\n.explore {\r\n  width: 100%;\r\n  max-width: 1440px;\r\n  margin: 0 auto;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.explore__wrapper {\r\n  padding: 122px 20px 255px 120px;\r\n}\r\n\r\n.explore-content {\r\n  max-width: 892px;\r\n}\r\n\r\n.explore-content p {\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  color: var(--clr-white);\r\n  margin: 33px 0 46px;\r\n}\r\n\r\n.explore-content__search {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  border-radius: 16px;\r\n  padding: 18px;\r\n  gap: 45px;\r\n}\r\n\r\n.explore-content__search input {\r\n  width: 100%;\r\n  max-width: 65%;\r\n  max-height: 36px;\r\n  line-height: 28.8px;\r\n  font-size: 24px;\r\n  font-style: italic;\r\n  color: var(--clr-orange);\r\n  background-color: transparent;\r\n  margin-left: 22px;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.explore-content__search input::placeholder {\r\n  color: var(--clr-orange);\r\n}\r\n\r\n.explore-content__search button {\r\n  font-size: 24px;\r\n  line-height: 31.75px;\r\n  padding: 13.5px 32.5px;\r\n  min-width: 228px;\r\n}\r\n\r\n/* Steps */\r\n\r\n.steps {\r\n  width: 100%;\r\n  max-width: 1440px;\r\n  margin: 0 auto;\r\n}\r\n.steps__wrapper {\r\n  padding: 80px 131px 97px;\r\n  text-align: center;\r\n}\r\n\r\n.steps-conteiner {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.steps-info img {\r\n  width: 100px;\r\n  height: 100px;\r\n  padding: 24px;\r\n  background-color: var(--clr-orange);\r\n  border-radius: 16px;\r\n  margin: 40px auto 54px;\r\n}\r\n\r\n/* Destinations */\r\n.destinations {\r\n  width: 100%;\r\n  max-width: 1440px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.destinations__wrapper {\r\n  text-align: center;\r\n}\r\n\r\n.destinations__wrapper h2 {\r\n  margin-bottom: 46px;\r\n}\r\n\r\n.slider {\r\n  width: 1440px;\r\n  overflow: hidden;\r\n}\r\n\r\n.slider-line {\r\n  width: 4240px;\r\n  display: flex;\r\n  gap: 60px;\r\n}\r\n\r\n.slider-card {\r\n  position: relative;\r\n  width: 800px;\r\n}\r\n\r\n.slider-card img {\r\n  border-radius: 16px;\r\n}\r\n\r\n.slider-card p {\r\n  font-family: var(--ff-button-h);\r\n  font-size: 32px;\r\n  line-height: 42.34px;\r\n  color: var(--clr-white);\r\n  position: absolute;\r\n  bottom: 40px;\r\n  left: 15px;\r\n}\r\n\r\n.slider-pagination {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 80px;\r\n  margin: 24px auto 40px;\r\n}\r\n\r\n.slider-pagination > div {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  background-color: var(--clr-orange-light);\r\n  cursor: pointer;\r\n}\r\n\r\n.slider-pagination > div:hover {\r\n  background-color: var(--clr-orange);\r\n}\r\n\r\n.dectination-btn {\r\n  display: flex;\r\n  gap: 12px;\r\n  font-size: 24px;\r\n  line-height: 31.75px;\r\n  padding: 9.5px 31px;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* Stories */\r\n\r\n.stories {\r\n  width: 100%;\r\n  max-width: 1440px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  margin-bottom: -55px;\r\n}\r\n.stories h2 {\r\n  margin: 80px 0 40px;\r\n}\r\n\r\n.stories__wrapper {\r\n  width: 100%;\r\n  height: 1331px;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.stories__wrapper-bg {\r\n  width: 100%;\r\n  height: 1270px;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  padding: 35px 120px;\r\n}\r\n\r\n.stories-content__card {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.stories-content__card img {\r\n  border-radius: 16px;\r\n}\r\n\r\n.stories-content__card-text {\r\n  max-width: 765px;\r\n  text-align: left;\r\n}\r\n\r\n.stories-content__card-text h3 {\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.text-link {\r\n  color: var(--clr-light-green);\r\n  text-decoration: underline;\r\n}\r\n\r\n/* Footer */\r\n\r\n.footer {\r\n  width: 100%;\r\n  max-width: 1440px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.footer__wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 5px 120px;\r\n  align-items: center;\r\n}\r\n\r\n.footer__wrapper p {\r\n  font-family: var(--ff-button-h);\r\n  font-weight: 500;\r\n  font-size: 22px;\r\n  line-height: 21px;\r\n  color: var(--clr-white);\r\n}\r\n\r\n.footer__wrapper a {\r\n  width: 40px;\r\n}\r\n\r\n/* Pop Up */\r\n.popup .overlay {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(41, 41, 41, 0.6);\r\n  z-index: 500;\r\n}\r\n\r\n.popup.active .overlay {\r\n  display: block;\r\n}\r\n\r\n.popup .popup-container {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 660px;\r\n  height: 650px;\r\n  background: linear-gradient(#ffffff, #0d606f);\r\n  border-radius: 16px;\r\n  padding: 25px 45px;\r\n  text-align: center;\r\n  z-index: 1000;\r\n}\r\n\r\n.popup-container h3 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.popup-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 16px;\r\n  padding: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup-btn > img {\r\n  margin-right: 15px;\r\n}\r\n\r\n.popup-btn > p {\r\n  font-family: var(--ff-button-h);\r\n  line-height: 26.46px;\r\n}\r\n\r\n.btn-face {\r\n  background-color: #1877f2;\r\n  color: var(--clr-white);\r\n}\r\n\r\n.btn-google {\r\n  margin: 20px 0 30px;\r\n  background-color: var(--clr-white);\r\n}\r\n\r\n.hr-p {\r\n  position: relative;\r\n  max-width: 560px;\r\n  color: rgba(13, 96, 111, 0.5);\r\n  margin-bottom: 5px;\r\n}\r\n.hr-p:before {\r\n  content: ' ';\r\n  display: block;\r\n  height: 1px;\r\n  width: 261px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 50%;\r\n  background: rgba(13, 96, 111, 0.5);\r\n}\r\n\r\n.hr-p:after {\r\n  content: ' ';\r\n  display: block;\r\n  height: 1px;\r\n  width: 261px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 50%;\r\n  background: rgba(13, 96, 111, 0.5);\r\n}\r\n\r\n.popup-input {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: start;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.popup-input input {\r\n  padding: 8px;\r\n  font-size: 32px;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 16px;\r\n  margin-top: 5px;\r\n  color: var(--clr-light-green);\r\n}\r\n\r\n.btn-sighIn {\r\n  font-family: var(--ff-button-h);\r\n  font-size: 20px;\r\n  line-height: 26.46px;\r\n  color: var(--clr-white);\r\n  background-color: var(--clr-light-green);\r\n  margin: 35px 0 20px;\r\n}\r\n\r\n.popup-container > a {\r\n  font-weight: 700;\r\n  color: rgb(9, 40, 45);\r\n  text-decoration: underline;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://travel/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://travel/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://travel/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://travel/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://travel/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://travel/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://travel/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://travel/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://travel/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://travel/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://travel/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\n\n//# sourceURL=webpack://travel/./src/index.js?");

/***/ }),

/***/ "./src/assets/img/Explore.jpg":
/*!************************************!*\
  !*** ./src/assets/img/Explore.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"25aeb2d6ff535b7ea869.jpg\";\n\n//# sourceURL=webpack://travel/./src/assets/img/Explore.jpg?");

/***/ }),

/***/ "./src/assets/img/travel-bk.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/travel-bk.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"93e76a8c953d2bf6816c.jpg\";\n\n//# sourceURL=webpack://travel/./src/assets/img/travel-bk.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;