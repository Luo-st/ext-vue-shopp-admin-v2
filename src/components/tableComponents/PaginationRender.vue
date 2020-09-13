<template>
  <a-pagination
    :show-size-changer="false"
    :page-size="paginationProps.page_limit"
    :page_num="paginationProps.page_num"
    :total="paginationProps.total"
    :show-total="paginationProps.showTotal"
    @change="(page_num, page_limit) => paginationProps.paginationChange({ page_num, page_limit })"
  />
</template>

<script lang="ts">
import { inject } from '@vue/composition-api'
export default {
  setup() {
    const paginationProps = inject('paginationProps')
    console.log(paginationProps)
    return {
      paginationProps
    }
  }
}
</script>

<style lang="less"></style>
