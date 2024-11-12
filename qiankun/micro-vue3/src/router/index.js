import LayoutMicro from '../layouts/micro/LayoutMicro.vue';

const appId = process.env.VUE_APP_APP_ID;
let routes = [];
switch (appId) {
  case 'KXCW_UAV':
    routes = [{ path: '/', name: '', component: LayoutMicro }];
    break;

  default:
    routes = [];
    break;
}

export default routes;
