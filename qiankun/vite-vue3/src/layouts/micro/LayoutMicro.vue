<template>
  <SystemLayout v-if="!computedIsQiankun">
    <template #menus> </template>
    <template #header> </template>
    <template #content>
      <MicroLayout>
        <template #sider>
          <MicroMenus :microRouters="microRouters" />
        </template>
        <template #content>
          <RouterView />
        </template>
      </MicroLayout>
    </template>
  </SystemLayout>
  <MicroLayout v-else>
    <template #sider>
      <MicroMenus :microRouters="microRouters" />
    </template>
    <template #content>
      <RouterView />
    </template>
  </MicroLayout>
</template>
<script lang="jsx" setup>
import { storeToRefs } from 'pinia';
// apis
// hooks
// utils
// stores
import { useStoreSystem } from '@src/stores';
// configs
import { microRouters } from '@src/router';
// components
import SystemLayout from './components/SystemLayout.vue';
import MicroLayout from './components/MicroLayout.vue';
import MicroMenus from './components/MicroMenus.vue';
// props
// emits
// refs
// computed
// methods
// watch
const storeSystem = useStoreSystem();
const { computedIsQiankun } = storeToRefs(storeSystem);
</script>
<style lang="less" module>
@import './LayoutMicro.module.less';
</style>
