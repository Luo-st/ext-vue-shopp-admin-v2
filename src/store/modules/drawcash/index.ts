import { Module } from 'vuex'
import { DrawcashState } from './types'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export const createState = (): DrawcashState => ({
  list: [],
  loading: true,
  map: {},
  queryCondition: {},
  fullFields: ['user_info'],
  fields: [],
  sort: {
    id: 'desc'
  },
  pagination: {
    page_limit: 20,
    page_num: 1,
    data_count: 0
  }
})

const namespaced = true

const app: Module<DrawcashState, any> = {
  namespaced,
  state: createState(),
  getters,
  mutations,
  actions
}

export default app
