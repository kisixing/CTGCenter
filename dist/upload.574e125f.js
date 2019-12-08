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
/******/ 		"upload": 0
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
/******/ 	__webpack_require__.p = "./";
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
/******/ 	deferredModules.push([10,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/es/progress/style/index.less":
/*!********************************************************!*\
  !*** ./node_modules/antd/es/progress/style/index.less ***!
  \********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/antd/es/upload/style/index.less":
/*!******************************************************!*\
  !*** ./node_modules/antd/es/upload/style/index.less ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
        error.message = '未授权，请重新登录或登录已过期，请重新登录！'; // window.location.hash = "/login";  // token过期机制

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
/*! exports used: account, auth, getUrlParam, transformsCTG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUrlParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return transformsCTG; });
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

/***/ "./src/pages/upload/index.js":
/*!***********************************************!*\
  !*** ./src/pages/upload/index.js + 4 modules ***!
  \***********************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/form/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/form/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/icon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/icon/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/message/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/message/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/select/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/select/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/tooltip/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/upload/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/request.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/upload/index.less (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/extends.js");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var style = __webpack_require__("./node_modules/antd/es/button/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("./node_modules/antd/es/button/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/select/style/index.js
var select_style = __webpack_require__("./node_modules/antd/es/select/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js
var es_select = __webpack_require__("./node_modules/antd/es/select/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/form/style/index.js
var form_style = __webpack_require__("./node_modules/antd/es/form/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 10 modules
var es_form = __webpack_require__("./node_modules/antd/es/form/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var input_style = __webpack_require__("./node_modules/antd/es/input/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 4 modules
var input = __webpack_require__("./node_modules/antd/es/input/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/message/style/index.js
var message_style = __webpack_require__("./node_modules/antd/es/message/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js
var message = __webpack_require__("./node_modules/antd/es/message/index.js");

// EXTERNAL MODULE: ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__("./node_modules/qs/lib/index.js");

// EXTERNAL MODULE: ./src/common/request.js
var request = __webpack_require__("./src/common/request.js");

// EXTERNAL MODULE: ./node_modules/antd/es/style/index.less
var es_style = __webpack_require__("./node_modules/antd/es/style/index.less");

// EXTERNAL MODULE: ./node_modules/antd/es/upload/style/index.less
var upload_style = __webpack_require__("./node_modules/antd/es/upload/style/index.less");

// EXTERNAL MODULE: ./node_modules/antd/es/progress/style/index.less
var progress_style = __webpack_require__("./node_modules/antd/es/progress/style/index.less");

// CONCATENATED MODULE: ./node_modules/antd/es/progress/style/index.js


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/style/index.js
var tooltip_style = __webpack_require__("./node_modules/antd/es/tooltip/style/index.js");

// CONCATENATED MODULE: ./node_modules/antd/es/upload/style/index.js

 // style dependencies



//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/antd/es/upload/index.js + 12 modules
var upload = __webpack_require__("./node_modules/antd/es/upload/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/icon/style/index.js
var icon_style = __webpack_require__("./node_modules/antd/es/icon/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("./node_modules/antd/es/icon/index.js");

// CONCATENATED MODULE: ./src/pages/upload/OSSUpload.js









var OSSUpload = props => {
  var _useState = Object(react["useState"])({}),
      _useState2 = slicedToArray_default()(_useState, 2),
      OSSData = _useState2[0],
      setOSSData = _useState2[1];

  var onChange = (_ref) => {
    var fileList = _ref.fileList;
    var onChange = props.onChange;
    console.log('Aliyun OSS:', fileList);

    if (onChange && fileList.length > 0) {
      onChange([fileList[fileList.length - 1]]);
    }
  };

  var onRemove = file => {
    var value = props.value,
        onChange = props.onChange;
    var files = value.filter(v => v.url !== file.url);

    if (onChange) {
      onChange(files);
    }
  };

  var transformFile = file => {
    var suffix = file.name.slice(file.name.lastIndexOf('.'));
    var filename = Date.now() + suffix;
    file.url = OSSData.dir + filename;
    return file;
  };

  var getExtraData = file => {
    return {
      key: file.url,
      OSSAccessKeyId: OSSData.accessId,
      policy: OSSData.policy,
      Signature: OSSData.signature
    };
  };

  var beforeUpload = e => {
    console.log(22, e);
    return false;
  };

  var value = props.value;
  var uploadProps = {
    name: 'file',
    fileList: value,
    // action: OSSData.host,
    onChange: onChange,
    onRemove: onRemove,
    transformFile: transformFile,
    data: getExtraData,
    beforeUpload: beforeUpload
  };
  return react_default.a.createElement(upload["a" /* default */], uploadProps, react_default.a.createElement(es_button["a" /* default */], null, react_default.a.createElement(icon["a" /* default */], {
    type: "upload"
  }), " ", react_default.a.createElement("span", null, "\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6 ")));
};

/* harmony default export */ var upload_OSSUpload = (OSSUpload);
// EXTERNAL MODULE: ./src/pages/upload/index.less
var pages_upload = __webpack_require__("./src/pages/upload/index.less");
var upload_default = /*#__PURE__*/__webpack_require__.n(pages_upload);

// CONCATENATED MODULE: ./src/pages/upload/Upload.js













/**
 *"name": "1.0.1",
 *"description": "test",
 *"type": "ctg-suit",
 *"uri": "1.0.1",
 *"createTime": "2019-11-08 00:01:00",
 *"enable": null
 */






class Upload_Upload extends react["Component"] {
  constructor() {
    super(...arguments);
    this.state = {
      loading: false,
      historyList: {
        'ctg-suit': [],
        'pda': []
      }
    };

    this.reset = () => {
      this.props.form.resetFields();
    };

    this.fetchHistoryVersion = () => {
      var _this = this;

      var historyList = this.state.historyList;
      request["a" /* default */].get('/versions').then(function (response) {
        var d = response.data;

        for (var i = 0; i < d.length; i++) {
          var element = d[i];

          if (element.type === 'ctg-suit') {
            historyList['ctg-suit'].push(element);
          }

          if (element.type === 'pda') {
            historyList['pda'].push(element);
          }
        } // 分版本
        // console.log('object', d, historyList);


        _this.setState({
          historyList
        });
      }).catch(function (error) {});
    };

    this.submit = () => {
      var _this$props$form = this.props.form,
          validateFields = _this$props$form.validateFields,
          resetFields = _this$props$form.resetFields;
      validateFields((err, values) => {
        if (err) {
          return console.log('Received values of form: ', values);
        }

        this.setState({
          loading: true
        });
        var fd = new FormData();
        var data = Object.entries(values).filter((_ref) => {
          var _ref2 = slicedToArray_default()(_ref, 2),
              k = _ref2[0],
              v = _ref2[1];

          return !!v;
        }).reduce((a, _ref3) => {
          var _ref4 = slicedToArray_default()(_ref3, 2),
              k = _ref4[0],
              v = _ref4[1];

          if (k === 'file') {
            v = v[0].originFileObj;
          }

          a.append(k, v);
          return a;
        }, fd); // console.log('upload data', values, data);

        Object(request["a" /* default */])({
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: data,
          url: '/upload',
          timeout: 1000 * 60 * 60
        }).then(response => {
          var statusText = response.statusText;

          if (statusText === 'Created') {
            message["a" /* default */].info('上传成功');

            this.setState({
              loading: false
            });
            resetFields();
          }
        }).catch(error => {
          console.log('/upload', error);

          message["a" /* default */].info('上传失败，请重新上传');

          this.setState({
            loading: false
          });
        });
      });
    };
  }

  componentDidMount() {
    this.fetchHistoryVersion();
  }

  render() {
    var _this$state = this.state,
        loading = _this$state.loading,
        historyList = _this$state.historyList;
    var getFieldDecorator = this.props.form.getFieldDecorator;
    var formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 6
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 16
        }
      }
    };
    return react_default.a.createElement("div", {
      className: upload_default.a.container
    }, react_default.a.createElement("div", {
      className: upload_default.a.title
    }, "\u6587\u4EF6\u4E0A\u4F20"), react_default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, react_default.a.createElement(es_form["a" /* default */], extends_default()({}, formItemLayout, {
      layout: "horizontal",
      className: upload_default.a.form
    }), react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u7248\u672C\u53F7"
    }, getFieldDecorator('name', {
      rules: [{
        required: true,
        message: '请输入版本号!'
      }]
    })(react_default.a.createElement(input["a" /* default */], {
      placeholder: "\u8BF7\u8F93\u5165\u7248\u672C\u53F7"
    }))), react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u5B89\u88C5\u5305\u7C7B\u578B"
    }, getFieldDecorator('type', {
      rules: [{
        required: true,
        message: '请选择上传文件类型!'
      }]
    })(react_default.a.createElement(es_select["a" /* default */], {
      placeholder: "\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6\u7C7B\u578B"
    }, react_default.a.createElement(es_select["a" /* default */].Option, {
      value: "ctg-suit"
    }, "ctg-suit"), react_default.a.createElement(es_select["a" /* default */].Option, {
      value: "pda"
    }, "pda")))), react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "URI"
    }, getFieldDecorator('uri', {
      rules: [{
        required: true,
        message: '请输入上传路径!'
      }]
    })(react_default.a.createElement(input["a" /* default */], {
      placeholder: "\u8BF7\u8F93\u5165\u4E0A\u4F20\u8DEF\u5F84"
    }))), react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u7B80\u8FF0"
    }, getFieldDecorator('description', {
      rules: [{
        required: true,
        message: '请输入简单的描述！'
      }]
    })(react_default.a.createElement(input["a" /* default */].TextArea, {
      rows: 4,
      placeholder: "\u8BF7\u8F93\u5165\u7B80\u5355\u7684\u63CF\u8FF0..."
    }))), react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u9009\u62E9\u6587\u4EF6"
    }, getFieldDecorator('file', {
      rules: [{
        required: true,
        message: '请选择上传文件！'
      }]
    })(react_default.a.createElement(upload_OSSUpload, null))), react_default.a.createElement(es_form["a" /* default */].Item, {
      label: " ",
      colon: false
    }, react_default.a.createElement(es_button["a" /* default */], {
      type: "primary",
      onClick: this.submit,
      loading: loading
    }, "\u4E0A\u4F20"), react_default.a.createElement(es_button["a" /* default */], {
      onClick: this.reset
    }, "\u53D6\u6D88"))), react_default.a.createElement("div", {
      className: upload_default.a.list
    }, react_default.a.createElement("p", {
      className: upload_default.a.title
    }, "\u4E0A\u4F20\u5386\u53F2\u7248\u672C"), react_default.a.createElement("div", {
      className: upload_default.a.content
    }, react_default.a.createElement("div", null, react_default.a.createElement("p", null, "suit-ctg"), react_default.a.createElement("ul", null, historyList['ctg-suit'].map(e => react_default.a.createElement("li", {
      key: e.id
    }, e.name)))), react_default.a.createElement("div", null, react_default.a.createElement("p", null, "pda"), react_default.a.createElement("ul", null, historyList['pda'].map(e => react_default.a.createElement("li", {
      key: e.id
    }, e.name))))))));
  }

}

/* harmony default export */ var upload_Upload = (es_form["a" /* default */].create()(Upload_Upload));
// CONCATENATED MODULE: ./src/pages/upload/index.js



react_dom_default.a.render(react_default.a.createElement(upload_Upload, null), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/upload/index.less":
/*!*************************************!*\
  !*** ./src/pages/upload/index.less ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container___2GvuR","title":"title___1Rn07","form":"form___1yRcv","list":"list___2ed3w","content":"content___3MdbL"};

/***/ }),

/***/ 10:
/*!************************************************************************************!*\
  !*** multi ./node_modules/umi-plugin-mpa/templates/polyfill.js ./src/pages/upload ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\FrontEnd\CTGCenter\node_modules\umi-plugin-mpa\templates\polyfill.js */"./node_modules/umi-plugin-mpa/templates/polyfill.js");
module.exports = __webpack_require__(/*! ./src/pages/upload */"./src/pages/upload/index.js");


/***/ })

/******/ });