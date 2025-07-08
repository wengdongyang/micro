<template>
  <SystemLayout>
    <template #menus>
      <SystemMenus />
    </template>
    <template #header>
      <SystemHeader />
    </template>
    <template #content>
      <micro-app
        name="microApp"
        ref="microAppRef"
        :url="computedUrl"
        :data="{ token: computedToken, appId: route.params.microAppId }"
        clearData
      />
    </template>
  </SystemLayout>
</template>
<script lang="jsx" setup>
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { nextTick, onMounted, computed } from 'vue';
// apis
// hooks
// utils
// stores
import { useStoreSystem, useStoreUserAuth } from '@src/stores';
// configs
// components
import SystemHeader from '@src/layouts/system/components/SystemHeader.vue';
import SystemLayout from '@src/layouts/system/components/SystemLayout.vue';
import SystemMenus from '@src/layouts/system/components/SystemMenus.jsx';
// props
// emits
// refs
// computed
// methods
// watch
const route = useRoute();

const storeUserAuth = useStoreUserAuth();
const { computedToken } = storeToRefs(storeUserAuth);
const storeSystem = useStoreSystem();
const { setCollapsed } = storeSystem;

const computedUrl = computed(() => {
  if (process.env.NODE_ENV === 'development') {
    return `http://localhost:8080/micro-app/`;
  } else {
    return `${window.location.origin}${window.location.pathname}micro-app/`;
  }
});

onMounted(async () => {
  await nextTick();
  await setCollapsed(true);
});
</script>
<style lang="less" module>
@import './layout-micro.module.less';
</style>
