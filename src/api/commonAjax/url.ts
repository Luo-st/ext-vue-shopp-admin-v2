import { BASE_URL, V1, COMMON } from '../config'

const PREFIX_URL = `${BASE_URL}/${V1}/${COMMON}`

const url: any = {
  // ------------ 发送验证码  ------------
  codeSendWithMobile: `${PREFIX_URL}/helpers/send_sms_code`,
  // ------------ 全国行政区  ------------
  regionGet: `${PREFIX_URL}/helpers/regions`,
  // ------------ 快递查询  ------------
  expressQueryByKd100: `${PREFIX_URL}/helpers/logistics_by_kd100`,
  expressQueryByKdn: `${PREFIX_URL}/helpers/query_express`,
  // ------------ 编码解码  ------------
  encodeObj: `${PREFIX_URL}/param_maps/code`,
  decodeObj: `${PREFIX_URL}/param_maps/decode`,
  // ------------ 小程序码  ------------
  platformAppletQrcodeGet: `${PREFIX_URL}/applets/get_qrcode_in_platform_shop`,
  commonAppletQrcodeGet: `${PREFIX_URL}/applets/get_qrcode`,
  // ------------ 手机号码归属地  ------------
  mobileRegionGet: `${PREFIX_URL}/helpers/get_mobile_region`,
}

export default url
