/** @format */
import { get, set } from '@vueuse/core';
import lodash from 'lodash';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
// apis
// hooks
// utils
// stores
// mixins
// configs
// components
export const useStoreLoginFormState = defineStore(
  'storeLoginFormState',
  () => {
    ////////////////////系统用户////////////////////
    const ADMIN_LOGIN_FORM_STATE = ref({});
    const ADMIN_IS_REMEMBER_ME = ref(false);
    const computedAdminLoginFormState = computed(() => get(ADMIN_LOGIN_FORM_STATE));
    const computedAdminIsRememberMe = computed(() => get(ADMIN_IS_REMEMBER_ME));
    const setAdminLoginFormState = loginFormState => {
      try {
        set(ADMIN_LOGIN_FORM_STATE, lodash.cloneDeep(loginFormState));
      } catch (error) {
        console.warn(error);
      }
    };
    const setAdminIsRememberMe = isRememberMe => {
      try {
        set(ADMIN_IS_REMEMBER_ME, lodash.cloneDeep(isRememberMe));
      } catch (error) {
        console.warn(error);
      }
    };
    ////////////////////租户////////////////////
    const TENANT_FORM_STATE = ref({});
    const TENANT_IS_REMEMBER_ME = ref(false);
    const computedTenantLoginFormState = computed(() => get(TENANT_FORM_STATE));
    const computedTenantIsRememberMe = computed(() => get(TENANT_IS_REMEMBER_ME));
    const setTenantLoginFormState = loginFormState => {
      try {
        set(TENANT_FORM_STATE, lodash.cloneDeep(loginFormState));
      } catch (error) {
        console.warn(error);
      }
    };
    const setTenantIsRememberMe = isRememberMe => {
      try {
        set(TENANT_IS_REMEMBER_ME, lodash.cloneDeep(isRememberMe));
      } catch (error) {
        console.warn(error);
      }
    };
    ////////////////////租户-子用户////////////////////
    const SON_TENANT_FORM_STATE = ref({});
    const SON_TENANT_IS_REMEMBER_ME = ref(false);
    const computedSonTenantLoginFormState = computed(() => get(SON_TENANT_FORM_STATE));
    const computedSonTenantIsRememberMe = computed(() => get(SON_TENANT_IS_REMEMBER_ME));
    const setSonTenantLoginFormState = loginFormState => {
      try {
        set(SON_TENANT_FORM_STATE, lodash.cloneDeep(loginFormState));
      } catch (error) {
        console.warn(error);
      }
    };

    const setSonTenantIsRememberMe = isRememberMe => {
      try {
        set(SON_TENANT_IS_REMEMBER_ME, lodash.cloneDeep(isRememberMe));
      } catch (error) {
        console.warn(error);
      }
    };

    return {
      ADMIN_LOGIN_FORM_STATE,
      ADMIN_IS_REMEMBER_ME,
      computedAdminLoginFormState,
      computedAdminIsRememberMe,
      setAdminLoginFormState,
      setAdminIsRememberMe,

      TENANT_FORM_STATE,
      TENANT_IS_REMEMBER_ME,
      computedTenantLoginFormState,
      computedTenantIsRememberMe,
      setTenantLoginFormState,
      setTenantIsRememberMe,

      SON_TENANT_FORM_STATE,
      SON_TENANT_IS_REMEMBER_ME,
      computedSonTenantLoginFormState,
      computedSonTenantIsRememberMe,
      setSonTenantLoginFormState,
      setSonTenantIsRememberMe,
    };
  },
  { persist: { storage: localStorage } },
);

export const useStoreUserAuth = defineStore(
  'storeUserAuth',
  () => {
    const LOGIN_TOKEN = ref({});
    const USERINFO = ref({});
    const ROLES = ref([]);
    const PERMISSIONS = ref([]);

    const computedToken = computed(() => get(LOGIN_TOKEN, 'token') || '');
    const computedMgToken = computed(() => get(LOGIN_TOKEN, 'mgToken') || '');

    const computedRoles = computed(() => get(ROLES));
    const computedUserinfo = computed(() => get(USERINFO));
    const computedPermissions = computed(() => get(PERMISSIONS));

    const setLoginToken = loginTokenInfo => {
      try {
        set(LOGIN_TOKEN, lodash.cloneDeep(loginTokenInfo));
      } catch (error) {
        console.warn(error);
      }
    };

    const setUserInfoRolesPermissionsRoles = ({ roles, userinfo, permissions }) => {
      try {
        set(ROLES, lodash.cloneDeep(roles));
        set(USERINFO, lodash.cloneDeep(userinfo));
        set(PERMISSIONS, lodash.cloneDeep(permissions));
      } catch (error) {
        console.warn(error);
      }
    };

    return {
      LOGIN_TOKEN,
      USERINFO,
      ROLES,
      PERMISSIONS,
      computedToken,
      computedMgToken,
      computedRoles,
      computedUserinfo,
      computedPermissions,
      setLoginToken,
      setUserInfoRolesPermissionsRoles,
    };
  },
  { persist: { storage: sessionStorage } },
);

export const useStoreSystem = defineStore(
  'storeSystem',
  () => {
    const COLLAPSED = ref(false);

    const computedCollapsed = computed(() => get(COLLAPSED));

    const setCollapsed = collapsed => {
      try {
        set(COLLAPSED, collapsed);
      } catch (error) {
        console.warn(error);
      }
    };

    return {
      COLLAPSED,
      computedCollapsed,
      setCollapsed,
    };
  },
  { persist: { storage: sessionStorage } },
);

export const useStoreMicroApp = defineStore(
  'storeMicroApp',
  () => {
    const APP_ID = ref('');

    const computedAppId = computed(() => get(APP_ID));

    const computedAppRouters = computed(() => {
      try {
        switch (get(APP_ID)) {
          // 无人机
          case 'KXCW_UAV':
            return [];
          default:
            return [];
        }
      } catch (error) {
        console.warn(error);
        return [];
      }
    });

    const setAppId = appId => {
      try {
        set(APP_ID, appId);
      } catch (error) {
        console.warn(error);
      }
    };

    return {
      APP_ID,
      computedAppId,
      computedAppRouters,
      setAppId,
    };
  },
  { persist: { storage: sessionStorage } },
);
