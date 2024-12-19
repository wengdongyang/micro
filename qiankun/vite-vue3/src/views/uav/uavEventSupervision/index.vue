<template>
  <PageLayout>
    <FormTablePaginationLayout>
      <template #form>
        <SearchForm
          v-model:values="query"
          :rules="rules"
        />
      </template>
      <template #tablePagination></template>
    </FormTablePaginationLayout>
  </PageLayout>
</template>
<script lang="jsx" setup name="uavEventSupervision">
import { set, get, tryOnMounted } from '@vueuse/core';
import { useRequest } from 'ahooks-vue';
import { message } from 'ant-design-vue';
import * as lodash from 'lodash';
import { NEllipsis } from 'naive-ui';
import { ref, computed, watch } from 'vue';
// apis
// hooks
// utils
// stores
// configs
import { FORM_ITEM_TYPE } from '@src/configs';
// components
import { PageLayout, FormTablePaginationLayout, SearchForm } from '@src/components';
// props
// emits
// refs
// computed
// methods
// watch

const query = ref({ townCode: null, eventCode: null, createTime: null, status: null, source: null, houseEstateId: null });
const rules = computed(() => [
  {
    type: FORM_ITEM_TYPE.INPUT,
    name: 'input',
    label: '输入框',
    info: '输入框',
    props: {
      type: 'text',
      maxlength: 100,
      allowClear: true,
      placeholder: '输入框',
    },
  },
  {
    type: FORM_ITEM_TYPE.INPUT_NUMBER,
    name: 'inputNumber',
    label: '数字输入框',
    info: '数字输入框',
    props: {
      min: 1,
      max: 10,
      step: 1,
      precision: 2,
      placeholder: '数字输入框',
    },
  },
]);

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
