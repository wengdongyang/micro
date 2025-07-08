<template>
  <section class="menu-item" :class="{ active: menu.id === activeMenu.id }" @click="emits('clickPage', menu)">
    <section class="menu-item-title">
      <i class="menu-item-type-icon fa fa-file" />
      <i class="menu-item-icon fa" v-if="menu.iconName" :class="menu.iconName" />
      <section class="menu-item-title-content">
        {{ menu.title }}
      </section>
      <aside class="menu-item-action-content-2" v-show="menu.id === activeMenu.id">
        <a-button type="link" size="small" @click="$emit('editPage', menu)"> 编辑 </a-button>
        <a-button type="link" size="small" danger @click="$emit('deletePage', menu)"> 删除 </a-button>
      </aside>
    </section>
  </section>
</template>
<script lang="jsx" name="RenderMenu" setup>
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
  menu: { type: Object, default: () => ({}) },
  activeMenu: { type: Object, default: () => ({}) },
});
const emits = defineEmits(['clickPage', 'editPage', 'deletePage']);
</script>
<style lang="less" scoped>
@import './RenderMenu.less';
</style>
