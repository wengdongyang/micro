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
          total.value = data.total || 0;
          dataSource.value = data.list || [];
          activeRecord.value = {};
        } else {
          total.value = 0;
          dataSource.value = [];
          activeRecord.value = {};
          message.error(msg);
        }
      },
    },
  );

  const resetPagination = () => {
    try {
      pagination.value = lodash.cloneDeep(defaultPagination);
      getDataSourceTotal();
    } catch (error) {
      console.warn(error);
    }
  };

  const onChangePagination = (page, pageSize) => {
    try {
      pagination.value = { page: page, limit: pageSize };
      getDataSourceTotal();
    } catch (error) {
      console.warn(error);
    }
  };

  const setActiveRecord = nextActiveRecord => {
    try {
      activeRecord.value = nextActiveRecord;
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
