/** @format */
// apis
// hooks
// utils
import { requestGet, requestPost } from 'src/utils';
// stores
// mixins
// configs
// components
// 获取验证码
export const apiGetCaptchaImage = () => {
  return requestGet({ url: '/captchaImage' });
};
// 登录方法 - 平台
export const apiPostLoginPlatform = data => {
  return requestPost({ url: '/loginPlatform', data });
};
// 登录方法 - 租户
export const apiPostLoginTenant = data => {
  return requestPost({ url: '/loginTenant', data });
};
// 登录方法 - 子用户
export const apiPostLoginSonTenant = data => {
  return requestPost({ url: '/loginSonTenant', data });
};
// 获取用户信息
export const apiGetGetInfo = () => {
  return requestGet({ url: '/getInfo' });
};
// 获取路由
export const apiGetGetRouters = () => {
  return requestGet({ url: '/getRouters' });
};

// 获取路由
export const apiGetDemoRouters = () => {
  return requestGet({ url: '/demo/routers' });
};
