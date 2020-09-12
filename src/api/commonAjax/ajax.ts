// import { message } from 'antd'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import axiosFactory from '../axiosFactory'
import { AjaxRequestConfig } from '../ajax'

/**
 * 包装请求头信息
 */
const packageHeaders = (config: AxiosRequestConfig) => {
  const { headers } = config
  // 店铺管理员头部信息
  Object.assign(headers, { 'Request-Source': 'shop_admin' })
}

/**
 * 请求拦截
 * @param {object} axios
 */
const injectRequestInterceptor = (axios: AxiosInstance) => {
  axios.interceptors.request.use(
    config => {
      packageHeaders(config)
      return config
    },
    err => {
      return Promise.reject(err)
    }
  )
}

const axios = axiosFactory()
injectRequestInterceptor(axios)

export const axiosExcute = (axiosConfig: AxiosRequestConfig, ajaxConfig: AjaxRequestConfig) => {
  return axios
    .request(axiosConfig)
    .then(res => {
      const { status, data } = res
      if (status === 200) {
        const { code = 0 } = data
        if (code === 1) {
          return data
        } else if (code === 0) {
          if (ajaxConfig && ajaxConfig.codeZeroCatch) {
            ajaxConfig.codeZeroCatch(data)
          } else {
            // message.error(msg)
          }
          return Promise.reject(JSON.stringify(res))
        } else {
          return Promise.reject(res)
        }
      } else {
        return Promise.reject(res)
      }
    })
    .catch(err => {
      if (typeof err === 'object') {
        console.warn(err)
        if (err.code && err.code === 'ECONNABORTED') {
          // 浏览器主动取消请求，包括连接超时
        } else {
          // message.error('服务器开小差了，请稍后再试')
        }
      }
      return Promise.reject(err)
    })
}

const ajax = (ajaxConfig: AjaxRequestConfig) => {
  const { isShowLoading, codeZeroCatch, ...axiosRequestConfig } = ajaxConfig

  const hide = () => {}
  let timeout: any = -1

  if (isShowLoading) {
    timeout = setTimeout(() => {
      // hide = message.loading('处理中，请稍后', 0)
    }, 300)
  }

  return axiosExcute(axiosRequestConfig, ajaxConfig)
    .then(res => {
      if (timeout !== -1) {
        clearTimeout(timeout)
        hide()
      }
      return Promise.resolve(res)
    })
    .catch(err => {
      if (timeout !== -1) {
        clearTimeout(timeout)
        hide()
      }
      return Promise.reject(err)
    })
}

export default ajax
