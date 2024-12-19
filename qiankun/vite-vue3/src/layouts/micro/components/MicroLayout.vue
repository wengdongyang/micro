<template>
  <a-layout :class="$style['micro-layout']">
    <a-layout-sider :class="$style['micro-layout-sider']">
      <slot name="sider" />
    </a-layout-sider>
    <a-layout-content :class="$style['micro-layout-content']">
      <slot name="content" />
    </a-layout-content>
  </a-layout>
</template>
<script lang="jsx" setup>
// apis
// hooks
// utils
// stores
// configs
// components
// props
// emits
// refs
// computed
// methods
// watch
</script>
<style lang="less" module>
@import './MicroLayout.module.less';
</style>
