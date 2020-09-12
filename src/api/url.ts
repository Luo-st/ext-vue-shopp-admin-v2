import { url as shopUrl } from './shopAjax'
import { url as commonUrl } from './commonAjax'
import { APPLET_URL, V1 } from './config'

export default {
  ...commonUrl,
  ...shopUrl,
  // ------------ 跳转 url ------------
  appletAuthUrl: `${APPLET_URL}/${V1}/middle_pages/auth`
}
