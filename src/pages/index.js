// apis
// hooks
// utils
// stores
// configs
import { MENU_TYPE } from 'src/configs';
// components
// props
// emits
// refs
// computed
// methods
// watch

export const systemPages = [
  { name: 'applicationBackend', title: '应用后台' },
  { name: 'menu', title: '菜单管理' },
  { name: 'welcome', title: '欢迎页' },
  { name: 'workbench', title: '工作台' },
].map(systemPage => Object.assign({}, systemPage, { type: MENU_TYPE.SOURCE }));
