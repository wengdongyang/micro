// apis
// hooks
// utils
import { requestGet, requestPost } from '@src/utils';
// stores
// mixins
// configs
// components

/**
 * 获取banner列表
 */
export const apiGetBusinessBannerSearch = params => {
  return requestGet({ url: '/business/banner/search', params });
};

/**
 * 获取banner信息
 */
export const apiGetBusinessBannerInfo = id => {
  return requestGet({ url: `/business/banner/info/${id}` });
};

/**
 * 新增banner
 */
export const apiPostBusinessBannerSave = data => {
  return requestPost({ url: '/business/banner/save', data });
};
/**
 * 更新banner
 */
export const apiPostBusinessBannerUpdate = data => {
  return requestPost({ url: '/business/banner/update', data });
};

/**
 * 发布banner
 */
export const apiPostBusinessBannerPublish = data => {
  return requestPost({ url: '/business/banner/publish', data });
};

/**
 * 取消发布banner
 */
export const apiPostBusinessBannerUnpublish = data => {
  return requestPost({ url: '/business/banner/unpublish', data });
};

/**
 * 删除banner
 */
export const apiPostBusinessBannerDelete = data => {
  return requestPost({ url: '/business/banner/delete', data });
};
