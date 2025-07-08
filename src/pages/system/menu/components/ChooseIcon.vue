<template>
  <section>
    <section>
      <i class="fa" :class="value" />
    </section>
    <aside class="action">
      <a-button type="text" size="mini">选取图标</a-button>
    </aside>
  </section>
  <a-modal title="" :footer="null" :maskClosable="false">
    <ModalLayout>
      <a-row></a-row>
    </ModalLayout>
  </a-modal>
</template>
<script lang="jsx" name="ChooseIcon" setup>
import { set, get, tryOnMounted } from '@vueuse/core';
import { useRequest, useToggle } from 'ahooks-vue';
import { message } from 'ant-design-vue';
import * as lodash from 'lodash';
import { ref, computed, watch } from 'vue';
// apis
// hooks
// utils
// stores
// configs
import { fontAwesomeClassNames } from 'src/configs';
// components
import { ModalLayout } from 'src/components';
// props
// emits
// refs
// computed
// methods
// watch
defineProps({
  value: { type: String },
});
</script>
<style lang="less" scoped></style>
