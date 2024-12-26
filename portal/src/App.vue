<template>
  <ConfigProvider :getPopupContainer="getPopupContainer" :locale="zhCN" prefixCls="wdy">
    <RouterView />
  </ConfigProvider>
</template>
<script lang="jsx" setup>
import { ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
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
const getPopupContainer = (node, dialogContext) => {
  if (node) {
    return node.parentNode;
  }
  if (dialogContext) {
    return dialogContext.getDialogWrap();
  } else {
    return document.body;
  }
};
ConfigProvider.config({
  prefixCls: 'wdy',
});
</script>
<style lang="less" scoped></style>
