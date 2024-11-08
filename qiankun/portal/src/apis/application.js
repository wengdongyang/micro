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
export const getApplicationSearchByTenant = params => {
  return requestGet({ url: '/application/owner/search', params });
};
/**
 * 获取微应用列表--管理端
 */
export const getApplicationSearch = params => {
  return requestGet({ url: '/application/search', params });
};
/**
 * 获取微应用列表--管理端
 */
export const apiGetApplicationRoleMenuSearch = params => {
  return requestGet({ url: '/applicationRoleMenu/search', params });
};
export const apiPostApplicationRoleMenuCreate = data => {
  return requestPost({ url: '/applicationRoleMenu/create', data });
};
export const apiPostApplicationRoleMenuUpdate = data => {
  return requestPost({ url: '/applicationRoleMenu/update', data });
};
export const apiDeleteApplicationRoleMenuDelete = roleMenuId => {
  return requestDelete({ url: `/applicationRoleMenu/delete/${roleMenuId}` });
};
/**
 * 获取微应用列表--租户购买
 */
export const apiGetApplicationOwnerSearchClickSortList = params => {
  return requestGet({ url: '/application/owner/searchClickSortList', params });
};
