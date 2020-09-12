<template>
  <a-pagination
    :show-size-changer="false"
    :page-size="pagination.page_limit"
    :page_num="pagination.page_num"
    :total="pagination.data_count"
    :show-total="total => `共 ${total} 条`"
    @change="(page_num, page_limit) => paginationChange({ page_num, page_limit })"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class PaginationRender extends Vue {
  @Prop(Object) pagination!: any
  @Prop(Function) paginationChange!: Function
}
</script>

<style lang="less"></style>
