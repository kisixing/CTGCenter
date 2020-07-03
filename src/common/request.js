import axios from 'axios';
import { notification } from 'antd';
import { auth, URL } from './utils';

const NO_TOKEN_LIST = ['/prenatal-visits-encrypt'];

// const base = `${window.location.host}/api`;

const instance = axios.create({
  baseURL: `${URL}/api`,
  timeout: 5000,
});

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// http request 拦截器
instance.interceptors.request.use(
  function(config) {
    const url = config.url.split('?')[0];
    const AUTH_TOKEN = auth.get();
    const isCarry = !NO_TOKEN_LIST.includes(url);
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: isCarry ? AUTH_TOKEN : '',
    };
    // if (AUTH_TOKEN) {
    //   config.headers.Authorization = AUTH_TOKEN;
    // }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  },
);

let loginTipLock = false;

// 响应拦截器即异常处理
instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误';
          const data = error.response.data;
          if (data.errorKey === 'encrypterror') {
            error.message = '请求错误，解密错误';
          }
          if (data.errorKey === 'PatIderror') {
            error.message = '请求错误，该住院号不存在!';
          }
          if (data.errorKey === 'signerror') {
            error.message = '校验和错误！';
          }
          break;
        case 401:
          error.message = '401 未授权，请重新登录或登录已过期，请重新登录！';
          // window.location.hash = "/login";  // token过期机制
          break;
        case 403:
          error.message = '403 账户未授权，拒绝访问！';
          // window.location.hash = "/notAuth";
          break;
        case 404:
          error.message = `请求错误,未找到该资源: ${error.response.config.url}`;
          break;
        case 405:
          error.message = '请求方法未允许';
          break;
        case 408:
          error.message = '请求超时';
          break;
        case 500:
          error.message = '服务器端出错';
          break;
        case 501:
          error.message = '网络未实现';
          break;
        case 502:
          error.message = '网络错误';
          break;
        case 503:
          error.message = '服务不可用';
          break;
        case 504:
          error.message = '网络超时';
          break;
        case 505:
          console.log('http版本不支持该请求');
          error.message = 'http版本不支持该请求';
          break;
        default:
          console.log(`连接错误${error.response.status}`);
      }
    } else {
      // 跨域获取不到状态码后者其他状态码进行的处理
      console.log('网络出现错误，连接到服务器失败，请稍后再试！');
    }
    if (error.response && error.response.status === 401) {
      if (!loginTipLock) {
        //避免同时多个请求都返回401时，弹出多个“未登录”提示框
        loginTipLock = true;
        notification.info({
          message: '提示',
          description: error.message,
        });
        setTimeout(function() {
          loginTipLock = false;
        }, 1000);
      }
    } else {
      notification.error({
        message: '出错啦',
        description: `${error.message}`,
      });
    }
    return Promise.resolve(error);
  },
);

export default instance;
