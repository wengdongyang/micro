import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
// import { viteMockServe } from 'vite-plugin-mock';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import qiankun from 'vite-plugin-qiankun';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      vueDevTools(),
      vueSetupExtend({ enableAutoExpose: true }), // setup上主动命名
      qiankun('townOnline', { useDevMode: mode === 'development' }),
      // html模板
      createHtmlPlugin({
        minify: true,
        entry: '/src/main.js',
        template: '/public/index.html',
        inject: {
          data: {
            title: '小镇在线管理系统',
            injectCss: [],
            injectScript: [],
          },
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
        '@src': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 8888,
      host: true,
      open: true,
      proxy: {
        '/town/adminapi': { target: `http://10.2.0.215:8060`, changeOrigin: true },
      },
    },
  };
});
