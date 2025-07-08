<template>
  <img :class="$style['captcha-image']" :src="captchaImage" @click="getCaptchaImage" />
</template>
<script lang="jsx" setup>
import { get, tryOnMounted } from '@vueuse/core';
import { message } from 'ant-design-vue';
import { computed, ref } from 'vue';
// apis
import { apiGetCaptchaImage } from '@src/apis';

// hooks

// stores
// configs
// components

defineProps({
  uuid: { type: [String, Number] },
});
const emits = defineEmits(['update:uuid', 'updateCaptchaImage']);

const captchaUrl = ref();

const captchaImage = computed(() => {
  try {
    const regExp = new RegExp(
      /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,
    );
    const url = get(captchaUrl);
    if (regExp.test(url)) {
      return url;
    }
    return `data:image/gif;base64,${url}`;
  } catch (error) {
    console.warn(error);
    return '';
  }
});

const getCaptchaImage = async () => {
  try {
    const { code, img, uuid, msg } = await apiGetCaptchaImage();
    if (code === 200 && img && uuid) {
      captchaUrl.value = img;
      emits('update:uuid', uuid);
      emits('updateCaptchaImage');
    } else {
      message.error(msg);
    }
  } catch (error) {
    console.warn(error);
  }
};
tryOnMounted(() => {
  getCaptchaImage();
});

defineExpose({
  resetCaptchaImage: getCaptchaImage,
});
</script>
<style lang="less" module>
.captcha-image {
  width: 100%;
  object-fit: cover;
}
</style>
