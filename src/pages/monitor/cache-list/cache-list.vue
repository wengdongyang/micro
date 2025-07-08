<template>
  <page-layout>
    cache-list
    <table-pagination-layout class="cache-list">
      <template #header> </template>
      <template #table> </template>
    </table-pagination-layout>
    <a-modal v-model:open="visibleModal" :title="modalType === MODAL_TYPE.ADD ? '新增' : '编辑'" :footer="null" :maskClosable="false">
      <add-or-update
        v-if="visibleModal"
        :modalType="modalType"
        :activeRecord="activeRecord"
        @cancel="() => setVisibleModal(false)"
        @editSuccessCallBack="() => setVisibleModal(false)"
      />
    </a-modal>
  </page-layout>
</template>
<script lang="jsx" name="Cache-list" setup>
import { get, set, tryOnMounted } from '@vueuse/core';
import { message } from 'ant-design-vue';
import * as lodash from 'lodash';
import { NEllipsis } from 'naive-ui';
import { computed, ref, unref, watch } from 'vue';
// apis
// hooks
import { useModalType, useModalVisible, useTablePaginationDataSourceTotal } from '@src/hooks';
// utils
// stores
import { useStoreSystem } from '@src/stores';
// configs
import { MODAL_TYPE } from '@src/configs';
// components
import { PageLayout, TablePaginationLayout } from '@src/components';
import AddOrUpdate from './components/add-or-update.vue';
// props
const props = defineProps({});
// emits
const emits = defineEmits(['']);
// refs
// computed
const { loading, pagination, dataSource, total, activeRecord, getDataSourceTotal, resetPagination, onChangePagination, setActiveRecord } =
  useTablePaginationDataSourceTotal();
const [modalType, setModalType] = useModalType();
const [visibleModal, setVisibleModal] = useModalVisible();

console.error({ setModalType, get, set, tryOnMounted, message, lodash, ref, unref, computed, watch, useStoreSystem, MODAL_TYPE });
console.error({ loading, pagination, dataSource, total, activeRecord, getDataSourceTotal, resetPagination, onChangePagination, setActiveRecord });
</script>
<style lang="less" scoped>
@import './Cache-list.less';
</style>
