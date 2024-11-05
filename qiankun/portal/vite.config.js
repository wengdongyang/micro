import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import { viteMockServe } from 'vite-plugin-mock';
import vueDevTools from 'vite-plugin-vue-devtools';
import { createHtmlPlugin } from 'vite-plugin-html';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    // setup上主动命名
    vueSetupExtend({ enableAutoExpose: true }),
    // html模板
    createHtmlPlugin({
      minify: true,
      entry: '/src/main.js',
      template: '/public/index.html',
      inject: {
        data: {
          title: '驾驶舱模板系统',
          injectCss: [],
          injectScript: []
        },
        tags: [{ injectTo: 'body-prepend', tag: 'section', attrs: { id: 'app' } }],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@src': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173,
    host: true,
    open: true,
    proxy: {
      '/town/adminapi': { target: `http://10.2.0.215:8060`, changeOrigin: true },
    },
  },
});
