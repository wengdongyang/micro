<template>
  <PageLayout>
    <a-row :gutter="24">
      <a-col :span="12">
        <a-card title="菜单">
          <template #extra>
            <a-button
              type="link"
              @click="
                () => {
                  setVisibleModal(true);
                  setModalType(MODAL_TYPE.ADD);
                  activeMenu = {};
                }
              "
            >
              新增菜单文件夹
            </a-button>
          </template>
          <section class="menu-container">
            <Draggable
              v-if="systemMenus.length > 0"
              :modelValue="systemMenus"
              itemKey="id"
              :group="{ name: 'page' }"
              :componentData="{ class: 'menu' }"
              @change="event => onChangePage(event)"
            >
              <template #item="{ element }">
                <RenderSubMenuGroup
                  v-if="element.type === MENU_TYPE.FOLDER"
                  :subMenuGroup="element"
                  :activeMenu="activeMenu"
                  @changeSubPage="onChangeSubPage"
                  @clickPage="page => (activeMenu = page)"
                  @editPage="
                    page => {
                      activeMenu = page;
                      setVisibleModal(true);
                      setModalType(MODAL_TYPE.EDIT);
                    }
                  "
                  @clickSubPage="subPage => (activeMenu = subPage)"
                />
                <RenderMenu
                  :menu="element"
                  :activeMenu="activeMenu"
                  @clickPage="page => (activeMenu = page)"
                  @editPage="
                    page => {
                      activeMenu = page;
                      setVisibleModal(true);
                      setModalType(MODAL_TYPE.EDIT);
                    }
                  "
                  v-else-if="element.type === MENU_TYPE.PAGE"
                />
              </template>
            </Draggable>
          </section>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="组件">
          <section class="menu-container">
            <Draggable
              :modelValue="systemPages"
              itemKey="name"
              :group="{ name: 'page', pull: 'clone', put: false }"
              tag="section"
              :componentData="{ class: 'source-menu-list' }"
            >
              <template #item="{ element: sourceMenu }">
                <section class="source-menu-item">
                  <i class="source-menu-item-icon fa" v-if="sourceMenu.iconName" :class="sourceMenu.iconName" />
                  {{ sourceMenu.title }}
                </section>
              </template>
            </Draggable>
          </section>
        </a-card>
      </a-col>
    </a-row>
  </PageLayout>
  <a-modal
    :open="visibleModal"
    :title="modalType === MODAL_TYPE.ADD ? '新增' : '编辑'"
    :footer="null"
    :maskClosable="false"
    @cancel="() => setVisibleModal(false)"
  >
    <EditMenu
      v-if="visibleModal"
      :modalType="modalType"
      :activeMenu="activeMenu"
      @cancel="() => setVisibleModal(false)"
    />
  </a-modal>
</template>
<script lang="jsx" name="Menu" setup>
import { tryOnMounted } from '@vueuse/core';
import { message } from 'ant-design-vue';
import * as lodash from 'lodash';
import { ref, unref } from 'vue';
import Draggable from 'vuedraggable';
// apis
import { apiGetGetRouters } from 'src/apis';
// hooks
import { useModalType, useModalVisible } from 'src/hooks';
// utils
import { handleMenuDragEventWaters } from './utils';
// stores
import { useStoreSystem } from 'src/stores';
// configs
import { MENU_TYPE, MODAL_TYPE } from 'src/configs';
import { systemPages } from 'src/pages/index';
// components
import { PageLayout } from 'src/components';
import RenderMenu from './components/RenderMenu.vue';
import RenderSubMenuGroup from './components/RenderSubMenuGroup.vue';
import EditMenu from './components/EditMenu.vue';
// props
// emits
// refs
// computed
// methods
// watch
const storeSystem = useStoreSystem();
const { setRouters } = storeSystem;

const handleMenuDragEventWatersRef = ref(null); // 挂载事件

const [modalType, setModalType] = useModalType();
const [visibleModal, setVisibleModal] = useModalVisible();

const systemMenus = ref([]); // 系统菜单
const activeMenu = ref({});

const getRouters = async () => {
  try {
    const handleMenuDragEventWaters = handleMenuDragEventWatersRef.value;
    if (handleMenuDragEventWaters) {
      const { code, data, msg } = await apiGetGetRouters();
      if (code === 200) {
        systemMenus.value = data;
        handleMenuDragEventWaters.setSystemMenus(data);
      } else {
        message.error(msg);
      }
    }
  } catch (error) {
    console.warn(error);
  }
};

const inithandleMenuDragEventWaters = () => {
  try {
    handleMenuDragEventWatersRef.value = new handleMenuDragEventWaters({
      onHandleEventFlowCompleted: nextSystemMenus => {
        systemMenus.value = nextSystemMenus;
        setRouters(nextSystemMenus);
      },
    });
  } catch (error) {
    console.warn(error);
  }
};

const onChangePage = event => {
  try {
    const handleMenuDragEventWaters = handleMenuDragEventWatersRef.value;

    if (handleMenuDragEventWaters) {
      if (lodash.hasIn(event, 'moved')) {
        // 内部移动
        const details = lodash.cloneDeep(unref(event.moved));
        handleMenuDragEventWaters.addEventMainMenuWater('menuInnerMove', details);
      } else if (lodash.hasIn(event, 'added')) {
        const { element } = event.added;
        const details = lodash.cloneDeep(unref(event.added));
        if (element.type === MENU_TYPE.PAGE) {
          // 内部互相拖动
          handleMenuDragEventWaters.addEventMainMenuWater('menuInnerAdd', details);
        } else if (element.type === MENU_TYPE.SOURCE) {
          // 从外部新增一个菜单
          handleMenuDragEventWaters.addEventMainMenuWater('menuOutAdd', details);
        }
      } else if (lodash.hasIn(event, 'removed')) {
        const details = lodash.cloneDeep(unref(event.removed));
        const { element } = event.removed;
        if (element.type === MENU_TYPE.FOLDER) {
          message.error('文件夹禁止该操作！');
          return;
        } else {
          handleMenuDragEventWaters.addEventMainMenuWater('menuInnerRemove', details);
        }
      }
    }
  } catch (error) {
    console.warn(error);
  }
};

const onChangeSubPage = (event, menu) => {
  try {
    const handleMenuDragEventWaters = handleMenuDragEventWatersRef.value;

    if (handleMenuDragEventWaters) {
      if (lodash.hasIn(event, 'moved')) {
        // 内部移动
        const details = lodash.cloneDeep(unref(event.moved));
        handleMenuDragEventWaters.addEventSubMenuWater('subMenuInnerMove', Object.assign({}, details, { menu }));
      } else if (lodash.hasIn(event, 'added')) {
        const { element } = event.added;
        const details = lodash.cloneDeep(unref(event.added));
        if (element.type === MENU_TYPE.FOLDER) {
          message.error('文件夹禁止拖入！');
          return;
        } else if (element.type === MENU_TYPE.PAGE) {
          // 内部互相拖动
          handleMenuDragEventWaters.addEventSubMenuWater('subMenuInnerAdd', Object.assign({}, details, { menu }));
        } else if (element.type === MENU_TYPE.SOURCE) {
          // 从外部新增一个菜单
          handleMenuDragEventWaters.addEventSubMenuWater('subMenuOutAdd', Object.assign({}, details, { menu }));
        }
      } else if (lodash.hasIn(event, 'removed')) {
        const details = lodash.cloneDeep(unref(event.removed));
        handleMenuDragEventWaters.addEventSubMenuWater('subMenuInnerRemove', Object.assign({}, details, { menu }));
      }
    }
  } catch (error) {
    console.warn(error);
  }
};
tryOnMounted(async () => {
  await inithandleMenuDragEventWaters();
  await getRouters();
});
</script>
<style lang="less" scoped>
@import './Menu.less';
</style>
