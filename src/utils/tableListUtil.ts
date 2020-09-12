import { ajax, url } from '../api'

const defaultData = {
  paginationDefault: {
    page_limit: 20,
    page_num: 1,
    data_count: 0
  },
  mapDefault: {},
  queryConditionDefault: {},
  fullFieldDefault: [],
  fieldsDefault: [],
  sortDefault: { id: 'desc' },
  exceptDefault: {}
}
export function initTableList(that: any, url: string) {
  let {
    list = [],
    loading,
    page = defaultData.paginationDefault,
    map = defaultData.mapDefault,
    queryCondition = defaultData.queryConditionDefault
  } = that

  /**
   * 搜索
   */
  that.onSearch = () => {
    that.$set(page, 'data_count', defaultData.paginationDefault.data_count)
    that.$set(page, 'page_limit', defaultData.paginationDefault.page_limit)
    that.$set(page, 'page_num', defaultData.paginationDefault.page_num)
    listGet(page, map, queryCondition)
  }

  /**
   * 清空条件
   */
  that.clearSearchData = () => {
    that.$set(that, 'map', {})
    that.map
    listGet(page, map, queryCondition)
  }

  /**
   * 刷新
   */
  that.refresh = () => {
    listGet(page, map, queryCondition)
  }

  /**
   * 页码跳转
   * @param page
   * @param pageSize
   */
  page.onChange = (page: number, pageSize: number) => {
    listGet(
      { page_limit: pageSize, page_num: page },
      map,
      queryCondition
      // fullFields,
      // fields,
      // sort,
      // except,
    )
  }
  /**
   * 分页显示
   * @param total
   */
  page.showTotal = (total: number) => `共 ${total} 条`

  /**
   * 内容获取
   */
  const listGet = (
    page: any,
    map: any,
    query_condition: any
    // full_fields: any,
    // fields: any,
    // sort: any,
    // except: any
  ) => {
    loading = true
    list.splice(0, that.list.length)
    ajax({
      url,
      data: {
        page,
        map,
        query_condition
        // full_fields,
        // fields,
        // sort,
        // except
      }
    })
      .then(res => {
        loading = false
        const { data = [], page = {} } = res
        list.push(...data)
        that.$set(that.page, 'data_count', page.data_count)
        that.$set(that.page, 'page_limit', page.page_limit)
        that.$set(that.page, 'page_num', page.page_num)
      })
      .catch(() => {
        loading = false
      })
  }
  listGet(page, map, queryCondition)
}
