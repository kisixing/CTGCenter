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
/******/ 		"user-account": 0
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
/******/ 	deferredModules.push([17,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/user-management/index.js":
/*!********************************************************!*\
  !*** ./src/pages/user-management/index.js + 1 modules ***!
  \********************************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/button/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/divider/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/divider/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/input/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/message/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/message/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/popconfirm/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/popconfirm/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/select/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/select/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/table/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/antd/es/table/style/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/common/utils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/moment/moment.js (<- Module is not an ECMAScript module) */
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

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js
var style = __webpack_require__("./node_modules/antd/es/button/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 2 modules
var es_button = __webpack_require__("./node_modules/antd/es/button/index.js");

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

// EXTERNAL MODULE: ./node_modules/antd/es/select/style/index.js
var select_style = __webpack_require__("./node_modules/antd/es/select/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js
var es_select = __webpack_require__("./node_modules/antd/es/select/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var input_style = __webpack_require__("./node_modules/antd/es/input/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 3 modules
var input = __webpack_require__("./node_modules/antd/es/input/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/message/style/index.js
var message_style = __webpack_require__("./node_modules/antd/es/message/style/index.js");

// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js
var message = __webpack_require__("./node_modules/antd/es/message/index.js");

// EXTERNAL MODULE: ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("./node_modules/moment/moment.js");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ../LUNA_FontEnd/modules/packages/utils/lib/index.js
var lib = __webpack_require__("../LUNA_FontEnd/modules/packages/utils/lib/index.js");

// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("./src/common/utils.js");

// CONCATENATED MODULE: ./src/pages/user-management/Account.js
















/* eslint-disable jsx-a11y/anchor-is-valid */

/*
 * @Description: 账户管理
 * @Author: Zhong Jun
 * @Date: 2019-10-15 19:22:10
 */




lib["request"].config({
  Authorization: utils["b" /* auth */].get(),
  prefix: window.CONFIG.baseURL
});

class Account_Account extends react["PureComponent"] {
  constructor(props) {
    super(props);
    this.index = 0;
    this.cacheOriginData = {};

    this.fetchUsers = () => {
      this.setState({
        loading: true
      });
      lib["request"].get('/users').then(res => {
        this.setState({
          loading: false
        });
        this.setState({
          data: res,
          values: res
        });
      }).catch(err => {
        this.setState({
          loading: false
        });
      });
    };

    this.start = key => {
      console.log('TCL: Account -> key -> start', key);
    };

    this.stop = key => {
      console.log('TCL: Account -> key -> stop', key);
    };

    this.toggleEditable = (e, key) => {
      e.preventDefault();
      var data = this.state.data;
      var newData = data.map(item => objectSpread_default()({}, item));
      var target = this.getRowByKey(key, newData); // 获取select options

      this.fetchGroups();
      this.fetchWards();

      if (target) {
        // 进入编辑状态时保存原始数据
        if (!target.editable) {
          this.cacheOriginData[key] = objectSpread_default()({}, target);
        }

        target.editable = !target.editable;
        this.setState({
          data: newData
        });
      }
    };

    this.newAccount = () => {
      var data = this.state.data;
      var account = JSON.parse(sessionStorage.getItem('ACCOUNT'));
      var newData = data.map(item => objectSpread_default()({}, item));
      var date = moment_default()();
      newData.push({
        id: "NEW_TEMP_ID_".concat(this.index),
        login: '',
        firstName: '',
        password: '',
        activated: true,
        createdBy: account.login,
        createdDate: date,
        lastModifiedBy: date,
        editable: true,
        isNew: true,
        groups: [],
        wards: []
      });
      this.index += 1;
      this.setState({
        data: newData
      }); // 获取select options

      this.fetchGroups();
      this.fetchWards();
    };

    this.remove = key => {
      var data = this.state.data;
      var newData = data.filter(item => item.id !== key);
      this.setState({
        data: newData
      });
    };

    this.deleted = (key, name) => {
      lib["request"].delete("/users/".concat(name)).then(res => {
        // 更新本地信息
        message["a" /* default */].success("\u5220\u9664\u7528\u6237".concat(name, "\u6210\u529F\uFF01"));

        this.remove(key);
      }).catch(err => {
        message["a" /* default */].error("\u5220\u9664\u7528\u6237".concat(name, "\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"));
      });
    };

    this.update = params => {
      lib["request"].put('/users', {
        data: params
      }).then(res => {
        message["a" /* default */].success("\u4FEE\u6539\u7528\u6237".concat(params.login, "\u6210\u529F\uFF01"));
      }).catch(err => {
        message["a" /* default */].error("\u4FEE\u6539\u7528\u6237".concat(params.login, "\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"));
      });
    };

    this.create = params => {
      lib["request"].post('/users', {
        data: params
      }).then(res => {
        message["a" /* default */].success("\u65B0\u589E\u7528\u6237".concat(params.login, "\u6210\u529F\uFF01"));
      }).catch(err => {
        message["a" /* default */].error("\u65B0\u589E\u7528\u6237".concat(params.login, "\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"));
      });
    };

    this.fetchWards = () => {
      lib["request"].get('/wards').then(res => {
        this.setState({
          wards: res
        });
      });
    };

    this.fetchGroups = () => {
      lib["request"].get('/groups').then(res => {
        this.setState({
          groups: res
        });
      });
    };

    this.state = {
      loading: false,
      data: [],
      values: [],
      groups: [],
      wards: []
    };
    this.columns = [{
      title: '账号名称',
      dataIndex: 'firstName',
      key: 'id',
      width: 150,
      render: (text, record) => {
        if (record.editable) {
          return react_default.a.createElement(input["a" /* default */], {
            value: text,
            autoFocus: true,
            onChange: e => this.handleFieldChange(e, 'firstName', record.id),
            onKeyPress: e => this.handleKeyPress(e, record.id),
            placeholder: "\u5DE5\u53F7"
          });
        }

        return text;
      }
    }, {
      title: '工号',
      dataIndex: 'login',
      key: 'id',
      width: 100,
      render: (text, record) => {
        if (record.editable) {
          return react_default.a.createElement(input["a" /* default */], {
            value: text,
            autoFocus: true,
            onChange: e => this.handleFieldChange(e, 'login', record.id),
            onKeyPress: e => this.handleKeyPress(e, record.id),
            placeholder: "\u8D26\u53F7\u540D\u79F0"
          });
        }

        return text;
      }
    }, {
      title: '密码',
      dataIndex: 'password',
      key: 'password',
      width: 150,
      render: (text, record) => {
        if (record.editable) {
          return react_default.a.createElement(input["a" /* default */].Password, {
            value: text,
            autoFocus: true,
            onChange: e => this.handleFieldChange(e, 'password', record.id),
            onKeyPress: e => this.handleKeyPress(e, record.id),
            placeholder: "\u8D26\u53F7\u5BC6\u7801"
          });
        }

        return '********'; // text;
      }
    }, // {
    //   title: '状态',
    //   dataIndex: 'activated',
    //   key: 'activated',
    //   width: 140,
    //   render: (text, record) => {
    //     if (record.editable) {
    //       return (
    //         <Select
    //           value={text}
    //           style={{ width: 120 }}
    //           onChange={e => this.handleFieldChange(e, 'activated', record.id)}
    //           // onKeyPress={e => this.handleKeyPress(e, record.key)}
    //           placeholder="账户状态"
    //         >
    //           <Select.Option value={true}>激活</Select.Option>
    //           <Select.Option value={false}>停用</Select.Option>
    //         </Select>
    //       );
    //     }
    //     if (!text) {
    //       return <Badge status="error" text="停用" />;
    //     } else {
    //       return <Badge status="success" text="激活" />;
    //     }
    //   },
    // },
    {
      title: '用户组',
      dataIndex: 'groups',
      key: 'groups',
      width: 150,
      render: (text, record) => {
        if (record.editable) {
          var val = record['groups'].map(e => e && e.id);
          var groups = this.state.groups;
          return react_default.a.createElement(es_select["a" /* default */], {
            mode: "multiple",
            value: val,
            style: {
              width: 136
            } // onFocus={this.fetchGroups}
            ,
            onChange: e => {
              var groups = this.state.groups;
              var selecteds = [];
              groups.map(a => {
                if (e.includes(a.id)) {
                  selecteds.push(a);
                }
              });
              return this.handleFieldChange(selecteds, 'groups', record.id);
            },
            placeholder: "\u8BF7\u9009\u62E9\u7528\u6237\u7EC4"
          }, groups && groups.length > 0 && groups.map(e => {
            return react_default.a.createElement(es_select["a" /* default */].Option, {
              value: e.id
            }, e.nickname);
          }));
        }

        var str = record['groups'].map(e => e && e.nickname);
        return str.join(',');
      }
    }, {
      title: '病区',
      dataIndex: 'wards',
      key: 'wards',
      width: 150,
      render: (text, record) => {
        if (record.editable) {
          var wards = this.state.wards;
          var val = record['wards'].map(e => e && e.id);
          console.log('TCL666', val);
          return react_default.a.createElement(es_select["a" /* default */], {
            mode: "multiple",
            value: val,
            style: {
              width: 136
            } // onFocus={this.fetchWards}
            ,
            onChange: e => {
              var wards = this.state.wards;
              var selecteds = [];
              wards.map(a => {
                if (e.includes(a.id)) {
                  selecteds.push(a);
                }
              });
              return this.handleFieldChange(selecteds, 'wards', record.id);
            },
            placeholder: "\u8BF7\u9009\u62E9\u75C5\u533A"
          }, wards && wards.length > 0 && wards.map(e => {
            return react_default.a.createElement(es_select["a" /* default */].Option, {
              value: e.id
            }, e.wardName);
          }));
        }

        var str = record['wards'].map(e => e && e.wardName);
        return str.join(',');
      }
    }, {
      title: '创建者',
      dataIndex: 'createdBy',
      key: 'createdBy',
      width: 100
    }, {
      title: '创建时间',
      dataIndex: 'createdDate',
      key: 'createdDate',
      width: 150,
      render: text => text ? moment_default()(text).format('YYYY-MM-DD HH:mm:ss') : 'XXXX-XX-XX XX:XX'
    }, // {
    //   title: '最近更新',
    //   dataIndex: 'lastModifiedDate',
    //   key: 'lastModifiedDate',
    //   width: 150,
    //   render: text =>
    //     text
    //       ? moment(text).format('YYYY-MM-DD HH:mm:ss')
    //       : 'XXXX-XX-XX XX:XX',
    // },
    {
      title: '操作',
      dataIndex: 'actions',
      key: 'actions',
      width: 150,
      render: (text, record) => {
        var loading = this.state.loading;

        if (!!record.editable && loading) {
          return null;
        }

        if (record.editable) {
          if (record.isNew) {
            return react_default.a.createElement("span", null, react_default.a.createElement("a", {
              onClick: e => this.saveRow(e, record.id)
            }, "\u4FDD\u5B58"), react_default.a.createElement(divider["a" /* default */], {
              type: "vertical"
            }), react_default.a.createElement(popconfirm["a" /* default */], {
              title: "\u662F\u5426\u8981\u5220\u9664\u6B64\u884C\uFF1F",
              onConfirm: () => this.remove(record.id)
            }, react_default.a.createElement("a", null, "\u5220\u9664")));
          }

          return react_default.a.createElement("span", null, react_default.a.createElement("a", {
            onClick: e => this.saveRow(e, record.id)
          }, "\u4FDD\u5B58"), react_default.a.createElement(divider["a" /* default */], {
            type: "vertical"
          }), react_default.a.createElement("a", {
            onClick: e => this.cancel(e, record.id)
          }, "\u53D6\u6D88"));
        } else {
          var activated = record.activated,
              id = record.id;
          var dom = null;

          if (!activated) {
            dom = react_default.a.createElement("a", {
              onClick: () => this.start(id)
            }, "\u542F\u7528");
          } else {
            dom = react_default.a.createElement("a", null, "\u505C\u7528");
          }

          return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("span", {
            className: "primary-link",
            onClick: e => this.toggleEditable(e, record.id)
          }, "\u7F16\u8F91"), react_default.a.createElement(divider["a" /* default */], {
            type: "vertical"
          }), dom, react_default.a.createElement(divider["a" /* default */], {
            type: "vertical"
          }), react_default.a.createElement(popconfirm["a" /* default */], {
            title: "\u786E\u8BA4\u5220\u9664\u8BE5\u6761\u4FE1\u606F\uFF1F",
            okText: "\u786E\u5B9A",
            cancelText: "\u53D6\u6D88",
            onConfirm: () => this.deleted(record.id, record.login)
          }, react_default.a.createElement("span", {
            className: "delete-link"
          }, "\u5220\u9664")));
        }
      }
    }];
  }

  componentDidMount() {
    this.fetchUsers();
  } // 获取全部账户信息


  getRowByKey(key, newData) {
    var data = this.state.data;
    return (newData || data).filter(item => item.id === key)[0];
  }

  handleKeyPress(e, key) {
    if (e.key === 'Enter') {
      this.saveRow(e, key);
    }
  }

  handleFieldChange(e, fieldName, key) {
    var data = this.state.data;
    var newData = data.map(item => objectSpread_default()({}, item)); // console.log('TCL: Account -> handleFieldChange -> newData', e, fieldName, key, newData);

    var target = this.getRowByKey(key, newData);

    if (target) {
      var value = e.target ? e.target.value : e;
      target[fieldName] = value;
      this.setState({
        data: newData
      });
    }
  }

  saveRow(e, key) {
    e.persist();
    this.setState({
      loading: true
    });

    if (this.clickedCancel) {
      this.clickedCancel = false;
      return;
    }

    var target = this.getRowByKey(key) || {};

    if (!target.firstName || !target.password || !target.login) {
      message["a" /* default */].error('请填写完整成员信息。');

      e.target.focus();
      this.setState({
        loading: false
      });
      return;
    }

    delete target.isNew; // console.log('TCL888', target);

    this.toggleEditable(e, key);
    var ID = target.id.toString();

    if (ID.includes('NEW_TEMP_ID')) {
      target.id = '';
      this.create(target);
    } else {
      this.update(target);
    }

    this.setState({
      loading: false
    });
  } // 修改账户信息


  cancel(e, key) {
    this.clickedCancel = true;
    e.preventDefault();
    var data = this.state.data;
    var newData = data.map(item => objectSpread_default()({}, item));
    var target = this.getRowByKey(key, newData);

    if (this.cacheOriginData[key]) {
      Object.assign(target, this.cacheOriginData[key]);
      delete this.cacheOriginData[key];
    }

    target.editable = false;
    this.setState({
      data: newData
    });
    this.clickedCancel = false;
  }

  render() {
    var _this$state = this.state,
        data = _this$state.data,
        loading = _this$state.loading;
    return react_default.a.createElement("div", {
      style: {
        padding: '12px'
      }
    }, react_default.a.createElement("p", {
      style: {
        fontWeight: 600
      }
    }, "\u8D26\u6237\u7BA1\u7406"), react_default.a.createElement(table["a" /* default */], {
      loading: loading,
      size: "small",
      pagination: false,
      columns: this.columns,
      dataSource: data
    }), react_default.a.createElement(es_button["a" /* default */], {
      style: {
        width: '100%',
        marginTop: 16,
        marginBottom: 8
      },
      type: "dashed",
      onClick: this.newAccount,
      icon: "plus"
    }, "\u65B0\u589E\u8D26\u53F7"));
  }

}

/* harmony default export */ var user_management_Account = (Account_Account);
// CONCATENATED MODULE: ./src/pages/user-management/index.js



react_dom_default.a.render(react_default.a.createElement(user_management_Account, null), document.getElementById('root'));

/***/ }),

/***/ 17:
/*!*********************************************************************************************!*\
  !*** multi ./node_modules/umi-plugin-mpa/templates/polyfill.js ./src/pages/user-management ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\work\CTGCenter\node_modules\umi-plugin-mpa\templates\polyfill.js */"./node_modules/umi-plugin-mpa/templates/polyfill.js");
module.exports = __webpack_require__(/*! ./src/pages/user-management */"./src/pages/user-management/index.js");


/***/ })

/******/ });