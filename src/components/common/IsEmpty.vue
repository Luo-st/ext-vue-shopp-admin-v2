<template>
  <a-empty
    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
    :image-style="{
      height: '60px',
      marginTop: '100px'
    }"
  >
    <span slot="description"> {{ title || '暂无数据' }} </span>
    <a-button
      type="primary"
      @click="
        () => {
          onConfirm && onConfirm()
        }
      "
    >
      {{ okText || '立即创建' }}
    </a-button>
  </a-empty>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class SellPriceRender extends Vue {
  @Prop(String) title!: any
  @Prop(String) okText!: any
  @Prop() onConfirm!: Function
}
</script>

<style lang="less"></style>
