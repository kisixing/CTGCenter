import store from './store';
import { TOKEN_KEY } from "@lianmed/utils";
import s from "store";
// const isDev = process.env.NODE_ENV === 'development';
// const URL_1 = window.CONFIG ? window.CONFIG.baseURL : URL;
export const URL = window.CONFIG ? window.CONFIG.baseURL : `${window.location.protocol}//${window.location.host}`;

/**
 * 获取指定某个url参数值
 * @param {string} name
 */
export function getUrlParam(name) {
  // 取得url中?后面的字符
  let query = window.location.search.substr(1);
  // 把参数按&拆分成数组
  query = query.split('&');
  // 初始化params对象
  let params = {};
  for (let i = 0; i < query.length; i++) {
    const index = query[i].indexOf('=');
    const key = query[i].slice(0, index);
    const value = query[i].slice(index + 1);
    // const obj = { [key] : value};
    params[key] = value;
  }

  // 传参时，取指定参数
  if (name) {
    const value = params[name]
    return value;
  }
  return params;
}

/**
 * 处理值，以便符合ctg曲线数据要求
 * @param {*} ctgexamId ctg检查id
 * @param {*} data ctg数据
 */
export function transformsCTG(ctgexamId, data) {
  let pureidarr = ctgexamId.split('_');
  // 初始化结构
  let CTGDATA = {
    fhr: [[], [], []],
    toco: [],
    fm: [],
    fetal_num: 2,
    index: 0,
    starttime: '',
  };
  if (pureidarr.length > 2) {
    let pureid = pureidarr[2];
    CTGDATA.starttime =
      '20' +
      pureid.substring(0, 2) +
      '-' +
      pureid.substring(2, 4) +
      '-' +
      pureid.substring(4, 6) +
      ' ' +
      pureid.substring(6, 8) +
      ':' +
      pureid.substring(8, 10) +
      ':' +
      pureid.substring(10, 12);
  }
  Object.keys(data).forEach(key => {
    let oridata = data[key];
    if (!oridata) {
      return;
    }
    if (key === 'fhr1') {
      CTGDATA.index = oridata.length / 2;
    }
    for (let i = 0; i < CTGDATA.index; i++) {
      let hexBits = oridata.substring(0, 2);
      let data_to_push = parseInt(hexBits, 16);
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
    const TOKEN = 'Bearer ' + value;
    store.set(this.key, TOKEN);
    debugger
    s.set(TOKEN_KEY,TOKEN);
  }
  get() {
    const value = store.get(this.key);
    return value;
  }
}
export const auth = new Auth();

/**
 * 存储url参数信息
 */
class Person {
  constructor() {
    this.desc = '存储账户信息';
    this.key = 'LIAN_MED_ACCOUNT';
  }

  // 原型方法
  set(value) {
    store.set(this.key, compile(value));
  }
  get() {
    store.get(this.key);
  }
  remove() {
    store.remove(this.key);
  }
  // 静态方法 也会被继承
  static myName() {
    return '我是静态方法的myName';
  }
}

export const account = new Person();

// 加密函数
export function compile(code) {
  let c = String.fromCharCode(code.charCodeAt(0) + code.length);
  for (let i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
  }
  return escape(c);
}

// 解密函数
export function uncompile(code) {
  code = unescape(code);
  let c = String.fromCharCode(code.charCodeAt(0) - code.length);
  for (let i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
  }
  return c;
}
