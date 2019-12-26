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
/******/ 		"task-list": 0
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
/******/ 	deferredModules.push([12,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/task-list/index.js":
/*!**************************************************!*\
  !*** ./src/pages/task-list/index.js + 3 modules ***!
  \**************************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/date-picker/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/date-picker/style/index.js */
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
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/request.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/store.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/task-list/index.less (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/moment/moment.js (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var style = __webpack_require__("./node_modules/antd/es/button/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("./node_modules/antd/es/button/index.js");

// EXTERNAL MODULE: ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/antd/es/message/style/index.js
var message_style = __webpack_require__("./node_modules/antd/es/message/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js
var message = __webpack_require__("./node_modules/antd/es/message/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/table/style/index.js + 3 modules
var table_style = __webpack_require__("./node_modules/antd/es/table/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 27 modules
var table = __webpack_require__("./node_modules/antd/es/table/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/style/index.js + 1 modules
var popconfirm_style = __webpack_require__("./node_modules/antd/es/popconfirm/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js
var popconfirm = __webpack_require__("./node_modules/antd/es/popconfirm/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/divider/style/index.js
var divider_style = __webpack_require__("./node_modules/antd/es/divider/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/divider/index.js
var divider = __webpack_require__("./node_modules/antd/es/divider/index.js");

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("./node_modules/moment/moment.js");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./src/pages/task-list/CustomTable.js







/* eslint-disable jsx-a11y/anchor-is-valid */


function CustomTable(_ref) {
  var _ref$dataSource = _ref.dataSource,
      dataSource = _ref$dataSource === void 0 ? [] : _ref$dataSource,
      edit = _ref.edit,
      schedule = _ref.schedule,
      unschedule = _ref.unschedule,
      deleted = _ref.deleted;
  var columns = [{
    title: '任务名称',
    dataIndex: 'name',
    key: 120
  }, {
    title: '任务描述',
    dataIndex: 'description',
    key: 'description',
    width: 150
  }, {
    title: '任务对象',
    dataIndex: 'targetObject',
    key: 'targetObject',
    width: 100
  }, {
    title: '任务方法',
    dataIndex: 'targetMethod',
    key: 'targetMethod',
    width: 100
  }, {
    title: '触发器类型',
    dataIndex: 'triggerType',
    key: 'triggerType',
    width: 100,
    render: value => {
      if (value === 'DELAY') {
        return '定点执行';
      } else if (value === 'REGULAR') {
        return '周期执行';
      } else {
        return '立即执行';
      }
    }
  }, {
    title: '执行周期',
    dataIndex: 'cronExpression',
    key: 'cronExpression',
    width: 100
  }, {
    title: '执行时间',
    dataIndex: 'fireTime',
    key: 'fireTime',
    width: 150
  }, {
    title: '任务状态',
    dataIndex: 'enable',
    key: 'enable',
    width: 100,
    render: (status, record) => {
      if (status) {
        return react_default.a.createElement("span", {
          style: {
            color: 'green'
          }
        }, "\u5DF2\u8C03\u5EA6");
      } else {
        return react_default.a.createElement("span", {
          style: {
            color: 'gray'
          }
        }, "\u672A\u8C03\u5EA6");
      }
    }
  }, {
    title: '操作',
    dataIndex: 'id',
    key: 'id',
    render: (id, record) => {
      var toggleAction = '';

      if (record.enable) {
        toggleAction = react_default.a.createElement("a", {
          onClick: () => unschedule(id)
        }, "\u505C\u6B62\u8C03\u5EA6");
      } else {
        toggleAction = react_default.a.createElement("a", {
          onClick: () => schedule(id)
        }, "\u8C03\u5EA6");
      }

      return react_default.a.createElement("span", null, toggleAction, react_default.a.createElement(divider["a" /* default */], {
        type: "vertical"
      }), react_default.a.createElement("a", {
        onClick: () => edit(record)
      }, "\u7F16\u8F91"), react_default.a.createElement(divider["a" /* default */], {
        type: "vertical"
      }), react_default.a.createElement(popconfirm["a" /* default */], {
        title: "\u786E\u8BA4\u5220\u9664\uFF1F",
        okText: "\u786E\u5B9A",
        cancelText: "\u53D6\u6D88",
        onConfirm: () => deleted(id)
      }, react_default.a.createElement("a", null, "\u5220\u9664")));
    }
  }];
  return react_default.a.createElement(table["a" /* default */], {
    bordered: true,
    rowKey: "id",
    size: "small",
    columns: columns,
    dataSource: dataSource
  });
}
// EXTERNAL MODULE: ./node_modules/antd/es/modal/style/index.js
var modal_style = __webpack_require__("./node_modules/antd/es/modal/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 6 modules
var modal = __webpack_require__("./node_modules/antd/es/modal/index.js");

// EXTERNAL MODULE: ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/extends.js");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var input_style = __webpack_require__("./node_modules/antd/es/input/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 3 modules
var input = __webpack_require__("./node_modules/antd/es/input/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/form/style/index.js
var form_style = __webpack_require__("./node_modules/antd/es/form/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 10 modules
var es_form = __webpack_require__("./node_modules/antd/es/form/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/style/index.js + 2 modules
var date_picker_style = __webpack_require__("./node_modules/antd/es/date-picker/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/index.js + 24 modules
var date_picker = __webpack_require__("./node_modules/antd/es/date-picker/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/select/style/index.js
var select_style = __webpack_require__("./node_modules/antd/es/select/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js
var es_select = __webpack_require__("./node_modules/antd/es/select/index.js");

// EXTERNAL MODULE: ./src/common/request.js
var request = __webpack_require__("./src/common/request.js");

// EXTERNAL MODULE: ./src/common/store.js
var store = __webpack_require__("./src/common/store.js");

// EXTERNAL MODULE: ./src/pages/task-list/index.less
var task_list = __webpack_require__("./src/pages/task-list/index.less");
var task_list_default = /*#__PURE__*/__webpack_require__.n(task_list);

// CONCATENATED MODULE: ./src/pages/task-list/NewModal.js
















var Option = es_select["a" /* default */].Option;
class NewModal_NewModal extends react["Component"] {
  constructor() {
    super(...arguments);
    this.state = {
      targetObject: [],
      targetMethod: [],
      triggerType: 'RIGHTNOW',
      targetParams: []
    };

    this.fetchOptions = () => {
      // 请求select option选项
      var _this = this;

      request["a" /* default */].get('/tasks').then(function (response) {
        var d = response.data;

        if (Object(store["b" /* isJSON */])(d)) {
          var dd = [];
          Object.keys(d).forEach(e => {
            dd.push(d[e]);
          });
          d = dd;
        }

        var initialValue = _this.props.initialValue;

        if (initialValue) {
          var targetObject = initialValue.targetObject,
              targetMethod = initialValue.targetMethod,
              triggerType = initialValue.triggerType;
          var s = d.filter(e => e.name === targetObject)[0];

          _this.setState({
            targetMethod: s.methods,
            triggerType
          });
        }

        _this.setState({
          targetObject: d
        });
      }).catch(function (error) {});
    };

    this.onSelect = (v, o) => {
      var targetObject = this.state.targetObject;
      var form = this.props.form;
      var s = targetObject.filter(e => e.name === v)[0];
      var targetMethod = s.methods;
      this.setState({
        targetMethod
      });
      form.setFieldsValue({
        targetMethod: '',
        description: ''
      });
    };

    this.onSelect2 = (v, o) => {
      var targetMethod = this.state.targetMethod;
      var form = this.props.form;
      var s = targetMethod.filter(e => e.name === v)[0];
      form.setFieldsValue({
        description: s.description
      }); // 确定参数

      this.setState({
        targetParams: s.params
      });
    };

    this.onSelect3 = (v, o) => {
      this.setState({
        triggerType: v
      });
    };

    this.renderTriggerType = () => {
      var triggerType = this.state.triggerType;
      var getFieldDecorator = this.props.form.getFieldDecorator;

      if (triggerType === 'DELAY') {
        return react_default.a.createElement(es_form["a" /* default */].Item, {
          label: "\u89E6\u53D1\u65F6\u95F4"
        }, getFieldDecorator('fireTime', {
          rules: [{
            required: true,
            message: '请指定执行时间!'
          }]
        })(react_default.a.createElement(date_picker["a" /* default */], {
          format: "YYYY-MM-DD HH:mm:ss",
          disabledDate: this.disabledDate,
          disabledTime: this.disabledDateTime,
          showTime: {
            defaultValue: moment_default()('00:00:00', 'HH:mm:ss')
          }
        })));
      } else if (triggerType === 'REGULAR') {
        return react_default.a.createElement(es_form["a" /* default */].Item, {
          label: "cron\u8868\u8FBE\u5F0F"
        }, getFieldDecorator('cronExpression', {
          rules: [{
            required: true,
            message: '请正确填写一个cron表达式!'
          }]
        })(react_default.a.createElement(input["a" /* default */], {
          type: "text"
        })));
      } else {
        return null;
      }
    };

    this.disabledDate = current => {
      return current && current < moment_default()().endOf('day');
    };

    this.disabledDateTime = () => {
      return {
        disabledHours: () => this.range(0, 24).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56]
      };
    };

    this.range = (start, end) => {
      var result = [];

      for (var i = start; i < end; i++) {
        result.push(i);
      }

      return result;
    };

    this.renderTargetParams = (targetParams, form) => {
      var dom = null;

      if (targetParams.length) {
        dom = targetParams.map((item, index) => {
          return react_default.a.createElement(es_form["a" /* default */].Item, {
            key: index,
            label: item.name
          }, form.getFieldDecorator("targetParams".concat(index + 1), {
            initialValue: ''
          })(react_default.a.createElement(input["a" /* default */], {
            placeholder: "\u8BF7\u8F93\u5165\u53C2\u6570"
          })));
        });
      }

      return dom;
    };
  }

  componentDidMount() {
    this.fetchOptions();
  }

  render() {
    var _this$state = this.state,
        targetObject = _this$state.targetObject,
        targetMethod = _this$state.targetMethod,
        triggerType = _this$state.triggerType,
        targetParams = _this$state.targetParams;
    var _this$props = this.props,
        onCancel = _this$props.onCancel,
        onOk = _this$props.onOk,
        form = _this$props.form,
        visible = _this$props.visible,
        initialValue = _this$props.initialValue;
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
          span: 14
        }
      }
    };
    return react_default.a.createElement(modal["a" /* default */], {
      destroyOnClose: true,
      visible: visible,
      title: "".concat(initialValue ? '编辑' : '新建', "\u4EFB\u52A1"),
      okText: "\u63D0\u4EA4",
      cancelText: "\u53D6\u6D88",
      width: "680px",
      onCancel: onCancel,
      onOk: onOk
    }, react_default.a.createElement(es_form["a" /* default */], extends_default()({}, formItemLayout, {
      className: task_list_default.a.form,
      onSubmit: this.onOk
    }), getFieldDecorator('id')(react_default.a.createElement(input["a" /* default */], {
      type: "hidden"
    })), react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u4EFB\u52A1\u540D\u79F0"
    }, getFieldDecorator('name', {
      rules: [{
        required: true,
        message: '请输入一个任务名称!'
      }]
    })(react_default.a.createElement(input["a" /* default */], {
      type: "text"
    }))), react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u4EFB\u52A1\u5BF9\u8C61"
    }, getFieldDecorator('targetObject', {
      rules: [{
        required: true,
        message: '请选择一个任务对象!'
      }]
    })(react_default.a.createElement(es_select["a" /* default */], {
      onSelect: this.onSelect
    }, targetObject && targetObject.map(item => react_default.a.createElement(Option, {
      key: item.name
    }, item.alias))))), react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u4EFB\u52A1\u65B9\u6CD5"
    }, getFieldDecorator('targetMethod', {
      rules: [{
        required: true,
        message: '请选择一个任务方法!'
      }]
    })(react_default.a.createElement(es_select["a" /* default */], {
      onSelect: this.onSelect2
    }, targetMethod && targetMethod.map(item => react_default.a.createElement(Option, {
      key: item.name
    }, item.alias))))), this.renderTargetParams(targetParams, form), react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u4EFB\u52A1\u63CF\u8FF0"
    }, getFieldDecorator('description', {
      initialValue: ''
    })(react_default.a.createElement(input["a" /* default */].TextArea, null))), react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u89E6\u53D1\u5668\u7C7B\u578B"
    }, getFieldDecorator('triggerType', {
      rules: [{
        required: true,
        message: '请选择一个任务方法!'
      }]
    })(react_default.a.createElement(es_select["a" /* default */], {
      onSelect: this.onSelect3
    }, react_default.a.createElement(Option, {
      value: "RIGHTNOW"
    }, "\u7ACB\u5373\u6267\u884C"), react_default.a.createElement(Option, {
      value: "DELAY"
    }, "\u5B9A\u70B9\u6267\u884C"), react_default.a.createElement(Option, {
      value: "REGULAR"
    }, "\u5468\u671F\u6267\u884C")))), triggerType === 'DELAY' ? react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u89E6\u53D1\u65F6\u95F4"
    }, getFieldDecorator('fireTime', {
      rules: [{
        required: true,
        message: '请指定执行时间!'
      }]
    })(react_default.a.createElement(date_picker["a" /* default */], {
      format: "YYYY-MM-DD HH:mm:ss" // disabledDate={this.disabledDate}
      // disabledTime={this.disabledDateTime}
      ,
      showTime: {
        defaultValue: moment_default()('00:00:00', 'HH:mm:ss')
      },
      placeholder: "\u9009\u62E9\u89E6\u53D1\u65F6\u95F4"
    }))) : null, triggerType === 'REGULAR' ? react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "cron\u8868\u8FBE\u5F0F"
    }, getFieldDecorator('cronExpression', {
      rules: [{
        required: true,
        message: '请正确填写一个cron表达式!'
      }]
    })(react_default.a.createElement(input["a" /* default */], {
      type: "text"
    }))) : null, react_default.a.createElement(es_form["a" /* default */].Item, {
      label: "\u5F02\u5E38\u5904\u7406\u7B56\u7565"
    }, getFieldDecorator('strategy', {
      rules: [{
        required: true,
        message: '请选择一个异常处理策略!'
      }],
      initialValue: ''
    })(react_default.a.createElement(es_select["a" /* default */], null, react_default.a.createElement(Option, {
      value: "BREAK"
    }, "\u4E2D\u6B62"), react_default.a.createElement(Option, {
      value: "GOON"
    }, "\u7EE7\u7EED"))))));
  }

}
/* harmony default export */ var task_list_NewModal = (es_form["a" /* default */].create()(NewModal_NewModal));
// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("./src/common/utils.js");

// CONCATENATED MODULE: ./src/pages/task-list/TaskList.js












class TaskList_TaskLog extends react["Component"] {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false,
      data: [],
      record: null // 选择的行数据

    };

    this.show = () => {
      this.setState({
        record: null,
        visible: true
      });
    };

    this.onCancel = () => {
      this.setState({
        visible: false
      });
    };

    this.handleCreate = () => {
      var form = this.formRef.props.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }

        if (values.fireTime) {
          values.fireTime = values.fireTime.format('YYYY-MM-DD HH:mm:ss');
        }

        var newValues = {};
        var arr = [];
        Object.keys(values).forEach(function (key) {
          console.log(key, values[key]);

          if (key && key.includes('targetParams')) {
            arr.push(values[key]);
          } else {
            newValues[key] = values[key];
          }
        });
        newValues['targetParams'] = arr.join(','); // console.log('8888888888888', values, newValues)

        if (values.id) {
          this.update(newValues);
        } else {
          this.add(newValues);
        } // console.log('Received values of form: ', JSON.stringify(values));


        form.resetFields();
      });
    };

    this.add = data => {
      var _this = this;

      request["a" /* default */].post('/plans', data).then(response => {
        var d = response.data;

        if (d && d.id) {
          message["a" /* default */].info('新增任务成功！');

          _this.setState({
            visible: false
          }); // 重新刷新列表


          _this.fetchPlans();
        } else {
          message["a" /* default */].error('新增任务失败！');
        } // console.log('add-->', response);

      }).catch(error => {});
    };

    this.update = data => {
      var _this = this;

      request["a" /* default */].put('/plans', data).then(response => {
        // console.log('update-->', response);
        var d = response.data;

        if (d && d.id) {
          message["a" /* default */].info('修改任务成功！');

          _this.setState({
            visible: false
          }); // 重新刷新列表


          _this.fetchPlans();
        } else {
          message["a" /* default */].error('修改任务失败！');
        }
      }).catch(error => {});
    };

    this.schedule = id => {
      var _this = this;

      request["a" /* default */].get("/plans/".concat(id, "/schedule")).then(response => {
        var statusText = response.statusText,
            data = response.data;

        if (statusText === 'OK') {
          _this.fetchPlans();
        }

        console.log("/plans/".concat(id, "/schedule -->"), response);
      }).catch(error => {});
    };

    this.unschedule = id => {
      var _this = this;

      request["a" /* default */].get("/plans/".concat(id, "/unschedule")).then(response => {
        var statusText = response.statusText,
            data = response.data;

        if (statusText === 'OK') {
          _this.fetchPlans();
        } // console.log(`/plans/${id}/unschedule -->`, data);

      }).catch(error => {});
    };

    this.deleted = id => {
      var _this = this;

      request["a" /* default */].delete("plans/".concat(id)).then(response => {
        var d = response.data; // console.log(`plans/${id}-->`, d);

        if (d.id) {
          _this.fetchPlans();
        }
      }).catch(error => {});
    };

    this.edit = record => {
      this.setState({
        visible: true,
        record
      }, () => {
        var form = this.formRef.props.form;

        var r = objectSpread_default()({}, record);

        if (record.targetParams) {
          // const P = '参数001,参数002,参数003';
          var paramsArr = record.targetParams.split(',');
          paramsArr.map((e, i) => r["targetParams".concat(i + 1)] = e);
        }

        form.setFieldsValue(r);
      });
    };
  }

  componentDidMount() {
    var _this = this;

    var access_token = utils["b" /* auth */].get();

    if (access_token) {
      // 如果存在LIAN_MED_ACCESS_TOKEN则不重新做用户验证
      _this.fetchPlans();
    } else {
      var params = Object(utils["c" /* getUrlParam */])();
      utils["a" /* account */].set(params);
      return request["a" /* default */].post('/authenticate', {
        username: params.auth_user,
        token: params.auth_token,
        password: params.auth_password
      }).then(function (response) {
        var access_token = response.data.id_token;
        utils["b" /* auth */].set(access_token); // 验证成功后

        _this.fetchPlans();
      }).catch(function (error) {
        console.info('/authenticate', error);
      });
    }
  }

  fetchPlans(id) {
    var _this = this;

    var api = id ? "/plans/".concat(id) : 'plans';
    request["a" /* default */].get(api).then(function (response) {
      var d = response.data; // console.log('object', d);

      _this.setState({
        data: d
      });
    }).catch(function (error) {});
  }

  render() {
    var _this$state = this.state,
        visible = _this$state.visible,
        data = _this$state.data,
        record = _this$state.record;
    var tableProps = {
      dataSource: data,
      schedule: this.schedule,
      unschedule: this.unschedule,
      edit: this.edit,
      deleted: this.deleted
    };
    return react_default.a.createElement("div", {
      className: task_list_default.a.container
    }, react_default.a.createElement("div", {
      className: task_list_default.a.title
    }, "\u4EFB\u52A1\u5217\u8868"), react_default.a.createElement("div", {
      className: task_list_default.a.tableHeader
    }, react_default.a.createElement(es_button["a" /* default */], {
      type: "primary",
      icon: "plus",
      onClick: this.show
    }, "\u65B0\u589E\u4EFB\u52A1"), react_default.a.createElement(task_list_NewModal, {
      wrappedComponentRef: form => this.formRef = form,
      visible: visible,
      onOk: this.handleCreate,
      onCancel: this.onCancel,
      initialValue: record
    })), react_default.a.createElement(CustomTable, tableProps));
  }

}

/* harmony default export */ var TaskList = (TaskList_TaskLog);
// CONCATENATED MODULE: ./src/pages/task-list/index.js



react_dom_default.a.render(react_default.a.createElement(TaskList, null), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/task-list/index.less":
/*!****************************************!*\
  !*** ./src/pages/task-list/index.less ***!
  \****************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container___33b9E","title":"title___1zLcY","tableHeader":"tableHeader___3wX_q","form":"form___1eXEg"};

/***/ }),

/***/ 12:
/*!***************************************************************************************!*\
  !*** multi ./node_modules/umi-plugin-mpa/templates/polyfill.js ./src/pages/task-list ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\work\CTGCenter\node_modules\umi-plugin-mpa\templates\polyfill.js */"./node_modules/umi-plugin-mpa/templates/polyfill.js");
module.exports = __webpack_require__(/*! ./src/pages/task-list */"./src/pages/task-list/index.js");


/***/ })

/******/ });