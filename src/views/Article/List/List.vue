<template>
  <page-wrapper>
    <table-wrapper>
      <top></top>
      <div class="table">
        <a-spin
          :spinning="loading"
          style="height: '100%', padding: '0 20px', box-sizing: 'border-box', overflow: 'auto'"
        >
          <div class="ul">
            <div class="li" v-for="item in list" :key="item.uuid">
              <a-card hoverable>
                <img slot="cover" style="width:200px ; height:200px" :src="item.thum" />
                <a-card-meta :title="item.title">
                  <template slot="description">
                    {{ item.intro }}
                  </template>
                </a-card-meta>
                <template slot="actions" class="ant-card-actions">
                  <a-icon key="edit" type="edit" @click="goEdit(item.uuid)" />
                  <a-popconfirm
                    title="确认删除该文章吗?"
                    ok-text="是的"
                    cancel-text="取消"
                    @confirm="() => onDelete({ uuid: item.uuid })"
                  >
                    <a-icon key="delete" type="delete" />
                  </a-popconfirm>
                </template>
              </a-card>
            </div>
          </div>
          <is-empty v-if="isEmpty" @onConfirm="() => {}" />
        </a-spin>
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
import { PaginationRender } from '@/components/tableComponents'
import { IsEmpty } from '@/components/common'
import Top from './components/Top.vue'
import { PageWrapper, TableWrapper, TableBottomWrapper } from '@/style/TableStyle'
@Component({
  components: {
    PageWrapper,
    TableWrapper,
    TableBottomWrapper,
    Top,
    PaginationRender,
    IsEmpty
  }
})
export default class List extends Vue {
  @Getter('article/list') list!: any[]
  @Getter('article/pagination') pagination!: any
  @Getter('article/map') map!: any
  @Getter('article/pagination') queryCondition!: any
  @Getter('article/loading') loading!: boolean
  @Getter('article/isEmpty') isEmpty!: boolean

  @Action('article/listGet') listGet!: Function
  @Action('article/paginationChange') paginationChange!: Function
  @Action('article/onDelete') onDelete!: Function

  protected mounted() {
    this.listGet()
  }

  private goEdit(uuid: string) {
    this.$router.push(`/admin/article/edit/${uuid}`)
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
