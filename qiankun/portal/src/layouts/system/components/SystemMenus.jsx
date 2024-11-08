import classNames from 'classnames';
import { defineComponent, Fragment } from 'vue';
// apis
// hooks
// utils
import { findMenuItemByKeyPath } from '../utils';
// stores
// configs
// components
// props
// emits
// refs
// computed
// methods
// watch
export default defineComponent(
  (props, { emit }) => {
    const { menus } = props;
    const onClickMenu = ({ keyPath }) => {
      try {
        const menu = findMenuItemByKeyPath(menus, keyPath);
        if (menu) {
          emit('clickMenu', Object.assign({}, menu, { keyPath, path: `${keyPath.join('/')}` }));
        }
      } catch (error) {
        console.warn(error);
      }
    };
    const renderMenuItem = menu => (
      <a-menu-item
        key={menu.name}
        icon={menu.icon ? <i class={classNames('fa', menu.icon)} /> : null}
      >
        {menu.title}
      </a-menu-item>
    );
    const renderSubMenuGroup = subMenu => (
      <a-sub-menu
        key={subMenu.name}
        title={subMenu.title}
        icon={subMenu.icon ? <i class={classNames('fa', subMenu.icon)} /> : null}
      >
        {subMenu?.children.map(menu => (
          <Fragment key={menu.name}>{menu?.children?.length > 0 ? renderSubMenuGroup(menu) : renderMenuItem(menu)}</Fragment>
        ))}
      </a-sub-menu>
    );
    return () => (
      <a-menu
        mode={'inline'}
        theme={'dark'}
        onClick={onClickMenu}
      >
        {menus.map(menu => (
          <Fragment key={menu.name}>{menu?.children?.length > 0 ? renderSubMenuGroup(menu) : renderMenuItem(menu)}</Fragment>
        ))}
      </a-menu>
    );
  },
  { name: 'SystemMenus', props: { menus: { type: Array, required: true } }, emit: ['clickMenu'] },
);
