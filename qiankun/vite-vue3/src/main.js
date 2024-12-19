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

import Antd from 'ant-design-vue';
import dayjs from 'dayjs';
import lodash from 'lodash';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

dayjs.locale('zh-cn');

let app = null;
const render = props => {
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

// some code
renderWithQiankun({
  mount(props) {
    console.info('mount');
    render(props);
  },
  bootstrap() {
    console.info('bootstrap');
  },
  unmount(props) {
    console.info('unmount');
    if (app) {
      app.unmount();
      app = null;
    }
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
