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
import * as lodash from 'lodash';
import { useRoute } from 'vue-router';
import { loadMicroApp, initGlobalState } from 'qiankun';
import { nextTick, onMounted, onBeforeUnmount, watch, ref } from 'vue';
// apis
// hooks
// utils
// stores
import { useStoreSystem } from '@src/stores';
// configs
// components
import SystemMenus from '@src/layouts/system/components/SystemMenus.jsx';
import SystemLayout from '@src/layouts/system/components/SystemLayout.vue';
import SystemHeader from '@src/layouts/system/components/SystemHeader.vue';
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
    if (targetDom) {
      microAppRef.value = loadMicroApp({
        name: 'townOnline',
        entry: '//localhost:9999',
        container: targetDom,
        activeRule: '/micro',
        props: { microAppId: '' },
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
