<template>
  <section
    class="sub-menu-group"
    :class="{
      active: subMenuGroup.id === activeMenu.id,
      'half-active': subMenuGroup.children.some(child => activeMenu.id === child.id),
    }"
  >
    <header class="sub-menu-title" @click="$emit('clickPage', subMenuGroup)">
      <i class="sub-menu-type-icon fa fa-folder" />
      <i class="sub-menu-icon fa" v-if="subMenuGroup.iconName" :class="subMenuGroup.iconName" />
      <section class="sub-menu-title-content">
        {{ subMenuGroup.title }}
      </section>
      <aside class="sub-menu-title-action-content-3">
        <a-button
          v-show="subMenuGroup.id === activeMenu.id"
          type="link"
          size="small"
          @click="$emit('editPage', subMenuGroup)"
        >
          编辑
        </a-button>
        <a-button
          v-show="subMenuGroup.id === activeMenu.id && subMenuGroup.children.length === 0"
          type="link"
          size="small"
          danger
          @click="$emit('deletePage', subMenuGroup)"
        >
          删除
        </a-button>

        <a-button type="link" size="small" @click.stop="isShowChildren = !isShowChildren">
          <i class="sub-menu-toggle-icon fa" :class="isShowChildren ? 'fa-angle-double-up' : 'fa-angle-double-down'" />
        </a-button>
      </aside>
    </header>
    <Draggable
      v-show="isShowChildren"
      itemKey="id"
      tag="section"
      :group="{ name: 'page' }"
      :modelValue="subMenuGroup.children"
      :componentData="{ class: 'sub-menu-list' }"
      @change="event => $emit('changeSubPage', event, subMenuGroup)"
    >
      <template #item="{ element: subMenu }">
        <section
          class="sub-menu-item"
          :class="{ active: subMenu.id === activeMenu.id }"
          v-if="subMenu.type === MENU_TYPE.PAGE"
          @click="$emit('clickSubPage', subMenu)"
        >
          <section class="sub-menu-item-title">
            <i class="sub-menu-item-type-icon fa fa-file" />
            <i class="sub-menu-item-icon fa" v-if="subMenu.iconName" :class="subMenu.iconName" />
            <section class="sub-menu-item-title-content">
              {{ subMenu.title }}
            </section>
            <aside class="sub-menu-item-action-content-2" v-show="subMenu.id === activeMenu.id">
              <a-button type="link" size="small" @click="$emit('editSubPage', subMenu)"> 编辑 </a-button>
              <a-button type="link" size="small" danger @click="$emit('deleteSubPage', subMenu)"> 删除 </a-button>
            </aside>
          </section>
        </section>
      </template>
    </Draggable>
  </section>
</template>
<script lang="jsx" name="RenderSubMenuGroup" setup>
import { ref } from 'vue';
import Draggable from 'vuedraggable';
// apis
// hooks
// utils
// stores
// configs
import { MENU_TYPE } from 'src/configs';
// components
// props
defineProps({
  subMenuGroup: { type: Object, default: () => ({}) },
  activeMenu: { type: Object, default: () => ({}) },
});
// emits
defineEmits(['changeSubPage', 'clickPage', 'editPage', 'deletePage', 'clickSubPage', 'editSubPage', 'deleteSubPage']);
// refs
// computed
// methods
// watch

const isShowChildren = ref(false);
</script>
<style lang="less" scoped>
@import './RenderSubMenuGroup.less';
</style>
