// apis
// hooks
// utils
import { requestGet, requestPost } from '@src/utils';
// stores
// mixins
// configs
// components
/**
 * 网格列表
 */
export const apiGetBusinessCompanyGridList = params => {
  return requestGet({ url: '/business/company/grid/list', params });
};
/**
 * 标签列表
 */
export const apiGetBusinessCompanyTagSearch = params => {
  return requestGet({ url: '/business/company/tag/search', params });
};
/**
 * 统一信用代码查重
 */
export const apiGetBusinessCompanyCheck = params => {
  return requestGet({ url: '/business/company/check', params });
};

export const apiGetBusinessCompanyListTask = params => {
  return requestGet({ url: `/business/company/listTask`, params });
};
/**
 * 企业审核列表
 */
export const apiGetBusinessCompanySearch = params => {
  return requestGet({ url: '/business/company/search', params });
};
/**
 * 详情
 */
export const apiGetBusinessCompanyInfo = id => {
  return requestGet({ url: `/business/company/info/${id}` });
};
/**
 * 保存公司
 */
export const apiPostBusinessCompanySave = data => {
  return requestPost({ url: '/business/company/save', data });
};
/**
 * 保存公司
 */
export const apiPostBusinessCompanyRemove = data => {
  return requestPost({ url: `/business/company/remove`, data });
};
/**
 * 更新公司
 */
export const apiPostBusinessCompanyUpdate = data => {
  return requestPost({ url: '/business/company/update', data });
};
/**
 * 修改监管对象
 */
export const apiPostCompanyUpdate = data => {
  return requestPost({ url: '/business/company/update', data });
};

// 管理记录列表
export const apiGetBusinessCompanyUpholdLogSearch = params => {
  return requestGet({ url: '/business/companyUpholdLog/search', params });
};

// 管理记录详情
export const apiGetBusinessCompanyUpholdLogInfo = companyId => {
  return requestGet({ url: `/business/companyUpholdLog/info/${companyId}` });
};

// 审批通过
export const apiPostBusinessCompanyUpholdLogPass = data => {
  return requestPost({ url: '/business/companyUpholdLog/pass', data });
};

// 审批不通过
export const apiPostBusinessCompanyUpholdLogFail = data => {
  return requestPost({ url: '/business/companyUpholdLog/fail', data });
};
/**
 * 注销
 */
export const apiPostBusinessCompanyLogoff = data => {
  return requestPost({ url: '/business/company/logoff', data });
};
/**
 * 企业审核通过
 */
export const apiPostBusinessCompanyPass = data => {
  return requestPost({ url: '/business/company/pass', data });
};
/**
 * 企业审核拒绝
 */
export const apiPostBusinessCompanyFail = data => {
  return requestPost({ url: '/business/company/fail', data });
};
/**
 * 企业撤回
 */
export const apiPostBusinessCompanyRevocation = data => {
  return requestPost({ url: '/business/company/revocation', data });
};

/**
 * 企业关联人员列表
 */
export const apiGetBusinessCompanyUserSearch = params => {
  return requestGet({ url: '/business/company/user/search', params });
};

/**
 * 企业增加关联人员
 */
export const apiPostBusinessCompanyUserSave = data => {
  return requestPost({ url: '/business/company/user/save', data });
};
/**
 * 企业更新关联人员
 */
export const apiPostBusinessCompanyUserUpdate = data => {
  return requestPost({ url: '/business/company/user/update', data });
};
/**
 * 取消关联
 */
export const apiPostBusinessCompanyUserUnRelate = data => {
  return requestPost({ url: '/business/company/user/un-relate', data });
};
/**
 * 查询企业赋码记录
 */
export const apiGetBusinessCompanyListCodeLogByCompanyId = reconditionRecordId => {
  return requestGet({ url: `/business/company/listCodeLogByCompanyId/${reconditionRecordId}` });
};
//////////////////////////
// 检查记录
export const apiGetPcReconditionRecordSelectPage = params => {
  return requestGet({ url: '/pc/reconditionRecord/selectPage', params });
};

export const apiGetPcReconditionRecordInfo = reconditionRecordId => {
  return requestGet({ url: `/pc/reconditionRecord/info/${reconditionRecordId}` });
};
// 清洗记录
export const apiGetPcRinseRecordSelectPage = params => {
  return requestGet({ url: '/pc/rinseRecord/selectPage', params });
};
export const apiGetPcRinseRecordInfo = rinseRecordId => {
  return requestGet({ url: `/pc/rinseRecord/info/${rinseRecordId}` });
};

// 查询社区企业清洗与检查统计
export const apiGetRegionStatistics = params => {
  return requestGet({ url: '/business/sootSummary/getRegionStatistics', params });
};

// 提交检查记录
export const apiPostReconditionRecord = data => {
  return requestPost({ url: '/pc/reconditionRecord/create', data });
};

// 工作台-油烟码状态统计
export const apiGetCodeStatistics = params => {
  return requestGet({ url: `/business/sootSummary/getCodeStatistics`, params });
};

// 工作台-油烟码清洗情况统计
export const apiGetRinseStatistics = params => {
  return requestGet({ url: `/business/sootSummary/getRinseStatistics`, params });
};

// 工作台-油烟码检查情况汇总
export const apiGetReconditionStatistics = params => {
  return requestGet({ url: `/business/sootSummary/getReconditionStatistics`, params });
};

// 工作台-油烟码检查情况按日统计
export const apiGetReconditionDateStatistics = params => {
  return requestGet({ url: `/business/sootSummary/getReconditionDateStatistics`, params });
};
