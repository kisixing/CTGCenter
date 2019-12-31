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
/******/ 		"ctg-record": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"pdfjsWorker":"pdfjsWorker"}[chunkId]||chunkId) + "." + {"pdfjsWorker":"9823f7c2"}[chunkId] + ".async.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
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
/******/ 	deferredModules.push([2,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/ctg-record/App.less":
/*!***************************************!*\
  !*** ./src/pages/ctg-record/App.less ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___2bKaL","app-wrapper":"app-wrapper___2LHzn","app-header":"app-header___340HK","app-sider":"app-sider___1Edgs","app-content":"app-content___XzV1U","react-pdf__Page":"react-pdf__Page___52_Db"};

/***/ }),

/***/ "./src/pages/ctg-record/containers/Analyze/index.module.less":
/*!*******************************************************************!*\
  !*** ./src/pages/ctg-record/containers/Analyze/index.module.less ***!
  \*******************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"content":"content___1cuj5","top":"top___3an7-","wrapper":"wrapper___1COQN","bottom":"bottom___1LTBk","left":"left___isa67","right":"right___pmb4L","buttonView":"buttonView___30PYb"};

/***/ }),

/***/ "./src/pages/ctg-record/containers/Content.module.less":
/*!*************************************************************!*\
  !*** ./src/pages/ctg-record/containers/Content.module.less ***!
  \*************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"wrapper___2sCTg","ctg":"ctg___3nTQv","buttons":"buttons___3MFhv","title":"title___2unpw","value":"value___AqJXB","modal":"modal___LH2Tf"};

/***/ }),

/***/ "./src/pages/ctg-record/containers/Header.module.less":
/*!************************************************************!*\
  !*** ./src/pages/ctg-record/containers/Header.module.less ***!
  \************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"wrapper___26Qug"};

/***/ }),

/***/ "./src/pages/ctg-record/containers/SiderMenu.module.less":
/*!***************************************************************!*\
  !*** ./src/pages/ctg-record/containers/SiderMenu.module.less ***!
  \***************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"wrapper___2YrFJ","item":"item___3Twlj"};

/***/ }),

/***/ "./src/pages/ctg-record/index.js":
/*!***************************************************!*\
  !*** ./src/pages/ctg-record/index.js + 9 modules ***!
  \***************************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/icon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/icon/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input-number/style/css.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/layout/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/layout/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/menu/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/menu/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/modal/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/modal/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/notification/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/notification/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/spin/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/spin/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/axios/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/request.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/ctg-record/App.less (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/ctg-record/containers/Analyze/index.module.less (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/ctg-record/containers/Content.module.less (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/ctg-record/containers/Header.module.less (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/ctg-record/containers/SiderMenu.module.less (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/moment/moment.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/qs/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-dom/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-pdf/dist/entry.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../LUNA_FontEnd/modules/node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../LUNA_FontEnd/modules/packages/lmg/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../LUNA_FontEnd/modules/packages/pages/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../LUNA_FontEnd/modules/packages/request/lib/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../LUNA_FontEnd/modules/node_modules/react/index.js
var react = __webpack_require__("../LUNA_FontEnd/modules/node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/antd/es/layout/style/index.js
var style = __webpack_require__("./node_modules/antd/es/layout/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js
var layout = __webpack_require__("./node_modules/antd/es/layout/index.js");

// EXTERNAL MODULE: ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ../LUNA_FontEnd/modules/packages/request/lib/index.js
var lib = __webpack_require__("../LUNA_FontEnd/modules/packages/request/lib/index.js");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("./node_modules/moment/moment.js");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./src/common/request.js
var request = __webpack_require__("./src/common/request.js");

// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("./src/common/utils.js");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/style/index.js
var menu_style = __webpack_require__("./node_modules/antd/es/menu/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 3 modules
var menu = __webpack_require__("./node_modules/antd/es/menu/index.js");

// EXTERNAL MODULE: ./src/pages/ctg-record/containers/SiderMenu.module.less
var SiderMenu_module = __webpack_require__("./src/pages/ctg-record/containers/SiderMenu.module.less");
var SiderMenu_module_default = /*#__PURE__*/__webpack_require__.n(SiderMenu_module);

// CONCATENATED MODULE: ./src/pages/ctg-record/containers/SiderMenu.js





class SiderMenu_SiderMenu extends react["Component"] {
  constructor(props) {
    super(props);

    this.handleClick = e => {
      var setItem = this.props.setItem;
      var keyPath = e.keyPath,
          item = e.item;
      var current = item.props.data;
      this.setState({
        selectedKeys: keyPath
      });
      setItem(current);
    };

    this.state = {
      selectedKeys: []
    };
  }

  render() {
    var selectedKeys = this.state.selectedKeys;
    var dataSource = this.props.dataSource;
    return react_default.a.createElement(menu["a" /* default */], {
      mode: "inline",
      className: SiderMenu_module_default.a.wrapper,
      selectedKeys: selectedKeys,
      onClick: this.handleClick
    }, dataSource.map(item => {
      return react_default.a.createElement(menu["a" /* default */].Item, {
        key: item.id,
        data: item,
        className: SiderMenu_module_default.a.item
      }, react_default.a.createElement("div", null, item.visitTime || item.visitDate));
    }));
  }

}

/* harmony default export */ var containers_SiderMenu = (SiderMenu_SiderMenu);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/notification/style/index.js
var notification_style = __webpack_require__("./node_modules/antd/es/notification/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/notification/index.js
var notification = __webpack_require__("./node_modules/antd/es/notification/index.js");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("./node_modules/axios/index.js");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/pages/ctg-record/utils/request.js



var URL = window.CONFIG.baseURL;
var instance = axios_default.a.create({
  baseURL: URL
});
instance.defaults.timeout = 5000; // http request 拦截器

instance.interceptors.request.use(function (config) {
  config.headers = {
    // 在这里设置请求头与携带token信息
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: sessionStorage.getItem("ACCESS_TOKEN"),
    Accept: "application/json"
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
        error.message = "请求错误";
        break;

      case 401:
        error.message = "未授权，请重新登录或登录已过期，请重新登录！"; // window.location.hash = "#/login";  // token过期机制

        break;

      case 403:
        error.message = "拒绝访问"; // window.location.hash = "#/notAuth";

        break;

      case 404:
        error.message = "\u8BF7\u6C42\u9519\u8BEF,\u672A\u627E\u5230\u8BE5\u8D44\u6E90: ".concat(error.response.config.url);
        break;

      case 405:
        error.message = "请求方法未允许";
        break;

      case 408:
        error.message = "请求超时";
        break;

      case 500:
        error.message = "服务器端出错";
        break;

      case 501:
        error.message = "网络未实现";
        break;

      case 502:
        error.message = "网络错误";
        break;

      case 503:
        error.message = "服务不可用";
        break;

      case 504:
        error.message = "网络超时";
        break;

      case 505:
        console.log("http版本不支持该请求");
        error.message = "http版本不支持该请求";
        break;

      default:
        console.log("\u8FDE\u63A5\u9519\u8BEF".concat(error.response.status));
    }
  } else {
    console.log("连接到服务器失败");
  }

  if (error.response.status === 401) {
    if (!loginTipLock) {
      //避免同时多个请求都返回401时，弹出多个“未登录”提示框
      loginTipLock = true;

      notification["a" /* default */].info({
        message: '提示',
        description: error.message
      });

      setTimeout(function () {
        loginTipLock = false;
      }, 1000);
    }
  } else {
    notification["a" /* default */].error({
      message: '出错啦',
      description: error.message
    });
  }

  return Promise.resolve(error.response);
});
/* harmony default export */ var utils_request = (instance);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var qs_lib = __webpack_require__("./node_modules/qs/lib/index.js");
var qs_lib_default = /*#__PURE__*/__webpack_require__.n(qs_lib);

// CONCATENATED MODULE: ./src/pages/ctg-record/utils/index.js
 // export function getUrlParam(name) {
//   // 取得url中?后面的字符
//   var query = window.location.search.substring(1);
//   // 把参数按&拆分成数组
//   var param_arr = query.split('&');
//   for (var i = 0; i < param_arr.length; i++) {
//     var pair = param_arr[i].split('=');
//     if (pair[0] === name) {
//       return pair[1];
//     }
//   }
//   return undefined;
// }

/**
 * 获取指定某个url参数值
 * @param {string} name
 */

function getUrlParam(name) {
  // 取得url中?后面的字符
  var query = window.location.search.substr(1); // 把参数按&拆分成数组

  var params = qs_lib_default.a.parse(query); // 传参时，取指定参数

  if (name) {
    var value = params[name];
    return value;
  }

  return params;
}
/**
   * 对象转url参数
   * @param {*} data
   * @param {*} isPrefix
   */

function queryParams(data, isPrefix) {
  isPrefix = isPrefix ? isPrefix : false;
  var prefix = isPrefix ? '?' : '';
  var _result = [];

  var _loop = function _loop(key) {
    var value = data[key]; // 去掉为空的参数

    if (['', undefined, null].includes(value)) {
      return "continue";
    }

    if (value.constructor === Array) {
      value.forEach(_value => {
        _result.push(encodeURIComponent(key) + '[]=' + encodeURIComponent(_value));
      });
    } else {
      _result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  };

  for (var key in data) {
    var _ret = _loop(key);

    if (_ret === "continue") continue;
  }

  return _result.length ? prefix + _result.join('&') : '';
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
    CTGDATA.starttime = "20" + pureid.substring(0, 2) + "-" + pureid.substring(2, 4) + "-" + pureid.substring(4, 6) + " " + pureid.substring(6, 8) + ":" + pureid.substring(8, 10) + ":" + pureid.substring(10, 12);
  }

  Object.keys(data).forEach(key => {
    var oridata = data[key];

    if (!oridata) {
      return;
    }

    if (key === "fhr1") {
      CTGDATA.index = oridata.length / 2;
    }

    for (var i = 0; i < CTGDATA.index; i++) {
      var hexBits = oridata.substring(0, 2);
      var data_to_push = parseInt(hexBits, 16);

      if (key === "fhr1") {
        CTGDATA.fhr[0][i] = data_to_push;
      } else if (key === "fhr2") {
        CTGDATA.fhr[1][i] = data_to_push;
      } else if (key === "fhr3") {
        CTGDATA.fhr[2][i] = data_to_push;
      } else if (key === "toco") {
        CTGDATA.toco[i] = data_to_push;
      } else if (key === "fm") {
        CTGDATA.fm[i] = data_to_push;
      }

      oridata = oridata.substring(2, oridata.length);
    }
  });
  return CTGDATA;
}
// EXTERNAL MODULE: ./src/pages/ctg-record/containers/Header.module.less
var Header_module = __webpack_require__("./src/pages/ctg-record/containers/Header.module.less");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// CONCATENATED MODULE: ./src/pages/ctg-record/containers/Header.js
/**
 * header 孕产妇信息栏
 * 就诊号、姓名、年龄、孕周、孕/产、医生
 */





class Header_Header extends react["PureComponent"] {
  constructor(props) {
    super(props);
    this[0] = void 0;

    this.fetchPregnancy = () => {
      // TODO http请求
      var _this = this;

      var ID = getUrlParam("pregnancyId"); // 孕册id

      utils_request.get("/pregnancies/".concat(ID)).then(function (response) {
        var dataSource = response.data;

        _this.setState({
          dataSource
        });
      }).catch(function (error) {
        console.log("/pregnancies/id", error);
      });
    };

    this.state = {};
  }

  componentDidMount() {}

  render() {
    var dataSource = this.props.dataSource;
    var inpatientNO = dataSource.inpatientNO,
        name = dataSource.name,
        age = dataSource.age,
        gestationalWeek = dataSource.gestationalWeek,
        gravidity = dataSource.gravidity,
        parity = dataSource.parity,
        doctor = dataSource.doctor;
    return react_default.a.createElement("div", {
      className: Header_module_default.a.wrapper
    }, "\u5C31\u8BCA\u53F7\uFF1A", react_default.a.createElement("span", null, inpatientNO), "\u59D3\u540D\uFF1A", react_default.a.createElement("span", null, name), "\u5E74\u9F84\uFF1A", react_default.a.createElement("span", null, age), "\u5B55\u5468\uFF1A", react_default.a.createElement("span", null, gestationalWeek), "\u5B55/\u4EA7\uFF1A", react_default.a.createElement("span", null, !gravidity && !parity ? "" : "".concat(gravidity, " / ").concat(parity)), "\u533B\u751F\uFF1A", react_default.a.createElement("span", null, doctor));
  }

}
Header_Header.defaultProps = {
  dataSource: {}
};
// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var button_style = __webpack_require__("./node_modules/antd/es/button/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("./node_modules/antd/es/button/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/spin/style/index.js
var spin_style = __webpack_require__("./node_modules/antd/es/spin/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__("./node_modules/antd/es/spin/index.js");

// EXTERNAL MODULE: ../LUNA_FontEnd/modules/packages/lmg/lib/index.js
var lmg_lib = __webpack_require__("../LUNA_FontEnd/modules/packages/lmg/lib/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/style/index.js
var modal_style = __webpack_require__("./node_modules/antd/es/modal/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 6 modules
var modal = __webpack_require__("./node_modules/antd/es/modal/index.js");

// EXTERNAL MODULE: ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/extends.js");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/antd/es/input-number/style/css.js
var css = __webpack_require__("./node_modules/antd/es/input-number/style/css.js");

// EXTERNAL MODULE: ../LUNA_FontEnd/modules/packages/pages/lib/index.js
var pages_lib = __webpack_require__("../LUNA_FontEnd/modules/packages/pages/lib/index.js");

// EXTERNAL MODULE: ./node_modules/react-pdf/dist/entry.js
var entry = __webpack_require__("./node_modules/react-pdf/dist/entry.js");

// CONCATENATED MODULE: ./src/pages/ctg-record/containers/PrintPreview/index.js








var pdf_worker_url =  false ? undefined : "/pdfjs-dist/build/pdf.worker.min.js";
entry["pdfjs"].GlobalWorkerOptions.workerSrc = pdf_worker_url;

class PrintPreview_PrintPreview extends react["Component"] {
  constructor(props) {
    super(props);

    this.onLockChange = locked => {
      this.setState({
        locked
      });
    };

    this.onCustomizableChange = customizable => {
      this.setState({
        customizable
      });
    };

    this.lock = () => {
      this.v.emit("locking", !this.state.locked);
    };

    this.customize = () => {
      this.v.emit("customizing", !this.state.customizable);
    };

    this.cb = start => {
      this.setState({
        start
      });
    };

    this.cbe = end => {
      this.setState({
        end
      });
    };

    this.onReady = v => {
      this.v = v;
      v.on('suit:startTime', this.cb).on('suit:endTime', this.cbe);
    };

    this.getBodyHeight = () => {
      var _this$bodyRef$current = this.bodyRef.current,
          clientHeight = _this$bodyRef$current.clientHeight,
          clientWidth = _this$bodyRef$current.clientWidth;
      return {
        height: clientHeight,
        width: clientWidth
      };
    };

    this.onDownload = () => {
      var filePath = "".concat(window.CONFIG.baseURL, "/ctg-exams-pdfurl/").concat(this.props.docId);
      window.open(filePath);
    };

    this.getPreviewData = () => {
      var _this$props$selected = this.props.selected,
          _this$props$selected$ = _this$props$selected.pregnancy,
          pregnancy = _this$props$selected$ === void 0 ? {} : _this$props$selected$,
          _this$props$selected$2 = _this$props$selected.ctgexam,
          ctgexam = _this$props$selected$2 === void 0 ? {} : _this$props$selected$2;
      var starttime = ctgexam.startTime;
      var p = pregnancy;
      return {
        docid: this.props.docId,
        name: p.name,
        age: p.age,
        gestationalWeek: p.gestationalWeek,
        inpatientNO: p.inpatientNO,
        startdate: moment_default()(starttime).format('YYYY-MM-DD HH:mm:ss'),
        fetalcount: 2
      };
    };

    this.state = {
      start: 0,
      end: 0,
      locked: false,
      customizable: false
    };
    this.bodyRef = react_default.a.createRef();
  }

  componentWillUnmount() {
    var v = this.v;
    v && v.off('suit:startTime', this.cb).off('suit:endTime', this.cb);
  }

  render() {
    var _this$props = this.props,
        visible = _this$props.visible,
        handleOk = _this$props.handleOk,
        handleCancel = _this$props.handleCancel,
        title = _this$props.title,
        docId = _this$props.docId;
    return react_default.a.createElement(modal["a" /* default */], {
      title: title,
      centered: true,
      visible: visible,
      maskClosable: false,
      footer: false,
      onOk: handleOk,
      onCancel: handleCancel,
      width: "98%",
      height: "98%"
    }, react_default.a.createElement(pages_lib["Ctg_Report"], extends_default()({
      onDownload: this.onDownload
    }, this.getPreviewData(), {
      print_interval: 20
    })));
  }

}

/* harmony default export */ var containers_PrintPreview = (PrintPreview_PrintPreview);
// EXTERNAL MODULE: ./src/pages/ctg-record/containers/Analyze/index.module.less
var index_module = __webpack_require__("./src/pages/ctg-record/containers/Analyze/index.module.less");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// CONCATENATED MODULE: ./src/pages/ctg-record/containers/Analyze/index.js







class Analyze_Analyze extends react["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var _this$props = this.props,
        visible = _this$props.visible,
        handleOk = _this$props.handleOk,
        handleCancel = _this$props.handleCancel,
        title = _this$props.title,
        docId = _this$props.docId;
    console.log('ddddd', docId);
    return react_default.a.createElement(modal["a" /* default */], {
      title: title,
      centered: true,
      visible: visible,
      onOk: handleOk,
      footer: false,
      onCancel: handleCancel,
      width: "98%",
      height: "95%",
      wrapClassName: index_module_default.a.modal,
      maskClosable: false
    }, react_default.a.createElement(pages_lib["Ctg_Analyse"], {
      docid: docId
    }));
  }

}

/* harmony default export */ var containers_Analyze = (Analyze_Analyze);
// EXTERNAL MODULE: ./src/pages/ctg-record/containers/Content.module.less
var Content_module = __webpack_require__("./src/pages/ctg-record/containers/Content.module.less");
var Content_module_default = /*#__PURE__*/__webpack_require__.n(Content_module);

// CONCATENATED MODULE: ./src/pages/ctg-record/containers/Content.js





/**
 * CTG 曲线
 */








class Content_Content extends react["Component"] {
  constructor(props) {
    super(props);

    this.fetch = docId => {
      var _this = this;

      _this.setState({
        loading: true
      });

      setTimeout(() => {
        request["a" /* default */].get("/ctg-exams-data/".concat(docId)).then(function (response) {
          var data = response.data;

          if (response && response.data) {
            var ctgData = transformsCTG(data.docid, data); // {}

            _this.setState({
              dataSource: ctgData,
              loading: false
            });
          } else {
            _this.setState({
              dataSource: null,
              loading: false
            });
          }
        }).catch(function (error) {
          console.log("/ctg-exams-data/docId", error);

          _this.setState({
            dataSource: null,
            loading: false
          });
        });
      }, 600);
    };

    this.showModal = e => {
      console.log('test target', e.target.id);
      var id = e.target.id;

      if (id === 'print') {
        this.setState({
          printVisible: true
        });
      } else if (id === 'analyze') {
        this.setState({
          analyzeVisible: true
        });
      } else {}
    };

    this.handleCancel = () => {
      this.setState({
        printVisible: false,
        analyzeVisible: false
      });
    };

    this.renderTitle = () => {
      var selected = this.props.selected;
      var pregnancy = selected.pregnancy,
          ctgexam = selected.ctgexam,
          gestationalWeek = selected.gestationalWeek;
      return react_default.a.createElement("div", {
        className: Content_module_default.a.title
      }, react_default.a.createElement("span", null, "\u6863\u6848\u53F7\uFF1A"), react_default.a.createElement("span", {
        className: Content_module_default.a.value
      }, ctgexam.note), react_default.a.createElement("span", null, "\u4F4F\u9662\u53F7\uFF1A"), react_default.a.createElement("span", {
        className: Content_module_default.a.value
      }, pregnancy.inpatientNO), react_default.a.createElement("span", null, "\u59D3\u540D\uFF1A"), react_default.a.createElement("span", {
        className: Content_module_default.a.value
      }, pregnancy.name), react_default.a.createElement("span", null, "\u5E74\u9F84\uFF1A"), react_default.a.createElement("span", {
        className: Content_module_default.a.value
      }, pregnancy.age), react_default.a.createElement("span", null, "\u5B55\u5468\uFF1A"), react_default.a.createElement("span", {
        className: Content_module_default.a.value
      }, gestationalWeek), react_default.a.createElement("span", null, "\u76D1\u62A4\u65E5\u671F: "), react_default.a.createElement("span", {
        className: Content_module_default.a.value
      }, ctgexam.startTime && moment_default()(ctgexam.startTime).format("YYYY-MM-DD HH:mm:ss")));
    };

    this.state = {
      loading: false,
      dataSource: null,
      printVisible: false,
      analyzeVisible: false,
      docId: ''
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // console.log("content props -->", nextProps.selected);
    var docId = nextProps.selected.ctgexam && nextProps.selected.ctgexam.note;

    if (nextProps.selected.id !== this.props.selected.id) {
      this.setState({
        docId
      });
      this.fetch(docId);
    }
  }

  render() {
    var _this$state = this.state,
        docId = _this$state.docId,
        loading = _this$state.loading,
        dataSource = _this$state.dataSource,
        printVisible = _this$state.printVisible,
        analyzeVisible = _this$state.analyzeVisible;
    var selected = this.props.selected;
    var disabled = !(selected && selected.id);
    return react_default.a.createElement("div", {
      className: Content_module_default.a.wrapper
    }, react_default.a.createElement("div", {
      className: Content_module_default.a.ctg
    }, react_default.a.createElement(spin["a" /* default */], {
      spinning: loading,
      tip: "\u52A0\u8F7D\u4E2D...",
      delay: 200
    }, react_default.a.createElement(lmg_lib["Ctg"], {
      suitType: 2,
      data: dataSource
    }))), react_default.a.createElement("div", {
      className: Content_module_default.a.buttons
    }, react_default.a.createElement(es_button["a" /* default */], {
      id: "analyze",
      disabled: disabled,
      onClick: this.showModal
    }, "\u5206\u6790"), react_default.a.createElement(es_button["a" /* default */], {
      id: "print",
      disabled: disabled,
      onClick: this.showModal
    }, "\u62A5\u544A"), printVisible ? react_default.a.createElement(containers_PrintPreview, {
      docId: docId,
      visible: printVisible,
      dataSource: dataSource,
      selected: selected,
      title: this.renderTitle(),
      handleCancel: this.handleCancel
    }) : null, analyzeVisible ? react_default.a.createElement(containers_Analyze, {
      docId: docId,
      visible: analyzeVisible,
      dataSource: dataSource,
      title: this.renderTitle(),
      handleCancel: this.handleCancel
    }) : null));
  }

}
// EXTERNAL MODULE: ./node_modules/antd/es/icon/style/index.js
var icon_style = __webpack_require__("./node_modules/antd/es/icon/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("./node_modules/antd/es/icon/index.js");

// CONCATENATED MODULE: ./src/pages/ctg-record/components/PageLoading.js





var antIcon = react_default.a.createElement(icon["a" /* default */], {
  type: "loading",
  style: {
    fontSize: 48,
    fontWeight: "blod"
  },
  spin: true
});
function Loading() {
  return react_default.a.createElement("div", {
    style: {
      position: "absolute",
      top: "0",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, react_default.a.createElement(spin["a" /* default */], {
    indicator: antIcon
  }));
}
// EXTERNAL MODULE: ./src/pages/ctg-record/App.less
var ctg_record_App = __webpack_require__("./src/pages/ctg-record/App.less");
var App_default = /*#__PURE__*/__webpack_require__.n(ctg_record_App);

// CONCATENATED MODULE: ./src/pages/ctg-record/App.js







 // import 'antd/dist/antd.css';






var AUTH_TOKEN = utils["b" /* auth */].get();

class App_App extends react["Component"] {
  constructor(props) {
    super(props);

    this.fetchAuth = () => {
      var ACCOUNT = window.CONFIG.account;
      request["a" /* default */].post("/authenticate", {
        username: ACCOUNT.username,
        password: ACCOUNT.password
      }).then(function (response) {
        var access_token = "Bearer " + response.data.id_token;
        sessionStorage.setItem("ACCESS_TOKEN", access_token);
        utils["b" /* auth */].set(response.data.id_token); // _this.setState({ isLoading: false });

        lib_default.a.config({
          Authorization: access_token,
          prefix: window.CONFIG.baseURL
        });
      }).catch(function (error) {
        console.log("api/authenticate", error);
      });
    };

    this.fetchList = () => {
      this.setState({
        isLoading: true
      });

      var _this = this; // 加载档案列表


      var url_params = window.location.search.substr(1);
      console.log('555555555555', url_params);
      request["a" /* default */].get("/prenatal-visits-encrypt?".concat(url_params)).then(function (response) {
        // handle success
        var dataSource = response.data;

        if (response && response.data) {
          var newData = dataSource.map(e => {
            return objectSpread_default()({}, e, {
              visitTime: e.visitTime && moment_default()(e.visitTime).format('YY/MM/DD HH:mm')
            });
          });

          _this.setState({
            dataSource: newData,
            pregnancy: newData[0].pregnancy // isLoading: false,

          });
        }

        setTimeout(() => {
          _this.setState({
            isLoading: false
          });
        }, 600);
      }).catch(function (error) {
        // handle error
        console.log('/prenatal-visitspage-encrypt', error);
      });
    };

    this.setItem = item => {
      this.setState({
        selected: item
      });
    };

    this.state = {
      isLoading: true,
      selected: {},
      dataSource: [],
      pregnancy: {}
    };
  }

  componentDidMount() {
    // TODO 设置固定账户密码，静默登录
    this.fetchList();

    if (!AUTH_TOKEN) {
      this.fetchAuth();
    } // 组件专有request


    lib_default.a.config({
      Authorization: AUTH_TOKEN,
      prefix: window.CONFIG.baseURL
    });
  }

  render() {
    var _this$state = this.state,
        isLoading = _this$state.isLoading,
        selected = _this$state.selected,
        dataSource = _this$state.dataSource,
        pregnancy = _this$state.pregnancy;

    if (isLoading) {
      return react_default.a.createElement(Loading, null);
    }

    return react_default.a.createElement(layout["a" /* default */], {
      className: App_default.a['app-wrapper']
    }, react_default.a.createElement(layout["a" /* default */].Header, {
      className: App_default.a['app-header']
    }, react_default.a.createElement(Header_Header, {
      dataSource: pregnancy
    })), react_default.a.createElement(layout["a" /* default */], null, react_default.a.createElement(layout["a" /* default */].Sider, {
      width: 260,
      className: App_default.a['app-sider']
    }, react_default.a.createElement(containers_SiderMenu, {
      setItem: this.setItem,
      dataSource: dataSource
    })), react_default.a.createElement(layout["a" /* default */].Content, {
      className: App_default.a['app-content']
    }, react_default.a.createElement(Content_Content, {
      selected: selected
    }))));
  }

}

/* harmony default export */ var pages_ctg_record_App = (App_App);
// CONCATENATED MODULE: ./src/pages/ctg-record/index.js



react_dom_default.a.render(react_default.a.createElement(pages_ctg_record_App, null), document.getElementById('root'));

/***/ }),

/***/ 2:
/*!****************************************************************************************!*\
  !*** multi ./node_modules/umi-plugin-mpa/templates/polyfill.js ./src/pages/ctg-record ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\work\CTGCenter\node_modules\umi-plugin-mpa\templates\polyfill.js */"./node_modules/umi-plugin-mpa/templates/polyfill.js");
module.exports = __webpack_require__(/*! ./src/pages/ctg-record */"./src/pages/ctg-record/index.js");


/***/ })

/******/ });