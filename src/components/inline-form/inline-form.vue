<template lang="jsx">
<section class='inline-form'>
  <slot />
</section>;
</template>
<script lang="jsx" name="InlineForm" setup>
import { Form, FormItem, Input, Select } from 'ant-design-vue';
// apis
// hooks
// utils
// stores
// configs
// components
// props
const props = defineProps({
  formItems: {
    type: Array,
    default: () => [],
  },
  rules: {
    type: Object,
    default: () => ({}),
  },
});

defineModel({
  props,
  emit: emits,
});
// emits
const emits = defineEmits([]);
// refs
// computed
// methods
// watch
</script>
<style lang="less" module>
@import './inline-form.less';
</style>
