/** @format */
// apis
// hooks
// utils

// stores
// mixins
// configs
// components
const ENV_MODE = import.meta.env.MODE || 'production'; // 模式

const ENV_BASE_URL = import.meta.env.BASE_URL || '/town/cms/'; // 项目的BASEURL

const ENV_TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY || 'TOKEN'; // token的key
const ENV_MG_TOKEN_KEY = import.meta.env.VITE_MG_TOKEN_KEY || 'MG_TOKEN'; // token的key

const ENV_ADMIN_USERNAME = import.meta.env.VITE_APP_ADMIN_USERNAME || ''; // admin的账号
const ENV_ADMIN_PASSWORD = import.meta.env.VITE_APP_ADMIN_PASSWORD || ''; // admin的密码

const ENV_TENANT_USERNAME = import.meta.env.VITE_APP_TENANT_USERNAME || ''; // 柯桥区的账号
const ENV_TENANT_PASSWORD = import.meta.env.VITE_APP_TENANT_PASSWORD || ''; // 柯桥区的密码

export default {
  MODE: ENV_MODE,

  BASE_URL: ENV_BASE_URL, // 项目的base路由

  TOKEN_KEY: ENV_TOKEN_KEY, // token key
  MG_TOKEN_KEY: ENV_MG_TOKEN_KEY, // mgToken key

  ADMIN_USERNAME: ENV_ADMIN_USERNAME,
  ADMIN_PASSWORD: ENV_ADMIN_PASSWORD,

  TENANT_USERNAME: ENV_TENANT_USERNAME,
  TENANT_PASSWORD: ENV_TENANT_PASSWORD,
};
