/**
 * StorageKey
 */
export enum StorageKey {
  // 店铺员工在线状态
  ONLINE = 'online',
  // 店铺员工 token 信息
  TOKEN_INFO = 'token_info',
  // 店铺员工信息
  USER_INFO = 'user_info',
  // 店铺信息
  INFO = 'info',
  // 店铺菜单
  MENU = 'menu',
  // 店铺菜单滚动距离
  MENU_TOP = 'menu_top'
}

/**
 * SessionStorageKey
 */
export enum SessionStorageKey {
  // 代理区域信息
  AGENT_REGION = 'agent_region',
  // 区域信息
  REGION = 'region'
}

/**
 * 存储本地数据,支持对象存储
 * @param {StorageKey} key
 * @param {any} value
 * @param {Storage} storage // localStorage 默认 || sessionStorage
 */
export const setStorage = (
  key: StorageKey | SessionStorageKey,
  value: any,
  storage: Storage = window.localStorage
): void => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
    value = 'obj-' + value
  } else {
    value = 'str-' + value
  }
  if (storage) {
    storage.setItem(key, value)
  }
}

/**
 * 取本地数据,支持对象存储
 * @param {StorageKey} key
 * @param {Storage} storage // localStorage 默认 || sessionStorage
 */
export const getStorage = (
  key: StorageKey | SessionStorageKey,
  storage: Storage = window.localStorage
): any => {
  if (storage) {
    let v = storage.getItem(key)
    if (!v) {
      return
    }
    if (v.indexOf('obj-') === 0) {
      v = v.slice(4)
      return JSON.parse(v)
    } else if (v.indexOf('str-') === 0) {
      return v.slice(4)
    }
  }
}

/**
 * 移除 key 对应的数据
 * @param {StorageKey} key
 * @param {Storage} storage // localStorage 默认 || sessionStorage
 */
export const rmStorage = (
  key: StorageKey | SessionStorageKey,
  storage: Storage = window.localStorage
): void => {
  if (storage && key) {
    storage.removeItem(key)
  }
}

/**
 *
 * @param {Storage} storage // localStorage 默认 || sessionStorage
 */
export const clearStorage = (storage: Storage = window.localStorage): void => {
  if (storage) {
    storage.clear()
  }
}
