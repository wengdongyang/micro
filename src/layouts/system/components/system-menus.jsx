import { get } from '@vueuse/core';
import { message } from 'ant-design-vue';
import classNames from 'classnames';
import { storeToRefs } from 'pinia';
import { defineComponent, Fragment, nextTick, onMounted } from 'vue';
// apis
import { apiGetGetRouters } from '@src/apis';
// hooks
// utils
import { findMenuItemByKeyPath } from '../utils';
// stores
import { useStoreSystem } from '@src/stores';
// configs
// components
// props
// emits
// refs
// computed
// methods
// watch
export default defineComponent(
  (props, { slots, attrs }) => {
    const storeSystem = useStoreSystem();
    const { setRouters, addRouterTab } = storeSystem;
    const { computedRouters } = storeToRefs(storeSystem);

    const getRouters = async () => {
      try {
        const { code, data, msg } = await apiGetGetRouters();
        if (code === 200) {
          setRouters(data);
        } else {
          message.error(msg);
        }
      } catch (error) {
        console.warn(error);
      }
    };

    const onClickMenu = ({ keyPath }) => {
      try {
        const menu = findMenuItemByKeyPath(get(computedRouters), keyPath);
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
      await getRouters();
    });

    const renderMenuItem = menu => (
      <a-menu-item key={menu.name}>
        {{
          icon: () => (menu.iconName ? <i class={classNames('fa', menu.iconName)} /> : null),
          default: () => menu.title,
        }}
      </a-menu-item>
    );
    const renderSubMenuGroup = subMenu => (
      <a-sub-menu key={subMenu.name}>
        {{
          icon: () => (subMenu.iconName ? <i class={classNames('fa', subMenu.iconName)} /> : null),
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
      <a-menu mode={'inline'} theme={'dark'} onClick={onClickMenu}>
        {get(computedRouters).map(menu => (
          <Fragment key={menu.name}>{menu?.children?.length > 0 ? renderSubMenuGroup(menu) : renderMenuItem(menu)}</Fragment>
        ))}
      </a-menu>
    );
  },
  { name: 'SystemMenus' },
);
