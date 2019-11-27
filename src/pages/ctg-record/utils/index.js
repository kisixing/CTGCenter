import qs from 'qs';

// export function getUrlParam(name) {
//   // 取得url中?后面的字符
//   var query = window.location.search.substring(1);
//   // 把参数按&拆分成数组
//   var param_arr = query.split('&');
//   for (var i = 0; i < param_arr.length; i++) {
//     var pair = param_arr[i].split('=');
//     if (pair[0] === name) {
//       return pair[1];
//     }
//   }
//   return undefined;
// }

/**
 * 获取指定某个url参数值
 * @param {string} name
 */
export function getUrlParam(name) {
  // 取得url中?后面的字符
  const query = window.location.search.substr(1);
  // 把参数按&拆分成数组
  const params = qs.parse(query);

  // 传参时，取指定参数
  if (name) {
    const value = params[name]
    return value;
  }
  return params;
}

/**
   * 对象转url参数
   * @param {*} data
   * @param {*} isPrefix
   */
export function queryParams (data, isPrefix) {
  isPrefix = isPrefix ? isPrefix : false
  let prefix = isPrefix ? '?' : ''
  let _result = []
  for (let key in data) {
    let value = data[key]
    // 去掉为空的参数
    if (['', undefined, null].includes(value)) {
      continue
    }
    if (value.constructor === Array) {
      value.forEach(_value => {
        _result.push(encodeURIComponent(key) + '[]=' + encodeURIComponent(_value))
      })
    } else {
      _result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
    }
  }

  return _result.length ? prefix + _result.join('&') : ''
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
    starttime: ''
  };
  if (pureidarr.length > 2) {
    let pureid = pureidarr[2];
    CTGDATA.starttime =
      "20" +
      pureid.substring(0, 2) +
      "-" +
      pureid.substring(2, 4) +
      "-" +
      pureid.substring(4, 6) +
      " " +
      pureid.substring(6, 8) +
      ":" +
      pureid.substring(8, 10) +
      ":" +
      pureid.substring(10, 12);
  }
  Object.keys(data).forEach(key => {
    let oridata = data[key];
    if (!oridata) {
      return;
    }
    if (key === "fhr1") {
      CTGDATA.index = oridata.length / 2;
    }
    for (let i = 0; i < CTGDATA.index; i++) {
      let hexBits = oridata.substring(0, 2);
      let data_to_push = parseInt(hexBits, 16);
      if (key === "fhr1") {
        CTGDATA.fhr[0][i] = data_to_push;
      } else if (key === "fhr2") {
        CTGDATA.fhr[1][i] = data_to_push;
      } else if (key === "fhr3") {
        CTGDATA.fhr[2][i] = data_to_push;
      } else if (key === "toco") {
        CTGDATA.toco[i] = data_to_push;
      } else if (key === "fm") {
        CTGDATA.fm[i] = data_to_push;
      }
      oridata = oridata.substring(2, oridata.length);
    }
  });
  return CTGDATA;
}