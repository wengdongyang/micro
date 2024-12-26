/** @format */
import { get, set } from '@vueuse/core';
import dayjs from 'dayjs';
import lodash from 'lodash';
import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
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

    const setUserInfoRolesPermissionsRoles = userInfoRolesPermissionsRoles => {
      try {
        const { roles, permissions, user, regionNo } = userInfoRolesPermissionsRoles;
        set(ROLES, lodash.cloneDeep(roles));
        set(USERINFO, lodash.cloneDeep(Object.assign({}, user, { regionNo })));
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
    const { push } = useRouter();
    const FORMAT = 'YYYY-MM-DD HH:mm:s';

    const defaultRouterTab = {
      timeStamp: dayjs().format(FORMAT),
      icon: 'fa-home',
      path: 'home',
      name: 'home',
      title: '首页',
      closable: false,
      query: {},
    };
    const COLLAPSED = ref(false);

    const ROUTERS = ref([]);
    const ROUTER_TABS = ref([defaultRouterTab]);
    const ACTIVE_ROUTER_TAB = ref(defaultRouterTab);

    const computedCollapsed = computed(() => get(COLLAPSED));
    const computedRouters = computed(() => get(ROUTERS));
    const computedRouterTabs = computed(() => get(ROUTER_TABS));
    const computedActiveRouterTab = computed(() => get(ACTIVE_ROUTER_TAB));

    const setCollapsed = collapsed => {
      try {
        set(COLLAPSED, collapsed);
      } catch (error) {
        console.warn(error);
      }
    };

    const setRouters = routers => {
      try {
        set(ROUTERS, routers);
      } catch (error) {
        console.warn(error);
      }
    };

    const addRouterTab = tab => {
      try {
        console.warn('addRouterTab', tab);
        const prevRouterTabs = get(ROUTER_TABS);
        const index = prevRouterTabs.findIndex(routerTab => routerTab.path === tab.path);
        const currentTab = Object.assign({}, tab, { closable: true, timeStamp: dayjs().format(FORMAT) });
        if (index > -1) {
          const nextRouterTabs = prevRouterTabs.map(routerTab =>
            routerTab.path === tab.path ? currentTab : routerTab,
          );
          set(ROUTER_TABS, nextRouterTabs);
        } else {
          const nextRouterTabs = prevRouterTabs.concat([currentTab]);
          set(ROUTER_TABS, nextRouterTabs);
        }

        set(ACTIVE_ROUTER_TAB, currentTab);
      } catch (error) {
        console.warn(error);
      }
    };
    const deleteRouterTab = key => {
      try {
        console.warn('deleteRouterTab', key);
        const prevRouterTabs = get(ROUTER_TABS);
        const prevActiveRouterTab = get(ACTIVE_ROUTER_TAB);

        const nextRouterTabs = prevRouterTabs.filter(routerTab => routerTab.path !== key);
        set(ROUTER_TABS, nextRouterTabs);

        if (prevActiveRouterTab.path === key) {
          const routerTabsByTimeStamp = lodash
            .cloneDeep(nextRouterTabs)
            .sort((prev, next) => (dayjs(prev.timeStamp).isBefore(dayjs(next.timeStamp)) ? 1 : -1));
          const currentTab = routerTabsByTimeStamp[0];
          currentTab && set(ACTIVE_ROUTER_TAB, currentTab);
        }
      } catch (error) {
        console.warn(error);
      }
    };
    const changeRouterTab = tab => {
      try {
        console.warn('changeRouterTab', tab);
        const prevRouterTabs = get(ROUTER_TABS);
        const index = prevRouterTabs.findIndex(routerTab => routerTab.path === tab.path);
        const currentTab = Object.assign({}, tab, { timeStamp: dayjs().format(FORMAT) });
        if (index > -1) {
          const nextRouterTabs = prevRouterTabs.map(routerTab =>
            routerTab.path === tab.path ? currentTab : routerTab,
          );
          set(ROUTER_TABS, nextRouterTabs);
        }
        set(ACTIVE_ROUTER_TAB, currentTab);
      } catch (error) {
        console.warn(error);
      }
    };

    watch(
      () => ACTIVE_ROUTER_TAB.value,
      newValue => {
        if (newValue.path) {
          push({ path: `/${newValue.path}`, query: newValue.query });
        }
      },
      { deep: true, immediate: true },
    );

    return {
      COLLAPSED,
      ROUTERS,
      ROUTER_TABS,
      ACTIVE_ROUTER_TAB,
      computedCollapsed,
      computedRouters,
      computedRouterTabs,
      computedActiveRouterTab,
      setCollapsed,
      setRouters,
      addRouterTab,
      deleteRouterTab,
      changeRouterTab,
    };
  },
  { persist: { storage: sessionStorage } },
);
