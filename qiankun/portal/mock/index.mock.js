/** @format */
import { defineMock } from 'vite-plugin-mock-dev-server';
// apis
// hooks
// utils
// types
// stores
// mixins
// configs
import { MENU_TYPE } from '@src/configs';
// components
const resultSuccess = data => {
  return { code: 200, data, msg: '成功!' };
};

export default defineMock([
  {
    url: '/town/adminapi/getRouters',
    body: () =>
      resultSuccess([
        { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '工作台', name: 'workbench' },
        { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '应用后台', name: 'applicationBackend' },
        { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: 'Banner配置', name: 'bannerConfiguration' },
        { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '快讯中心', name: 'newsCenter' },
        { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '消息中心', name: 'messageCenter' },
        { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '公告中心', name: 'announcementCenter' },
        { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '应用中心', name: 'applicationCenter' },
        {
          type: MENU_TYPE.FOLDER,
          iconName: 'fa-home',
          title: '渣土车',
          name: 'slagCar',
          children: [
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '事件管理', name: 'event' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '巡查记录', name: 'inspection' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '任务管理', name: 'task' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '预警管理', name: 'alarm' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '数据统计', name: 'slagCarstatistics' },
          ],
        },
        {
          type: MENU_TYPE.FOLDER,
          iconName: 'fa-home',
          title: '事件爆料',
          name: 'sjbl',
          children: [{ type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '事件管理', name: 'publicDisclosure' }],
        },
        {
          type: MENU_TYPE.FOLDER,
          iconName: 'fa-home',
          title: '无人机',
          name: 'uavManagement',
          children: [
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '无人机预警', name: 'uavAlertEventList' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '上报事件', name: 'uavReportEventList' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '巡查记录', name: 'uavInspectionRecordList' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '小区配置', name: 'uavCommunityPersonnelManagement' },
          ],
        },
        {
          type: MENU_TYPE.FOLDER,
          iconName: 'fa-home',
          title: '系统管理',
          name: 'system',
          children: [
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '租户管理', name: 'tenant' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '用户管理', name: 'user' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '公众端用户管理', name: 'publicEndUser' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '公众端街道用户管理', name: 'publicEndStreetUser' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '角色管理', name: 'role' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '菜单管理', name: 'menu' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '部门管理', name: 'department' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '岗位管理', name: 'job' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '字典管理', name: 'dictionary' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '参数设置', name: 'parameterSettings' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '通知公告', name: 'noticeAnnouncement' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '日志管理', name: 'log' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '街道子账户角色管理', name: 'streetSubAccountRole' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '街道子账户账号管理', name: 'sonTenantAccount' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '社区管理', name: 'community' },
          ],
        },
        {
          type: MENU_TYPE.FOLDER,
          iconName: 'fa-home',
          title: '系统监控',
          name: 'monitor',
          children: [
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '在线用户', name: 'onlineUsers' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '定时任务', name: 'scheduledTasks' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '数据监控', name: 'dataMonitoring' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '服务监控', name: 'serviceMonitoring' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '缓存监控', name: 'cacheMonitoring' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '缓存列表', name: 'cacheList' },
          ],
        },
        {
          type: MENU_TYPE.FOLDER,
          iconName: 'fa-home',
          title: '系统工具',
          name: 'tool',
          children: [
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '表单构建', name: 'formConstruction' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '代码生成', name: 'codeGeneration' },
            { type: MENU_TYPE.PAGE, iconName: 'fa-home', title: '系统接口', name: 'systemInterface' },
          ],
        },
      ]),
  },
]);
