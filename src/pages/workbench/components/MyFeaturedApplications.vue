<template>
  <a-card title="已购特色应用">
    <a-list :loading="loading" :dataSource="featuredApplications">
      <template #renderItem="{ item }">
        <a-list-item>
          <section
            class="featured-application-item"
            @click="
              () => {
                addRouterTab({
                  id: item.appId,
                  iconName: 'fa-file-o',
                  name: item.appId,
                  title: item.applicationNickname,
                  path: `micro/${item.appId}`,
                  closable: true,
                  query: {},
                });
              }
            "
          >
            <a-avatar class="avatar" :src="item.applicationLogo" />
            <NEllipsis class="application-nickname">{{ item.applicationNickname }}</NEllipsis>
          </section>
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>

<script lang="jsx" name="MyFeaturedApplications" setup>
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
// props
const props = defineProps({ modalType: { type: String } });
// emits
const emit = defineEmits(['editSuccessCallBack', 'cancel']);
// refs
// computed
// methods
const storeSystem = useStoreSystem();
const { addRouterTab } = storeSystem;
const featuredApplications = ref([]);

const { loading, run: getDetailInfo } = useRequest(apiGetApplicationOwnerSearch, {
  manual: true,
  onSuccess: ({ code, data, msg }) => {
    if (code === 200) {
      featuredApplications.value = data.list || [];
    } else {
      featuredApplications.value = [];
      message.error(msg);
    }
  },
});

tryOnMounted(async () => {
  await getDetailInfo();
});
</script>
<style lang="less" scoped>
@import './MyFeaturedApplications.less';
</style>
