import { message } from 'ant-design-vue'
import { AxiosRequestConfig } from 'axios'
import { ajax as shopAjax, url as shopUrl } from './shopAjax'
import { ajax as commonAjax, url as commonUrl } from './commonAjax'

const shopUrlKeys = Object.keys(shopUrl)
const commonUrlKeys = Object.keys(commonUrl)

const urlConfigMap: any = {
  [shopUrl.orderExport]: { timeout: 0 },
  [shopUrl.goodsExport]: { timeout: 0 },
  [shopUrl.resourceImgBatchUpload]: { timeout: 0 },
  [shopUrl.resourceFileUpload]: { timeout: 0 },
  [shopUrl.resourceFileUploadBase64]: { timeout: 0 },
  [shopUrl.posterGenerate]: { timeout: 0 }
}

interface AjaxResponse {
  code: number
  data?: any
  msg: string
  [propsName: string]: any
}

export interface AjaxRequestConfig extends AxiosRequestConfig {
  isShowLoading?: boolean
  codeZeroCatch?: (ajaxResponse: AjaxResponse) => void
}

const packageConfig = (config: AjaxRequestConfig) => {
  const { url } = config
  if (url && Object.keys(urlConfigMap).indexOf(url) !== -1) {
    return {
      ...config,
      ...urlConfigMap[url]
    }
  } else {
    return config
  }
}

const ajax = (ajaxRequestConfig: AjaxRequestConfig) => {
  // 给默认值
  const {
    isShowLoading = false,
    url,
    method = 'post',
    data = {},
    ...restAxiosRequestConfig
  } = ajaxRequestConfig

  if (window.navigator.onLine) {
    if (!url) {
      return Promise.reject()
    }
    const config = packageConfig({ isShowLoading, url, method, data, ...restAxiosRequestConfig })

    if (shopUrlKeys.some(key => shopUrl[key] === url)) {
      return shopAjax(config)
    } else if (commonUrlKeys.some(key => commonUrl[key] === url)) {
      return commonAjax(config)
    } else {
      return Promise.reject()
    }
  } else {
    message.warn('网络连接错误，请检查您的网络状态')
    return Promise.reject()
  }
}

export default ajax
