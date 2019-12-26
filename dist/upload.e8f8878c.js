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
/******/ 	deferredModules.push([14,"vendors"]);
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

/***/ "./src/pages/upload/index.js":
/*!***********************************************!*\
  !*** ./src/pages/upload/index.js + 4 modules ***!
  \***********************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/checkbox/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/checkbox/style/index.js */
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

// EXTERNAL MODULE: ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/extends.js");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var style = __webpack_require__("./node_modules/antd/es/button/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("./node_modules/antd/es/button/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/style/index.js
var checkbox_style = __webpack_require__("./node_modules/antd/es/checkbox/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__("./node_modules/antd/es/checkbox/index.js");

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

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 3 modules
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
        }, fd);
        console.log('upload data', values, data);
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
    }, "pda"), react_default.a.createElement(es_select["a" /* default */].Option, {
      value: "device-fw"
    }, "device-fw"), react_default.a.createElement(es_select["a" /* default */].Option, {
      value: "device-setting"
    }, "device-setting")))), react_default.a.createElement(es_form["a" /* default */].Item, {
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
    }, react_default.a.createElement("div", {
      style: {
        position: 'relative'
      }
    }, react_default.a.createElement("div", {
      style: {
        display: 'inline-block'
      }
    }, getFieldDecorator('file', {
      rules: [{
        required: true,
        message: '请选择上传文件！'
      }]
    })(react_default.a.createElement(upload_OSSUpload, null))), react_default.a.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        marginLeft: '186px'
      }
    }, getFieldDecorator('enable', {
      valuePropName: 'checked'
    })(react_default.a.createElement(es_checkbox["a" /* default */], null, "\u5F3A\u5236\u5347\u7EA7"))))), react_default.a.createElement(es_form["a" /* default */].Item, {
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

/***/ 14:
/*!************************************************************************************!*\
  !*** multi ./node_modules/umi-plugin-mpa/templates/polyfill.js ./src/pages/upload ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\work\CTGCenter\node_modules\umi-plugin-mpa\templates\polyfill.js */"./node_modules/umi-plugin-mpa/templates/polyfill.js");
module.exports = __webpack_require__(/*! ./src/pages/upload */"./src/pages/upload/index.js");


/***/ })

/******/ });