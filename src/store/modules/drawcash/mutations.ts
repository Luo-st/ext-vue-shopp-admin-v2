import { MutationTree } from 'vuex'

import { DrawcashState, STORE_TYPES } from './types'

const mutations: MutationTree<DrawcashState> = {
  [STORE_TYPES.LSIT](state, list) {
    state.list = list
  },
  [STORE_TYPES.LOADING](state, loading) {
    state.loading = loading
  },
  [STORE_TYPES.MAP](state, map) {
    state.map = map
  },
  [STORE_TYPES.QUERY_CONDITION](state, queryCondition) {
    state.queryCondition = queryCondition
  },
  [STORE_TYPES.FULL_FIELDS](state, fullFields) {
    state.fullFields = fullFields
  },
  [STORE_TYPES.FIELDS](state, fields) {
    state.fields = fields
  },
  [STORE_TYPES.FIELDS](state, fields) {
    state.fields = fields
  },
  [STORE_TYPES.PAGE](state, page) {
    state.pagination = page
  }
}

export default mutations
