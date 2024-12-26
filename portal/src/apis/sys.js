// apis
// hooks
// utils
import { request, requestGet, requestPost, requestDelete } from '@src/utils';
// stores
// mixins
// configs
// components
// 区域列表
export const apiGetSysRegionListByOwner = params => {
  return requestGet({ url: '/sys/region/listByOwner', params });
};
// 工作台-查询社区列表
export const apiGetSysRegionList = params => {
  return requestGet({ url: `/sys/region/list`, params });
};
// 获取意见
export const apiGetSysSuggestionSearch = params => {
  return requestGet({ url: '/sys/suggestion/search', params });
};
