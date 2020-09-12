import { DrawcashState } from './types'

const getters = {
  list: (state: DrawcashState) => state.list,
  loading: (state: DrawcashState) => state.loading,
  map: (state: DrawcashState) => state.map,
  queryCondition: (state: DrawcashState) => state.queryCondition,
  fullFields: (state: DrawcashState) => state.fullFields,
  fields: (state: DrawcashState) => state.fields,
  pagination: (state: DrawcashState) => state.pagination
}
export default getters
