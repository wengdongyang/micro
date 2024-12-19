import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import UnoCSS from 'unocss/vite';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import qiankun from 'vite-plugin-qiankun';
import vueDevTools from 'vite-plugin-vue-devtools';

const name = 'townOnline';
const useDevMode = false;
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const appId = env.VITE_APP_ID;
  return {
    // base: `/micro/${appId}/`,
    build: {
      outDir: `dist/${appId}/`,
    },
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      vueDevTools(),
      qiankun(name, { useDevMode }),
      vueSetupExtend({ enableAutoExpose: true }), // setup上主动命名
      createHtmlPlugin({
        minify: true,
        entry: '/src/main.js',
        template: '/public/index.html',
        inject: {
          data: { title: '小镇在线管理系统', injectCss: [], injectScript: [] },
          tags: [{ injectTo: 'body-prepend', tag: 'section', attrs: { id: 'microApp' } }],
        },
      }),
    ],
    css: {
      preprocessorOptions: {
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
      port: 9999,
      host: true,
      open: true,
      proxy: {
        '/town/adminapi': { target: `http://10.2.0.215:8060`, changeOrigin: true },
      },
    },
  };
});
