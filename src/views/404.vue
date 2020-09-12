<template>
  <a-result status="404" title="404" sub-title="对不起，您访问的页面不存在">
    <template #extra>
      <a-button type="primary" @click="onGoIndex">
        返回首页
      </a-button>
    </template>
  </a-result>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Page404 extends Vue {
  private onGoIndex: () => void = () => this.$router.push('/admin')
}
</script>
