import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { createApp } from 'vue';
import App from './App.vue';

let instance;
const render = props => {
  const { container } = props;
  props.onGlobalStateChange((state, prev) => {
    console.error('onGlobalStateChange', props, state, prev);
  });
  instance = createApp(App).mount(container ? container.querySelector('#app') : '#app');

  console.error(instance);
};

// some code
renderWithQiankun({
  mount(props) {
    console.log('mount');
    render(props);
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount(props) {
    console.log('unmount');
    const { container } = props;
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
