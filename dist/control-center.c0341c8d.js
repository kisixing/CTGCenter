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
/******/ 	deferredModules.push([11,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/es/badge/style/index.less":
/*!*****************************************************!*\
  !*** ./node_modules/antd/es/badge/style/index.less ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

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

/***/ "./src/pages/control-center/index.js":
/*!*******************************************************!*\
  !*** ./src/pages/control-center/index.js + 5 modules ***!
  \*******************************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/badge/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/descriptions/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/switch/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/table/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/table/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/request.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/control-center/index.less (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-dom/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../LUNA_FontEnd/modules/node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../LUNA_FontEnd/modules/node_modules/react/index.js
var react = __webpack_require__("../LUNA_FontEnd/modules/node_modules/react/index.js");
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

// EXTERNAL MODULE: ./node_modules/antd/es/badge/style/index.less
var badge_style = __webpack_require__("./node_modules/antd/es/badge/style/index.less");

// CONCATENATED MODULE: ./node_modules/antd/es/badge/style/index.js


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/antd/es/badge/index.js + 1 modules
var badge = __webpack_require__("./node_modules/antd/es/badge/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/table/style/index.js + 3 modules
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

/***/ 11:
/*!********************************************************************************************!*\
  !*** multi ./node_modules/umi-plugin-mpa/templates/polyfill.js ./src/pages/control-center ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\work\CTGCenter\node_modules\umi-plugin-mpa\templates\polyfill.js */"./node_modules/umi-plugin-mpa/templates/polyfill.js");
module.exports = __webpack_require__(/*! ./src/pages/control-center */"./src/pages/control-center/index.js");


/***/ })

/******/ });