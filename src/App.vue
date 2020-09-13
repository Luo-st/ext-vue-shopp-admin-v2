<template>
  <div id="app">
    <router-view :key="$router.fullPath" />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  width: 100% !important;
  height: 100%;
  background: #fff;
  box-sizing: border-box;
}
</style>
