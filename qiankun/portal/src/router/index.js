/*
 * @Author: wdy
 * @Date: 2024-11-05 16:22:58
 * @Last Modified by: wdy
 * @Last Modified time: 2024-11-05 16:29:10
 */
import NProgress from 'nprogress';
import { createRouter, createWebHashHistory } from 'vue-router';
// apis
// hooks
// utils
// stores
// mixins
// configs
import { ENV } from '@src/configs/index.js';
// components
import LayoutLogin from '@src/layouts/login/LayoutLogin.vue';
import LayoutSystem from '@src/layouts/system/LayoutSystem.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'login', component: LayoutLogin },
    { path: '/', name: 'System', component: LayoutSystem },
  ],
});

const whiteRouterList = ['/login', '/register'];
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (whiteRouterList.includes(to.path)) {
    next();
    NProgress.done();
  } else {
    const token = sessionStorage.getItem(ENV.TOKEN_KEY);
    if (token) {
      next();
      NProgress.done();
    } else {
      next({ path: '/login' });
      NProgress.done();
    }
  }
});

export default router;
