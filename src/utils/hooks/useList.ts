import { ajax } from '@/api'
import { ref, onMounted, provide, computed } from '@vue/composition-api'

const defaultData = {
  paginationDefault: {
    page_limit: 20,
    page_num: 1,
    data_count: 0
  },
  mapDefault: {},
  queryConditionDefault: {},
  fullFieldDefault: [],
  fieldsDefault: ['*'],
  sortDefault: { id: 'desc' }
}

const useList = (
  url: any,
  paginationDefault = defaultData.paginationDefault,
  mapDefault = defaultData.mapDefault,
  queryConditionDefault = defaultData.queryConditionDefault,
  fullFieldDefault = defaultData.fullFieldDefault,
  fieldsDefault = defaultData.fieldsDefault,
  sortDefault = defaultData.sortDefault
) => {
  const list = ref([])
  const pagination = ref<any>(paginationDefault)
  const map = ref(mapDefault)
  const queryCondition = ref(queryConditionDefault)
  const fullField = ref(fullFieldDefault)
  const fields = ref(fieldsDefault)
  const sort = ref(sortDefault)
  const loading = ref(false)

  /**
   * 修改 map
   */
  const mapItemChange = (params: any) => {
    map.value = {
      ...map.value,
      ...params
    }
  }
  /**
   * 修改 queryCondition
   */
  const queryConditionItemChange = (params: any) => {
    queryCondition.value = {
      ...queryCondition.value,
      ...params
    }
  }
  /**
   * 数据源获取
   */
  const listGet = (
    page: any,
    map: any,
    query_condition: any,
    full_fields: any,
    fields: any,
    sort: any
  ) => {
    loading.value = true
    ajax({
      url,
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
        loading.value = false
        list.value = data
        pagination.value = page
      })
      .catch(res => {
        loading.value = false
      })
  }

  /**
   * 分页
   */
  const paginationChange = (pageNum: number, pageSize: number) => {
    listGet(
      { page_limit: pageSize, page_num: pageNum },
      map.value,
      queryCondition.value,
      fullField.value,
      fields.value,
      sort.value
    )
  }

  /**
   * 搜索
   */
  const onSearch = () => {
    listGet(
      paginationDefault,
      map.value,
      queryCondition.value,
      fullField.value,
      fields.value,
      sort.value
    )
  }

  /**
   * 刷新
   */
  const refresh = () => {
    listGet(
      pagination.value,
      map.value,
      queryCondition.value,
      fullField.value,
      fields.value,
      sort.value
    )
  }

  /**
   * 清除数据
   */
  const clearSearchData = () => {
    pagination.value = paginationDefault
    map.value = mapDefault
    queryCondition.value = queryConditionDefault
    fullField.value = fullFieldDefault
    fields.value = fieldsDefault
    sort.value = sortDefault

    listGet(
      paginationDefault,
      mapDefault,
      queryConditionDefault,
      fullFieldDefault,
      fieldsDefault,
      sortDefault
    )
  }

  /**
   * 初始化
   */
  onMounted(() => {
    listGet(
      paginationDefault,
      mapDefault,
      queryConditionDefault,
      fullFieldDefault,
      fieldsDefault,
      sortDefault
    )
  })

  /**
   * 组合分页数据
   */
  const paginationProps = computed(() => ({
    total: pagination.value.data_count,
    onChange: paginationChange,
    page_num: pagination.value.page_num,
    page_limit: pagination.value.page_limit,
    showTotal: (total: any) => `共 ${total} 条`,
    showSizeChanger: false
  }))

  /**
   * 抛给子组件
   */
  provide('map', map)
  provide('queryCondition', queryCondition)
  provide('mapItemChange', mapItemChange)
  provide('queryConditionItemChange', queryConditionItemChange)
  provide('paginationProps', paginationProps)
  provide('onSearch', onSearch)
  provide('clearSearchData', clearSearchData)
  provide('refresh', refresh)

  return {
    list,
    map,
    mapItemChange,
    queryCondition,
    queryConditionItemChange,
    loading,
    paginationProps,
    onSearch,
    refresh,
    clearSearchData
  }
}

export default useList
