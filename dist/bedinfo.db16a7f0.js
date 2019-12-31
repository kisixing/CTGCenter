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
/******/ 		"bedinfo": 0
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
/******/ 	deferredModules.push([15,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/bed/index.tsx":
/*!*********************************!*\
  !*** ./src/pages/bed/index.tsx ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: multi ./node_modules/umi-plugin-mpa/templates/polyfill.js ./src/pages/bed (referenced with single entry) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/table/style */ "./node_modules/antd/es/table/style/index.js");
/* harmony import */ var antd_es_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/table */ "./node_modules/antd/es/table/index.js");
/* harmony import */ var antd_es_message_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/message/style */ "./node_modules/antd/es/message/style/index.js");
/* harmony import */ var antd_es_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/message */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var antd_es_popconfirm_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/popconfirm/style */ "./node_modules/antd/es/popconfirm/style/index.js");
/* harmony import */ var antd_es_popconfirm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/popconfirm */ "./node_modules/antd/es/popconfirm/index.js");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/button/style */ "./node_modules/antd/es/button/style/index.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var D_work_CTGCenter_node_modules_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var D_work_CTGCenter_node_modules_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(D_work_CTGCenter_node_modules_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_es_form_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/es/form/style */ "./node_modules/antd/es/form/style/index.js");
/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/es/form */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var antd_es_input_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/es/input/style */ "./node_modules/antd/es/input/style/index.js");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/es/input */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd_es_select_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/es/select/style */ "./node_modules/antd/es/select/style/index.js");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/es/select */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "../LUNA_FontEnd/modules/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _lianmed_request__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @lianmed/request */ "../LUNA_FontEnd/modules/packages/request/lib/index.js");
/* harmony import */ var _lianmed_request__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_lianmed_request__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _useLogin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./useLogin */ "./src/pages/bed/useLogin.ts");
















var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var mapStatusToText = {
  1: '工作中',
  2: '停止',
  3: '离线'
};
var EditableContext = react__WEBPACK_IMPORTED_MODULE_15___default.a.createContext(null);

class EditableCell extends react__WEBPACK_IMPORTED_MODULE_15___default.a.Component {
  constructor() {
    super(...arguments);

    this.getInput = () => {
      console.log('object, this.props');
      var _this$props = this.props,
          inputType = _this$props.inputType,
          options = _this$props.options;

      if (inputType === 'number') {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], null, Object.entries(mapStatusToText).map(_ => {
          return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Option, {
            value: _[0],
            key: _[0]
          }, _[1]);
        }));
      }

      if (inputType === 'select') {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
          style: {
            width: '100%'
          }
        }, options.map(_ => {
          return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Option, {
            value: _.wardId,
            key: _.wardId
          }, _.wardId);
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        disabled: this.props.disabled
      });
    };

    this.renderCell = (_ref) => {
      var getFieldDecorator = _ref.getFieldDecorator;

      var _a = this.props,
          editing = _a.editing,
          dataIndex = _a.dataIndex,
          title = _a.title,
          inputType = _a.inputType,
          record = _a.record,
          index = _a.index,
          required = _a.required,
          disabled = _a.disabled,
          children = _a.children,
          restProps = __rest(_a, ["editing", "dataIndex", "title", "inputType", "record", "index", "required", "disabled", "children"]);

      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("td", Object.assign({}, restProps), editing ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].Item, {
        style: {
          margin: 0
        }
      }, getFieldDecorator(dataIndex, {
        rules: [{
          required: !disabled,
          message: "\u8BF7\u8F93\u5165".concat(title, "!")
        }],
        initialValue: record[dataIndex]
      })(this.getInput())) : children);
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(EditableContext.Consumer, null, this.renderCell);
  }

}

var EditableTable = props => {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(null),
      _useState2 = D_work_CTGCenter_node_modules_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default()(_useState, 2),
      dd = _useState2[0],
      setDd = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(''),
      _useState4 = D_work_CTGCenter_node_modules_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default()(_useState3, 2),
      editingKey = _useState4[0],
      setEditingKey = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])([]),
      _useState6 = D_work_CTGCenter_node_modules_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default()(_useState5, 2),
      options = _useState6[0],
      setOptions = _useState6[1]; // useEffect(() => {
  //     // 使用浏览器的 API 更新页面标题
  //     fetchOptions();
  // });


  var fetchOptions = () => {
    _lianmed_request__WEBPACK_IMPORTED_MODULE_17___default.a.get("/wards").then(d => setOptions(d));
  };

  var fetchData = () => {
    var params = Object(qs__WEBPACK_IMPORTED_MODULE_18__["stringify"])({
      sort: 'deviceno,asc'
    });
    _lianmed_request__WEBPACK_IMPORTED_MODULE_17___default.a.get("/bedinfos/?".concat(params)).then(d => setDd(d));
  };

  Object(_useLogin__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"])(fetchData);
  var columns = [...[{
    title: '名称',
    dataIndex: 'bedname',
    key: 'bedname',
    width: 100
  }, {
    title: '设备编号',
    dataIndex: 'deviceno',
    key: 'deviceno',
    width: 100
  }, {
    title: '子机号',
    dataIndex: 'subdevice',
    key: 'subdevice',
    width: 100
  }, {
    title: '床号',
    dataIndex: 'bedno',
    key: 'bedno',
    width: 100
  }, {
    title: '病区号',
    dataIndex: 'areano',
    key: 'areano',
    width: 100
  }, // {
  //     title: '病区名',
  //     dataIndex: 'areaname',
  //     key: 'areaname',
  //     width: 100
  // },
  // {
  //     title: '状态',
  //     dataIndex: 'status',
  //     key: 'status',
  //     width: 100,
  //     render: (text, record) => {
  //         return mapStatusToText[text];
  //     },
  // },
  // {
  //     title: '设备类型',
  //     dataIndex: 'type',
  //     key: 'type',
  //     align: 'center',
  //     width: 100
  // },
  {
    title: '外借病区',
    dataIndex: 'outWard',
    key: 'outWard',
    align: 'center',
    width: 100,
    render: text => text
  }].map(_ => Object.assign(Object.assign({}, _), {
    editable: true,
    align: 'center'
  })), {
    title: '操作',
    dataIndex: 'operation',
    width: 200,
    render: (text, record) => {
      var editable = isEditing(record);
      return editable ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(EditableContext.Consumer, null, form => react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        size: "small",
        type: "link",
        onClick: () => save(form, record.id),
        style: {
          marginRight: 8
        }
      }, "\u4FDD\u5B58")), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_popconfirm__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        title: "\u786E\u8BA4\u53D6\u6D88?",
        okText: "\u786E\u8BA4",
        cancelText: "\u53D6\u6D88",
        onConfirm: cancel
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        size: "small",
        type: "link"
      }, "\u53D6\u6D88"))) : react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        size: "small",
        type: "link",
        disabled: editingKey !== '',
        onClick: () => {
          setEditingKey(record.id);
          fetchOptions();
        }
      }, "\u7F16\u8F91"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_popconfirm__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        title: "\u786E\u8BA4\u53D6\u6D88?",
        okText: "\u786E\u8BA4",
        cancelText: "\u53D6\u6D88",
        onConfirm: () => deleted(record)
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        size: "small",
        type: "link"
      }, "\u5220\u9664")));
    }
  }];

  var isEditing = record => {
    var status = record.id === editingKey;
    return status;
  };

  var cancel = () => {
    setEditingKey('');
  };

  var save = (form, id) => {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }

      var newData = [...dd];
      var index = newData.findIndex(item => id === item.id);

      if (index > -1) {
        _lianmed_request__WEBPACK_IMPORTED_MODULE_17___default.a.put('/bedinfos', {
          data: Object.assign(Object.assign({}, newData[index]), row)
        }).then(data => {
          fetchData();
          setEditingKey('');
        });
      } else {
        newData.push(row);
        setEditingKey('');
        setDd(newData);
      }
    });
  };

  var deleted = record => {
    var id = record.id,
        areaname = record.areaname,
        bedname = record.bedname; // console.log('55555555555555', record)

    _lianmed_request__WEBPACK_IMPORTED_MODULE_17___default.a.delete("/bedinfos/".concat(id)).then(data => {
      fetchData();
      setEditingKey('');

      antd_es_message__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].info("\u6210\u529F\u5220\u9664".concat(areaname, "\u75C5\u533Ad\u7684").concat(bedname, "\u8BBE\u5907"));
    });
  };

  var components = {
    body: {
      cell: EditableCell
    }
  };
  var c = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    var inputType = 'text';

    if (col.dataIndex === 'status') {
      inputType = 'number';
    }

    if (col.dataIndex === 'areano') {
      inputType = 'select';
    }

    return Object.assign(Object.assign({}, col), {
      onCell: record => ({
        record,
        inputType: inputType,
        disabled: ['deviceno', 'subdevice', 'bedno', 'outWard'].includes(col.dataIndex) ? true : false,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
        options: options
      })
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(EditableContext.Provider, {
    value: props.form
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    style: {
      padding: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("p", {
    style: {
      fontWeight: 600,
      lineHeight: '40px',
      marginBottom: '20px',
      fontSize: 16
    }
  }, "\u5E8A\u4F4D\u7BA1\u7406"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_table__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    size: "small",
    components: components,
    bordered: true,
    rowKey: "id",
    dataSource: dd,
    columns: c,
    // rowClassName="editable-row"
    pagination: {
      onChange: cancel
    }
  })));
};

var EditableFormTable = antd_es_form__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].create()(EditableTable);

react_dom__WEBPACK_IMPORTED_MODULE_16___default.a.render(react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(EditableFormTable, null), document.getElementById('root'));

/***/ }),

/***/ 15:
/*!*********************************************************************************!*\
  !*** multi ./node_modules/umi-plugin-mpa/templates/polyfill.js ./src/pages/bed ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\work\CTGCenter\node_modules\umi-plugin-mpa\templates\polyfill.js */"./node_modules/umi-plugin-mpa/templates/polyfill.js");
module.exports = __webpack_require__(/*! ./src/pages/bed */"./src/pages/bed/index.tsx");


/***/ })

/******/ });