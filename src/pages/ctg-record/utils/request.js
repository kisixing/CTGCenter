import axios from "axios";
import { notification } from "antd";
import { URL } from '../../../common/utils';

// const URL = window.CONFIG.baseURL;
const instance = axios.create({
  baseURL: `${URL}/api`
});

instance.defaults.timeout = 5000;

// http request 拦截器
instance.interceptors.request.use(
  function (config) {
    config.headers = {
      // 在这里设置请求头与携带token信息
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: sessionStorage.getItem("ACCESS_TOKEN"),
      Accept: "application/json"
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

let loginTipLock = false;

// 响应拦截器即异常处理
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "请求错误";
          break;
        case 401:
          error.message = "未授权，请重新登录或登录已过期，请重新登录！";
          // window.location.hash = "#/login";  // token过期机制
          break;
        case 403:
          error.message = "拒绝访问";
          // window.location.hash = "#/notAuth";
          break;
        case 404:
          error.message = `请求错误,未找到该资源: ${error.response.config.url}`;
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          console.log("http版本不支持该请求");
          error.message = "http版本不支持该请求";
          break;
        default:
          console.log(`连接错误${error.response.status}`);
      }
    } else {
      console.log("连接到服务器失败");
    }
    if (error.response.status === 401) {
      if (!loginTipLock) {    //避免同时多个请求都返回401时，弹出多个“未登录”提示框
        loginTipLock = true;
        notification.info({
          message: '提示',
          description: error.message
        })
        setTimeout(function () {
          loginTipLock = false;
        }, 1000)
      }
    } else {
      notification.error({
        message: '出错啦',
        description: error.message
      });
    }
    return Promise.resolve(error.response);
  }
);

export default instance;
