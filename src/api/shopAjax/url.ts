import { BASE_URL, V1, SHOP, COMMON } from '../config'

const PREFIX_URL = `${BASE_URL}/${V1}/${SHOP}`

const createBaseUrl = (key: string, apiKey: string) => ({
  [`${key}ListGet`]: `${PREFIX_URL}/${apiKey}/list`,
  [`${key}ListTreeGet`]: `${PREFIX_URL}/${apiKey}/list_tree`,
  [`${key}ListGetAll`]: `${PREFIX_URL}/${apiKey}/get_all`,
  [`${key}Read`]: `${PREFIX_URL}/${apiKey}/read`,
  [`${key}Update`]: `${PREFIX_URL}/${apiKey}/update`,
  [`${key}UpdateFiled`]: `${PREFIX_URL}/${apiKey}/edit_fields`,
  [`${key}BatchUpdate`]: `${PREFIX_URL}/${apiKey}/batch_update`,
  [`${key}Save`]: `${PREFIX_URL}/${apiKey}/create`,
  [`${key}Delete`]: `${PREFIX_URL}/${apiKey}/delete`,
  [`${key}ChangeStatus`]: `${PREFIX_URL}/${apiKey}/change_status`
})

const url: {
  [propName: string]: string
} = {
  /**
   * 账户
   */
  login: `${PREFIX_URL}/accounts/login`,
  logout: `${PREFIX_URL}/accounts/logout`,
  loginPasswordUpdate: `${PREFIX_URL}/accounts/update_login_password`,
  // token
  refreshToken: `${BASE_URL}/${V1}/${COMMON}/helpers/refresh_token`,
  // ------------ 店铺配置 ------------
  shopConfigGet: `${PREFIX_URL}/configs/read`,
  shopConfigUpdate: `${PREFIX_URL}/configs/edit`,
  shopConfigIsUploadFile: `${PREFIX_URL}/upload/get_is_upload_file`,
  webCustomsEdit: `${PREFIX_URL}/web_customs/edit`,
  webCustomsRead: `${PREFIX_URL}/web_customs/read`,

  // ------------ 我的信息 ------------
  shopUserInfoUpdate: `${PREFIX_URL}/users/update`,
  shopUserInfoRead: `${PREFIX_URL}/users/read`,

  // 七牛token获取
  qiniuGetUpLoadToekn: `https://api.ypemy.com/v1/common/qiniu/get_upload_token`,
  qiniuUpLoad: `https://upload-z2.qiniup.com`,

  // ------------ 客户管理 ------------
  // 客户信息
  ...createBaseUrl('shopUser', 'shop_users'),
  shopUserDetailGet: `${PREFIX_URL}/shop_users/info`,
  // 提现管理
  ...createBaseUrl('drawcash', 'drawcashs'),

  // ------------ 内容管理 ------------
  // 文章
  ...createBaseUrl('article', 'articles'),
  // 轮播图
  ...createBaseUrl('banner', 'banners')
}

export default url
