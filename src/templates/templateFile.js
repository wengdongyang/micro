import * as lodash from 'lodash';
// apis
// hooks
// utils
// stores
// mixins
// configs
// components
const { upperFirst } = lodash.default;
export const templateIndexVue = ({ name, components = [] }) => {
  const Name = upperFirst(name);
  return `<template>
  <PageLayout>
    ${name}
    <TablePaginationLayout class="${name}">
      <template #header> </template>
      <template #table> </template>
    </TablePaginationLayout>
    <a-modal v-model:open="visibleModal" :title="modalType === MODAL_TYPE.ADD ? '新增' : '编辑'" :footer="null" :maskClosable="false">
      <AddOrUpdate
        v-if="visibleModal"
        :modalType="modalType"
        :activeRecord="activeRecord"
        @cancel="() => setVisibleModal(false)"
        @editSuccessCallBack="() => setVisibleModal(false)"
      />
    </a-modal>
  </PageLayout>
</template>
<script lang="jsx" name="${Name}" setup>
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
import { PageLayout, TablePaginationLayout } from 'src/components';
import AddOrUpdate from './components/AddOrUpdate.vue';
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
@import './${Name}.less';
</style>
`;
};
export const templateAddOrUpdateComponentVue = ({ name }) => {
  const Name = upperFirst(name);
  return `<template>
  <ModalLayout @ok="onOk" @cancel="$emit('cancel')" :footer="[MODAL_TYPE.EDIT, MODAL_TYPE.ADD].includes(modalType)">
    <section class="content">${name}</section>
  </ModalLayout>
</template>

<script lang="jsx" name="${Name}" setup>
import { get, set, tryOnMounted } from '@vueuse/core';
import { useRequest } from 'ahooks-vue';
import { message } from 'ant-design-vue';
import * as lodash from 'lodash';
import { NEllipsis } from 'naive-ui';
import { computed, ref, unref, watch } from 'vue';
// apis
// hooks
// utils
// stores
// configs
import { MODAL_TYPE } from 'src/configs';
// components
import { ModalLayout } from 'src/components';
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
@import './${Name}.less';
</style>`;
};
