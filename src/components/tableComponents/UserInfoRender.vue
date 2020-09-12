<template>
  <div>
    <div>{{ userInfo.nick_name }}</div>
    <div>{{ userInfo.mobile }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class UserInfoRender extends Vue {
  @Prop(Object) userInfo!: any
}
</script>

<style lang="less"></style>
