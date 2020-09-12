<template>
  <div>
    <b>
      <a> ¥ {{ sellPrice }}</a>
    </b>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class SellPriceRender extends Vue {
  @Prop(String) sellPrice!: any
}
</script>

<style lang="less"></style>
