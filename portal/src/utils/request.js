/** @format */
import axios from 'axios';
import NProgress from 'nprogress';
// apis
// hooks
// utils
// stores
// configs
import { ENV } from '@src/configs';
// components
// 创建axios实例
const request = axios.create({
  baseURL: '/town/adminapi',
  timeout: 10000,
});
// request拦截器
request.interceptors.request.use(
  config => {
    if (!NProgress.isStarted()) {
      NProgress.start();
    }
    const { headers, url = '' } = config;
    // 不需要token的白名单
    if (['/captchaImage', '/loginPlatform', '/loginTenant', '/loginSonTenant'].includes(url)) {
      return config;
    } else {
      const token = sessionStorage.getItem(ENV.TOKEN_KEY);
      if (!token) {
        console.warn(`token不存在!`, token);
      }
      return Object.assign({}, config, { headers: Object.assign({ Authorization: `Bearer ${token}` }, headers) });
    }
  },
  error => {
    if (NProgress.isRendered()) {
      NProgress.done();
    }

    return Promise.reject(error);
  },
);
// 响应拦截器
request.interceptors.response.use(
  async response => {
    if (NProgress.isRendered()) {
      NProgress.done();
    }
    const { status, data } = response;
    if (status === 200) {
      return Promise.resolve(data);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (NProgress.isRendered()) {
      NProgress.done();
    }
    return Promise.resolve(error);
  },
);

export const requestGet = async option => {
  const res = await request(Object.assign({ method: 'GET' }, option));
  return res;
};

export const requestPost = async option => {
  const res = await request(Object.assign({ method: 'POST' }, option));
  return res;
};

export const requestDelete = async option => {
  const res = await request(Object.assign({ method: 'DELETE' }, option));
  return res;
};

export const requestPut = async option => {
  const res = await request(Object.assign({ method: 'PUT' }, option));
  return res;
};

export const requestDownload = async option => {
  const res = await request(Object.assign({ method: 'GET', responseType: 'blob' }, option));
  return res;
};

export const requestUpload = async option => {
  const res = await request(Object.assign({ method: 'POST', headersType: 'multipart/form-data' }, option));
  return res;
};

export { request };
