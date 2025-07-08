// apis
// hooks
// utils
import { requestGet, requestPost, requestDelete } from '@src/utils';
// stores
// mixins
// configs
// components
/**
 * 获取微应用列表--租户购买
 */
export const apiGetApplicationOwnerSearch = params => {
  return requestGet({ url: '/application/owner/search', params });
};
