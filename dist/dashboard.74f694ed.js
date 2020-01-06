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
/******/ 		"dashboard": 0
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
/******/ 	deferredModules.push([1,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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




var AUTH_TOKEN = _utils__WEBPACK_IMPORTED_MODULE_3__[/* auth */ "b"].get();
var NO_TOKEN_LIST = ['/prenatal-visits-encrypt'];
var URL = window.CONFIG.baseURL;
var instance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: URL,
  timeout: 5000
}); // instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// http request 拦截器

instance.interceptors.request.use(function (config) {
  var url = config.url.split('?')[0];
  var isCarry = !NO_TOKEN_LIST.includes(url);
  config.headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: isCarry ? AUTH_TOKEN : ''
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
        var data = error.response.data;

        if (data.errorKey === 'encrypterror') {
          error.message = '请求错误，解密错误';
        }

        if (data.errorKey === 'PatIderror') {
          error.message = '请求错误，该住院号不存在!';
        }

        if (data.errorKey === 'signerror') {
          error.message = '校验和错误！';
        }

        break;

      case 401:
        error.message = '401 未授权，请重新登录或登录已过期，请重新登录！'; // window.location.hash = "/login";  // token过期机制

        break;

      case 403:
        error.message = '403 账户未授权，拒绝访问！'; // window.location.hash = "/notAuth";

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
    // 跨域获取不到状态码后者其他状态码进行的处理
    console.log('网络出现错误，连接到服务器失败，请稍后再试！');
  }

  if (error.response && error.response.status === 401) {
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
      description: "".concat(error.message)
    });
  }

  return Promise.resolve(error);
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

/***/ "./src/components/Loader/Loader.less":
/*!*******************************************!*\
  !*** ./src/components/Loader/Loader.less ***!
  \*******************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"loader":"loader___1O6A9","fullScreen":"fullScreen___3UJO9","warpper":"warpper___G6yYD","inner":"inner___32ER1","spinner":"spinner___1EXfi","text":"text___1Yzwh","hidden":"hidden___73Ru7"};

/***/ }),

/***/ "./src/pages/layout/index.js":
/*!***********************************************!*\
  !*** ./src/pages/layout/index.js + 5 modules ***!
  \***********************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/icon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/icon/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/layout/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/layout/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/menu/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/menu/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/request.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/Loader/Loader.less (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/layout/index.less (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/object-assign/index.js (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("./node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./src/components/Loader/Loader.less
var Loader = __webpack_require__("./src/components/Loader/Loader.less");
var Loader_default = /*#__PURE__*/__webpack_require__.n(Loader);

// CONCATENATED MODULE: ./src/components/Loader/Loader.js





var Loader_Loader = (_ref) => {
  var _ref$spinning = _ref.spinning,
      spinning = _ref$spinning === void 0 ? false : _ref$spinning,
      fullScreen = _ref.fullScreen;
  return react_default.a.createElement("div", {
    className: classnames_default()(Loader_default.a.loader, {
      [Loader_default.a.hidden]: !spinning,
      [Loader_default.a.fullScreen]: fullScreen
    })
  }, react_default.a.createElement("div", {
    className: Loader_default.a.warpper
  }, react_default.a.createElement("div", {
    className: Loader_default.a.inner
  }), react_default.a.createElement("div", {
    className: Loader_default.a.text
  }, "\u52A0\u8F7D\u4E2D...")));
};

/* harmony default export */ var components_Loader_Loader = (Loader_Loader);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/style/index.js
var style = __webpack_require__("./node_modules/antd/es/layout/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js
var layout = __webpack_require__("./node_modules/antd/es/layout/index.js");

// EXTERNAL MODULE: ./src/common/request.js
var request = __webpack_require__("./src/common/request.js");

// EXTERNAL MODULE: ./node_modules/antd/es/icon/style/index.js
var icon_style = __webpack_require__("./node_modules/antd/es/icon/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("./node_modules/antd/es/icon/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/style/index.js
var menu_style = __webpack_require__("./node_modules/antd/es/menu/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 3 modules
var menu = __webpack_require__("./node_modules/antd/es/menu/index.js");

// CONCATENATED MODULE: ./src/pages/layout/SiderMenu.js





var SubMenu = menu["a" /* default */].SubMenu;
var MENUS = [{
  id: '001',
  title: '胎监档案',
  href: 'http://localhost:8000/home.html'
}, {
  id: '002',
  title: '调度中心',
  href: 'http://localhost:8000/control-center.html'
}, {
  id: '0030',
  title: '其他',
  children: [{
    id: '0031',
    title: '调度中心',
    href: 'http://localhost:8000/control-center.html'
  }]
}];
class SiderMenu_SiderMenu extends react["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var handleClick = this.props.handleClick;
    var origin = window.location.origin;
    return react_default.a.createElement(menu["a" /* default */], {
      onClick: handleClick,
      style: {
        width: 256,
        height: '100%'
      },
      defaultSelectedKeys: ['001'],
      defaultOpenKeys: ['sub1'],
      mode: "inline"
    }, react_default.a.createElement(menu["a" /* default */].Item, {
      key: "001",
      title: "\u80CE\u76D1\u6863\u6848",
      href: "".concat(origin, "/ctg-record.html?appId=CkLRboUsAnlSHN3qdJYwk/Zpz9X+IkjQDhgwviLu1tFkP3YxfDc0AkmUzAW6bqzF&nonce=5bqe9xeTr0OeeZTdx5cdlH/jQ4SQ0WUmpn+j5cditM5ylfOnXO2WwHwiCnunGIAO&timestamp=bpXqcB+rZu4Ev6iZueSODQ==&sign=36B8CA9AFCD5530CBEBD334F92BCA62A&patId=xa9kqMDuP6/9kcm9lGUxBQ==")
    }, react_default.a.createElement(icon["a" /* default */], {
      type: "ordered-list"
    }), react_default.a.createElement("span", null, "\u80CE\u76D1\u6863\u6848")), react_default.a.createElement(menu["a" /* default */].Item, {
      key: "002",
      title: "\u8C03\u5EA6\u4E2D\u5FC3",
      href: "".concat(origin, "/control-center.html?auth_user=admin&auth_token=SLX9FT0&pregnancyId=8")
    }, react_default.a.createElement(icon["a" /* default */], {
      type: "pic-center"
    }), react_default.a.createElement("span", null, "\u8C03\u5EA6\u4E2D\u5FC3")), react_default.a.createElement(menu["a" /* default */].Item, {
      key: "003",
      title: "\u4EFB\u52A1\u5217\u8868",
      href: "".concat(origin, "/task-list.html?auth_user=admin&auth_token=SLX9FT0&pregnancyId=8")
    }, react_default.a.createElement(icon["a" /* default */], {
      type: "unordered-list"
    }), react_default.a.createElement("span", null, "\u4EFB\u52A1\u5217\u8868")), react_default.a.createElement(menu["a" /* default */].Item, {
      key: "004",
      title: "\u4EFB\u52A1\u65E5\u5FD7",
      href: "".concat(origin, "/task-log.html?auth_user=admin&auth_token=SLX9FT0&pregnancyId=8")
    }, react_default.a.createElement(icon["a" /* default */], {
      type: "warning"
    }), react_default.a.createElement("span", null, "\u4EFB\u52A1\u65E5\u5FD7")), react_default.a.createElement(menu["a" /* default */].Item, {
      key: "005",
      title: "\u6587\u4EF6\u4E0A\u4F20",
      href: "".concat(origin, "/upload.html?auth_user=admin&auth_token=SLX9FT0")
    }, react_default.a.createElement(icon["a" /* default */], {
      type: "upload"
    }), react_default.a.createElement("span", null, "\u6587\u4EF6\u4E0A\u4F20")), react_default.a.createElement(menu["a" /* default */].Item, {
      key: "006",
      title: "\u5E8A\u4F4D\u7BA1\u7406",
      href: "".concat(origin, "/bedinfo.html?auth_user=admin&auth_token=SLX9FT0")
    }, react_default.a.createElement(icon["a" /* default */], {
      type: "upload"
    }), react_default.a.createElement("span", null, "\u5E8A\u4F4D\u7BA1\u7406")), react_default.a.createElement(menu["a" /* default */].Item, {
      key: "007",
      title: "\u76D1\u62A4\u9875",
      href: "".concat(origin, "/ctg.html?auth_user=admin&auth_token=SLX9FT0")
    }, react_default.a.createElement(icon["a" /* default */], {
      type: "upload"
    }), react_default.a.createElement("span", null, "\u76D1\u62A4\u9875")), react_default.a.createElement(menu["a" /* default */].Item, {
      key: "008",
      title: "\u7528\u6237\u7BA1\u7406",
      href: "".concat(origin, "/user-account.html")
    }, react_default.a.createElement(icon["a" /* default */], {
      type: "user"
    }), react_default.a.createElement("span", null, "\u7528\u6237\u7BA1\u7406")), react_default.a.createElement(menu["a" /* default */].Item, {
      key: "009",
      title: "\u5F85\u5904\u7406\u6863\u6848\u7BA1\u7406",
      href: "".concat(origin, "/dcms.html")
    }, react_default.a.createElement(icon["a" /* default */], {
      type: "user"
    }), react_default.a.createElement("span", null, "\u5F85\u5904\u7406\u6863\u6848\u7BA1\u7406")), react_default.a.createElement(menu["a" /* default */].Item, {
      key: "010",
      title: "\u6863\u6848\u7BA1\u7406",
      href: "".concat(origin, "/archives.html")
    }, react_default.a.createElement(icon["a" /* default */], {
      type: "file"
    }), react_default.a.createElement("span", null, "\u6863\u6848\u7BA1\u7406")), react_default.a.createElement(menu["a" /* default */].Item, {
      key: "011",
      title: "\u7528\u6237\u7EC4\u7BA1\u7406",
      href: "".concat(origin, "/groups.html")
    }, react_default.a.createElement(icon["a" /* default */], {
      type: "file"
    }), react_default.a.createElement("span", null, "\u7528\u6237\u7EC4\u7BA1\u7406")), react_default.a.createElement(menu["a" /* default */].Item, {
      key: "012",
      title: "\u75C5\u533A\u7BA1\u7406",
      href: "".concat(origin, "/wards.html")
    }, react_default.a.createElement(icon["a" /* default */], {
      type: "file"
    }), react_default.a.createElement("span", null, "\u75C5\u533A\u7BA1\u7406")));
  }

}
/* harmony default export */ var layout_SiderMenu = (SiderMenu_SiderMenu);
// EXTERNAL MODULE: ./node_modules/object-assign/index.js
var object_assign = __webpack_require__("./node_modules/object-assign/index.js");
var object_assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/react-iframe/dist/es/iframe.js
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var Iframe = function (_a) {
    var url = _a.url, allowFullScreen = _a.allowFullScreen, position = _a.position, display = _a.display, height = _a.height, width = _a.width, overflow = _a.overflow, styles = _a.styles, onLoad = _a.onLoad, onMouseOver = _a.onMouseOver, onMouseOut = _a.onMouseOut, scrolling = _a.scrolling, id = _a.id, frameBorder = _a.frameBorder, ariaHidden = _a.ariaHidden, sandbox = _a.sandbox, allow = _a.allow, className = _a.className, title = _a.title, ariaLabel = _a.ariaLabel, ariaLabelledby = _a.ariaLabelledby, name = _a.name, target = _a.target, loading = _a.loading, importance = _a.importance, referrerpolicy = _a.referrerpolicy, allowpaymentrequest = _a.allowpaymentrequest, src = _a.src;
    var defaultProps = object_assign_default()({
        src: src || url,
        target: target || null,
        style: {
            position: position || null,
            display: display || "block",
            overflow: overflow || null
        },
        scrolling: scrolling || null,
        allowpaymentrequest: allowpaymentrequest || null,
        importance: importance || null,
        sandbox: sandbox || null,
        loading: loading || null,
        styles: styles || null,
        name: name || null,
        className: className || null,
        referrerpolicy: referrerpolicy || null,
        title: title || null,
        allow: allow || null,
        id: id || null,
        "aria-labelledby": ariaLabelledby || null,
        "aria-hidden": ariaHidden || null,
        "aria-label": ariaLabel || null,
        width: width || null,
        height: height || null,
        onLoad: onLoad || null,
        onMouseOver: onMouseOver || null,
        onMouseOut: onMouseOut || null
    });
    var props = Object.create(null);
    for (var _i = 0, _b = Object.keys(defaultProps); _i < _b.length; _i++) {
        var prop = _b[_i];
        if (defaultProps[prop] != null) {
            props[prop] = defaultProps[prop];
        }
    }
    for (var _c = 0, _d = Object.keys(props.style); _c < _d.length; _c++) {
        var i = _d[_c];
        if (props.style[i] == null) {
            delete props.style[i];
        }
    }
    if (allowFullScreen) {
        if ("allow" in props) {
            var currentAllow = props.allow.replace("fullscreen", "");
            props.allow = ("fullscreen " + currentAllow.trim()).trim();
        }
        else {
            props.allow = "fullscreen";
        }
    }
    if (frameBorder >= 0) {
        if (!props.style.hasOwnProperty("border")) {
            props.style.border = frameBorder;
        }
    }
    return react_default.a.createElement("iframe", __assign({}, props));
};
/* harmony default export */ var iframe = (Iframe);

// EXTERNAL MODULE: ./src/pages/layout/index.less
var pages_layout = __webpack_require__("./src/pages/layout/index.less");
var layout_default = /*#__PURE__*/__webpack_require__.n(pages_layout);

// CONCATENATED MODULE: ./src/pages/layout/Iframe.js





function IIframe(_ref) {
  var spinning = _ref.spinning,
      url = _ref.url;
  return react_default.a.createElement("div", {
    className: layout_default.a.iframe_wrapper
  }, react_default.a.createElement(components_Loader_Loader, {
    spinning: spinning
  }), react_default.a.createElement(iframe, {
    url: url,
    id: "iifram",
    className: layout_default.a.iframe,
    loading: "\u52A0\u8F7D\u4E2D..."
  }));
}

/* harmony default export */ var layout_Iframe = (IIframe);
// CONCATENATED MODULE: ./src/pages/layout/BasicLayout.js







var Header = layout["a" /* default */].Header,
    Sider = layout["a" /* default */].Sider,
    Content = layout["a" /* default */].Content;

class BasicLayout_BasicLayout extends react["Component"] {
  constructor(props) {
    super(props);

    this.menuClick = e => {
      var _e$item$props = e.item.props,
          href = _e$item$props.href,
          title = _e$item$props.title;
      document.title = title;
      this.setState({
        loading: true,
        src: href
      });
      setTimeout(() => {
        this.setState({
          loading: false
        });
      }, 600);
    };

    this.state = {
      loading: false,
      // 菜单切换时模拟600ms loading
      src: "".concat(window.location.origin, "/ctg-record.html?appId=CkLRboUsAnlSHN3qdJYwk/Zpz9X+IkjQDhgwviLu1tFkP3YxfDc0AkmUzAW6bqzF&nonce=5bqe9xeTr0OeeZTdx5cdlH/jQ4SQ0WUmpn+j5cditM5ylfOnXO2WwHwiCnunGIAO&timestamp=bpXqcB+rZu4Ev6iZueSODQ==&sign=36B8CA9AFCD5530CBEBD334F92BCA62A&patId=xa9kqMDuP6/9kcm9lGUxBQ==")
    };
  }

  componentDidMount() {
    request["a" /* default */].get('./account').then(res => {
      sessionStorage.setItem('ACCOUNT', JSON.stringify(res.data));
    });
  }

  render() {
    var _this$state = this.state,
        loading = _this$state.loading,
        src = _this$state.src;
    return react_default.a.createElement(layout["a" /* default */], {
      className: layout_default.a.container
    }, react_default.a.createElement(Header, {
      id: "header",
      className: layout_default.a.header
    }, "CTG MPA \u7BA1\u7406\u670D\u52A1\u540E\u53F0"), react_default.a.createElement(layout["a" /* default */], null, react_default.a.createElement(Sider, {
      width: 256,
      theme: 'light',
      className: layout_default.a.sider
    }, react_default.a.createElement(layout_SiderMenu, {
      handleClick: this.menuClick
    })), react_default.a.createElement(Content, {
      className: layout_default.a.content
    }, react_default.a.createElement(layout_Iframe, {
      url: src,
      spinning: loading
    }))));
  }

}

/* harmony default export */ var layout_BasicLayout = (BasicLayout_BasicLayout);
// CONCATENATED MODULE: ./src/pages/layout/index.js





class layout_App extends react["PureComponent"] {
  constructor() {
    super(...arguments);
    this.state = {
      spinning: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        spinning: false
      });
    }, 1500);
  }

  render() {
    var spinning = this.state.spinning;
    return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(components_Loader_Loader, {
      fullScreen: true,
      spinning: spinning
    }), react_default.a.createElement(layout_BasicLayout, null));
  }

}

react_dom_default.a.render(react_default.a.createElement(layout_App, null), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/layout/index.less":
/*!*************************************!*\
  !*** ./src/pages/layout/index.less ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container___3lLvz","header":"header___3rzcF","sider":"sider___2AHVc","content":"content___1cGRT","main":"main___l873j","iframe_wrapper":"iframe_wrapper___2SPrP","iframe":"iframe___1lV4p"};

/***/ }),

/***/ 1:
/*!************************************************************************************!*\
  !*** multi ./node_modules/umi-plugin-mpa/templates/polyfill.js ./src/pages/layout ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\FrontEnd\CTGCenter\node_modules\umi-plugin-mpa\templates\polyfill.js */"./node_modules/umi-plugin-mpa/templates/polyfill.js");
module.exports = __webpack_require__(/*! ./src/pages/layout */"./src/pages/layout/index.js");


/***/ })

/******/ });