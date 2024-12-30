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

import Welcome from '@src/pages/welcome/Welcome.vue';

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
        { path: 'home', name: 'home', component: Welcome, meta: { title: '首页' } },
        { path: 'workbench', name: 'workbench', component: () => import('@src/pages/workbench/Workbench.vue'), meta: { title: '工作台' } },
        { path: 'applicationBackend', name: 'applicationBackend', component: () => import('@src/pages/applicationBackend/ApplicationBackend.vue'), meta: { title: '应用后台' } },
        { path: 'bannerConfiguration', name: 'bannerConfiguration', component: () => import('@src/pages/bannerConfiguration/BannerConfiguration.vue'), meta: { title: 'Banner配置' } },
        { path: 'newsCenter', name: 'newsCenter', component: () => import('@src/pages/newsCenter/NewsCenter.vue'), meta: { title: '快讯中心' } },
        { path: 'messageCenter', name: 'messageCenter', component: () => import('@src/pages/messageCenter/MessageCenter.vue'), meta: { title: '消息中心' } },
        { path: 'announcementCenter', name: 'announcementCenter', component: () => import('@src/pages/announcementCenter/AnnouncementCenter.vue'), meta: { title: '公告中心' } },
        { path: 'applicationCenter', name: 'applicationCenter', component: () => import('@src/pages/applicationCenter/ApplicationCenter.vue'), meta: { title: '应用中心' } },
        { path: '/:pathMatch(.*)', name: 'welcome', component: Welcome },
      ],
    },
    {
      path: '/system',
      name: 'system',
      component: LayoutSystem,
      meta: { title: '系统管理' },
      children: [
        { path: 'tenant', name: 'tenant', component: () => import('@src/pages/system/tenant/Tenant.vue'), meta: { title: '租户管理' } },
        { path: 'user', name: 'user', component: () => import('@src/pages/system/user/User.vue'), meta: { title: '用户管理' } },
        { path: 'publicEndUser', name: 'publicEndUser', component: () => import('@src/pages/system/publicEndUser/PublicEndUser.vue'), meta: { title: '公众端用户管理' } },
        { path: 'publicEndStreetUser', name: 'publicEndStreetUser', component: () => import('@src/pages/system/publicEndStreetUser/PublicEndStreetUser.vue'), meta: { title: '公众端街道用户管理' } },
        { path: 'role', name: 'role', component: () => import('@src/pages/system/role/Role.vue'), meta: { title: '角色管理' } },
        { path: 'menu', name: 'menu', component: () => import('@src/pages/system/menu/Menu.vue'), meta: { title: '菜单管理' } },
        { path: 'department', name: 'department', component: () => import('@src/pages/system/department/Department.vue'), meta: { title: '部门管理' } },
        { path: 'job', name: 'job', component: () => import('@src/pages/system/job/Job.vue'), meta: { title: '岗位管理' } },
        { path: 'dictionary', name: 'dictionary', component: () => import('@src/pages/system/dictionary/Dictionary.vue'), meta: { title: '字典管理' } },
        { path: 'parameterSettings', name: 'parameterSettings', component: () => import('@src/pages/system/parameterSettings/ParameterSettings.vue'), meta: { title: '参数设置' } },
        { path: 'noticeAnnouncement', name: 'noticeAnnouncement', component: () => import('@src/pages/system/noticeAnnouncement/NoticeAnnouncement.vue'), meta: { title: '通知公告' } },
        { path: 'log', name: 'log', component: () => import('@src/pages/system/log/Log.vue'), meta: { title: '日志管理' } },
        { path: 'streetSubAccountRole', name: 'streetSubAccountRole', component: () => import('@src/pages/system/streetSubAccountRole/StreetSubAccountRole.vue'), meta: { title: '街道子账户角色管理' } },
        { path: 'sonTenantAccount', name: 'sonTenantAccount', component: () => import('@src/pages/system/sonTenantAccount/SonTenantAccount.vue'), meta: { title: '街道子账户账号管理' } },
        { path: 'community', name: 'community', component: () => import('@src/pages/system/menu/Menu.vue'), meta: { title: '社区管理' } },
        { path: '/:pathMatch(.*)', name: 'welcome', component: Welcome },
      ],
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: LayoutSystem,
      meta: { title: '系统监控' },
      children: [
        { path: 'onlineUsers', name: 'onlineUsers', component: () => import('@src/pages/monitor/onlineUsers/OnlineUsers.vue'), meta: { title: '在线用户' } },
        { path: 'scheduledTasks', name: 'scheduledTasks', component: () => import('@src/pages/monitor/scheduledTasks/ScheduledTasks.vue'), meta: { title: '定时任务' } },
        { path: 'dataMonitoring', name: 'dataMonitoring', component: () => import('@src/pages/monitor/dataMonitoring/DataMonitoring.vue'), meta: { title: '数据监控' } },
        { path: 'serviceMonitoring', name: 'serviceMonitoring', component: () => import('@src/pages/monitor/serviceMonitoring/ServiceMonitoring.vue'), meta: { title: '服务监控' } },
        { path: 'cacheMonitoring', name: 'cacheMonitoring', component: () => import('@src/pages/monitor/cacheMonitoring/CacheMonitoring.vue'), meta: { title: '缓存监控' } },
        { path: 'cacheList', name: 'cacheList', component: () => import('@src/pages/monitor/cacheList/CacheList.vue'), meta: { title: '缓存列表' } },
        { path: '/:pathMatch(.*)', name: 'welcome', component: Welcome },
      ],
    },
    {
      path: '/tool',
      name: 'tool',
      component: LayoutSystem,
      meta: { title: '系统工具' },
      children: [
        { path: 'formConstruction', name: 'formConstruction', component: () => import('@src/pages/tool/formConstruction/FormConstruction.vue'), meta: { title: '表单构建' } },
        { path: 'codeGeneration', name: 'codeGeneration', component: () => import('@src/pages/tool/codeGeneration/CodeGeneration.vue'), meta: { title: '代码生成' } },
        { path: 'systemInterface', name: 'systemInterface', component: () => import('@src/pages/tool/systemInterface/SystemInterface.vue'), meta: { title: '系统接口' } },
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
