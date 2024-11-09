<template>
  <section></section>
</template>
<script lang="jsx" setup>
import { set, get, tryOnMounted } from '@vueuse/core';
import { useRequest } from 'ahooks-vue';
import { message } from 'ant-design-vue';
import { NEllipsis } from 'naive-ui';
import { ref, computed, watch } from 'vue';
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
const { loading, run } = useRequest(() => {}, {
  manual: true,
  onSuccess: ({ code, data, msg }) => {
    if (code !== 200) {
      message.error(msg);
    }
  },
});

tryOnMounted(() => {});
</script>
<style lang="less" scoped></style>
