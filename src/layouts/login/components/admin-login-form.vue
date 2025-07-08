<!-- @format -->
<template>
  <NForm class="form" :ref="ref => (formRef = ref)" label-placement="left" :model="formState" size="large">
    <NFormItem
      class="form-item"
      path="username"
      :rule="{ required: true, message: '请输入系统用户账号', trigger: ['input', 'blur'] }"
    >
      <NInput class="input" v-model:value="formState.username" placeholder="系统用户账号" type="text" clearable>
        <template #prefix>
          <i class="fa fa-user" />
        </template>
      </NInput>
    </NFormItem>
    <NFormItem
      class="form-item"
      path="password"
      :rule="{ required: true, message: '请输入密码', trigger: ['input', 'blur'] }"
    >
      <NInput
        class="input"
        v-model:value="formState.password"
        placeholder="请输入密码"
        show-password-on="click"
        type="password"
        clearable
      >
        <template #prefix>
          <i class="fa fa-lock" />
        </template>
      </NInput>
    </NFormItem>
    <NFormItem
      class="form-item"
      path="code"
      :rule="{ required: true, message: '请输入密码', trigger: ['input', 'blur'] }"
    >
      <NGrid>
        <NGridItem :span="18">
          <NInput class="input-code" v-model:value="formState.code" placeholder="验证码" clearable>
            <template #prefix>
              <i class="fa fa-check-circle" />
            </template>
          </NInput>
        </NGridItem>
        <NGridItem :span="6">
          <CaptchaImage
            class="captcha-image"
            :ref="ref => (captchaImageRef = ref)"
            v-model:uuid="formState.uuid"
            @updateCaptchaImage="onUpdateCaptchaImage"
          />
        </NGridItem>
      </NGrid>
    </NFormItem>
    <NFormItem class="form-item">
      <NCheckbox class="remember-me" v-model:checked="isRememberMe"> 记住密码 </NCheckbox>
    </NFormItem>
    <NFormItem class="form-item">
      <NButton class="login-btn" type="info" block @click="onClickLogin"> 登 录 </NButton>
    </NFormItem>
  </NForm>
</template>
<script lang="jsx" name="AdminLoginForm" setup>
import { get, tryOnMounted } from '@vueuse/core';
import { message } from 'ant-design-vue';
import { NButton, NCheckbox, NForm, NFormItem, NGrid, NGridItem, NInput } from 'naive-ui';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// apis
import { apiGetGetInfo, apiPostLoginPlatform } from '@src/apis';
// hooks
// utils
import { encrypt } from '../utils';
// stores
import { useStoreLoginFormState, useStoreUserAuth } from '@src/stores';
// configs
import { ENV } from '@src/configs';
// components
import CaptchaImage from './captcha-image.vue';
const { push } = useRouter();
const storeUserAuth = useStoreUserAuth();
const storeLoginFormState = useStoreLoginFormState();
const { computedAdminLoginFormState, computedAdminIsRememberMe } = storeToRefs(storeLoginFormState);
// props
// emits
// refs
const formRef = ref(null);
const captchaImageRef = ref(null);
// computed
// methods
// watch

const formState = ref(
  ENV.MODE === 'development'
    ? { username: ENV.ADMIN_USERNAME, password: ENV.ADMIN_PASSWORD, code: '', uuid: '' }
    : { username: '', password: '', code: '', uuid: '' },
);
const isRememberMe = ref(false);

const initFormState = () => {
  try {
    const storeIsRememberMe = get(computedAdminIsRememberMe);
    const storeLoginFormState = get(computedAdminLoginFormState);
    if (storeIsRememberMe) {
      isRememberMe.value = storeIsRememberMe;
      formState.value = Object.assign({}, storeLoginFormState, { code: '', uuid: '' });
    }
  } catch (error) {
    console.warn(error);
  }
};

const getUserInfoPermissionsRoles = async () => {
  try {
    const res = await apiGetGetInfo();
    const { code, msg } = res;
    if (code === 200) {
      storeUserAuth.setUserInfoRolesPermissionsRoles(res);
      push({ name: 'system' });
    } else {
      message.error(msg);
    }
  } catch (error) {
    console.warn(error);
  }
};

const onUpdateCaptchaImage = () => {
  try {
    formState.value = Object.assign({}, get(formState), { code: '' });
  } catch (error) {
    console.warn(error);
  }
};

const onClickLogin = async () => {
  try {
    const isValidate = await formRef.value.validate();

    if (isValidate) {
      const values = get(formState);
      const innerIsRememberMe = get(isRememberMe);

      const { password } = values;
      const nextPassword = encrypt(password); // 对数据进行加密

      const res = await apiPostLoginPlatform(Object.assign({}, values, { password: nextPassword }));
      const { code, msg } = res;
      if (code === 200) {
        storeUserAuth.setLoginToken(res);
        sessionStorage.setItem(ENV.TOKEN_KEY, res.token);
        sessionStorage.setItem(ENV.MG_TOKEN_KEY, res.mgToken);
        storeLoginFormState.setAdminLoginFormState(innerIsRememberMe ? values : {});
        storeLoginFormState.setAdminIsRememberMe(innerIsRememberMe);
        getUserInfoPermissionsRoles();
      } else {
        message.error(msg);
        captchaImageRef.value?.resetCaptchaImage();
      }
    }
  } catch (error) {
    console.warn(error);
  }
};
tryOnMounted(() => {
  initFormState();
});
</script>
<style lang="less" scoped>
@import './login-form.less';
</style>
