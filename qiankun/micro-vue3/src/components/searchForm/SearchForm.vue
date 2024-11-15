<template>
  <a-form
    :class="$style['form']"
    layout="inline"
    :model="innerValues"
  >
    <a-form-item
      :class="$style['form-item']"
      v-for="rule in rules"
      :key="rule.name"
      :name="rule.name"
    >
      <template #label>
        {{ rule.label }}
      </template>
      <a-input
        v-if="rule.type === FORM_ITEM_TYPE.INPUT"
        v-model:value="innerValues[rule.name]"
        :class="$style['input']"
        :type="rule.props?.type"
        :disabled="rule.props?.disabled"
        :maxlength="rule.props?.maxlength"
        :showCount="rule.props?.showCount"
        :allowClear="rule.props?.allowClear"
        :placeholder="rule.props?.placeholder"
      />
      <a-input-number
        v-if="rule.type === FORM_ITEM_TYPE.INPUT_NUMBER"
        v-model:value="innerValues[rule.name]"
        :class="$style['input-number']"
        :max="rule.props?.max"
        :min="rule.props?.min"
        :step="rule.props?.step"
        :controls="rule.props?.controls"
        :disabled="rule.props?.disabled"
        :precision="rule.props?.precision"
        :placeholder="rule.props?.placeholder"
      />
      <a-select
        v-if="rule.type === FORM_ITEM_TYPE.SELECT"
        v-model:value="innerValues[rule.name]"
        :class="$style['select']"
        :options="rule.options"
        :disabled="rule.props?.disabled"
        :placeholder="rule.props?.precision"
        :allowClear="rule.props?.allowClear"
        :fieldNames="rule.props?.fieldNames"
        :filterOption="rule.props?.filterOption"
      />
      <a-date-picker
        v-if="rule.type === FORM_ITEM_TYPE.SELECT"
        v-model:value="innerValues[rule.name]"
        :class="$style['date-picker']"
      />
    </a-form-item>
    <a-form-item :class="$style['form-item']">
      <a-button
        type="primary"
        html-type="submit"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="jsx" setup>
import { computed } from 'vue';
// apis
// hooks
// utils
// stores
// configs
import { FORM_ITEM_TYPE } from '@src/configs';
// components
// props
// emits
// refs
// computed
// methods
// watch
const props = defineProps({
  values: { type: Object, required: true },
  rules: { type: Array, required: true },
});

const emits = defineEmits(['update:values']);

const innerValues = computed({
  get: oldValue => {
    return props.values;
  },
  set: value => {
    emits('update:values', value);
  },
});
</script>
<style lang="less" module>
@import './SearchForm.module.less';
</style>
