export const microAppGroupList = [
  {
    name: 'uav',
    title: '无人机预警',
    pages: [
      {
        name: 'uavEventSupervision',
        icon: 'fa-home',
        title: '事件督办',
        components: [
          { name: 'watchModal', title: '查看' },
          { name: 'deliveryModal', title: '交派' },
          { name: 'auditModal', title: '普通审核' },
          { name: 'auditBackModal', title: '退回审核' },
        ],
      },
      { name: 'uavEventReview', icon: 'fa-home', title: '事件审核' },
      { name: 'uavReportEvent', icon: 'fa-home', title: '上报事件' },
      { name: 'uavInspectionRecords', icon: 'fa-home', title: '巡查记录' },
      { name: 'uavCommunityConfiguration', icon: 'fa-home', title: '小区配置' },
      { name: 'uavStatisticalAnalysis', icon: 'fa-home', title: '统计分析' },
    ],
  },
];
