<template>
  <router-view :key="$router.fullPath"></router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class User extends Vue {}
</script>
<style lang="scss"></style>
