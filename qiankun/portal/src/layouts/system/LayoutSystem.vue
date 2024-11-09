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
// apis
// hooks
// utils
// stores
// configs
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
</script>
<style lang="less" module>
@import './LayoutSystem.module.less';
</style>
