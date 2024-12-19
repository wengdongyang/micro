import LayoutLogin from '../layouts/login/LayoutLogin.vue';
import LayoutMicro from '../layouts/micro/LayoutMicro.vue';

import UavEventSupervision from '@src/views/uav/uavEventSupervision/index.vue';
import UavEventReview from '@src/views/uav/uavEventReview/index.vue';
import UavReportEvent from '@src/views/uav/uavReportEvent/index.vue';
import UavInspectionRecords from '@src/views/uav/uavInspectionRecords/index.vue';
import UavCommunityConfiguration from '@src/views/uav/uavCommunityConfiguration/index.vue';
import UavStatisticalAnalysis from '@src/views/uav/uavStatisticalAnalysis/index.vue';

const appId = process.env.VUE_APP_APP_ID;

export const microRouters = [
  { path: 'uavEventSupervision', name: 'uavEventSupervision', component: UavEventSupervision, meta: { icon: 'fa-home', title: '事件督办' } },
  { path: 'uavEventReview', name: 'uavEventReview', component: UavEventReview, meta: { icon: 'fa-home', title: '事件审核' } },
  { path: 'uavReportEvent', name: 'uavReportEvent', component: UavReportEvent, meta: { icon: 'fa-home', title: '上报事件' } },
  { path: 'uavInspectionRecords', name: 'uavInspectionRecords', component: UavInspectionRecords, meta: { icon: 'fa-home', title: '巡查记录' } },
  { path: 'uavCommunityConfiguration', name: 'uavCommunityConfiguration', component: UavCommunityConfiguration, meta: { icon: 'fa-home', title: '小区配置' } },
  { path: 'uavStatisticalAnalysis', name: 'uavStatisticalAnalysis', component: UavStatisticalAnalysis, meta: { icon: 'fa-home', title: '统计分析' } },
];

let routes = [];
switch (appId) {
  case 'KXCW_UAV':
    routes = [
      { path: '/login', name: 'login', component: LayoutLogin },
      {
        path: '/',
        name: 'micro',
        component: LayoutMicro,
        redirect: '/uavEventSupervision',
        children: microRouters,
      },
    ];
    break;

  default:
    routes = [];
    break;
}

export default routes;
