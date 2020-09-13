<template>
  <table-top-wrapper>
    <a-row :gutter="32">
      <a-col span="6">
        <table-top-wrapper-item>
          <table-top-wrapper-item-title>
            轮播名称
          </table-top-wrapper-item-title>
          <a-input
            placeholder="请输入文章标题"
            :value="map.name"
            @change="({ target: { value } }) => mapItemChange({ name: value })"
          />
        </table-top-wrapper-item>
      </a-col>
      <a-col span="12">
        <table-top-wrapper-item>
          <a-button icon="search" class="button" type="primary" @click="() => onSearch()">
            搜 索
          </a-button>
          <a class="button" @click="() => clearSearchData()">
            清空条件
          </a>
          <a-button icon="search" class="button" @click="() => refresh()">
            刷新
          </a-button>
        </table-top-wrapper-item>
      </a-col>
    </a-row>
  </table-top-wrapper>
</template>

<script lang="ts">
import { inject } from '@vue/composition-api'
import { TableTopWrapper, TableTopWrapperItem, TableTopWrapperItemTitle } from '@/style/TableStyle'
export default {
  components: {
    TableTopWrapper,
    TableTopWrapperItem,
    TableTopWrapperItemTitle
  },
  setup() {
    const map = inject('map')
    const queryCondition = inject('queryCondition')
    const mapItemChange = inject('mapItemChange')
    const queryConditionItemChange = inject('queryConditionItemChange')
    const onSearch = inject('onSearch')
    const refresh = inject('refresh')
    const clearSearchData = inject('clearSearchData')

    return {
      map,
      queryCondition,
      mapItemChange,
      queryConditionItemChange,
      onSearch,
      refresh,
      clearSearchData
    }
  }
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
