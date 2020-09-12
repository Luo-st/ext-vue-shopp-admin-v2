import axios, { AxiosRequestConfig } from 'axios'

// 全局默认配置
axios.defaults.timeout = 120000
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.common['Client-Type'] = 'pc'

const axiosCreate = (config?: AxiosRequestConfig) => {
  return axios.create(config)
}

export default axiosCreate
