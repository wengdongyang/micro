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
          { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '应用后台', name: 'applicationBackend' },
          { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: 'Banner配置', name: 'bannerConfiguration' },
          { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '快讯中心', name: 'newsCenter' },
          { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '消息中心', name: 'messageCenter' },
          { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '公告中心', name: 'announcementCenter' },
          { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '应用中心', name: 'applicationCenter' },
          {
            id: '@id',
            type: MENU_TYPE.FOLDER,
            'iconName|1': fontAwesomeClassNames,
            title: '渣土车',
            name: 'slagCar',
            children: [
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '事件管理', name: 'event' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '巡查记录', name: 'inspection' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '任务管理', name: 'task' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '预警管理', name: 'alarm' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '数据统计', name: 'slagCarstatistics' },
            ],
          },
          {
            id: '@id',
            type: MENU_TYPE.FOLDER,
            'iconName|1': fontAwesomeClassNames,
            title: '事件爆料',
            name: 'sjbl',
            children: [{ id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '事件管理', name: 'publicDisclosure' }],
          },
          {
            id: '@id',
            type: MENU_TYPE.FOLDER,
            'iconName|1': fontAwesomeClassNames,
            title: '无人机',
            name: 'uavManagement',
            children: [
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '无人机预警', name: 'uavAlertEventList' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '上报事件', name: 'uavReportEventList' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '巡查记录', name: 'uavInspectionRecordList' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '小区配置', name: 'uavCommunityPersonnelManagement' },
            ],
          },
          {
            id: '@id',
            type: MENU_TYPE.FOLDER,
            'iconName|1': fontAwesomeClassNames,
            title: '系统管理',
            name: 'system',
            children: [
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '租户管理', name: 'tenant' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '用户管理', name: 'user' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '公众端用户管理', name: 'publicEndUser' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '公众端街道用户管理', name: 'publicEndStreetUser' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '角色管理', name: 'role' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '菜单管理', name: 'menu' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '部门管理', name: 'department' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '岗位管理', name: 'job' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '字典管理', name: 'dictionary' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '参数设置', name: 'parameterSettings' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '通知公告', name: 'noticeAnnouncement' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '日志管理', name: 'log' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '街道子账户角色管理', name: 'streetSubAccountRole' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '街道子账户账号管理', name: 'sonTenantAccount' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '社区管理', name: 'community' },
            ],
          },
          {
            id: '@id',
            type: MENU_TYPE.FOLDER,
            'iconName|1': fontAwesomeClassNames,
            title: '系统监控',
            name: 'monitor',
            children: [
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '在线用户', name: 'onlineUsers' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '定时任务', name: 'scheduledTasks' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '数据监控', name: 'dataMonitoring' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '服务监控', name: 'serviceMonitoring' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '缓存监控', name: 'cacheMonitoring' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '缓存列表', name: 'cacheList' },
            ],
          },
          {
            id: '@id',
            type: MENU_TYPE.FOLDER,
            'iconName|1': fontAwesomeClassNames,
            title: '系统工具',
            name: 'tool',
            children: [
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '表单构建', name: 'formConstruction' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '代码生成', name: 'codeGeneration' },
              { id: '@id', type: MENU_TYPE.PAGE, 'iconName|1': fontAwesomeClassNames, title: '系统接口', name: 'systemInterface' },
            ],
          },
        ]),
      ),
  },
]);
