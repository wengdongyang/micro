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
