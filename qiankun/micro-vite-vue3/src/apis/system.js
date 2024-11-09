// apis
// hooks
// utils
import { request, requestGet, requestPost, requestDelete } from '@src/utils';
// stores
// mixins
// configs
// components

/**
 * 获取图片链接
 * @param {*} params
 * @returns
 */
export const apiGetSystemFilePreview = params => {
  return requestGet({ url: '/system/file/preview', params });
};
