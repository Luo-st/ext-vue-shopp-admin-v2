<template>
  <table-top-wrapper>
    <a-row :gutter="32">
      <a-col span="6">
        <table-top-wrapper-item>
          <table-top-wrapper-item-title>
            选择状态
          </table-top-wrapper-item-title>
          <a-select
            style="width: 220px"
            :value="map.status"
            placeholder="请选择申请状态"
            @change="value => mapItemChange({ status: value })"
          >
            <a-select-option v-for="(val, key) in drawcashStatusValue" :key="key" :value="key">
              {{ val }}
            </a-select-option>
          </a-select>
        </table-top-wrapper-item>
      </a-col>
      <a-col span="12">
        <table-top-wrapper-item>
          <a-button icon="search" class="button" type="primary" @click="onSearch">
            搜 索
          </a-button>
          <a class="button" @click="clearSearchData">
            清空条件
          </a>
          <a-button icon="search" class="button" @click="refresh">
            刷新
          </a-button>
        </table-top-wrapper-item>
      </a-col>
    </a-row>
  </table-top-wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import { drawcashStatusValue } from '@/constants/user.constants'
import { TableTopWrapper, TableTopWrapperItem, TableTopWrapperItemTitle } from '@/style/TableStyle'
@Component({
  components: {
    TableTopWrapper,
    TableTopWrapperItem,
    TableTopWrapperItemTitle
  }
})
export default class Top extends Vue {
  @Getter('drawcash/map') map!: any
  @Getter('drawcash/pagination') queryCondition!: any

  @Action('drawcash/mapItemChange') mapItemChange!: Function
  @Action('drawcash/onSearch') onSearch!: () => void
  @Action('drawcash/clearSearchData') clearSearchData!: () => void
  @Action('drawcash/refresh') refresh!: () => void

  private drawcashStatusValue: any = drawcashStatusValue
}
</script>

<style lang="less">
.top {
  margin: 20px 0px;
  background: rgb(244, 244, 244);
  padding: 15px 35px;
  border-radius: 4px;
}
</style>
