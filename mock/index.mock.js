/** @format */
import { defineMock } from 'vite-plugin-mock-dev-server';
import Mock from 'mockjs';
// apis
// hooks
// utils
// types
// stores
// mixins
// configs
import { MENU_TYPE, fontAwesomeClassNames } from '@src/configs';
// components
const resultSuccess = data => {
  return { code: 200, data, msg: '成功!' };
};

export default defineMock([
  // {
  //   url: '/town/adminapi/captchaImage',
  //   body: () => Mock.mock({ code: 200, img: Mock.mock('@image'), uuid: '@id', msg: '成功!' }),
  // },
  // {
  //   url: '/town/adminapi/loginPlatform',
  //   body: () => Mock.mock({ mgToken: '@id', code: 200, token: '@id', msg: '成功!' }),
  // },
  // {
  //   url: '/town/adminapi/loginTenant',
  //   body: () => Mock.mock({ mgToken: '@id', code: 200, token: '@id', msg: '成功!' }),
  // },
  // {
  //   url: '/town/adminapi/getInfo',
  //   body: () =>
  //     Mock.mock({
  //       msg: '操作成功',
  //       code: 200,
  //       permissions: ['monitor:logininfor:list', 'monitor:operlog:query', 'monitor:operlog:list', 'system:orgPeoples:index', 'monitor:logininfor:query', 'system:peoples:index'],
  //       roles: ['wrjxmjs'],
  //       user: {
  //         createBy: 'admin',
  //         createTime: '2024-10-09 10:30:52',
  //         userId: 493,
  //         userName: 'kqqAdmin1',
  //         nickName: '柯桥区账户',
  //         userType: 'tenant',
  //         email: '',
  //         phonenumber: '14144512265',
  //         sex: '0',
  //         avatar: '',
  //         password: '$2a$10$h4kxv6qf2i77BzKOgKDFKeUYHcK3kiswx8bh/SY3ftfPA/W88sqxy',
  //         status: '0',
  //         delFlag: '0',
  //         loginIp: '124.91.150.6',
  //         loginDate: 1735300119000,
  //         roles: [{ roleId: 149, roleName: '无人机角色', roleKey: 'wrjxmjs', roleSort: 0, dataScope: '1', menuCheckStrictly: false, deptCheckStrictly: false, status: '0', flag: false, admin: false }],
  //         parentUserId: 1,
  //         admin: false,
  //       },
  //       regionNo: '330603',
  //     }),
  // },
  {
    url: '/town/adminapi/getRouters',
    body: () =>
      resultSuccess(
        Mock.mock([
          { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '工作台', name: 'workbench' },
          { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '应用后台', name: 'application-backend' },
          { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: 'Banner配置', name: 'banner-configuration' },
          { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '快讯中心', name: 'news-center' },
          { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '消息中心', name: 'message-center' },
          { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '公告中心', name: 'announcement-center' },
          { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '应用中心', name: 'application-center' },
          {
            id: '@id',
            type: MENU_TYPE.FOLDER,
            'iconName|1': fontAwesomeClassNames,
            title: '渣土车',
            name: 'slag-car',
            children: [
              { title: '事件管理', name: 'event' },
              { title: '巡查记录', name: 'inspection' },
              { title: '任务管理', name: 'task' },
              { title: '预警管理', name: 'alarm' },
              { title: '数据统计', name: 'slag-car-statistics' },
            ].map(item => ({ ...item, id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames })),
          },
          {
            id: '@id',
            type: MENU_TYPE.FOLDER,
            'iconName|1': fontAwesomeClassNames,
            title: '事件爆料',
            name: 'sjbl',
            children: [{ title: '事件管理', name: 'public-disclosure' }].map(item => ({ ...item, id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames })),
          },
          {
            id: '@id',
            type: MENU_TYPE.FOLDER,
            'iconName|1': fontAwesomeClassNames,
            title: '无人机',
            name: 'uav-management',
            children: [
              { title: '无人机预警', name: 'uav-alert-event-list' },
              { title: '上报事件', name: 'uav-report-event-list' },
              { title: '巡查记录', name: 'uav-inspection-record-list' },
              { title: '小区配置', name: 'uav-community-personnel-management' },
            ].map(item => ({ ...item, id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames })),
          },
          {
            id: '@id',
            type: MENU_TYPE.FOLDER,
            'iconName|1': fontAwesomeClassNames,
            title: '系统管理',
            name: 'system',
            children: [
              { title: '租户管理', name: 'tenant' },
              { title: '用户管理', name: 'user' },
              { title: '公众端用户管理', name: 'public-end-user' },
              { title: '公众端街道用户管理', name: 'public-end-street-user' },
              { title: '角色管理', name: 'role' },
              { title: '菜单管理', name: 'menu' },
              { title: '部门管理', name: 'department' },
              { title: '岗位管理', name: 'job' },
              { title: '字典管理', name: 'dictionary' },
              { title: '参数设置', name: 'parameter-settings' },
              { title: '通知公告', name: 'notice-announcement' },
              { title: '日志管理', name: 'log' },
              { title: '街道子账户角色管理', name: 'street-sub-account-role' },
              { title: '街道子账户账号管理', name: 'son-tenant-account' },
              { title: '社区管理', name: 'community' },
            ].map(item => ({ ...item, id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames })),
          },
          {
            id: '@id',
            type: MENU_TYPE.FOLDER,
            'iconName|1': fontAwesomeClassNames,
            title: '系统监控',
            name: 'monitor',
            children: [
              { title: '在线用户', name: 'online-users' },
              { title: '定时任务', name: 'scheduled-tasks' },
              { title: '数据监控', name: 'data-monitoring' },
              { title: '服务监控', name: 'service-monitoring' },
              { title: '缓存监控', name: 'cache-monitoring' },
              { title: '缓存列表', name: 'cache-list' },
            ].map(item => ({ ...item, id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames })),
          },
          {
            id: '@id',
            type: MENU_TYPE.FOLDER,
            'iconName|1': fontAwesomeClassNames,
            title: '系统工具',
            name: 'tool',
            children: [
              { title: '表单构建', name: 'form-construction' },
              { title: '代码生成', name: 'code-generation' },
              { title: '系统接口', name: 'system-interface' },
            ].map(item => ({ ...item, id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames })),
          },
        ]),
      ),
  },
]);
