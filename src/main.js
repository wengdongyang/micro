import 'minireset.css/minireset.css';
import 'nprogress/nprogress.css';
import 'ant-design-vue/dist/reset.css';
import 'vue-json-pretty/lib/styles.css';
import 'font-awesome/css/font-awesome.css';
import '@wangeditor/editor/dist/css/style.css';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import 'virtual:uno.css';

import './styles/reset/index.less';

import dayjs from 'dayjs';
import lodash from 'lodash';
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia';
import microApp from '@micro-zoe/micro-app';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';

dayjs.locale('zh-cn');

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
pinia.use(({ store }) => {
  const initialState = lodash.cloneDeep(store.$state);
  store.$reset = () => {
    store.$state = initialState;
  };
});

app.use(Antd).use(pinia).use(router);

app.mount('#app');
microApp.start();
