<template>
  <a-layout
    :class="$style['system-layout']"
    hasSider
  >
    <a-layout-sider
      :class="$style['system-layout-aside']"
      :collapsed="computedCollapsed"
      @update:collapsed="onUpdateCollapsed"
      collapsible
    >
      <section :class="$style['aside-layout']">
        <header :class="$style['aside-header']">
          <img
            :class="$style['logo']"
            :src="ImageLogo"
          />
          <p
            :class="$style['title']"
            v-show="!computedCollapsed"
          >
            小镇在线管理系统
          </p>
        </header>
        <section :class="$style['aside-content']">
          <SystemMenus
            v-if="computedRouters.length > 0"
            :menus="computedRouters"
            @clickMenu="onClickMenu"
          />
        </section>
      </section>
    </a-layout-sider>
    <a-layout :class="$style['system-layout-layout']">
      <a-layout-header :class="$style['system-layout-layout-header']">
        <section :class="$style['header-layout']">
          <section :class="$style['header-content']">
            <a-breadcrumb>
              <a-breadcrumb-item>User</a-breadcrumb-item>
              <a-breadcrumb-item>Bill</a-breadcrumb-item>
            </a-breadcrumb>
          </section>
          <aside :class="$style['header-aside']">666</aside>
        </section>
      </a-layout-header>
      <a-layout-content :class="$style['system-layout-layout-content']">
        <section :class="$style['main-layout']">
          <header :class="$style['main-header']">
            <a-tabs
              :activeKey="computedActiveRouterTab.name"
              @change="onChangeTab"
              @edit="onEditTab"
              type="editable-card"
              hide-add
            >
              <a-tab-pane
                v-for="tab in computedRouterTabs"
                :key="tab.name"
                :closable="tab.closable"
              >
                <template #tab>
                  <i
                    v-if="tab.icon"
                    class="fa"
                    :class="tab.icon"
                  />
                  {{ tab.title }}
                </template>
              </a-tab-pane>
            </a-tabs>
          </header>
          <section :class="$style['main-content']">
            <RouterView />
          </section>
        </section>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="jsx" setup>
import { tryOnMounted, get } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import classNames from 'classnames';
import { useRoute } from 'vue-router';
import { defineComponent, Fragment, ref } from 'vue';
// apis
// hooks
// utils
import { findMenuItemByKeyPath } from './utils';
// stores
import { useStoreSystem } from '@src/stores';
// configs
import { locationRouters } from './configs';
// components
import ImageLogo from './assets/images/logo.png';
import SystemMenus from './components/SystemMenus.jsx';
// props
// emits
// refs
// computed
// methods
// watch
const route = useRoute();
const storeSystem = useStoreSystem();
const { setCollapsed, setRouters, addRouterTab, deleteRouterTab, changeRouterTab } = storeSystem;
const { computedCollapsed, computedRouters, computedRouterTabs, computedActiveRouterTab } = storeToRefs(storeSystem);

console.error(route);

const onUpdateCollapsed = collapsed => {
  try {
    setCollapsed(collapsed);
  } catch (error) {
    console.warn(error);
  }
};

const onClickMenu = menu => {
  try {
    menu && addRouterTab(menu);
  } catch (error) {
    console.warn(error);
  }
};

const onChangeTab = name => {
  try {
    const prevTabs = get(computedRouterTabs);
    const selectTab = prevTabs.find(tab => tab.name === name);
    selectTab && changeRouterTab(selectTab);
  } catch (error) {
    console.warn(error);
  }
};

const onEditTab = (target, action) => {
  try {
    if (action === 'remove') {
      deleteRouterTab(target);
    }
  } catch (error) {
    console.warn(error);
  }
};

tryOnMounted(() => {
  setRouters(locationRouters);
});
</script>
<style lang="less" module>
@import './LayoutSystem.module.less';
</style>
