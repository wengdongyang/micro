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

import 'virtual:uno.css';

import './styles/reset/index.less';

import dayjs from 'dayjs';
import lodash from 'lodash';
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
import { createApp } from 'vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';

dayjs.locale('zh-cn');

let instance;

const render = props => {
  const { container } = props;
  // props.onGlobalStateChange(state => {
  //   console.warn('onGlobalStateChange', props, state);
  // });

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

  instance = app.mount(container ? container.querySelector('#app') : '#app');

  console.error(instance);
};

renderWithQiankun({
  mount(props) {
    console.warn('mount');
    render(props);
  },
  bootstrap() {
    console.warn('bootstrap');
  },
  unmount(props) {
    console.warn('unmount');
    if (instance) {
      instance.unmount();
      instance = null;
    }
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
