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
/******/ 		"control-center": 0
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
/******/ 	deferredModules.push([7,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/es/descriptions/style/index.less":
/*!************************************************************!*\
  !*** ./node_modules/antd/es/descriptions/style/index.less ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/antd/es/switch/style/index.less":
/*!******************************************************!*\
  !*** ./node_modules/antd/es/switch/style/index.less ***!
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

/***/ "./src/pages/control-center/index.js":
/*!*******************************************************!*\
  !*** ./src/pages/control-center/index.js + 4 modules ***!
  \*******************************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/badge/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/badge/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/descriptions/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/switch/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/table/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/table/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/request.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/control-center/index.less (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/antd/es/style/index.less
var style = __webpack_require__("./node_modules/antd/es/style/index.less");

// EXTERNAL MODULE: ./node_modules/antd/es/descriptions/style/index.less
var descriptions_style = __webpack_require__("./node_modules/antd/es/descriptions/style/index.less");

// CONCATENATED MODULE: ./node_modules/antd/es/descriptions/style/index.js


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/antd/es/descriptions/index.js + 1 modules
var descriptions = __webpack_require__("./node_modules/antd/es/descriptions/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/switch/style/index.less
var switch_style = __webpack_require__("./node_modules/antd/es/switch/style/index.less");

// CONCATENATED MODULE: ./node_modules/antd/es/switch/style/index.js


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/antd/es/switch/index.js
var es_switch = __webpack_require__("./node_modules/antd/es/switch/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/badge/style/index.js
var badge_style = __webpack_require__("./node_modules/antd/es/badge/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/badge/index.js + 1 modules
var badge = __webpack_require__("./node_modules/antd/es/badge/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/table/style/index.js + 4 modules
var table_style = __webpack_require__("./node_modules/antd/es/table/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 27 modules
var table = __webpack_require__("./node_modules/antd/es/table/index.js");

// CONCATENATED MODULE: ./src/pages/control-center/CustomTable.js



function CustomTable(_ref) {
  var _ref$dataSource = _ref.dataSource,
      dataSource = _ref$dataSource === void 0 ? [] : _ref$dataSource;
  var columns = [{
    title: '任务名称',
    dataIndex: 'name',
    key: 'name',
    width: 200
  }, {
    title: '开始时间',
    dataIndex: 'startTime',
    key: 'startTime',
    width: 200
  }, {
    title: '结束时间',
    dataIndex: 'endTime',
    key: 'endTime',
    width: 200
  }, {
    title: '简述',
    dataIndex: 'desc',
    key: 'desc'
  }];
  return react_default.a.createElement(table["a" /* default */], {
    bordered: true,
    size: "small",
    columns: columns,
    dataSource: dataSource
  });
}
// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("./src/common/utils.js");

// EXTERNAL MODULE: ./src/common/request.js
var request = __webpack_require__("./src/common/request.js");

// EXTERNAL MODULE: ./src/pages/control-center/index.less
var control_center = __webpack_require__("./src/pages/control-center/index.less");
var control_center_default = /*#__PURE__*/__webpack_require__.n(control_center);

// CONCATENATED MODULE: ./src/pages/control-center/ControlCenter.js












class ControlCenter_ControlCenter extends react["Component"] {
  constructor(props) {
    super(props);

    this.onClick = (checked, e) => {
      if (checked) {
        this.toggleScheduler('start');
      } else {
        this.toggleScheduler('stop');
      }
    };

    this.state = {
      processing: true,
      data: []
    };
  }

  componentDidMount() {
    var _this = this;

    var access_token = utils["b" /* auth */].get();

    if (access_token) {
      // 如果存在LIAN_MED_ACCESS_TOKEN则不重新做用户验证
      this.fetchStatus();
      this.fetchPlans();
    } else {
      var url_params = Object(utils["c" /* getUrlParam */])();
      utils["a" /* account */].set(url_params);
      return request["a" /* default */].post('/authenticate', {
        username: url_params.auth_user,
        token: url_params.auth_token,
        password: url_params.auth_password
      }).then(function (response) {
        var access_token = response.data.id_token;
        utils["b" /* auth */].set(access_token); // 验证成功后

        _this.fetchStatus();

        _this.fetchPlans();
      }).catch(function (error) {
        console.info('/authenticate', error);
      });
    }
  }

  fetchStatus() {
    console.log('fetch status');

    var _this = this;

    request["a" /* default */].get('/scheduler').then(function (response) {
      var d = response.data;

      _this.setState({
        processing: d.flag
      });
    }).catch(function (error) {
      console.log('/scheduler', error);
    });
  }

  fetchPlans() {
    console.log('fetch plans');

    var _this = this;

    request["a" /* default */].get('/runningPlans').then(function (response) {
      var d = response.data;

      _this.setState({
        data: d
      });
    }).catch(function (error) {});
  }

  toggleScheduler() {
    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'start';

    var _this = this;

    request["a" /* default */].get("/scheduler/".concat(action)).then(function (response) {
      var d = response.data; // _this.setState({ processing: d.flag });

      _this.setState({
        processing: !_this.state.processing
      });
    }).catch(function (error) {});
  }

  render() {
    var _this$state = this.state,
        processing = _this$state.processing,
        data = _this$state.data;
    return react_default.a.createElement("div", {
      className: control_center_default.a.container
    }, react_default.a.createElement(descriptions["a" /* default */], {
      title: "\u8C03\u5EA6\u5668",
      layout: "vertical",
      bordered: true
    }, react_default.a.createElement(descriptions["a" /* default */].Item, {
      label: "\u72B6\u6001",
      span: 3
    }, react_default.a.createElement(badge["a" /* default */], {
      status: processing ? 'processing' : 'default',
      text: processing ? '运行中' : '停止',
      style: {
        width: '78px'
      }
    }), react_default.a.createElement(es_switch["a" /* default */], {
      checkedChildren: "\u5F00",
      unCheckedChildren: "\u5173",
      checked: processing,
      onClick: this.onClick
    })), react_default.a.createElement(descriptions["a" /* default */].Item, {
      label: "\u5F53\u524D\u8FD0\u884C\u7684\u4EFB\u52A1",
      span: 3
    }, react_default.a.createElement(CustomTable, {
      rowKey: "id",
      dataSource: data,
      size: "small"
    }))));
  }

}

/* harmony default export */ var control_center_ControlCenter = (ControlCenter_ControlCenter);
// CONCATENATED MODULE: ./src/pages/control-center/index.js



react_dom_default.a.render(react_default.a.createElement(control_center_ControlCenter, null), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/control-center/index.less":
/*!*********************************************!*\
  !*** ./src/pages/control-center/index.less ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container___3pLZE"};

/***/ }),

/***/ 7:
/*!********************************************************************************************!*\
  !*** multi ./node_modules/umi-plugin-mpa/templates/polyfill.js ./src/pages/control-center ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\FrontEnd\CTGCenter\node_modules\umi-plugin-mpa\templates\polyfill.js */"./node_modules/umi-plugin-mpa/templates/polyfill.js");
module.exports = __webpack_require__(/*! ./src/pages/control-center */"./src/pages/control-center/index.js");


/***/ })

/******/ });