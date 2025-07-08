import { fileURLToPath, URL } from 'node:url';

import path from 'path';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import { createHtmlPlugin } from 'vite-plugin-html';
import removeConsole from 'vite-plugin-remove-console';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';
import removeOthersConsole from 'vite-plugin-rm-others-console';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';

// const target = 'http://10.2.0.215:8060';
const target = 'http://wj.ikeqiao.net';
// const target = 'https://town.ikeqiao.net';
// https://vite.dev/config/

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      vueDevTools(),
      removeConsole(), // 生产环境移除console
      removeOthersConsole(), // 移除其他包的console
      vueSetupExtend({ enableAutoExpose: true }), // setup上主动命名
      mockDevServerPlugin(),
      createHtmlPlugin({
        minify: true,
        entry: '/src/main.js',
        template: '/public/index.html',
        inject: {
          data: { title: '小镇在线管理系统', injectCss: [], injectScript: [] },
          tags: [{ injectTo: 'body-prepend', tag: 'section', attrs: { id: 'app' } }],
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: { api: 'modern-compiler' },
        less: {
          additionalData: `@import "${path.resolve('/src/styles/mixins/index.less')}";`, // less前置
        },
      },
    },
    resolve: {
      alias: {
        src: fileURLToPath(new URL('./src', import.meta.url)),
        '@src': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 5173,
      host: true,
      open: true,
      proxy: {
        '/town/adminapi': { target, changeOrigin: true },
      },
    },
  };
});
