<template>
  <a-breadcrumb separator-class="el-icon-arrow-right">
    <a-breadcrumb-item
      v-for="(item, index) of breadcrumbData"
      :key="index"
      :to="{ path: item.path }"
      >{{ item.meta.title }}</a-breadcrumb-item
    >
  </a-breadcrumb>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({})
export default class Breadcrumb extends Vue {
  private breadcrumbData: any[] = []

  private getRouteMatched(): void {
    const matched: any = this.$route.matched.filter(
      (item: { [propsName: string]: any }, index: number) => item.name && index !== 0
    )
    this.breadcrumbData = matched
  }

  private mounted() {
    this.getRouteMatched()
  }

  @Watch('$route')
  private aa() {
    this.getRouteMatched()
  }
}
</script>

<style lang="less"></style>
