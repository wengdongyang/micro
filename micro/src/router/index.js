import NProgress from 'nprogress'
import { createRouter, createWebHashHistory } from 'vue-router'
// apis
// hooks
// utils
// stores
// mixins
// configs
// components
import LayoutSystem from '@src/layouts/system/LayoutSystem.vue'
import Welcome from '@src/pages/welcome/index.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/KXCW_UAV',
      redirect: '/KXCW_UAV/uavEventSupervision',
      component: LayoutSystem,
      children: [
        {
          path: 'uavEventSupervision',
          name: 'uavEventSupervision',
          component: () => import('@src/pages/uav/uavEventSupervision/index.vue'),
          meta: { title: '首页' },
        },
        {
          path: 'uavEventReview',
          name: 'uavEventReview',
          component: () => import('@src/pages/uav/uavEventReview/index.vue'),
          meta: { title: '事件审核' },
        },
        {
          path: 'uavReportEvent',
          name: 'uavReportEvent',
          component: () => import('@src/pages/uav/uavReportEvent/index.vue'),
          meta: { title: '上报事件' },
        },
        {
          path: 'uavInspectionRecords',
          name: 'uavInspectionRecords',
          component: () => import('@src/pages/uav/uavInspectionRecords/index.vue'),
          meta: { title: '巡查记录' },
        },
        {
          path: 'uavCommunityConfiguration',
          name: 'uavCommunityConfiguration',
          component: () => import('@src/pages/uav/uavCommunityConfiguration/index.vue'),
          meta: { title: '小区配置' },
        },
        {
          path: 'uavStatisticalAnalysis',
          name: 'uavStatisticalAnalysis',
          component: () => import('@src/pages/uav/uavStatisticalAnalysis/index.vue'),
          meta: { title: '统计分析' },
        },

        { path: '/:pathMatch(.*)', name: 'welcome', component: Welcome },
      ],
    },
  ],
})

export default router
