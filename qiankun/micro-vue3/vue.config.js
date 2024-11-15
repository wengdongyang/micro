const { resolve } = require('path');
const { defineConfig } = require('@vue/cli-service');
const { webpack: vueSetupExtend } = require('unplugin-vue-setup-extend-plus').default;

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
    plugins: [vueSetupExtend({ enableAutoExpose: true })],
  },
  devServer: {
    hot: true,
    port: 9999,
    open: false,
    allowedHosts: 'all',
    headers: { 'Access-Control-Allow-Origin': '*' },
    client: { overlay: { warnings: false, errors: true } },
    proxy: {
      '/town/adminapi': { target: `http://10.2.0.215:8060`, changeOrigin: true },
    },
  },
});
