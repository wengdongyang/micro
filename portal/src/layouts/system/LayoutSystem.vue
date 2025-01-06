<template>
  <SystemLayout>
    <template #menus>
      <SystemMenus />
    </template>
    <template #header>
      <SystemHeader />
    </template>
    <template #content>
      <RouterView />
    </template>
  </SystemLayout>
</template>
<script lang="jsx" setup>
import { useRouter } from 'vue-router';
import { tryOnMounted } from '@vueuse/core';
// apis
// hooks
// utils
// stores
// configs
import { ENV } from 'src/configs';
// components
import SystemLayout from './components/SystemLayout.vue';
import SystemHeader from './components/SystemHeader.vue';
import SystemMenus from './components/SystemMenus.jsx';
// props
// emits
// refs
// computed
// methods
// watch
const { replace } = useRouter();

const checkIsLogin = () => {
  try {
    const token = sessionStorage.getItem(ENV.TOKEN_KEY);
    if (!token) {
      replace({ path: '/login' });
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
@import './LayoutSystem.module.less';
</style>
