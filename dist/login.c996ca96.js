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
/******/ 		"login": 0
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
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/config.js":
/*!******************************!*\
  !*** ./src/common/config.js ***!
  \******************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = {
  siteName: '管理服务后台',
  copyright: '胎监管理服务后台  ©2019 lian-med',
  logoPath: '/favicon.png',
  apiPrefix: '/api/v1'
};

/***/ }),

/***/ "./src/pages/login/Login.less":
/*!************************************!*\
  !*** ./src/pages/login/Login.less ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"form":"form___ax0so","logo":"logo___28gph","ant-spin-container":"ant-spin-container___2nSiY","ant-spin-nested-loading":"ant-spin-nested-loading___2KihM","footer":"footer___14SQE","text-gradient":"text-gradient___dP0zu"};

/***/ }),

/***/ "./src/pages/login/index.js":
/*!**********************************************!*\
  !*** ./src/pages/login/index.js + 1 modules ***!
  \**********************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/form/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/form/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/row/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/row/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/config.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/request.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/login/Login.less (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/antd/es/row/style/index.js
var style = __webpack_require__("./node_modules/antd/es/row/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__("./node_modules/antd/es/row/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var button_style = __webpack_require__("./node_modules/antd/es/button/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("./node_modules/antd/es/button/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var input_style = __webpack_require__("./node_modules/antd/es/input/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 3 modules
var input = __webpack_require__("./node_modules/antd/es/input/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/form/style/index.js
var form_style = __webpack_require__("./node_modules/antd/es/form/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 10 modules
var es_form = __webpack_require__("./node_modules/antd/es/form/index.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("./src/common/utils.js");

// EXTERNAL MODULE: ./src/common/request.js
var request = __webpack_require__("./src/common/request.js");

// EXTERNAL MODULE: ./src/common/config.js
var config = __webpack_require__("./src/common/config.js");
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// EXTERNAL MODULE: ./src/pages/login/Login.less
var login_Login = __webpack_require__("./src/pages/login/Login.less");
var Login_default = /*#__PURE__*/__webpack_require__.n(login_Login);

// CONCATENATED MODULE: ./src/pages/login/Login.js














var FormItem = es_form["a" /* default */].Item;

class Login_Login extends react["PureComponent"] {
  constructor() {
    super(...arguments);
    this.state = {
      loading: false
    };

    this.handleOk = () => {
      var _this = this;

      var form = this.props.form;
      var validateFieldsAndScroll = form.validateFieldsAndScroll;

      _this.setState({
        loading: true
      });

      validateFieldsAndScroll((errors, values) => {
        if (errors) {
          return;
        }

        request["a" /* default */].post('/authenticate', {
          username: values.username,
          password: values.password
        }).then(function (response) {
          var access_token = response.data.id_token;
          utils["b" /* auth */].set(access_token);

          _this.setState({
            loading: false
          });

          window.location.href = "".concat(window.location.origin, "/dashboard.html");
        }).catch(function (error) {
          _this.setState({
            loading: false
          });

          console.log('api/authenticate', error);
        });
      });
    };
  }

  render() {
    var loading = this.state.loading;
    var form = this.props.form;
    var getFieldDecorator = form.getFieldDecorator;
    return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
      className: Login_default.a.form
    }, react_default.a.createElement("div", {
      className: Login_default.a.logo
    }, react_default.a.createElement("img", {
      alt: "logo",
      src: config_default.a.logoPath
    }), react_default.a.createElement("span", null, config_default.a.siteName)), react_default.a.createElement("form", null, react_default.a.createElement(FormItem, {
      hasFeedback: true
    }, getFieldDecorator('username', {
      rules: [{
        required: true
      }]
    })(react_default.a.createElement(input["a" /* default */], {
      onPressEnter: this.handleOk,
      placeholder: "\u8F93\u5165\u7528\u6237\u540D"
    }))), react_default.a.createElement(FormItem, {
      hasFeedback: true
    }, getFieldDecorator('password', {
      rules: [{
        required: true
      }]
    })(react_default.a.createElement(input["a" /* default */], {
      type: "password",
      onPressEnter: this.handleOk,
      placeholder: "\u8F93\u5165\u5BC6\u7801"
    }))), react_default.a.createElement(row["a" /* default */], null, react_default.a.createElement(es_button["a" /* default */], {
      type: "primary",
      onClick: this.handleOk,
      loading: loading
    }, "\u767B\u5F55"), react_default.a.createElement("p", null, react_default.a.createElement("span", null, "Username\uFF1Aadmin"), react_default.a.createElement("span", null, "Password: admin"))))), react_default.a.createElement("div", {
      className: Login_default.a.footer
    }));
  }

}

/* harmony default export */ var pages_login_Login = (es_form["a" /* default */].create()(Login_Login));
// CONCATENATED MODULE: ./src/pages/login/index.js



react_dom_default.a.render(react_default.a.createElement(pages_login_Login, null), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!***********************************************************************************!*\
  !*** multi ./node_modules/umi-plugin-mpa/templates/polyfill.js ./src/pages/login ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\work\CTGCenter\node_modules\umi-plugin-mpa\templates\polyfill.js */"./node_modules/umi-plugin-mpa/templates/polyfill.js");
module.exports = __webpack_require__(/*! ./src/pages/login */"./src/pages/login/index.js");


/***/ })

/******/ });