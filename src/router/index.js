import NProgress from 'nprogress';
import { createRouter, createWebHashHistory } from 'vue-router';
// apis
// hooks
// utils
// stores
// mixins
// configs
import { ENV } from '@src/configs/index.js';
// components
import LayoutLogin from '@src/layouts/login/layout-login.vue';
import LayoutMicro from '@src/layouts/micro/layout-micro.vue';
import LayoutSystem from '@src/layouts/system/layout-system.vue';

import Welcome from '@src/pages/welcome/welcome.vue';

const router = createRouter({
  history: createWebHashHistory(ENV.BASE_URL),
  routes: [
    { path: '/login', name: 'login', component: LayoutLogin },
    {
      path: '/',
      name: 'system-layout',
      component: LayoutSystem,
      redirect: '/home',
      children: [
        { path: 'home', name: 'home', component: Welcome, meta: { title: '首页' } },
        {
          path: 'workbench',
          name: 'workbench',
          component: () => import('@src/pages/workbench/workbench.vue'),
          meta: { title: '工作台' },
        },
        {
          path: 'application-backend',
          name: 'application-backend',
          component: () => import('@src/pages/application-backend/application-backend.vue'),
          meta: { title: '应用后台' },
        },
        {
          path: 'banner-configuration',
          name: 'banner-configuration',
          component: () => import('@src/pages/banner-configuration/banner-configuration.vue'),
          meta: { title: 'Banner配置' },
        },
        {
          path: 'news-center',
          name: 'news-center',
          component: () => import('@src/pages/news-center/news-center.vue'),
          meta: { title: '快讯中心' },
        },
        {
          path: 'message-center',
          name: 'message-center',
          component: () => import('@src/pages/message-center/message-center.vue'),
          meta: { title: '消息中心' },
        },
        {
          path: 'announcement-center',
          name: 'announcement-center',
          component: () => import('@src/pages/announcement-center/announcement-center.vue'),
          meta: { title: '公告中心' },
        },
        {
          path: 'application-center',
          name: 'application-center',
          component: () => import('@src/pages/application-center/application-center.vue'),
          meta: { title: '应用中心' },
        },
        { path: '/:pathMatch(.*)', name: 'welcome', component: Welcome },
      ],
    },
    {
      path: '/system',
      name: 'system',
      component: LayoutSystem,
      meta: { title: '系统管理' },
      children: [
        {
          path: 'tenant',
          name: 'tenant',
          component: () => import('@src/pages/system/tenant/tenant.vue'),
          meta: { title: '租户管理' },
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@src/pages/system/user/user.vue'),
          meta: { title: '用户管理' },
        },
        {
          path: 'public-end-user',
          name: 'public-end-user',
          component: () => import('@src/pages/system/public-end-user/public-end-user.vue'),
          meta: { title: '公众端用户管理' },
        },
        {
          path: 'public-end-street-user',
          name: 'public-end-street-user',
          component: () => import('@src/pages/system/public-end-street-user/public-end-street-user.vue'),
          meta: { title: '公众端街道用户管理' },
        },
        {
          path: 'role',
          name: 'role',
          component: () => import('@src/pages/system/role/role.vue'),
          meta: { title: '角色管理' },
        },
        {
          path: 'menu',
          name: 'menu',
          component: () => import('@src/pages/system/menu/menu.vue'),
          meta: { title: '菜单管理' },
        },
        {
          path: 'department',
          name: 'department',
          component: () => import('@src/pages/system/department/department.vue'),
          meta: { title: '部门管理' },
        },
        {
          path: 'job',
          name: 'job',
          component: () => import('@src/pages/system/job/job.vue'),
          meta: { title: '岗位管理' },
        },
        {
          path: 'dictionary',
          name: 'dictionary',
          component: () => import('@src/pages/system/dictionary/dictionary.vue'),
          meta: { title: '字典管理' },
        },
        {
          path: 'parameter-settings',
          name: 'parameter-settings',
          component: () => import('@src/pages/system/parameter-settings/parameter-settings.vue'),
          meta: { title: '参数设置' },
        },
        {
          path: 'notice-announcement',
          name: 'notice-announcement',
          component: () => import('@src/pages/system/notice-announcement/notice-announcement.vue'),
          meta: { title: '通知公告' },
        },
        {
          path: 'log',
          name: 'log',
          component: () => import('@src/pages/system/log/log.vue'),
          meta: { title: '日志管理' },
        },
        {
          path: 'street-sub-account-role',
          name: 'street-sub-account-role',
          component: () => import('@src/pages/system/street-sub-account-role/street-sub-account-role.vue'),
          meta: { title: '街道子账户角色管理' },
        },
        {
          path: 'son-tenant-account',
          name: 'son-tenant-account',
          component: () => import('@src/pages/system/son-tenant-account/son-tenant-account.vue'),
          meta: { title: '街道子账户账号管理' },
        },
        {
          path: 'community',
          name: 'community',
          component: () => import('@src/pages/system/menu/menu.vue'),
          meta: { title: '社区管理' },
        },
        { path: '/:pathMatch(.*)', name: 'welcome', component: Welcome },
      ],
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: LayoutSystem,
      meta: { title: '系统监控' },
      children: [
        {
          path: 'online-users',
          name: 'online-users',
          component: () => import('@src/pages/monitor/online-users/online-users.vue'),
          meta: { title: '在线用户' },
        },
        {
          path: 'scheduled-tasks',
          name: 'scheduled-tasks',
          component: () => import('@src/pages/monitor/scheduled-tasks/scheduled-tasks.vue'),
          meta: { title: '定时任务' },
        },
        {
          path: 'data-monitoring',
          name: 'data-monitoring',
          component: () => import('@src/pages/monitor/data-monitoring/data-monitoring.vue'),
          meta: { title: '数据监控' },
        },
        {
          path: 'service-monitoring',
          name: 'service-monitoring',
          component: () => import('@src/pages/monitor/service-monitoring/service-monitoring.vue'),
          meta: { title: '服务监控' },
        },
        {
          path: 'cache-monitoring',
          name: 'cache-monitoring',
          component: () => import('@src/pages/monitor/cache-monitoring/cache-monitoring.vue'),
          meta: { title: '缓存监控' },
        },
        {
          path: 'cache-list',
          name: 'cache-list',
          component: () => import('@src/pages/monitor/cache-list/cache-list.vue'),
          meta: { title: '缓存列表' },
        },
        { path: '/:pathMatch(.*)', name: 'welcome', component: Welcome },
      ],
    },
    {
      path: '/tool',
      name: 'tool',
      component: LayoutSystem,
      meta: { title: '系统工具' },
      children: [
        {
          path: 'form-construction',
          name: 'form-construction',
          component: () => import('@src/pages/tool/form-construction/form-construction.vue'),
          meta: { title: '表单构建' },
        },
        {
          path: 'code-generation',
          name: 'code-generation',
          component: () => import('@src/pages/tool/code-generation/code-generation.vue'),
          meta: { title: '代码生成' },
        },
        {
          path: 'system-interface',
          name: 'system-interface',
          component: () => import('@src/pages/tool/system-interface/system-interface.vue'),
          meta: { title: '系统接口' },
        },
        { path: '/:pathMatch(.*)', name: 'welcome', component: Welcome },
      ],
    },
    {
      path: '/micro/:micro-app-id',
      name: 'micro',
      component: LayoutMicro,
    },
  ],
});

const whiteRouterList = ['/login'];
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (whiteRouterList.includes(to.path)) {
    next();
  } else {
    const token = sessionStorage.getItem(ENV.TOKEN_KEY);
    if (token) {
      next();
    } else {
      next({ path: '/login' });
    }
  }
  NProgress.done();
});

export default router;
