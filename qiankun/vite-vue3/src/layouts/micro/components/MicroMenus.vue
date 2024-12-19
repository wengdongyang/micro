<template>
  <a-menu
    :selectedKeys="[route.name]"
    @click="onClickMenu"
  >
    <a-menu-item
      v-for="router in microRouters"
      :key="router.name"
    >
      <template #icon>
        <i
          v-if="router.meta?.icon"
          class="fa"
          :class="router.meta?.icon"
        />
      </template>
      <template v-if="router.meta?.title">{{ router.meta?.title }}</template>
    </a-menu-item>
  </a-menu>
</template>
<script lang="jsx" setup>
import { useRoute, useRouter } from 'vue-router';
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
defineProps({
  microRouters: { type: Array, default: () => [] },
});
const route = useRoute();
const router = useRouter();
const onClickMenu = ({ key }) => {
  try {
    console.error(route);
    router.push({ path: `/${key}` });
  } catch (error) {
    console.warn(error);
  }
};
</script>
<style lang="less" module></style>
