<template>
  <SystemLayout>
    <template #menus>
      <SystemMenus />
    </template>
    <template #header>
      <SystemHeader />
    </template>
    <template #content>
      <section
        class="content"
        :ref="ref => (contentRef = ref)"
      />
    </template>
  </SystemLayout>
</template>
<script lang="jsx" setup>
import { get } from '@vueuse/core';
import * as lodash from 'lodash';
import { storeToRefs } from 'pinia';
import { initGlobalState, loadMicroApp } from 'qiankun';
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
// apis
// hooks
// utils
// stores
import { useStoreSystem, useStoreUserAuth } from '@src/stores';
// configs
import { ENV } from '@src/configs';
// components
import SystemHeader from '@src/layouts/system/components/SystemHeader.vue';
import SystemLayout from '@src/layouts/system/components/SystemLayout.vue';
import SystemMenus from '@src/layouts/system/components/SystemMenus.jsx';
// props
// emits
// refs
const contentRef = ref(null);

const microAppRef = ref(null);
const actionRef = ref(null);
// computed
// methods
// watch
const route = useRoute();
const storeUserAuth = useStoreUserAuth();
const { computedToken } = storeToRefs(storeUserAuth);
const storeSystem = useStoreSystem();
const { setCollapsed } = storeSystem;

const unmountMicroApp = () => {
  try {
    if (microAppRef.value) {
      microAppRef.value.unmount();
      microAppRef.value = null;
    }
    if (actionRef.value) {
      actionRef.value.offGlobalStateChange();
      actionRef.value = null;
    }
  } catch (error) {
    console.warn(error);
  }
};

const initMicroApp = () => {
  try {
    unmountMicroApp();
    const targetDom = contentRef.value;
    const { path } = route;
    if (targetDom) {
      microAppRef.value = loadMicroApp({
        name: 'townOnline',
        entry: `http://localhost:9999${path}`,
        container: targetDom,
        activeRule: path,
        props: {
          [ENV.TOKEN_KEY]: get(computedToken),
          base: path,
        },
      });
      actionRef.value = initGlobalState({
        microAppId: '',
      });
    }
  } catch (error) {
    console.warn(error);
  }
};

const onChangeMicroApp = lodash.debounce(microAppId => {
  try {
    const action = actionRef.value;
    action.setGlobalState({ microAppId });
  } catch (error) {
    console.warn(error);
  }
}, 300);

onMounted(async () => {
  await nextTick();
  await setCollapsed(true);
  await initMicroApp();
});

onBeforeUnmount(() => {
  unmountMicroApp();
});

watch(
  () => route.params,
  newParams => {
    if (newParams.microAppId) {
      onChangeMicroApp(newParams.microAppId);
    }
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>
<style lang="less" module>
@import './LayoutMicro.module.less';
</style>
