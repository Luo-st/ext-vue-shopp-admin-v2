<template>
  <table-top-wrapper>
    <a-row :gutter="32">
      <a-col span="6">
        <table-top-wrapper-item>
          <table-top-wrapper-item-title>
            文章标题
          </table-top-wrapper-item-title>
          <a-input
            placeholder="请输入文章标题"
            :value="map.title"
            @change="({ target: { value } }) => mapItemChange({ title: value })"
          />
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
import { TableTopWrapper, TableTopWrapperItem, TableTopWrapperItemTitle } from '@/style/TableStyle'
@Component({
  components: {
    TableTopWrapper,
    TableTopWrapperItem,
    TableTopWrapperItemTitle
  }
})
export default class Top extends Vue {
  @Getter('article/map') map!: any
  @Getter('article/pagination') queryCondition!: any

  @Action('article/mapItemChange') mapItemChange!: Function
  @Action('article/onSearch') onSearch!: () => void
  @Action('article/clearSearchData') clearSearchData!: () => void
  @Action('article/refresh') refresh!: () => void
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
