/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"user-account": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([13,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/common/request.js":
/*!*******************************!*\
  !*** ./src/common/request.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_es_notification_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/notification/style */ "./node_modules/antd/es/notification/style/index.js");
/* harmony import */ var antd_es_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/notification */ "./node_modules/antd/es/notification/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/common/utils.js");




var URL = window.CONFIG.baseURL;
var instance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: URL,
  timeout: 5000
}); // http request 拦截器

instance.interceptors.request.use(function (config) {
  config.headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: _utils__WEBPACK_IMPORTED_MODULE_3__[/* auth */ "b"].get()
  };
  return config;
}, function (error) {
  return Promise.reject(error);
});
var loginTipLock = false; // 响应拦截器即异常处理

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '请求错误';
        break;

      case 401:
        error.message = '未授权，请重新登录或登录已过期，请重新登录！';
        window.location.hash = "/login"; // token过期机制

        break;

      case 403:
        error.message = '拒绝访问'; // window.location.hash = "/notAuth";

        break;

      case 404:
        error.message = "\u8BF7\u6C42\u9519\u8BEF,\u672A\u627E\u5230\u8BE5\u8D44\u6E90: ".concat(error.response.config.url);
        break;

      case 405:
        error.message = '请求方法未允许';
        break;

      case 408:
        error.message = '请求超时';
        break;

      case 500:
        error.message = '服务器端出错';
        break;

      case 501:
        error.message = '网络未实现';
        break;

      case 502:
        error.message = '网络错误';
        break;

      case 503:
        error.message = '服务不可用';
        break;

      case 504:
        error.message = '网络超时';
        break;

      case 505:
        console.log('http版本不支持该请求');
        error.message = 'http版本不支持该请求';
        break;

      default:
        console.log("\u8FDE\u63A5\u9519\u8BEF".concat(error.response.status));
    }
  } else {
    console.log('连接到服务器失败');
  }

  if (error.response.status === 401) {
    if (!loginTipLock) {
      //避免同时多个请求都返回401时，弹出多个“未登录”提示框
      loginTipLock = true;

      antd_es_notification__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].info({
        message: '提示',
        description: error.message
      });

      setTimeout(function () {
        loginTipLock = false;
      }, 1000);
    }
  } else {
    antd_es_notification__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].error({
      message: '出错啦',
      description: error.message
    });
  }

  return Promise.resolve(error.response);
});
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ "./src/common/store.js":
/*!*****************************!*\
  !*** ./src/common/store.js ***!
  \*****************************/
/*! exports provided: isJSON, stringify, deserialize, isFunction, isArray, default */
/*! exports used: default, isJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isJSON; });
/* unused harmony export stringify */
/* unused harmony export deserialize */
/* unused harmony export isFunction */
/* unused harmony export isArray */
var storage = window.sessionStorage;
function isJSON(obj) {
  obj = JSON.stringify(obj);

  if (!/^\{[\s\S]*\}$/.test(obj)) {
    return false;
  }

  return true;
}
function stringify(val) {
  return val === undefined || typeof val === 'function' ? val + '' : JSON.stringify(val);
}
function deserialize(value) {
  if (typeof value !== 'string') {
    return undefined;
  }

  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}
function isFunction(value) {
  return {}.toString.call(value) === '[object Function]';
}
function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
} // https://github.com/jaywcjlove/store.js/pull/8
// Error: QuotaExceededError

function dealIncognito(storage) {
  var _KEY = '_Is_Incognit',
      _VALUE = 'yes';

  try {
    storage.setItem(_KEY, _VALUE);
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      var _nothing = function _nothing() {};

      storage.__proto__ = {
        setItem: _nothing,
        getItem: _nothing,
        removeItem: _nothing,
        clear: _nothing
      };
    }
  } finally {
    if (storage.getItem(_KEY) === _VALUE) storage.removeItem(_KEY);
  }

  return storage;
} // deal QuotaExceededError if user use incognito mode in browser


storage = dealIncognito(storage);

function Store() {
  if (!(this instanceof Store)) {
    return new Store();
  }
}

Store.prototype = {
  set: function set(key, val) {
    if (key && !isJSON(key)) {
      storage.setItem(key, stringify(val));
    } else if (isJSON(key)) {
      for (var a in key) {
        this.set(a, key[a]);
      }
    }

    return this;
  },
  get: function get(key) {
    if (!key) {
      var ret = {};
      this.forEach((key, val) => ret[key] = val);
      return ret;
    }

    if (key.charAt(0) === '?') {
      return this.has(key.substr(1));
    }

    var args = arguments;

    if (args.length > 1) {
      var dt = {};

      for (var i = 0, len = args.length; i < len; i++) {
        var value = deserialize(storage.getItem(args[i]));

        if (value) {
          dt[args[i]] = value;
        }
      }

      return dt;
    }

    return deserialize(storage.getItem(key));
  },
  clear: function clear() {
    storage.clear();
    return this;
  },
  remove: function remove(key) {
    var val = this.get(key);
    storage.removeItem(key);
    return val;
  },
  has: function has(key) {
    return {}.hasOwnProperty.call(this.get(), key);
  },
  keys: function keys() {
    var d = [];
    this.forEach(k => {
      d.push(k);
    });
    return d;
  },
  forEach: function forEach(callback) {
    for (var i = 0, len = storage.length; i < len; i++) {
      var key = storage.key(i);
      callback(key, this.get(key));
    }

    return this;
  },
  search: function search(str) {
    var arr = this.keys(),
        dt = {};

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i].indexOf(str) > -1) dt[arr[i]] = this.get(arr[i]);
    }

    return dt;
  }
};
var _Store = null;

function store(key, data) {
  var argm = arguments;
  var dt = null;
  if (!_Store) _Store = Store();
  if (argm.length === 0) return _Store.get();

  if (argm.length === 1) {
    if (typeof key === 'string') return _Store.get(key);
    if (isJSON(key)) return _Store.set(key);
  }

  if (argm.length === 2 && typeof key === 'string') {
    if (!data) return _Store.remove(key);
    if (data && typeof data === 'string') return _Store.set(key, data);

    if (data && isFunction(data)) {
      dt = null;
      dt = data(key, _Store.get(key));
      store.set(key, dt);
    }
  }

  if (argm.length === 2 && isArray(key) && isFunction(data)) {
    for (var i = 0, len = key.length; i < len; i++) {
      dt = data(key[i], _Store.get(key[i]));
      store.set(key[i], dt);
    }
  }

  return store;
}

for (var a in Store.prototype) {
  store[a] = Store.prototype[a];
}

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/*! exports provided: getUrlParam, transformsCTG, auth, account */
/*! exports used: account, auth, getUrlParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUrlParam; });
/* unused harmony export transformsCTG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return account; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/common/store.js");

/**
 * 获取指定某个url参数值
 * @param {string} name
 */

function getUrlParam(name) {
  // 取得url中?后面的字符
  var query = window.location.search.substr(1); // 把参数按&拆分成数组

  query = query.split('&'); // 初始化params对象

  var params = {};

  for (var i = 0; i < query.length; i++) {
    var q = query[i].split('=');

    if (q.length === 2) {
      params[q[0]] = q[1];
    }
  } // 传参时，取指定参数


  if (name) {
    var value = params[name];
    return value;
  }

  return params;
}
/**
 * 处理值，以便符合ctg曲线数据要求
 * @param {*} ctgexamId ctg检查id
 * @param {*} data ctg数据
 */

function transformsCTG(ctgexamId, data) {
  var pureidarr = ctgexamId.split('_'); // 初始化结构

  var CTGDATA = {
    fhr: [[], [], []],
    toco: [],
    fm: [],
    fetal_num: 2,
    index: 0,
    starttime: ''
  };

  if (pureidarr.length > 2) {
    var pureid = pureidarr[2];
    CTGDATA.starttime = '20' + pureid.substring(0, 2) + '-' + pureid.substring(2, 4) + '-' + pureid.substring(4, 6) + ' ' + pureid.substring(6, 8) + ':' + pureid.substring(8, 10) + ':' + pureid.substring(10, 12);
  }

  Object.keys(data).forEach(key => {
    var oridata = data[key];

    if (!oridata) {
      return;
    }

    if (key === 'fhr1') {
      CTGDATA.index = oridata.length / 2;
    }

    for (var i = 0; i < CTGDATA.index; i++) {
      var hexBits = oridata.substring(0, 2);
      var data_to_push = parseInt(hexBits, 16);

      if (key === 'fhr1') {
        CTGDATA.fhr[0][i] = data_to_push;
      } else if (key === 'fhr2') {
        CTGDATA.fhr[1][i] = data_to_push;
      } else if (key === 'fhr3') {
        CTGDATA.fhr[2][i] = data_to_push;
      } else if (key === 'toco') {
        CTGDATA.toco[i] = data_to_push;
      } else if (key === 'fm') {
        CTGDATA.fm[i] = data_to_push;
      }

      oridata = oridata.substring(2, oridata.length);
    }
  });
  return CTGDATA;
}
/**
 * 保存token ‘Bearer ’ + token
 * @param {string} value token字符串
 */

class Auth {
  constructor() {
    this.key = 'LIAN_MED_ACCESS_TOKEN';
  }

  set(value) {
    var TOKEN = 'Bearer ' + value;
    _store__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].set(this.key, TOKEN);
  }

  get() {
    var value = _store__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(this.key);
    return value;
  }

}

var auth = new Auth();
/**
 * 存储url参数信息
 */

class Person {
  constructor() {
    this.desc = '存储账户信息';
    this.key = 'LIAN_MED_ACCOUNT';
  } // 原型方法


  set(value) {
    _store__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].set(this.key, value);
  }

  get() {
    _store__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(this.key);
  }

  remove() {
    _store__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].remove(this.key);
  } // 静态方法 也会被继承


  static myName() {
    return '我是静态方法的myName';
  }

}

var account = new Person();

/***/ }),

/***/ "./src/pages/user-management/index.js":
/*!********************************************************!*\
  !*** ./src/pages/user-management/index.js + 1 modules ***!
  \********************************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/badge/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/badge/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/divider/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/divider/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/message/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/message/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/popconfirm/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/popconfirm/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/select/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/select/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/table/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/table/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/request.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/user-management/index.less (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/moment/moment.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-dom/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var style = __webpack_require__("./node_modules/antd/es/button/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("./node_modules/antd/es/button/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/table/style/index.js + 4 modules
var table_style = __webpack_require__("./node_modules/antd/es/table/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 27 modules
var table = __webpack_require__("./node_modules/antd/es/table/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/message/style/index.js
var message_style = __webpack_require__("./node_modules/antd/es/message/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js
var message = __webpack_require__("./node_modules/antd/es/message/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/style/index.js + 1 modules
var popconfirm_style = __webpack_require__("./node_modules/antd/es/popconfirm/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js
var popconfirm = __webpack_require__("./node_modules/antd/es/popconfirm/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/divider/style/index.js
var divider_style = __webpack_require__("./node_modules/antd/es/divider/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/divider/index.js
var divider = __webpack_require__("./node_modules/antd/es/divider/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/badge/style/index.js
var badge_style = __webpack_require__("./node_modules/antd/es/badge/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/badge/index.js + 1 modules
var badge = __webpack_require__("./node_modules/antd/es/badge/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/select/style/index.js
var select_style = __webpack_require__("./node_modules/antd/es/select/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js
var es_select = __webpack_require__("./node_modules/antd/es/select/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var input_style = __webpack_require__("./node_modules/antd/es/input/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 4 modules
var input = __webpack_require__("./node_modules/antd/es/input/index.js");

// EXTERNAL MODULE: ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("./node_modules/moment/moment.js");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./src/common/request.js
var request = __webpack_require__("./src/common/request.js");

// EXTERNAL MODULE: ./src/pages/user-management/index.less
var user_management = __webpack_require__("./src/pages/user-management/index.less");
var user_management_default = /*#__PURE__*/__webpack_require__.n(user_management);

// CONCATENATED MODULE: ./src/pages/user-management/Account.js


















/* eslint-disable jsx-a11y/anchor-is-valid */

/**
 * 账户管理
 */





class Account_Account extends react["PureComponent"] {
  constructor(props) {
    super(props);
    this.index = 0;
    this.cacheOriginData = {};

    this.fetchAccountList = () => {
      var _this = this;

      request["a" /* default */].get('/users').then(function (response) {
        var d = response.data;
        console.log('object', d);

        _this.setState({
          data: d,
          values: d
        });
      }).catch(function (error) {});
    };

    this.start = key => {
      console.log('TCL: Account -> key -> start', key);
    };

    this.stop = key => {
      console.log('TCL: Account -> key -> stop', key);
    };

    this.toggleEditable = (e, key) => {
      e.preventDefault();
      var data = this.state.data;
      var newData = data.map(item => objectSpread_default()({}, item));
      var target = this.getRowByKey(key, newData);
      console.log('edit ', target, newData);

      if (target) {
        // 进入编辑状态时保存原始数据
        if (!target.editable) {
          this.cacheOriginData[key] = objectSpread_default()({}, target);
        }

        target.editable = !target.editable;
        this.setState({
          data: newData
        });
      }
    };

    this.newAccount = () => {
      var data = this.state.data;
      var newData = data.map(item => objectSpread_default()({}, item));
      var date = moment_default()();
      newData.push({
        id: "NEW_TEMP_ID_".concat(this.index),
        login: '',
        password: '',
        status: '1',
        createdBy: '',
        createdDate: date,
        lastModifiedDate: date,
        editable: true,
        isNew: true
      });
      this.index += 1;
      this.setState({
        data: newData
      });
    };

    this.state = {
      loading: false,
      data: [],
      values: []
    };
    this.columns = [{
      title: '账号名称',
      dataIndex: 'login',
      key: 'login',
      width: 150,
      render: (text, record) => {
        if (record.editable) {
          return react_default.a.createElement(input["a" /* default */], {
            value: text,
            autoFocus: true,
            onChange: e => this.handleFieldChange(e, 'login', record.id),
            onKeyPress: e => this.handleKeyPress(e, record.id),
            placeholder: "\u8D26\u53F7\u540D\u79F0"
          });
        }

        return text;
      }
    }, {
      title: '密码',
      dataIndex: 'password',
      key: 'password',
      width: 150,
      render: (text, record) => {
        if (record.editable) {
          return react_default.a.createElement(input["a" /* default */].Password, {
            value: text,
            autoFocus: true,
            onChange: e => this.handleFieldChange(e, 'password', record.id),
            onKeyPress: e => this.handleKeyPress(e, record.id),
            placeholder: "\u8D26\u53F7\u5BC6\u7801"
          });
        }

        return text;
      }
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 140,
      render: (text, record) => {
        if (record.editable) {
          return react_default.a.createElement(es_select["a" /* default */], {
            value: text,
            style: {
              width: 120
            },
            onChange: e => this.handleFieldChange(e, 'status', record.id) // onKeyPress={e => this.handleKeyPress(e, record.key)}
            ,
            placeholder: "\u8D26\u6237\u72B6\u6001"
          }, react_default.a.createElement(es_select["a" /* default */].Option, {
            value: "0"
          }, "\u505C\u7528"), react_default.a.createElement(es_select["a" /* default */].Option, {
            value: "1"
          }, "\u6FC0\u6D3B"), react_default.a.createElement(es_select["a" /* default */].Option, {
            value: "2"
          }, "\u6CE8\u9500"));
        }

        if (text === '0') {
          return react_default.a.createElement(badge["a" /* default */], {
            status: "error",
            text: "\u505C\u7528"
          });
        } else if (text === '1') {
          return react_default.a.createElement(badge["a" /* default */], {
            status: "success",
            text: "\u6FC0\u6D3B"
          });
        } else {
          return react_default.a.createElement(badge["a" /* default */], {
            status: "default",
            text: "\u6CE8\u9500"
          });
        }
      }
    }, {
      title: '创建者',
      dataIndex: 'createdBy',
      key: 'createdBy',
      width: 100
    }, {
      title: '创建时间',
      dataIndex: 'createdDate',
      key: 'createdDate',
      width: 150,
      render: text => text && moment_default()(text).format('YYYY-MM-DD HH:mm:ss')
    }, {
      title: '最近更新',
      dataIndex: 'lastModifiedDate',
      key: 'lastModifiedDate',
      width: 150,
      render: text => text && moment_default()(text).format('YYYY-MM-DD HH:mm:ss')
    }, {
      title: '操作',
      dataIndex: 'actions',
      key: 'actions',
      width: 150,
      render: (text, record) => {
        var loading = this.state.loading;

        if (!!record.editable && loading) {
          return null;
        }

        if (record.editable) {
          if (record.isNew) {
            return react_default.a.createElement("span", null, react_default.a.createElement("a", {
              onClick: e => this.saveRow(e, record.id)
            }, "\u4FDD\u5B58"), react_default.a.createElement(divider["a" /* default */], {
              type: "vertical"
            }), react_default.a.createElement(popconfirm["a" /* default */], {
              title: "\u662F\u5426\u8981\u5220\u9664\u6B64\u884C\uFF1F",
              onConfirm: () => this.remove(record.id)
            }, react_default.a.createElement("a", null, "\u5220\u9664")));
          }

          return react_default.a.createElement("span", null, react_default.a.createElement("a", {
            onClick: e => this.saveRow(e, record.id)
          }, "\u4FDD\u5B58"), react_default.a.createElement(divider["a" /* default */], {
            type: "vertical"
          }), react_default.a.createElement("a", {
            onClick: e => this.cancel(e, record.id)
          }, "\u53D6\u6D88"));
        } else {
          var activated = record.activated,
              id = record.id;
          var dom = null;

          if (!activated) {
            dom = react_default.a.createElement("a", {
              onClick: () => this.start(id)
            }, "\u542F\u7528");
          }

          if (activated) {
            dom = react_default.a.createElement("a", {
              onClick: () => this.stop(id)
            }, "\u505C\u7528");
          }

          return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("span", {
            className: "primary-link",
            onClick: e => this.toggleEditable(e, record.id)
          }, "\u7F16\u8F91"), react_default.a.createElement(divider["a" /* default */], {
            type: "vertical"
          }), dom, react_default.a.createElement(divider["a" /* default */], {
            type: "vertical"
          }), react_default.a.createElement(popconfirm["a" /* default */], {
            title: "\u786E\u8BA4\u5220\u9664\u8BE5\u6761\u4FE1\u606F\uFF1F",
            okText: "\u786E\u5B9A",
            cancelText: "\u53D6\u6D88"
          }, react_default.a.createElement("span", {
            className: "delete-link"
          }, "\u5220\u9664")));
        }
      }
    }];
  }

  componentDidMount() {
    this.fetchAccountList();
  }

  getRowByKey(key, newData) {
    var data = this.state.data;
    return (newData || data).filter(item => item.id === key)[0];
  }

  remove(key) {
    var data = this.state.data;
    var newData = data.filter(item => item.id !== key);
    this.setState({
      data: newData
    });
  }

  handleKeyPress(e, key) {
    if (e.key === 'Enter') {
      this.saveRow(e, key);
    }
  }

  handleFieldChange(e, fieldName, key) {
    var data = this.state.data;
    var newData = data.map(item => objectSpread_default()({}, item));
    console.log('TCL: Account -> handleFieldChange -> newData', newData);
    var target = this.getRowByKey(key, newData);

    if (target) {
      var value = e.target ? e.target.value : e;
      target[fieldName] = value;
      this.setState({
        data: newData
      });
    }
  }

  saveRow(e, key) {
    e.persist();
    this.setState({
      loading: true
    });
    setTimeout(() => {
      if (this.clickedCancel) {
        this.clickedCancel = false;
        return;
      }

      var target = this.getRowByKey(key) || {};

      if (!target.password || !target.login || !target.status) {
        message["a" /* default */].error('请填写完整成员信息。');

        e.target.focus();
        this.setState({
          loading: false
        });
        return;
      }

      delete target.isNew;
      this.toggleEditable(e, key); // const { data } = this.state;
      // const { onChange } = this.props;
      // onChange(data);

      this.setState({
        loading: false
      });
    }, 500);
  }

  cancel(e, key) {
    this.clickedCancel = true;
    e.preventDefault();
    var data = this.state.data;
    var newData = data.map(item => objectSpread_default()({}, item));
    var target = this.getRowByKey(key, newData);

    if (this.cacheOriginData[key]) {
      Object.assign(target, this.cacheOriginData[key]);
      delete this.cacheOriginData[key];
    }

    target.editable = false;
    this.setState({
      data: newData
    });
    this.clickedCancel = false;
  }

  render() {
    var data = this.state.data;
    return react_default.a.createElement("div", {
      className: user_management_default.a.container
    }, react_default.a.createElement("p", {
      style: {
        fontWeight: 600,
        lineHeight: '40px',
        marginBottom: '24px'
      }
    }, "\u8D26\u6237\u7BA1\u7406"), react_default.a.createElement(table["a" /* default */], {
      size: "small",
      rowKey: "id",
      pagination: false,
      columns: this.columns,
      dataSource: data
    }), react_default.a.createElement(es_button["a" /* default */], {
      style: {
        width: '100%',
        marginTop: 16,
        marginBottom: 8
      },
      type: "dashed",
      onClick: this.newAccount,
      icon: "plus"
    }, "\u65B0\u589E\u8D26\u53F7"));
  }

}

/* harmony default export */ var user_management_Account = (Account_Account);
// CONCATENATED MODULE: ./src/pages/user-management/index.js



react_dom_default.a.render(react_default.a.createElement(user_management_Account, null), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/user-management/index.less":
/*!**********************************************!*\
  !*** ./src/pages/user-management/index.less ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container___3dbnG","title":"title___2Cp2z","form":"form___20EUn"};

/***/ }),

/***/ 13:
/*!*********************************************************************************************!*\
  !*** multi ./node_modules/umi-plugin-mpa/templates/polyfill.js ./src/pages/user-management ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\FrontEnd\CTGCenter\node_modules\umi-plugin-mpa\templates\polyfill.js */"./node_modules/umi-plugin-mpa/templates/polyfill.js");
module.exports = __webpack_require__(/*! ./src/pages/user-management */"./src/pages/user-management/index.js");


/***/ })

/******/ });