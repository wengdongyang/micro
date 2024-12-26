// apis
// hooks
// utils
import { requestGet, requestPost } from '@src/utils';
// stores
// mixins
// configs
// components
/**
 * 用户列表
 */
export const apiGetCustomerTagSearch = params => {
  return requestGet({ url: '/customer/tag/search', params });
};
