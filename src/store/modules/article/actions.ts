import { ActionTree } from 'vuex'
import { DrawcashState, STORE_TYPES } from './types'
import { ajax, url } from '@/api'
import { createState } from './index'
import { message } from 'ant-design-vue'

const actions: ActionTree<DrawcashState, any> = {
  // 翻页
  paginationChange(s, page) {
    s.dispatch('listGet', page)
  },
  // map 改变
  mapItemChange(s, params: any) {
    const map = s.state.map
    s.commit(STORE_TYPES.MAP, {
      ...map,
      ...params
    })
  },
  // queryCondition 改变
  queryConditionItemChange(s, params: any) {
    const queryCondition = s.state.queryCondition
    s.commit(STORE_TYPES.QUERY_CONDITION, {
      ...queryCondition,
      ...params
    })
  },
  // 搜索
  onSearch(s) {
    s.dispatch('listGet', createState().pagination)
  },
  // 清空数据
  clearSearchData(s) {
    const { pagination, map, queryCondition } = createState()
    s.commit(STORE_TYPES.MAP, map)
    s.commit(STORE_TYPES.QUERY_CONDITION, queryCondition)
    s.dispatch('listGet', pagination)
  },
  // 刷新
  refresh(s) {
    s.dispatch('listGet')
  },
  //  数据获取
  listGet(s, paginationParams = {}) {
    s.commit(STORE_TYPES.LOADING, true)
    const page = {
      ...s.state.pagination,
      ...paginationParams
    }
    const map = s.state.map
    const query_condition = s.state.queryCondition
    const full_fields = s.state.fullFields
    const fields = s.state.fields
    const sort = s.state.sort
    ajax({
      url: url.articleListGet,
      data: {
        page,
        map,
        query_condition,
        full_fields,
        fields,
        sort
      }
    })
      .then(res => {
        const { data, page } = res
        s.commit(STORE_TYPES.LOADING, false)
        s.commit(STORE_TYPES.PAGE, page)
        s.commit(STORE_TYPES.LSIT, data)
        s.commit(STORE_TYPES.IS_EMPTY, !data.length)
      })
      .catch(err => {
        s.commit(STORE_TYPES.LOADING, false)
      })
  },
  // 更新状态
  onChangeStatus(s, params) {
    ajax({
      url: url.articleChangeStatus,
      data: params
    })
      .then(res => {
        message.success(res.msg)
        s.dispatch('refresh')
      })
      .catch(res => {})
  },
  // 删除
  onDelete(s, params) {
    ajax({
      url: url.articleDelete,
      data: params
    })
      .then(res => {
        message.success(res.msg)
        s.dispatch('refresh')
      })
      .catch(res => {})
  }
}

export default actions
