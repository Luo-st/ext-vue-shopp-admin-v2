interface StringKeyObject {
  [propName: string]: any
}
export interface DrawcashState {
  list: any[]
  loading: true
  map: StringKeyObject
  queryCondition: StringKeyObject
  fullFields: string[]
  fields: string[]
  sort: StringKeyObject
  pagination: {
    page_limit: number | string
    page_num: number | string
    data_count: number | string
  }
  isEmpty: boolean
}

export enum STORE_TYPES {
  LSIT = 'LSIT',
  LOADING = 'LOADING',
  MAP = 'MAP',
  QUERY_CONDITION = 'QUERY_CONDITION',
  FULL_FIELDS = 'FULL_FIELDS',
  FIELDS = 'FIELDS',
  SORT = 'SORT',
  PAGE = 'PAGE',
  IS_EMPTY = 'IS_EMPTY'
}
