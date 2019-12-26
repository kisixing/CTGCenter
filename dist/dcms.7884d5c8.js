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
/******/ 		"dcms": 0
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
/******/ 	deferredModules.push([18,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/unfinished-record/App.less":
/*!**********************************************!*\
  !*** ./src/pages/unfinished-record/App.less ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___3MTm2","app-wrapper":"app-wrapper___sHxLQ","header":"header___32LBR","sider":"sider___2yMCG","content":"content___10mGA","react-pdf__Page":"react-pdf__Page___3zc63"};

/***/ }),

/***/ "./src/pages/unfinished-record/Content.module.less":
/*!*********************************************************!*\
  !*** ./src/pages/unfinished-record/Content.module.less ***!
  \*********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"wrapper___xHRNK","ctg":"ctg___1H6qb","buttons":"buttons___2DQ7U","title":"title___3k3dS","value":"value___3wpcG","modal":"modal___nbPSF"};

/***/ }),

/***/ "./src/pages/unfinished-record/SiderMenu.module.less":
/*!***********************************************************!*\
  !*** ./src/pages/unfinished-record/SiderMenu.module.less ***!
  \***********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"wrapper___3p4_P","item":"item___qBIhq"};

/***/ }),

/***/ "./src/pages/unfinished-record/index.js":
/*!**********************************************************!*\
  !*** ./src/pages/unfinished-record/index.js + 3 modules ***!
  \**********************************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/style/index.js */
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
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/request.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/unfinished-record/Analyze.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/unfinished-record/PrintPreview.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/unfinished-record/App.less (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/unfinished-record/Content.module.less (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/unfinished-record/SiderMenu.module.less (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/moment/moment.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-dom/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../LUNA_FontEnd/modules/node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../LUNA_FontEnd/modules/packages/lmg/lib/index.js (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ../LUNA_FontEnd/modules/packages/request/lib/index.js
var lib = __webpack_require__("../LUNA_FontEnd/modules/packages/request/lib/index.js");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("./node_modules/moment/moment.js");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./node_modules/antd/es/menu/style/index.js
var menu_style = __webpack_require__("./node_modules/antd/es/menu/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 3 modules
var menu = __webpack_require__("./node_modules/antd/es/menu/index.js");

// EXTERNAL MODULE: ./src/pages/unfinished-record/SiderMenu.module.less
var SiderMenu_module = __webpack_require__("./src/pages/unfinished-record/SiderMenu.module.less");
var SiderMenu_module_default = /*#__PURE__*/__webpack_require__.n(SiderMenu_module);

// CONCATENATED MODULE: ./src/pages/unfinished-record/SiderMenu.js






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

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        selectedKeys: this.props.selected.id ? [this.props.selected.id.toString()] : []
      });
    }, 600);
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
      var pre = item.pregnancy ? item.pregnancy : {};
      return react_default.a.createElement(menu["a" /* default */].Item, {
        key: item.id,
        data: item,
        className: SiderMenu_module_default.a.item
      }, react_default.a.createElement("div", null, react_default.a.createElement("div", null, "\u5E8A\u4F4D\uFF1A", react_default.a.createElement("span", {
        style: {
          display: 'inline-block',
          width: '60px',
          marginRight: '4px'
        }
      }, pre.bedNO), "\u4F4F\u9662\u53F7\uFF1A", react_default.a.createElement("span", {
        style: {
          display: 'inline-block',
          width: '80px'
        }
      }, pre.inpatientNO)), react_default.a.createElement("div", null, "\u59D3\u540D\uFF1A", react_default.a.createElement("span", {
        style: {
          display: 'inline-block',
          width: '60px',
          marginRight: '4px'
        }
      }, pre.name), "\u76D1\u62A4\u65F6\u95F4\uFF1A", react_default.a.createElement("span", {
        style: {
          display: 'inline-block',
          width: '80px'
        }
      }, ' ', moment_default()(item.visitTime).format('YYYY-MM-DD HH:mm')))));
    }));
  }

}

/* harmony default export */ var unfinished_record_SiderMenu = (SiderMenu_SiderMenu);
// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var button_style = __webpack_require__("./node_modules/antd/es/button/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("./node_modules/antd/es/button/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/spin/style/index.js
var spin_style = __webpack_require__("./node_modules/antd/es/spin/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__("./node_modules/antd/es/spin/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/style/index.js
var modal_style = __webpack_require__("./node_modules/antd/es/modal/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 6 modules
var modal = __webpack_require__("./node_modules/antd/es/modal/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/notification/style/index.js
var notification_style = __webpack_require__("./node_modules/antd/es/notification/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/notification/index.js
var notification = __webpack_require__("./node_modules/antd/es/notification/index.js");

// EXTERNAL MODULE: ../LUNA_FontEnd/modules/packages/lmg/lib/index.js
var lmg_lib = __webpack_require__("../LUNA_FontEnd/modules/packages/lmg/lib/index.js");

// EXTERNAL MODULE: ./src/common/request.js
var request = __webpack_require__("./src/common/request.js");

// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("./src/common/utils.js");

// EXTERNAL MODULE: ./src/pages/unfinished-record/Content.module.less
var Content_module = __webpack_require__("./src/pages/unfinished-record/Content.module.less");
var Content_module_default = /*#__PURE__*/__webpack_require__.n(Content_module);

// EXTERNAL MODULE: ./src/pages/unfinished-record/PrintPreview.js
var PrintPreview = __webpack_require__("./src/pages/unfinished-record/PrintPreview.js");

// EXTERNAL MODULE: ./src/pages/unfinished-record/Analyze.js
var Analyze = __webpack_require__("./src/pages/unfinished-record/Analyze.js");

// CONCATENATED MODULE: ./src/pages/unfinished-record/Content.js















var init = {
  fhr: [[], [], []],
  toco: [],
  fm: [],
  fetal_num: 2,
  index: 0,
  starttime: ''
};

class Content_Content extends react["Component"] {
  constructor(props) {
    super(props);

    this.fetch = docId => {
      // 获取ctg data详细数据
      var _this = this;

      _this.setState({
        loading: true
      });

      setTimeout(() => {
        request["a" /* default */].get("/ctg-exams-data/".concat(docId)).then(function (response) {
          var data = response.data; // if (data && data.errorKey) {
          //   console.log('/prenatal-visits error', response.response);
          //   let message = '';
          //   if (data.errorKey === 'encypterror') {
          //     message = '解密错误';
          //   }
          //   if (data.errorKey === 'PatIderror') {
          //     message = '住院号不存在';
          //   }
          //   if (data.errorKey === 'signerror') {
          //     message = '校验和错误';
          //   }
          //   notification.info({
          //     message: '错误提示',
          //     description: message,
          //   });
          //   return;
          // }

          if (!data.docid) {
            notification["a" /* default */].info({
              message: '错误提示',
              description: "\u4E0D\u5B58\u5728\u6863\u6848\u53F7\u4E3A".concat(docId, "\u7684\u6570\u636E\uFF01")
            });

            _this.setState({
              loading: false
            });
          }

          if (data && data.docid) {
            var ctgData = Object(utils["d" /* transformsCTG */])(data.docid, response.data); // {}

            _this.setState({
              dataSource: ctgData,
              loading: false
            });
          }
        }).catch(function (error) {
          console.log('/ctg-exams-data/docId', error);

          _this.setState({
            dataSource: init,
            loading: false
          });
        });
      }, 1000);
    };

    this.showModal = e => {
      // console.log('test target', e.target.id);
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

    this.remove = () => {
      var _this = this;

      var _this$props = this.props,
          selected = _this$props.selected,
          fetch = _this$props.fetch,
          clearSelect = _this$props.clearSelect;
      var docid = selected.ctgexam.note;
      ;

      modal["a" /* default */].confirm({
        centered: true,
        title: '警告！',
        content: '确认放弃该监护档案吗',
        okText: '确定',
        cancelText: '取消',

        onOk() {
          request["a" /* default */].get("/ctg-exams-nosaving/".concat(docid)).then(() => {
            fetch(); // clearSelect();

            _this.setState({
              dataSource: init
            });
          });
        }

      });
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
      id: "remove",
      disabled: disabled,
      onClick: this.remove
    }, "\u653E\u5F03"), react_default.a.createElement(es_button["a" /* default */], {
      id: "print",
      disabled: disabled,
      onClick: this.showModal
    }, "\u62A5\u544A")), printVisible ? react_default.a.createElement(PrintPreview["a" /* default */], {
      title: "\u62A5\u544A",
      docId: docId,
      visible: printVisible,
      dataSource: dataSource,
      selected: this.props.selected // title={this.renderTitle()}
      ,
      handleCancel: this.handleCancel
    }) : null, analyzeVisible ? react_default.a.createElement(Analyze["a" /* default */], {
      docId: docId,
      visible: analyzeVisible,
      dataSource: dataSource // title={this.renderTitle()}
      ,
      handleCancel: this.handleCancel
    }) : null);
  }

}

/* harmony default export */ var unfinished_record_Content = (Content_Content);
// EXTERNAL MODULE: ./src/pages/unfinished-record/App.less
var unfinished_record_App = __webpack_require__("./src/pages/unfinished-record/App.less");
var App_default = /*#__PURE__*/__webpack_require__.n(unfinished_record_App);

// CONCATENATED MODULE: ./src/pages/unfinished-record/App.js











class App_App extends react["Component"] {
  constructor() {
    super(...arguments);
    this.index = 1;
    this.state = {
      secondsElapsed: 0,
      dataSource: [],
      selected: {}
    };

    this.fetch = () => {
      var _this = this;

      var areaNO = Object(utils["c" /* getUrlParam */])('diagnosisCode');
      var visitDate = moment_default()().format('YYYY-MM-DD');
      request["a" /* default */].get('/prenatal-visits', {
        params: {
          'visiDate.greaterOrEqalThan': visitDate,
          'diagnosis.specified': false,
          'diagnosisCode.equals': areaNO
        }
      }).then(function (response) {
        var dataSource = response.data; // if (dataSource && dataSource.errorKey) {
        //   console.log('/prenatal-visits error', response.response);
        //   let message = '';
        //   if (dataSource.errorKey === 'encypterror') {
        //     message = '解密错误';
        //   }
        //   if (dataSource.errorKey === 'PatIderror') {
        //     message = '住院号不存在';
        //   }
        //   if (dataSource.errorKey === 'signerror') {
        //     message = '校验和错误';
        //   }
        //   notification.info({
        //     message: '错误提示',
        //     description: message,
        //   });
        //   return;
        // }

        if (dataSource && dataSource.length > 0) {
          _this.setState({
            dataSource
          });

          if (_this.index === 1) {
            _this.setState({
              selected: dataSource[0]
            });
          }

          ++_this.index;
        }
      }).catch(function (error) {
        console.log('/prenatal-visits error');
      });
    };

    this.setItem = item => {
      this.setState({
        selected: item
      });
    };

    this.clearSelect = () => {
      this.setState({
        selected: {}
      });
    };
  }

  componentDidMount() {
    lib_default.a.config({
      Authorization: utils["b" /* auth */].get(),
      prefix: window.CONFIG.baseURL
    });

    var _this = this;

    request["a" /* default */].post('/authenticate', {
      username: 'admin',
      password: 'admin'
    }).then(function (response) {
      var access_token = response.data.id_token;
      utils["b" /* auth */].set(access_token);
      lib_default.a.config({
        Authorization: access_token,
        prefix: window.CONFIG.baseURL
      });

      _this.fetch();
    }).catch(function (error) {
      console.log('api/authenticate', error);
    });
    this.interval = setInterval(() => this.fetch(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  } // 定时器
  // 请求数据列表


  render() {
    var _this$state = this.state,
        dataSource = _this$state.dataSource,
        selected = _this$state.selected;
    return react_default.a.createElement(layout["a" /* default */], null, react_default.a.createElement(layout["a" /* default */].Header, {
      className: App_default.a.header
    }, "\u80CE\u513F\u76D1\u62A4\u672A\u5904\u7406\u6863\u6848"), react_default.a.createElement(layout["a" /* default */], {
      style: {
        height: '100%'
      }
    }, react_default.a.createElement(layout["a" /* default */].Sider, {
      width: 328,
      className: App_default.a.sider
    }, react_default.a.createElement(unfinished_record_SiderMenu, {
      setItem: this.setItem,
      dataSource: dataSource,
      selected: selected
    })), react_default.a.createElement(layout["a" /* default */].Content, {
      className: App_default.a.content
    }, react_default.a.createElement(unfinished_record_Content, {
      selected: selected,
      fetch: this.fetch,
      clearSelect: this.clearSelect
    }))));
  }

}

/* harmony default export */ var pages_unfinished_record_App = (App_App);
// CONCATENATED MODULE: ./src/pages/unfinished-record/index.js



react_dom_default.a.render(react_default.a.createElement(pages_unfinished_record_App, null), document.getElementById('root'));

/***/ }),

/***/ 18:
/*!***********************************************************************************************!*\
  !*** multi ./node_modules/umi-plugin-mpa/templates/polyfill.js ./src/pages/unfinished-record ***!
  \***********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\work\CTGCenter\node_modules\umi-plugin-mpa\templates\polyfill.js */"./node_modules/umi-plugin-mpa/templates/polyfill.js");
module.exports = __webpack_require__(/*! ./src/pages/unfinished-record */"./src/pages/unfinished-record/index.js");


/***/ })

/******/ });