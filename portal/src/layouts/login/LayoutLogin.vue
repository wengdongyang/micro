<!-- @format -->
<template>
  <section class="login-layout">
    <section class="login-content">
      <section class="login-form-layout">
        <header class="login-form-header">欢迎登录</header>
        <a-tabs v-model:activeKey="userType" size="large">
          <a-tab-pane key="1" tab="系统用户">
            <AdminLoginForm v-if="userType === '1'" />
          </a-tab-pane>
          <a-tab-pane key="2" tab="租户">
            <TenantLoginForm v-if="userType === '2'" />
          </a-tab-pane>
          <!-- <a-tab-pane key="3" tab="租户子用户">
            <SonTenantLoginForm v-if="userType === '3'" />
          </a-tab-pane> -->
        </a-tabs>
      </section>
    </section>
  </section>
</template>
<script lang="jsx" setup>
import { ref } from 'vue';
import { tryOnMounted } from '@vueuse/core';
// apis
// hooks
// utils
// stores
import { useStoreUserAuth, useStoreSystem } from 'src/stores';
// configs
import { ENV } from 'src/configs';
// components
import AdminLoginForm from './components/AdminLoginForm.vue';
import TenantLoginForm from './components/TenantLoginForm.vue';

const userType = ref('1');

const storeSystem = useStoreSystem();
const storeUserAuth = useStoreUserAuth();

tryOnMounted(() => {
  sessionStorage.removeItem(ENV.TOKEN_KEY);
  sessionStorage.removeItem(ENV.MG_TOKEN_KEY);

  storeSystem.setRouters([]);

  storeUserAuth.setUserInfoRolesPermissionsRoles({});
  storeUserAuth.setLoginToken({});
});
</script>
<style lang="less" scoped>
@import './LayoutLogin.less';
</style>
