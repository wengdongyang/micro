<template>
  <section>UavEventSupervision</section>
</template>
<script lang="jsx" name="UavEventSupervision" setup>
import { get, set, tryOnMounted } from '@vueuse/core';
import { useRequest } from 'ahooks-vue';
import { message } from 'ant-design-vue';
import * as lodash from 'lodash';
import { NEllipsis } from 'naive-ui';
import { computed, ref, watch } from 'vue';
// apis
// hooks
// utils
// stores
// configs
// components
import WatchModal from './components/WatchModal.vue'; // 查看
import DeliveryModal from './components/DeliveryModal.vue'; // 交派
import AuditModal from './components/AuditModal.vue'; // 普通审核
import AuditBackModal from './components/AuditBackModal.vue'; // 退回审核
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
<style lang="less" scoped>
@import './index.less';
</style>