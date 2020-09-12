<template>
  <page-wrapper>
    <content-wrapper :v-if="userInfo.user_info">
      <Base :userInfo="userInfo.user_info" :lastLoginTime="userInfo.last_login_time" />
      <info :userInfo="userInfo" />
    </content-wrapper>
  </page-wrapper>
</template>

<script lang="ts">
import { ajax, url } from '@/api'
import { Component, Vue } from 'vue-property-decorator'
import { PageWrapper, ContentWrapper, TableBottomWrapper } from '@/style/TableStyle'
import Info from './components/Info.vue'
import Base from './components/Base.vue'
@Component({
  components: {
    PageWrapper,
    ContentWrapper,
    TableBottomWrapper,
    Base,
    Info
  }
})
export default class Edit extends Vue {
  private params = this.$route.params
  private userInfo: any = {
    address_info: [],
    asset_info: {},
    transaction_info: {},
    user_info: {}
  }

  private async init(): Promise<void> {
    ajax({
      url: url.shopUserDetailGet,
      data: {
        user_uuid: this.params.uuid
      }
    })
      .then(res => {
        this.userInfo = res?.data
      })
      .catch(err => {})
  }

  private created() {
    this.init()
  }
}
</script>
<style lang="less"></style>
