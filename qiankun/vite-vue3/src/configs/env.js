/** @format */
// apis
// hooks
// utils
// stores
// mixins
// configs
// components
const ENV_TOKEN_KEY = 'MICRO_TOKEN'; // token的key
const ENV_MG_TOKEN_KEY = 'MICRO_MG_TOKEN'; // token的key

export default {
  MODE: process.env.NODE_ENV,
  TOKEN_KEY: ENV_TOKEN_KEY, // token key
  MG_TOKEN_KEY: ENV_MG_TOKEN_KEY, // mgToken key
};
