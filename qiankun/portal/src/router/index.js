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
import LayoutLogin from '@src/layouts/login/LayoutLogin.vue';
import LayoutMicro from '@src/layouts/micro/LayoutMicro.vue';
import LayoutSystem from '@src/layouts/system/LayoutSystem.vue';

import Welcome from '@src/pages/welcome/index.vue';

const router = createRouter({
  history: createWebHashHistory(ENV.BASE_URL),
  routes: [
    { path: '/login', name: 'login', component: LayoutLogin },
    {
      path: '/',
      name: 'systemLayout',
      component: LayoutSystem,
      redirect: '/home',
      children: [
        { path: 'home', name: 'home', component: Welcome, meta: { icon: 'fa-home', title: '首页' } },
        { path: 'workbench', name: 'workbench', component: () => import('@src/pages/workbench/index.vue'), meta: { icon: 'fa-home', title: '工作台' } },
        {
          path: 'applicationBackend',
          name: 'applicationBackend',
          component: () => import('@src/pages/applicationBackend/index.vue'),
          meta: { icon: 'fa-home', title: '应用后台' },
        },
        { path: 'bannerConfiguration', name: 'bannerConfiguration', component: Welcome, meta: { icon: 'fa-home', title: 'Banner配置' } },
        { path: 'newsCenter', name: 'newsCenter', component: Welcome, meta: { icon: 'fa-home', title: '快讯中心' } },
        { path: 'messageCenter', name: 'messageCenter', component: Welcome, meta: { icon: 'fa-home', title: '消息中心' } },
        { path: 'announcementCenter', name: 'announcementCenter', component: Welcome, meta: { icon: 'fa-home', title: '公告中心' } },
        { path: 'applicationCenter', name: 'applicationCenter', component: Welcome, meta: { icon: 'fa-home', title: '应用中心' } },
        // 渣土车
        { path: 'slagCarEvent', name: 'slagCarEvent', component: Welcome, meta: { icon: 'fa-home', title: '事件管理' } },
        { path: 'slagCarInspectionRecord', name: 'slagCarInspectionRecord', component: Welcome, meta: { icon: 'fa-home', title: '巡查记录' } },
        { path: 'slagCarTask', name: 'slagCarTask', component: Welcome, meta: { icon: 'fa-home', title: '任务管理' } },
        { path: 'slagCarWarning', name: 'slagCarWarning', component: Welcome, meta: { icon: 'fa-home', title: '预警管理' } },
        { path: 'slagCarDataStatistics', name: 'slagCarDataStatistics', component: Welcome, meta: { icon: 'fa-home', title: '数据统计' } },
        // 事件爆料
        { path: 'eventDisclosureEvent', name: 'eventDisclosureEvent', component: Welcome, meta: { icon: 'fa-home', title: '事件管理' } },
        // 无人机
        { path: 'uavAlertEventList', name: 'uavAlertEventList', component: Welcome, meta: { icon: 'fa-home', title: '无人机预警' } },
        { path: 'uavReportEventList', name: 'uavReportEventList', component: Welcome, meta: { icon: 'fa-home', title: '上报事件' } },
        { path: 'uavInspectionRecordList', name: 'uavInspectionRecordList', component: Welcome, meta: { icon: 'fa-home', title: '巡查记录' } },
        { path: 'uavCommunityPersonnel', name: 'uavCommunityPersonnel', component: Welcome, meta: { icon: 'fa-home', title: '小区配置' } },

        { path: '/:pathMatch(.*)', name: 'welcome', component: Welcome },
      ],
    },
    {
      path: '/system',
      name: 'system',
      component: LayoutSystem,
      meta: { icon: 'fa-home', title: '系统管理' },
      children: [
        { path: 'tenant', name: 'tenant', component: Welcome, meta: { icon: 'fa-home', title: '租户管理' } },
        { path: 'user', name: 'user', component: Welcome, meta: { icon: 'fa-home', title: '用户管理' } },
        { path: 'publicEndUser', name: 'publicEndUser', component: Welcome, meta: { icon: 'fa-home', title: '公众端用户管理' } },
        { path: 'publicEndStreetUser', name: 'publicEndStreetUser', component: Welcome, meta: { icon: 'fa-home', title: '公众端街道用户管理' } },
        { path: 'role', name: 'role', component: Welcome, meta: { icon: 'fa-home', title: '角色管理' } },
        { path: 'menu', name: 'menu', component: () => import('@src/pages/system/menu/index.vue'), meta: { icon: 'fa-home', title: '菜单管理' } },
        { path: 'department', name: 'department', component: Welcome, meta: { icon: 'fa-home', title: '部门管理' } },
        { path: 'job', name: 'job', component: Welcome, meta: { icon: 'fa-home', title: '岗位管理' } },
        { path: 'dictionary', name: 'dictionary', component: Welcome, meta: { icon: 'fa-home', title: '字典管理' } },
        { path: 'parameterSettings', name: 'parameterSettings', component: Welcome, meta: { icon: 'fa-home', title: '参数设置' } },
        { path: 'noticeAnnouncement', name: 'noticeAnnouncement', component: Welcome, meta: { icon: 'fa-home', title: '通知公告' } },
        { path: 'log', name: 'log', component: Welcome, meta: { icon: 'fa-home', title: '日志管理' } },
        { path: 'streetSubAccountRole', name: 'streetSubAccountRole', component: Welcome, meta: { icon: 'fa-home', title: '街道子账户角色管理' } },
        { path: 'sonTenantAccount', name: 'sonTenantAccount', component: Welcome, meta: { icon: 'fa-home', title: '街道子账户账号管理' } },
        { path: 'community', name: 'community', component: Welcome, meta: { icon: 'fa-home', title: '社区管理' } },
        { path: '/:pathMatch(.*)', name: 'welcome', component: Welcome },
      ],
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: LayoutSystem,
      meta: { icon: 'fa-home', title: '系统监控' },
      children: [
        { path: 'onlineUsers', name: 'onlineUsers', component: Welcome, meta: { icon: 'fa-home', title: '在线用户' } },
        { path: 'scheduledTasks', name: 'scheduledTasks', component: Welcome, meta: { icon: 'fa-home', title: '定时任务' } },
        { path: 'dataMonitoring', name: 'dataMonitoring', component: Welcome, meta: { icon: 'fa-home', title: '数据监控' } },
        { path: 'serviceMonitoring', name: 'serviceMonitoring', component: Welcome, meta: { icon: 'fa-home', title: '服务监控' } },
        { path: 'cacheMonitoring', name: 'cacheMonitoring', component: Welcome, meta: { icon: 'fa-home', title: '缓存监控' } },
        { path: 'cacheList', name: 'cacheList', component: Welcome, meta: { icon: 'fa-home', title: '缓存列表' } },
        { path: '/:pathMatch(.*)', name: 'welcome', component: Welcome },
      ],
    },
    {
      path: '/tool',
      name: 'tool',
      component: LayoutSystem,
      meta: { icon: 'fa-home', title: '系统工具' },
      children: [
        { path: 'formConstruction', name: 'formConstruction', component: Welcome, meta: { icon: 'fa-home', title: '表单构建' } },
        { path: 'codeGeneration', name: 'codeGeneration', component: Welcome, meta: { icon: 'fa-home', title: '代码生成' } },
        { path: 'systemInterface', name: 'systemInterface', component: Welcome, meta: { icon: 'fa-home', title: '系统接口' } },
        { path: '/:pathMatch(.*)', name: 'welcome', component: Welcome },
      ],
    },
    {
      path: '/micro/:microAppId',
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
    NProgress.done();
  } else {
    const token = sessionStorage.getItem(ENV.TOKEN_KEY);
    if (token) {
      next();
      NProgress.done();
    } else {
      next({ path: '/login' });
      NProgress.done();
    }
  }
});

export default router;
