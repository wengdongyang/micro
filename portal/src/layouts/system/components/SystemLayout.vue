<template>
  <a-layout :class="$style['system-layout']" hasSider>
    <a-layout-sider :class="$style['system-layout-aside']" :collapsed="computedCollapsed" @update:collapsed="setCollapsed" collapsible>
      <section :class="$style['aside-layout']">
        <header :class="$style['aside-header']">
          <img :class="$style['logo']" :src="ImageLogo" />
          <p :class="$style['title']" v-show="!computedCollapsed">小镇在线管理系统</p>
        </header>
        <section :class="$style['aside-content']">
          <slot name="menus" />
        </section>
      </section>
    </a-layout-sider>
    <a-layout :class="$style['system-layout-layout']">
      <a-layout-header :class="$style['system-layout-layout-header']">
        <slot name="header" />
      </a-layout-header>
      <a-layout-content :class="$style['system-layout-layout-content']">
        <section :class="$style['main-layout']">
          <header :class="$style['main-header']">
            <a-tabs :activeKey="computedActiveRouterTab.path" @change="onChangeTab" @edit="onEditTab" type="editable-card" hide-add>
              <a-tab-pane v-for="tab in computedRouterTabs" :key="tab.path" :closable="tab.closable">
                <template #tab>
                  <i v-if="tab.iconName" class="fa" :class="tab.iconName" />
                  {{ tab.title }}
                </template>
              </a-tab-pane>
            </a-tabs>
          </header>
          <section :class="$style['main-content']">
            <slot name="content" />
          </section>
        </section>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="jsx" setup>
import { get } from '@vueuse/core';
import { storeToRefs } from 'pinia';
// apis
// hooks
// utils
// stores
import { useStoreSystem } from '@src/stores';
// configs
// components
import ImageLogo from '../assets/images/logo.png';
// props
// emits
// refs
// computed
// methods
// watch

const storeSystem = useStoreSystem();
const { setCollapsed, deleteRouterTab, changeRouterTab } = storeSystem;
const { computedCollapsed, computedRouterTabs, computedActiveRouterTab } = storeToRefs(storeSystem);

const onChangeTab = key => {
  try {
    const prevTabs = get(computedRouterTabs);
    const selectTab = prevTabs.find(tab => tab.path === key);
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
</script>
<style lang="less" module>
@import './SystemLayout.module.less';
</style>
