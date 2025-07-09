<template>
  <section :class="$style['header-layout']">
    <section :class="$style['header-content']">
      <a-breadcrumb>
        <a-breadcrumb-item> 首页 </a-breadcrumb-item>
        <a-breadcrumb-item v-for="(match, index) in matchedList.filter(match => match.meta.title)" :key="index">
          {{ match.meta.title }}
        </a-breadcrumb-item>
      </a-breadcrumb>
    </section>
    <aside :class="$style['header-aside']">
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          {{ computedUserinfo.nickName }}
          <i class="fa fa-angle-down" aria-hidden="true" />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item> 个人中心 </a-menu-item>
            <a-menu-item @click="() => replace({ path: '/login' })"> 退出登录 </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </aside>
  </section>
</template>
<script lang="jsx" setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// apis
// hooks
// utils
// stores
import { useStoreUserAuth } from '@src/stores';
// configs
// components
// props
// emits
// refs
// computed
// methods
// watch
const route = useRoute();
const { replace } = useRouter();
const storeUserAuth = useStoreUserAuth();
const { computedUserinfo } = storeToRefs(storeUserAuth);

const matchedList = computed(() => route.matched);
console.warn(route);
</script>
<style lang="less" module>
@import './system-header.module.less';
</style>
