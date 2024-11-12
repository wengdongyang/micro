const { resolve } = require('path');
const { defineConfig } = require('@vue/cli-service');

const appId = process.env.VUE_APP_APP_ID;

const name = 'townOnline';
module.exports = defineConfig({
  publicPath: `/micro/${appId}/`,
  outputDir: `dist/${appId}/`,
  transpileDependencies: true,
  productionSourceMap: process.env.NODE_ENV === 'development',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@src': resolve('src'),
      },
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    hot: true,
    port: 9999,
    open: false,
    allowedHosts: 'all',
    headers: { 'Access-Control-Allow-Origin': '*' },
    client: { overlay: { warnings: false, errors: true } },
    proxy: {},
  },
});
