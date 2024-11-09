import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue(), qiankun('townOnline', { useDevMode: mode === 'development' })],
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
