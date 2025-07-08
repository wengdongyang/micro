<template>
  <PageLayout>
    <a-row :gutter="[24, 24]">
      <a-col :span="8">
        <MyFeaturedApplications />
      </a-col>
    </a-row>
  </PageLayout>
</template>
<script lang="jsx" name="Workbench" setup>
import { get, set, tryOnMounted } from '@vueuse/core';
import { message } from 'ant-design-vue';
import * as lodash from 'lodash';
import { NEllipsis } from 'naive-ui';
import { computed, ref, unref, watch } from 'vue';
// apis
// hooks
import { useModalType, useModalVisible, useTablePaginationDataSourceTotal } from 'src/hooks';
// utils
// stores
import { useStoreSystem } from 'src/stores';
// configs
import { MODAL_TYPE } from 'src/configs';
// components
import { PageLayout } from 'src/components';
import MyFeaturedApplications from './components/MyFeaturedApplications.vue';
// props
const props = defineProps({});
// emits
const emits = defineEmits(['']);
// refs
// computed
const {
  loading,
  pagination,
  dataSource,
  total,
  activeRecord,
  getDataSourceTotal,
  resetPagination,
  onChangePagination,
  setActiveRecord,
} = useTablePaginationDataSourceTotal();
const [modalType, setModalType] = useModalType();
const [visibleModal, setVisibleModal] = useModalVisible();

console.error({
  setModalType,
  get,
  set,
  tryOnMounted,
  message,
  lodash,
  ref,
  unref,
  computed,
  watch,
  useStoreSystem,
  MODAL_TYPE,
});
console.error({
  loading,
  pagination,
  dataSource,
  total,
  activeRecord,
  getDataSourceTotal,
  resetPagination,
  onChangePagination,
  setActiveRecord,
});
</script>
<style lang="less" scoped>
@import './Workbench.less';
</style>
