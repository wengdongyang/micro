import { set } from '@vueuse/core';
import { ref } from 'vue';
// apis
// hooks
// utils
// stores
// configs
import { MODAL_TYPE } from '@src/configs';
// components
// props
// emits
// refs
// computed
// methods
// watch
export const useModalVisible = () => {
  const modalVisible = ref(false);

  const setModalVisible = nextModalVisible => {
    try {
      set(modalVisible, Boolean(nextModalVisible));
    } catch (error) {
      console.warn(error);
    }
  };
  return [modalVisible, setModalVisible];
};

export const useModalType = () => {
  const modalType = ref('watch');

  const setModalType = nextModalType => {
    try {
      if ([MODAL_TYPE.ADD, MODAL_TYPE.EDIT, MODAL_TYPE.WATCH].includes(nextModalType)) {
        set(modalType, nextModalType);
      } else {
        console.warn('useModalType', nextModalType);
      }
    } catch (error) {
      console.warn(error);
    }
  };
  return [modalType, setModalType];
};
