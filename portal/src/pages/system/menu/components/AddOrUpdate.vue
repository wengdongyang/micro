<template>
  <ModalLayout @ok="onOk" @cancel="$emit('cancel')" :footer="[MODAL_TYPE.EDIT, MODAL_TYPE.ADD].includes(modalType)">
    <section class="content">AddOrUpdate</section>
  </ModalLayout>
</template>

<script lang="jsx" name="AddOrUpdate" setup>
import { get, set, tryOnMounted } from '@vueuse/core';
import { useRequest } from 'ahooks-vue';
import { message } from 'ant-design-vue';
import * as lodash from 'lodash';
import { computed, ref, unref, watch } from 'vue';
// apis
// hooks
// utils
// stores
// configs
import { MODAL_TYPE } from '@src/configs';
// components
import { ModalLayout } from '@src/components';
// props
const props = defineProps({ modalType: { type: String } });
// emits
const emit = defineEmits(['editSuccessCallBack', 'cancel']);
// refs
const formState = ref({});
// computed
// methods
console.info({ set, get, tryOnMounted, useRequest, lodash, message, ref, unref, computed, watch, formState });
const getDetailInfo = async () => {
  try {
    const { modalType } = this;
    if ([MODAL_TYPE.EDIT, MODAL_TYPE.WATCH].includes(modalType)) {
      console.info(modalType);
    } else if ([MODAL_TYPE.ADD].includes(modalType)) {
      console.info(modalType);
    }
  } catch (error) {
    console.warn(error);
  }
};
const onOk = async () => {
  try {
    const { modalType, formState } = this;
    const isOK = await this.$refs['formRef'].validate();
    if ([MODAL_TYPE.EDIT, MODAL_TYPE.ADD].includes(modalType) && isOK) {
      if (modalType === MODAL_TYPE.ADD) {
        console.info(modalType, formState);
      } else if (modalType === MODAL_TYPE.EDIT) {
        console.info(modalType, formState);
      }
    }
  } catch (error) {
    console.warn(error);
  }
};

tryOnMounted(async () => {
  await getDetailInfo();
});
</script>
<style lang="less" scoped>
@import './AddOrUpdate.less';
</style>
