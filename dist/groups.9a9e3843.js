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
/******/ 		"groups": 0
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
/******/ 	deferredModules.push([20,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/groups/index.js":
/*!***********************************************!*\
  !*** ./src/pages/groups/index.js + 2 modules ***!
  \***********************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/card/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/card/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/divider/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/divider/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/form/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/form/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/message/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/message/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/modal/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/modal/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/popconfirm/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/popconfirm/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/select/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/select/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/table/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/table/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/tooltip/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/tooltip/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-dom/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../LUNA_FontEnd/modules/node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../LUNA_FontEnd/modules/packages/utils/lib/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../LUNA_FontEnd/modules/node_modules/react/index.js
var react = __webpack_require__("../LUNA_FontEnd/modules/node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/antd/es/card/style/index.js + 1 modules
var style = __webpack_require__("./node_modules/antd/es/card/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 2 modules
var card = __webpack_require__("./node_modules/antd/es/card/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/table/style/index.js + 3 modules
var table_style = __webpack_require__("./node_modules/antd/es/table/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 27 modules
var table = __webpack_require__("./node_modules/antd/es/table/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var button_style = __webpack_require__("./node_modules/antd/es/button/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("./node_modules/antd/es/button/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/style/index.js + 1 modules
var popconfirm_style = __webpack_require__("./node_modules/antd/es/popconfirm/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js
var popconfirm = __webpack_require__("./node_modules/antd/es/popconfirm/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/divider/style/index.js
var divider_style = __webpack_require__("./node_modules/antd/es/divider/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/divider/index.js
var divider = __webpack_require__("./node_modules/antd/es/divider/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/style/index.js
var tooltip_style = __webpack_require__("./node_modules/antd/es/tooltip/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 5 modules
var tooltip = __webpack_require__("./node_modules/antd/es/tooltip/index.js");

// EXTERNAL MODULE: ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/antd/es/message/style/index.js
var message_style = __webpack_require__("./node_modules/antd/es/message/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js
var message = __webpack_require__("./node_modules/antd/es/message/index.js");

// EXTERNAL MODULE: ../LUNA_FontEnd/modules/packages/utils/lib/index.js
var lib = __webpack_require__("../LUNA_FontEnd/modules/packages/utils/lib/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/style/index.js
var modal_style = __webpack_require__("./node_modules/antd/es/modal/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 6 modules
var modal = __webpack_require__("./node_modules/antd/es/modal/index.js");

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

// CONCATENATED MODULE: ./src/pages/groups/GroupModal.js












class GroupModal_GroupModal extends react["Component"] {
  render() {
    var _this$props = this.props,
        title = _this$props.title,
        visible = _this$props.visible,
        onCancel = _this$props.onCancel,
        onOk = _this$props.onOk,
        form = _this$props.form,
        loading = _this$props.loading;
    var getFieldDecorator = form.getFieldDecorator;
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
          span: 15
        }
      }
    };
    return react_default.a.createElement(modal["a" /* default */], {
      centered: true,
      destroyOnClose: true,
      title: title,
      visible: visible,
      onOk: onOk,
      onCancel: onCancel,
      footer: null,
      maskClosable: false
    }, react_default.a.createElement(es_form["a" /* default */], formItemLayout, react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u7528\u6237\u7EC4\u540D\u79F0"
    }, getFieldDecorator('name', {
      rules: [{
        required: true,
        message: '请输入用户组名称!'
      }]
    })(react_default.a.createElement(input["a" /* default */], {
      placeholder: "\u8BF7\u8F93\u5165\u75C5\u533A\u540D\u79F0"
    }))), react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u7528\u6237\u7EC4\u6635\u79F0"
    }, getFieldDecorator('nickname', {
      rules: [{
        required: true,
        message: '请输入用户组昵称!'
      }]
    })(react_default.a.createElement(input["a" /* default */], {
      placeholder: "\u8BF7\u8F93\u5165\u75C5\u533A\u4E2D\u6587\u540D\u79F0"
    }))), react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u6743\u9650"
    }, getFieldDecorator('authorities', {
      rules: [{
        required: false,
        message: '请选择用户组权限!'
      }]
    })(react_default.a.createElement(es_select["a" /* default */], {
      mode: "multiple",
      placeholder: "\u8BF7\u8F93\u5165\u75C5\u533A\u7C7B\u578B"
    }))), react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u8BF4\u660E"
    }, getFieldDecorator('groupdesc', {
      rules: [{
        required: false,
        message: '请输入用户组说明!'
      }]
    })(react_default.a.createElement(input["a" /* default */].TextArea, {
      placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u7EC4\u8BF4\u660E"
    }))), react_default.a.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, react_default.a.createElement(es_button["a" /* default */], {
      style: {
        marginRight: '12px'
      },
      onClick: onCancel
    }, "\u53D6\u6D88"), react_default.a.createElement(es_button["a" /* default */], {
      type: "primary",
      loading: loading,
      onClick: onOk
    }, "\u786E\u5B9A"))));
  }

}

/* harmony default export */ var groups_GroupModal = (es_form["a" /* default */].create()(GroupModal_GroupModal));
// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("./src/common/utils.js");

// CONCATENATED MODULE: ./src/pages/groups/Groups.js
















/* eslint-disable jsx-a11y/anchor-is-valid */




lib["request"].config({
  Authorization: utils["b" /* auth */].get(),
  prefix: window.CONFIG.baseURL
});
class Groups_Groups extends react["Component"] {
  constructor(params) {
    super(params);

    this.showEditGroup = record => {
      this.setState({
        visible: true,
        selected: record
      }, () => {
        var name = record.name,
            nickname = record.nickname,
            authorities = record.authorities,
            groupdesc = record.groupdesc;
        var auth = [];

        if (authorities && authorities.length) {
          authorities.forEach(e => {
            auth.push(e.name);
          });
        }

        this.formRef.props.form.setFieldsValue({
          name: name,
          nickname: nickname,
          authorities: auth,
          groupdesc: groupdesc
        });
      });
    };

    this.showNewGroup = () => {
      this.setState({
        visible: true,
        selected: {}
      });
    };

    this.onCancel = () => {
      this.setState({
        visible: false,
        loading: false
      });
    };

    this.deleteGroup = record => {
      lib["request"].delete("/groups/".concat(record.id)).then(res => {
        message["a" /* default */].success("\u7528\u6237\u7EC4".concat(record.nickname, "\u5220\u9664\u6210\u529F\uFF01"));

        this.fetchGroups();
      }).catch(err => {
        message["a" /* default */].error("\u7528\u6237\u7EC4".concat(record.nickname, "\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"));
      });
    };

    this.fetchGroups = () => {
      lib["request"].get('/groups').then(res => {
        this.setState({
          dataSource: res
        });
      });
    };

    this.newGroup = () => {
      this.setState({
        loading: true
      });
      this.formRef.props.form.validateFields((error, values) => {
        if (error) {
          return;
        }

        var authorities = values.authorities;
        var newAuthorities = null;

        if (authorities && authorities.length) {
          newAuthorities = this.transData(values.authorities);
        }

        values.authorities = newAuthorities;
        lib["request"].post('/groups', {
          data: values
        }).then(res => {
          this.setState({
            loading: false,
            visible: false
          });

          message["a" /* default */].success("\u65B0\u589E\u7528\u6237\u7EC4".concat(res.nickname, "\u6210\u529F\uFF01"));

          this.fetchGroups();
        }).catch(error => {
          message["a" /* default */].error("\u65B0\u589E\u7528\u6237\u7EC4\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");

          this.setState({
            loading: false
          });
        });
      });
    };

    this.editGroup = () => {
      this.setState({
        loading: true
      });
      var selected = this.state.selected;
      this.formRef.props.form.validateFields((error, values) => {
        if (error) {
          return;
        }

        var newValues = objectSpread_default()({}, selected, values);

        var authorities = values.authorities;
        var newAuthorities = null;

        if (authorities && authorities.length) {
          newAuthorities = this.transData(values.authorities);
        }

        newValues.authorities = newAuthorities;
        lib["request"].put('/groups', {
          data: newValues
        }).then(res => {
          this.setState({
            loading: false,
            visible: false
          });

          message["a" /* default */].success("\u4FEE\u6539\u7528\u6237\u7EC4".concat(res.nickname, "\u6210\u529F\uFF01"));

          this.fetchGroups();
        }).catch(error => {
          message["a" /* default */].error("\u4FEE\u6539\u7528\u6237\u7EC4\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");

          this.setState({
            loading: false
          });
        });
      });
    };

    this.transData = data => {
      return data.map(e => ({
        name: e
      }));
    };

    this.state = {
      dataSource: [],
      selected: {},
      loading: false,
      visible: false
    };
    this.columns = [{
      title: '名称',
      dataIndex: 'nickname',
      key: 'nickname',
      width: 100
    }, {
      title: '类型',
      dataIndex: 'name',
      key: 'name',
      width: 100
    }, {
      title: '权限列表',
      dataIndex: 'authorities',
      key: 'authorities',
      width: 200,
      render: (text, record) => {
        var str = '';
        var authorities = record.authorities;

        if (authorities && authorities.length > 0) {
          authorities.forEach(e => {
            if (str) {
              str += ",".concat(e.name);
            }

            str += e.name;
          });
        }

        return react_default.a.createElement(tooltip["a" /* default */], {
          title: str
        }, react_default.a.createElement("div", {
          style: {
            display: 'inline-block',
            width: '200px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            wordBreak: 'break-all'
          }
        }, str));
      }
    }, {
      title: '说明',
      dataIndex: 'groupdesc',
      key: 'groupdesc',
      width: 120,
      render: text => react_default.a.createElement(tooltip["a" /* default */], {
        title: text
      }, react_default.a.createElement("div", {
        style: {
          display: 'inline-block',
          width: '120px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          wordBreak: 'break-all'
        }
      }, text))
    }, {
      title: '操作',
      key: 'action',
      width: 100,
      render: (text, record) => react_default.a.createElement("span", null, react_default.a.createElement("a", {
        onClick: () => this.showEditGroup(record)
      }, "\u7F16\u8F91"), react_default.a.createElement(divider["a" /* default */], {
        type: "vertical"
      }), react_default.a.createElement(popconfirm["a" /* default */], {
        title: "\u662F\u5426\u8981\u5220\u9664\u6B64\u884C\uFF1F",
        onConfirm: () => this.deleteGroup(record)
      }, react_default.a.createElement("a", {
        style: {
          color: '#999'
        }
      }, "\u5220\u9664")))
    }];
  }

  componentDidMount() {
    this.fetchGroups();
  }

  render() {
    var _this$state = this.state,
        dataSource = _this$state.dataSource,
        visible = _this$state.visible,
        selected = _this$state.selected,
        loading = _this$state.loading;
    return react_default.a.createElement(card["a" /* default */], {
      title: "\u7528\u6237\u7EC4\u8BBE\u7F6E",
      size: "small",
      extra: react_default.a.createElement(es_button["a" /* default */], {
        type: "primary",
        icon: "plus",
        size: "small",
        loading: false,
        onClick: this.showNewGroup
      }, "\u65B0\u589E"),
      style: {
        width: '100%',
        height: '100%'
      }
    }, react_default.a.createElement(table["a" /* default */], {
      dataSource: dataSource,
      columns: this.columns,
      pagination: false,
      size: "small",
      rowKey: "id"
    }), react_default.a.createElement(groups_GroupModal, {
      wrappedComponentRef: form => this.formRef = form,
      visible: visible,
      title: selected.id ? '编辑用户组' : '新增用户组',
      loading: loading,
      onOk: selected.id ? this.editGroup : this.newGroup,
      onCancel: this.onCancel
    }));
  }

}
// CONCATENATED MODULE: ./src/pages/groups/index.js



react_dom_default.a.render(react_default.a.createElement(Groups_Groups, null), document.getElementById('root'));

/***/ }),

/***/ 20:
/*!************************************************************************************!*\
  !*** multi ./node_modules/umi-plugin-mpa/templates/polyfill.js ./src/pages/groups ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\work\CTGCenter\node_modules\umi-plugin-mpa\templates\polyfill.js */"./node_modules/umi-plugin-mpa/templates/polyfill.js");
module.exports = __webpack_require__(/*! ./src/pages/groups */"./src/pages/groups/index.js");


/***/ })

/******/ });