<template>
  <PageLayout></PageLayout>
  <a-modal
    :open="modalVisible"
    :title="modalType === MODAL_TYPE.ADD ? '新增' : '编辑'"
    :footer="null"
    :maskClosable="false"
    @cancel="() => setVisibleEditMainMenu(false)"
  >
    <ModalLayout></ModalLayout>
  </a-modal>
</template>
<script lang="jsx" setup>
import { get, set, tryOnMounted } from '@vueuse/core';
import { useRequest } from 'ahooks-vue';
import { message } from 'ant-design-vue';
import * as lodash from 'lodash';
import { computed, ref, unref, watch } from 'vue';
// apis
// hooks
import { useModalType, useModalVisible } from '@src/hooks';
// utils
// stores
// configs
import { MODAL_TYPE } from '@src/configs';
// components
import { ModalLayout, PageLayout } from '@src/components';
const props = defineProps({});
// emits
const emits = defineEmits(['editSuccessCallBack', 'cancel']);
// refs
// computed
// methods
// watch

console.warn({
  set,
  get,
  tryOnMounted,
  useRequest,
  message,
  lodash,
  ref,
  computed,
  watch,
  unref,
});
const { loading, run } = useRequest(() => {}, {
  manual: true,
  onSuccess: ({ code, data, msg }) => {
    if (code !== 200) {
      message.error(msg);
    }
  },
});

const [modalType, setModalType] = useModalType();
const [modalVisible, setModalVisible] = useModalVisible();

tryOnMounted(() => {});
</script>
<style lang="less" scoped></style>
