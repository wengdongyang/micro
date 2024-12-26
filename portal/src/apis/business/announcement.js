// apis
// hooks
// utils
import { requestGet, requestPost } from '@src/utils';
// stores
// mixins
// configs
// components
/**
 * 获取公告列表
 */
export const apiGetBusinessAnnouncementSearch = params => {
  return requestGet({ url: '/business/announcement/search', params });
};
/**
 * 获取公告信息
 */
export const apiGetBusinessAnnouncementInfo = id => {
  return requestGet({ url: `/business/announcement/info/${id}` });
};
/**
 * 新增公告
 */
export const apiPostBusinessAnnouncementSave = data => {
  return requestPost({ url: '/business/announcement/save', data });
};
/**
 * 更新公告
 */
export const apiPostBusinessAnnouncementUpdate = data => {
  return requestPost({ url: '/business/announcement/update', data });
};
/**
 * 删除公告
 */
export const apiPostBusinessAnnouncementDelete = data => {
  return requestPost({ url: '/business/announcement/delete', data });
};
/**
 * 发布公告
 */
export const apiPostBusinessAnnouncementPublish = data => {
  return requestPost({ url: '/business/announcement/publish', data });
};
/**
 * 取消发布公告
 */
export const apiPostBusinessAnnouncementUnpublish = data => {
  return requestPost({ url: '/business/announcement/unpublish', data });
};
