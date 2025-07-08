<template>
  <ModalLayout @ok="onOk" @cancel="$emit('cancel')">
    <a-form :model="formState" :labelCol="{ span: 6 }" :wrapperCol="{ span: 16 }">
      <a-form-item label="类型" name="type">
        <a-input :value="formState.type === MENU_TYPE.FOLDER ? '菜单组' : '页面'" placeholder="类型" readonly />
      </a-form-item>
      <a-form-item label="名称" name="title">
        <a-input v-model:value="formState.title" placeholder="名称" allowClear />
      </a-form-item>
      <a-form-item label="图标" name="iconName"> </a-form-item>
    </a-form>
  </ModalLayout>
</template>
<script lang="jsx" name="EditMenu" setup>
import { set, tryOnMounted } from '@vueuse/core';
import { ref } from 'vue';
// apis
// hooks
// utils
// stores
// configs
import { MENU_TYPE, MODAL_TYPE } from 'src/configs';
// components
import { ModalLayout } from 'src/components';
// props
const props = defineProps({
  modalType: { type: String },
  activeMenu: { type: Object },
});
// emits
const emits = defineEmits(['editSuccessCallBack', 'cancel']);
// refs
const formState = ref({});
// computed
// methods
const initFormState = () => {
  try {
    if (props.modalType === MODAL_TYPE.ADD) {
      set(formState, { type: MENU_TYPE.FOLDER });
    } else {
      set(formState, props.activeMenu);
    }
  } catch (error) {
    console.warn(error);
  }
};
// watch

const onOk = () => {};

tryOnMounted(() => {
  initFormState();
});
</script>
<style lang="less" scoped></style>
