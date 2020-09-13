<template>
  <page-wrapper>
    <table-wrapper>
      <!-- <top
        :map="map"
        :mapItemChange="mapItemChange"
        :queryCondition="queryCondition"
        :queryConditionItemChange="queryConditionItemChange"
        :onSearch="onSearch"
        :refresh="refresh"
        :clearSearchData="clearSearchData"
      ></top> -->
      <top />
      <div class="table">
        <a-table :data-source="list" :loading="loading" row-key="uuid" :pagination="false">
          <a-table-column title="昵称" data-index="nick_name" />
          <a-table-column title="手机号码" data-index="mobile" />
          <a-table-column title="微信号" data-index="wechat" />
          <a-table-column title="客户状态" data-index="status">
            <template slot-scope="status, record">
              <a-switch @change="onChangeStatus(record)" />
            </template>
          </a-table-column>
          <a-table-column title="操作" data-index="action">
            <template slot-scope="text, record">
              <a @click="push(`/admin/banner/edit/${record.uuid}`)">编辑</a>
            </template>
          </a-table-column>
        </a-table>
      </div>
    </table-wrapper>
    <table-bottom-wrapper>
      <pagination-render />
    </table-bottom-wrapper>
  </page-wrapper>
</template>

<script lang="ts">
import { PaginationRender } from '@/components/tableComponents'
import Top from './components/Top.vue'
import { PageWrapper, TableWrapper, TableBottomWrapper } from '@/style/TableStyle'
import { url } from '@/api'
import useList from '@/utils/hooks/useList'
import useRouter from '@/utils/hooks/useRouter'

export default {
  components: {
    PageWrapper,
    TableWrapper,
    TableBottomWrapper,
    Top,
    PaginationRender
  },
  props: {},
  setup(props: any, { root }: any) {
    const {
      list,
      map,
      queryCondition,
      mapItemChange,
      queryConditionItemChange,
      loading,
      paginationProps,
      onSearch,
      refresh,
      clearSearchData
    } = useList(url.bannerListGet)

    const { push } = useRouter(root)
    return {
      list,
      map,
      queryCondition,
      mapItemChange,
      queryConditionItemChange,
      loading,
      paginationProps,
      onSearch,
      refresh,
      clearSearchData,
      push
    }
  }
}
</script>
<style lang="less">
.ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  > .li {
    flex: 0 0 auto;
    margin: 0 20px 20px 0;
  }
}
</style>
