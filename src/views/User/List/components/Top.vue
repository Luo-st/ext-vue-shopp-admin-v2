<template>
  <table-top-wrapper>
    <a-row :gutter="32">
      <a-col span="6">
        <table-top-wrapper-item>
          <table-top-wrapper-item-title>
            手机号码
          </table-top-wrapper-item-title>
          <a-input v-model="map.mobile" placeholder="请输入手机号码" />
        </table-top-wrapper-item>
      </a-col>
      <a-col span="6">
        <table-top-wrapper-item>
          <table-top-wrapper-item-title>
            客户姓名
          </table-top-wrapper-item-title>
          <a-input v-model="map.nick_name" placeholder="请输入客户姓名" />
        </table-top-wrapper-item>
      </a-col>
      <a-col span="6">
        <table-top-wrapper-item>
          <table-top-wrapper-item-title>
            客户标签
          </table-top-wrapper-item-title>
          <a-input placeholder="请输入昵称" />
        </table-top-wrapper-item>
      </a-col>
    </a-row>
    <a-row :gutter="32">
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
import { Component, Vue, Prop } from 'vue-property-decorator'
import { TableTopWrapper, TableTopWrapperItem, TableTopWrapperItemTitle } from '@/style/TableStyle'
@Component({
  components: {
    TableTopWrapper,
    TableTopWrapperItem,
    TableTopWrapperItemTitle
  }
})
export default class Top extends Vue {
  @Prop(Object) private map!: Record<string, any>

  @Prop(Function) private onSearch!: Function
  @Prop(Function) private clearSearchData!: Function
  @Prop(Function) private refresh!: Function
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
