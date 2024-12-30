import { fileURLToPath, URL } from 'node:url'

import path from 'path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createHtmlPlugin } from 'vite-plugin-html'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

// https://vite.dev/config/
export default defineConfig((mode) => {
  return {
    base: '/micro-app/',
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      vueDevTools(),
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
    resolve: {
      alias: {
        '@src': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 8080,
      host: true,
      open: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      proxy: { '/town/adminapi': { target, changeOrigin: true } },
    },
  }
})
