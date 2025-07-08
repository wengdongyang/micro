import * as lodash from 'lodash';
import { message } from 'ant-design-vue';
// apis
// hooks
// utils
// stores
// configs
import { MENU_TYPE } from '@src/configs';
// components
// props
// emits
// refs
// computed
// methods
// watch

const subMenuEventKeys = [
  'subMenuInnerMove', // 子菜单 内部移动
  'subMenuOutAdd', // 子菜单 外部增加
  'subMenuInnerAdd', // 子菜单 内部移动（从A删除，到B新增）
  'subMenuInnerRemove', // 子菜单 内部删除（从A删除，到B新增）
];

const menuEventKeys = [
  'menuInnerMove', // 菜单 内部移动
  'menuInnerAdd', // 菜单 内部移动（从A删除，到B新增）
  'menuOutAdd', // 菜单 外部增加
  'menuInnerRemove', // 菜单 内部删除（从A删除，到B新增）
];
export class handleMenuDragEventWaters {
  static eventWaters = [];
  constructor({ onHandleEventFlowCompleted }) {
    this.systemMenus = [];
    this.eventWaters = [];
    this.onHandleEventFlowCompleted = onHandleEventFlowCompleted;
  }

  setSystemMenus = systemMenus => {
    try {
      this.systemMenus = systemMenus;
    } catch (error) {
      console.warn(error);
    }
  };

  // 子菜单 内部移动
  handleSubMenuInnerMove = ({ element, menu, newIndex, oldIndex }) => {
    try {
      const nextSystemMenus = this.systemMenus.map(prevSystemMenu => {
        if (prevSystemMenu.name === menu.name) {
          const children = prevSystemMenu.children || [];
          const nextChildren = children.filter((child, idx) => idx !== oldIndex);
          nextChildren.splice(newIndex, 0, element);
          return Object.assign({}, prevSystemMenu, { children: nextChildren });
        } else {
          return prevSystemMenu;
        }
      });
      this.systemMenus = nextSystemMenus;
    } catch (error) {
      console.warn(error);
    }
  };

  // 子菜单 外部增加
  handleSubMenuOutAdd = ({ element, menu, newIndex }) => {
    try {
      if (element.type === MENU_TYPE.SOURCE) {
        const nextSystemMenus = this.systemMenus.map(prevSystemMenu => {
          if (prevSystemMenu.name === menu.name) {
            const children = lodash.cloneDeep(prevSystemMenu.children);
            const nextChildren = children;
            nextChildren.splice(
              newIndex,
              0,
              Object.assign({}, element, { type: MENU_TYPE.PAGE, id: Date.parse(new Date()) }),
            );
            return Object.assign({}, prevSystemMenu, { children: nextChildren });
          } else {
            return prevSystemMenu;
          }
        });
        this.systemMenus = nextSystemMenus;
      } else {
        message.error('数据错误！');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  // 子菜单 内部移动（从A删除，到B新增）
  handleSubMenuInnerAdd = ({ element, menu, newIndex }) => {
    try {
      if (element.type === MENU_TYPE.PAGE) {
        const nextSystemMenus = this.systemMenus.map(prevSystemMenu => {
          if (prevSystemMenu.name === menu.name) {
            const children = lodash.cloneDeep(prevSystemMenu.children);
            const nextChildren = children;
            nextChildren.splice(newIndex, 0, Object.assign({}, element));
            return Object.assign({}, prevSystemMenu, { children: nextChildren });
          } else {
            return prevSystemMenu;
          }
        });
        this.systemMenus = nextSystemMenus;
      } else {
        message.error('数据错误！');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  // 子菜单 内部删除
  handleSubMenuInnerRemove = ({ element, menu, oldIndex }) => {
    try {
      if (element.type === MENU_TYPE.PAGE) {
        const nextSystemMenus = this.systemMenus.map(prevSystemMenu => {
          if (prevSystemMenu.name === menu.name) {
            const children = lodash.cloneDeep(prevSystemMenu.children);
            const nextChildren = children.filter((child, idx) => idx !== oldIndex);
            return Object.assign({}, prevSystemMenu, { children: nextChildren });
          } else {
            return prevSystemMenu;
          }
        });
        this.systemMenus = nextSystemMenus;
      } else {
        message.error('数据错误！');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  // 子菜单 内部移动
  handleMenuInnerMove = ({ element, newIndex, oldIndex }) => {
    try {
      const nextSystemMenus = this.systemMenus.filter((child, idx) => idx !== oldIndex);
      nextSystemMenus.splice(newIndex, 0, element);
      this.systemMenus = nextSystemMenus;
    } catch (error) {
      console.warn(error);
    }
  };

  handleMenuInnerAdd = ({ element, newIndex }) => {
    try {
      const nextSystemMenus = lodash.cloneDeep(this.systemMenus);
      nextSystemMenus.splice(newIndex, 0, element);
      this.systemMenus = nextSystemMenus;
    } catch (error) {
      console.warn(error);
    }
  };

  handleMenuOutAdd = ({ element, newIndex }) => {
    try {
      const nextSystemMenus = lodash.cloneDeep(this.systemMenus);
      nextSystemMenus.splice(
        newIndex,
        0,
        Object.assign({}, element, { type: MENU_TYPE.PAGE, id: Date.parse(new Date()) }),
      );
      this.systemMenus = nextSystemMenus;
    } catch (error) {
      console.warn(error);
    }
  };

  handleMenuInnerRemove = ({ element, oldIndex }) => {
    try {
      const nextSystemMenus = this.systemMenus.filter((child, idx) => idx !== oldIndex);
      this.systemMenus = nextSystemMenus;
    } catch (error) {
      console.warn(error);
    }
  };

  handleMenuSubMenuEventWater = lodash.debounce(() => {
    try {
      while (this.eventWaters.length > 0) {
        const { eventKey, details } = this.eventWaters.shift();

        switch (eventKey) {
          case 'subMenuInnerMove':
            this.handleSubMenuInnerMove(details);
            break;
          case 'subMenuOutAdd':
            this.handleSubMenuOutAdd(details);
            break;
          case 'subMenuInnerAdd':
            this.handleSubMenuInnerAdd(details);
            break;
          case 'subMenuInnerRemove':
            this.handleSubMenuInnerRemove(details);
            break;
          // 主菜单操作
          case 'menuInnerMove':
            this.handleMenuInnerMove(details);
            break;
          case 'menuInnerAdd':
            this.handleMenuInnerAdd(details);
            break;
          case 'menuOutAdd':
            this.handleMenuOutAdd(details);
            break;
          case 'menuInnerRemove':
            this.handleMenuInnerRemove(details);
            break;
          default:
            break;
        }
      }
      this.onHandleEventFlowCompleted(this.systemMenus);
    } catch (error) {
      console.warn(error);
    }
  }, 1000);
  // 主菜单操作事件
  addEventMainMenuWater = (eventKey, details) => {
    try {
      if (menuEventKeys.includes(eventKey)) {
        this.eventWaters.push({ eventKey, details });

        this.handleMenuSubMenuEventWater();
      }
    } catch (error) {
      console.warn(error);
    }
  };
  // 子菜单操作事件
  addEventSubMenuWater = (eventKey, details) => {
    try {
      if (subMenuEventKeys.includes(eventKey)) {
        this.eventWaters.push({ eventKey, details });

        this.handleMenuSubMenuEventWater();
      }
    } catch (error) {
      console.warn(error);
    }
  };
}
