import { set } from '@vueuse/core';
import { useRequest } from 'ahooks-vue';
import { message } from 'ant-design-vue';
import * as lodash from 'lodash';
import { ref } from 'vue';
// apis
// hooks
// utils
// stores
// configs
// components
// props
// emits
// refs
// computed
// methods
// watch

const defaultPagination = { page: 1, limit: 10 };

export const useTablePaginationDataSourceTotal = axiosFunction => {
  const pagination = ref(lodash.cloneDeep(defaultPagination));

  const dataSource = ref([]);
  const total = ref(0);

  const activeRecord = ref({});
  const { loading, run: getDataSourceTotal } = useRequest(
    params => {
      const nextParams = Object.assign({}, get(pagination), params);
      return axiosFunction(nextParams);
    },
    {
      manual: true,
      onSuccess: ({ code, data, msg }) => {
        if (code === 200) {
          set(total, data.total || 0);
          set(dataSource, data.list || []);
          set(activeRecord, {});
        } else {
          set(total, 0);
          set(dataSource, []);
          set(activeRecord, {});
          message.error(msg);
        }
      },
    },
  );

  const resetPagination = () => {
    try {
      set(pagination, lodash.cloneDeep(defaultPagination));
      getDataSourceTotal();
    } catch (error) {
      console.warn(error);
    }
  };

  const onChangePagination = (page, pageSize) => {
    try {
      set(pagination, { page: page, limit: pageSize });
      getDataSourceTotal();
    } catch (error) {
      console.warn(error);
    }
  };

  const setActiveRecord = nextActiveRecord => {
    try {
      set(activeRecord, nextActiveRecord);
    } catch (error) {
      console.warn(error);
    }
  };

  return {
    loading,
    pagination,

    dataSource,
    total,

    activeRecord,

    getDataSourceTotal,

    resetPagination,
    onChangePagination,

    setActiveRecord,
  };
};
