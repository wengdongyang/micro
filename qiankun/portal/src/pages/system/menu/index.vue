<template>
  <PageLayout>
    <a-row :gutter="24">
      <a-col :span="12">
        <a-card title="菜单">
          <section class="menu-container">
            <Draggable
              :modelValue="computedRouters"
              itemKey="name"
              :group="{ name: 'page' }"
              :componentData="{ class: 'menu' }"
              @change="event => onChangePage(event)"
            >
              <template #item="{ element: menu }">
                <section class="sub-menu-group" v-if="menu.type === MENU_TYPE.FOLDER">
                  <header class="sub-menu-title">
                    <i class="sub-menu-icon fa" v-if="menu.iconName" :class="menu.iconName" />
                    {{ menu.title }}
                  </header>
                  <Draggable
                    :modelValue="menu.children"
                    itemKey="name"
                    :group="{ name: 'page' }"
                    tag="section"
                    :componentData="{ class: 'sub-menu-list' }"
                    @change="event => onChangeSubPage(event, menu)"
                  >
                    <template #item="{ element: subMenu }">
                      <section class="sub-menu-item" v-if="subMenu.type === MENU_TYPE.PAGE">
                        <section class="sub-menu-item-title">
                          <i class="sub-menu-item-icon fa" v-if="subMenu.iconName" :class="subMenu.iconName" />
                          {{ subMenu.title }}
                        </section>
                      </section>
                    </template>
                  </Draggable>
                </section>
                <section class="menu-item" v-else-if="menu.type === MENU_TYPE.PAGE">
                  <section class="menu-item-title">
                    <i class="menu-item-icon fa" v-if="menu.iconName" :class="menu.iconName" />
                    {{ menu.title }}
                  </section>
                </section>
              </template>
            </Draggable>
          </section>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="组件">
          <section class="menu-container">
            <Draggable
              :modelValue="systemPages"
              itemKey="name"
              :group="{ name: 'page', pull: 'clone', put: false }"
              tag="section"
              :componentData="{ class: 'source-menu-list' }"
            >
              <template #item="{ element: sourceMenu }">
                <section class="source-menu-item">
                  <i class="source-menu-item-icon fa" v-if="sourceMenu.iconName" :class="sourceMenu.iconName" />
                  {{ sourceMenu.title }}
                </section>
              </template>
            </Draggable>
          </section>
        </a-card>
      </a-col>
    </a-row>
  </PageLayout>
</template>
<script lang="jsx" name="Menu" setup>
import { get, tryOnMounted } from '@vueuse/core';
import { message } from 'ant-design-vue';
import * as lodash from 'lodash';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import Draggable from 'vuedraggable';
// apis
// hooks
// utils
// stores
import { useStoreSystem } from '@src/stores';
// configs
import { MENU_TYPE } from '@src/configs';
import { systemPages } from '@src/pages/index';
// components
import { PageLayout } from '@src/components';

// props
// emits
// refs
// computed
// methods
// watch
const storeSystem = useStoreSystem();
const { setRouters } = storeSystem;
const { computedRouters } = storeToRefs(storeSystem);

const pages = ref(systemPages);

const onChangePage = info => {
  try {
    console.error('onChangePage', info);
  } catch (error) {
    console.warn(error);
  }
};
const onChangeSubPage = (event, menu) => {
  try {
    console.error(event);
    const prevRouters = get(computedRouters);
    // 内部移动
    if (lodash.hasIn(event, 'moved')) {
      const { element, newIndex, oldIndex } = event.moved;
      const nextRouters = prevRouters.map(prevRouter => {
        if (prevRouter.name === menu.name) {
          const children = lodash.cloneDeep(prevRouter.children);
          const nextChildren = children.filter((child, idx) => idx !== oldIndex);
          nextChildren.splice(newIndex, 0, element);
          return Object.assign({}, prevRouter, { children: nextChildren });
        } else {
          return prevRouter;
        }
      });
      setRouters(nextRouters);
    } else if (lodash.hasIn(event, 'added')) {
      const { element, newIndex } = event.added;
      if (element.type === MENU_TYPE.FOLDER) {
        message.error('文件夹禁止拖入！');
        return;
      } else if (element.type === MENU_TYPE.PAGE) {
        const nextRouters = prevRouters.map(prevRouter => {
          if (prevRouter.name === menu.name) {
            const children = lodash.cloneDeep(prevRouter.children);
            const nextChildren = children;
            nextChildren.splice(newIndex, 0, Object.assign({}, element, { type: MENU_TYPE.PAGE }));
            return Object.assign({}, prevRouter, { children: nextChildren });
          } else {
            return prevRouter;
          }
        });
        setRouters(nextRouters);
      } else if (element.type === MENU_TYPE.SOURCE) {
        const nextRouters = prevRouters.map(prevRouter => {
          if (prevRouter.name === menu.name) {
            const children = lodash.cloneDeep(prevRouter.children);
            const nextChildren = children;
            nextChildren.splice(newIndex, 0, Object.assign({}, element, { type: MENU_TYPE.PAGE }));
            return Object.assign({}, prevRouter, { children: nextChildren });
          } else {
            return prevRouter;
          }
        });
        setRouters(nextRouters);
      }
    }
  } catch (error) {
    console.warn(error);
  }
};
tryOnMounted(() => {});
</script>
<style lang="less" scoped>
@import './index.less';
</style>
