import ajax, { axiosExcute } from './ajax'
import { getStorage, setStorage, StorageKey } from '../../utils/storage'
import url from './url'
import { AxiosResponse } from 'axios'

let subscribers: any[] = []
let isRefreshToken = false
const addSubscriber = (subscriber: any) => {
  subscribers.push(subscriber)
}
const onAccessTokenFetched = () => {
  subscribers.forEach(callback => callback())
  subscribers = []
}

const refreshToken = () => {
  const { token: shopToken, refresh_token: shopRefreshToken } = getStorage(StorageKey.TOKEN_INFO)

  ajax({
    url: url.refreshToken,
    data: {
      token: shopToken,
      refresh_token: shopRefreshToken
    },
    method: 'post'
  })
    .then(res => {
      const { data } = res
      const { token, refresh_token } = data

      // 店铺 token
      setStorage(StorageKey.TOKEN_INFO, {
        token,
        refresh_token
      })

      isRefreshToken = false
      onAccessTokenFetched()
    })
    .catch(err => {})
}

export default (response: AxiosResponse) => {
  return new Promise(resolve => {
    addSubscriber(() => {
      axiosExcute(response.config)
        .then(data => {
          resolve(data)
        })
        .catch(err => {})
    })
    if (!isRefreshToken) {
      refreshToken()
      isRefreshToken = true
    }
  })
}
