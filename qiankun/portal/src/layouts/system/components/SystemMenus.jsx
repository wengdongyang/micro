import { get } from '@vueuse/core';
import classNames from 'classnames';
import { storeToRefs } from 'pinia';
import { defineComponent, Fragment, nextTick, onMounted } from 'vue';
// apis
// hooks
// utils
import { findMenuItemByKeyPath } from '../utils';
// stores
import { useStoreSystem } from '@src/stores';
// configs
import { locationRouters } from '../configs';
// components
// props
// emits
// refs
// computed
// methods
// watch
export default defineComponent(
  () => {
    const storeSystem = useStoreSystem();
    const { setRouters, addRouterTab } = storeSystem;
    const { computedRouters } = storeToRefs(storeSystem);

    const menus = get(computedRouters);

    const onClickMenu = ({ keyPath }) => {
      try {
        const menu = findMenuItemByKeyPath(menus, keyPath);
        if (menu) {
          const nextMenu = Object.assign({}, menu, { keyPath, path: `${keyPath.join('/')}` });
          addRouterTab(nextMenu);
        }
      } catch (error) {
        console.warn(error);
      }
    };

    onMounted(async () => {
      await nextTick();
      await setRouters(locationRouters);
    });

    const renderMenuItem = menu => (
      <a-menu-item key={menu.name}>
        {{ icon: () => (menu.icon ? <i class={classNames('fa', menu.icon)} /> : null), default: () => menu.title }}
      </a-menu-item>
    );
    const renderSubMenuGroup = subMenu => (
      <a-sub-menu key={subMenu.name}>
        {{
          icon: () => (subMenu.icon ? <i class={classNames('fa', subMenu.icon)} /> : null),
          title: () => subMenu.title,
          default: () => (
            <Fragment>
              {subMenu?.children.map(menu => (
                <Fragment key={menu.name}>
                  {menu?.children?.length > 0 ? renderSubMenuGroup(menu) : renderMenuItem(menu)}
                </Fragment>
              ))}
            </Fragment>
          ),
        }}
      </a-sub-menu>
    );
    return () => (
      <a-menu
        mode={'inline'}
        theme={'dark'}
        onClick={onClickMenu}
      >
        {menus.map(menu => (
          <Fragment key={menu.name}>
            {menu?.children?.length > 0 ? renderSubMenuGroup(menu) : renderMenuItem(menu)}
          </Fragment>
        ))}
      </a-menu>
    );
  },
  { name: 'SystemMenus' },
);
