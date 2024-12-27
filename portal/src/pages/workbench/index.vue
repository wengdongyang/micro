<template>
  <PageLayout>
    <a-card title="已购特色应用">
      <a-list :loading="loading" :dataSource="applicationList" :grid="{ gutter: 16 }">
        <template #renderItem="{ item }">
          <a-list-item>
            <section class="application-item" @click="onClickApplication(item)">
              <img class="application-logo" :src="item.applicationLogo" />
              <NEllipsis class="application-content">
                {{ item.applicationNickname }}
              </NEllipsis>
            </section>
          </a-list-item>
        </template>
      </a-list>
    </a-card>
  </PageLayout>
</template>
<script lang="jsx" name="workbench" setup>
import { set, tryOnMounted } from '@vueuse/core';
import { useRequest } from 'ahooks-vue';
import { message } from 'ant-design-vue';
import { NEllipsis } from 'naive-ui';
import { ref } from 'vue';
// apis
import { apiGetApplicationOwnerSearch } from '@src/apis';
// hooks
// utils
// stores
import { useStoreSystem } from '@src/stores';
// configs
// components
import { PageLayout } from '@src/components';
// props
// emits
// refs
const applicationList = ref([]);
// computed
// methods
// watch

const storeSystem = useStoreSystem();
const { addRouterTab } = storeSystem;

const { loading, run: getApplicationList } = useRequest(apiGetApplicationOwnerSearch, {
  manual: true,
  onSuccess: ({ code, data, msg }) => {
    if (code === 200) {
      set(applicationList, data.list || []);
    } else {
      set(applicationList, []);
      message.error(msg);
    }
  },
});

const onClickApplication = application => {
  try {
    addRouterTab({
      icon: 'fa-home',
      title: `${application.applicationNickname}`,
      name: 'micro',
      keyPath: ['micro', application.appId],
      path: `micro/${application.appId}`,
    });
  } catch (error) {
    console.warn(error);
  }
};

tryOnMounted(() => {
  getApplicationList({ page: 1, limit: -1 });
});
</script>
<style lang="less" scoped>
@import './index.less';
</style>
