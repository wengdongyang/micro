import '@wangeditor/editor/dist/css/style.css';
import 'ant-design-vue/dist/reset.css';
import 'font-awesome/css/font-awesome.css';
import 'minireset.css/minireset.css';
import 'nprogress/nprogress.css';
import 'vue-json-pretty/lib/styles.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import './styles/reset/index.less';

import dayjs from 'dayjs';
import lodash from 'lodash';
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import { createApp } from 'vue';
import NProgress from 'nprogress';
import { createRouter, createWebHashHistory } from 'vue-router';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import routes from './router';
// apis
// hooks
// utils
// stores
import { useStoreSystem } from '@src/stores';
// configs
import { ENV } from '@src/configs';
// components
// props
// emits
// refs
// computed
// methods
// watch

dayjs.locale('zh-cn');
const whiteRouterList = ['/login'];
const appId = process.env.VUE_APP_APP_ID;
const defaultBase = `/micro/${appId}`;

let app = null;
const render = props => {
  props?.onGlobalStateChange &&
    props.onGlobalStateChange(state => {
      if (props.TOKEN) {
        sessionStorage.setItem(ENV.TOKEN_KEY, props.TOKEN);
      }
      console.error('onGlobalStateChange', props, state);
    });

  const base = window.__POWERED_BY_QIANKUN__ ? props.base || defaultBase : defaultBase;

  const router = createRouter({
    history: createWebHashHistory(base),
    routes,
  });

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

  app = createApp(App);
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate);
  pinia.use(({ store }) => {
    const initialState = lodash.cloneDeep(store.$state);
    store.$reset = () => {
      store.$state = initialState;
    };
  });

  app.use(Antd).use(pinia).use(router);

  app.mount(props.container ? props.container.querySelector('#microApp') : '#microApp');
};
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
export const mount = async props => {
  console.log('[vue] props from main framework', props);
  render(props);
};
export const bootstrap = async () => {
  console.log('[vue] vue app bootstraped');
};
export const unmount = async () => {
  console.log('[vue] vue app unmount');
  if (app) {
    app.unmount();
    app = null;
  }
};
