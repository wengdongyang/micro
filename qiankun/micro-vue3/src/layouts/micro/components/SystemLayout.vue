<template>
  <a-layout
    :class="$style['system-layout']"
    hasSider
  >
    <a-layout-sider
      :class="$style['system-layout-aside']"
      :collapsed="computedCollapsed"
      @update:collapsed="
        collapsed => {
          setCollapsed(collapsed);
        }
      "
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
          <header :class="$style['main-header']"></header>
          <section :class="$style['main-content']">
            <slot name="content" />
          </section>
        </section>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="jsx" setup>
import { tryOnMounted } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
// apis
// hooks
// utils
// stores
import { useStoreSystem } from '@src/stores';
// configs
import { ENV } from '@src/configs';
// components
import ImageLogo from '../assets/images/logo.png';
// props
// emits
// refs
// computed
// methods
// watch

const router = useRouter();

const storeSystem = useStoreSystem();

const { setCollapsed } = storeSystem;
const { computedCollapsed } = storeToRefs(storeSystem);

const checkIsLogin = () => {
  try {
    const token = sessionStorage.getItem(ENV.TOKEN_KEY);
    if (!token) {
      router.replace({ path: '/login' });
    }
  } catch (error) {
    console.warn(error);
  }
};
tryOnMounted(() => {
  checkIsLogin();
});
</script>
<style lang="less" module>
@import './SystemLayout.module.less';
</style>
