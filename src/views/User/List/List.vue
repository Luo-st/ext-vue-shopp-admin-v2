<template>
  <page-wrapper>
    <table-wrapper>
      <top
        :map="map"
        :queryCondition="queryCondition"
        :onSearch="onSearch"
        :clearSearchData="clearSearchData"
        :refresh="refresh"
      ></top>
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
              <a @click="goEdit(record)">编辑</a>
            </template>
          </a-table-column>
        </a-table>
      </div>
    </table-wrapper>
    <table-bottom-wrapper>
      <a-pagination
        :show-size-changer="false"
        :page-size="page.page_limit"
        v-model="page.page_num"
        :total="page.data_count"
        :show-total="page.showTotal"
        @change="paginationChange"
      />
    </table-bottom-wrapper>
  </page-wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { url, ajax } from '@/api'
import Top from './components/Top.vue'
import { PageWrapper, TableWrapper, TableBottomWrapper } from '@/style/TableStyle'

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
@Component({
  components: {
    Top,
    PageWrapper,
    TableWrapper,
    TableBottomWrapper
  }
})
export default class List extends Vue {
  private list: any[] = []
  private page = {
    page_limit: 20,
    page_num: 1,
    data_count: 0
  }
  private loading = false
  private map = {}
  private queryCondition = {}
  private fullFields = []
  private fields = []

  // 搜索
  private onSearch() {
    this.listGet(defaultData.paginationDefault, this.map, this.queryCondition)
  }

  // 清空
  private async clearSearchData(): Promise<void> {
    this.map = {}
    this.queryCondition = {}
    await this.listGet(defaultData.paginationDefault, this.map, this.queryCondition)
  }

  // 刷新
  private async refresh(): Promise<void> {
    await this.listGet(this.page, this.map, this.queryCondition)
  }

  // 分页
  private async paginationChange(page: number, pageSize: number): Promise<void> {
    await this.listGet({ page_limit: pageSize, page_num: page }, this.map, this.queryCondition)
  }

  private created() {
    this.listGet(defaultData.paginationDefault, this.map, this.queryCondition)
  }

  private listGet = (page: any, map: any, query_condition: any) => {
    this.loading = true
    ajax({
      url: url.shopUserListGet,
      data: {
        page,
        map,
        query_condition,
        full_fields: this.fullFields,
        fields: this.fields
      }
    })
      .then(res => {
        const { data = [], page = {} } = res
        if (data.length > 0) {
          this.loading = false
          this.list.splice(0, this.list.length)
          this.list.push(...data)
          this.$set(this.page, 'data_count', page.data_count)
          this.$set(this.page, 'page_limit', page.page_limit)
          this.$set(this.page, 'page_num', page.page_num)
        }
      })
      .catch(err => {})
  }

  private goEdit(record: any) {
    const { uuid } = record
    this.$router.push(`/admin/user/edit/${uuid}`)
  }
}
</script>
<style lang="less">
.wrapper {
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
</style>
