export enum STORE_TYPES {
  USER_INFO = 'USER_INFO',
  TOKEN_INFO = 'TOKEN_INFO',
  MEMU = 'MEMU'
}

export interface IViewState {
  sidebarOpened: boolean
  title: string
  menuList: Array<{ [propsName: string]: any }>
}
const getters = {
  userInfo: (state: any) => state.userInfo,
  tokenInfo: (state: any) => state.userInfo,
  memu: (state: any) => state.userInfo
}
export default {
  namespaced: true,
  getters,
  state: {
    userInfo: {},
    tokenInfo: {},
    memu: []
  },
  mutations: {
    [STORE_TYPES.USER_INFO](state: any, userInfo: string) {
      state.userInfo = userInfo
    },
    [STORE_TYPES.TOKEN_INFO](state: any, tokenInfo: string) {
      state.tokenInfo = tokenInfo
    },
    [STORE_TYPES.MEMU](state: any, memu: string) {
      state.memu = memu
    }
  },
  actions: {
    changeUserInfo: (s: any, userInfo: any): void => {
      s.commit(STORE_TYPES.USER_INFO, userInfo)
    },
    changeTokenInfo: (s: any, tokenInfo: any): void => {
      s.commit(STORE_TYPES.TOKEN_INFO, tokenInfo)
    },
    changeMemu: (s: any, memu: any[]): void => {
      s.commit(STORE_TYPES.MEMU, memu)
    }
  }
}
