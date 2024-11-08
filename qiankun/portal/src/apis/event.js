// apis
// hooks
// utils
import { requestGet, requestPost } from '@src/utils';
// stores
// mixins
// configs
// components
/**
 * 区域列表
 */
export const apiGetEventGetPlotInfoList = params => {
  return requestGet({ url: '/event/getPlotInfoList', params });
};
