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
/******/ 	deferredModules.push([1,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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
      href: "".concat(origin, "/ctg-record.html?auth_user=admin&auth_token=SLX9FT0&pregnancyId=8")
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
    }), react_default.a.createElement("span", null, "\u6587\u4EF6\u4E0A\u4F20")));
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
      src: "".concat(window.location.origin, "/ctg-record.html")
    };
  }

  componentDidMount() {}

  render() {
    var _this$state = this.state,
        loading = _this$state.loading,
        src = _this$state.src;
    return react_default.a.createElement(layout["a" /* default */], {
      className: layout_default.a.container
    }, react_default.a.createElement(Header, {
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

__webpack_require__(/*! D:\FrontEnd\MPA\umi-mpa\node_modules\umi-plugin-mpa\templates\polyfill.js */"./node_modules/umi-plugin-mpa/templates/polyfill.js");
module.exports = __webpack_require__(/*! ./src/pages/layout */"./src/pages/layout/index.js");


/***/ })

/******/ });