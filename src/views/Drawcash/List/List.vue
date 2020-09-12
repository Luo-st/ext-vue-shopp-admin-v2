<template>
  <page-wrapper>
    <table-wrapper>
      <top></top>
      <div class="table">
        <a-table :data-source="list" :loading="loading" row-key="uuid" :pagination="false">
          <a-table-column title="申请人" data-index="user_info">
            <template slot-scope="user_info">
              <user-info-render :userInfo="user_info" />
            </template>
          </a-table-column>
          <a-table-column title="金额" data-index="number">
            <template slot-scope="number">
              <sell-price-render :sellPrice="number" />
            </template>
          </a-table-column>
          <a-table-column title="申请时间" data-index="create_time" />
          <a-table-column title="状态" data-index="status">
            <template slot-scope="status">
              <a-tag v-if="status === 0" color="blue">
                {{ drawcashStatusValue[status] }}
              </a-tag>
              <a-tag v-if="status === 1">
                {{ drawcashStatusValue[status] }}
              </a-tag>
              <a-tag v-if="status === 2" color="green">
                {{ drawcashStatusValue[status] }}
              </a-tag>
            </template>
          </a-table-column>

          <a-table-column title="操作" data-index="action">
            <template slot-scope="text, record">
              <div v-if="record.status === 0">
                <a @click="onChangeStatus({ uuid: record.uuid, status: 1 })">拒绝</a>
                <a-divider type="" />
                <a @click="onChangeStatus({ uuid: record.uuid, status: 2 })">同意</a>
              </div>
            </template>
          </a-table-column>
        </a-table>
      </div>
    </table-wrapper>
    <table-bottom-wrapper>
      <pagination-render :pagination="pagination" :paginationChange="paginationChange" />
    </table-bottom-wrapper>
  </page-wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import { UserInfoRender, SellPriceRender, PaginationRender } from '@/components/tableComponents'
import { drawcashStatusValue } from '@/constants/user.constants'
import Top from './components/Top.vue'

import { PageWrapper, TableWrapper, TableBottomWrapper } from '@/style/TableStyle'
@Component({
  components: {
    PageWrapper,
    TableWrapper,
    TableBottomWrapper,
    Top,
    UserInfoRender,
    SellPriceRender,
    PaginationRender
  }
})
export default class List extends Vue {
  @Getter('drawcash/list') list!: any[]
  @Getter('drawcash/pagination') pagination!: any
  @Getter('drawcash/map') map!: any
  @Getter('drawcash/pagination') queryCondition!: any
  @Getter('drawcash/loading') loading!: boolean

  @Action('drawcash/listGet') listGet!: Function
  @Action('drawcash/onChangeStatus') onChangeStatus!: Function
  @Action('drawcash/paginationChange') paginationChange!: Function

  private drawcashStatusValue = drawcashStatusValue
  protected mounted() {
    this.listGet()
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
