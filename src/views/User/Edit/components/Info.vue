<template>
  <div class="wrapper">
    <div class="title">
      客户资料
    </div>
    <div class="info">
      <div class="item">
        <span class="label">状态：</span>
        <span v-if="userInfo.user_info.status === 1">正常</span>
        <span v-if="userInfo.user_info.status === 9">黑名单</span>
        <a-divider type="vertical"> </a-divider>
        <a-popconfirm
          v-if="userInfo.user_info.status === 1"
          title="确认拉黑改用户吗?"
          ok-text="确认"
          cancel-text="取消"
          @confirm="onConfirmUpdataStatus(9)"
        >
          <a>拉黑</a>
        </a-popconfirm>
        <a @click="onConfirmUpdataStatus(1)" v-if="userInfo.user_info.status === 9">
          恢复
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ajax, url } from '@/api'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Base extends Vue {
  @Prop(Object) userInfo!: any

  private onConfirmUpdataStatus(status: number) {
    const {
      user_info: { uuid }
    } = this.userInfo
    const data = {
      uuid: uuid,
      status
    }
    ajax({
      url: url.shopUserChangeStatus,
      data
    })
      .then(res => {
        this.$message.success(res.msg)
        this.userInfo.user_info.status = status
      })
      .catch(err => {})
  }
}
</script>
<style lang="less">
.wrapper {
  > .title {
    font-size: 14px;
    font-weight: 500;
    padding: 20px;
  }
  .info {
    padding: 0 20px 30px 20px;
    display: flex;
    flex-wrap: wrap;
    > .item {
      flex: 0 0 220px;
      margin: 10px 0 0 0;
      > .iconfont {
        font-size: 13px;
        margin-left: 5px;
      }
      .btn {
        margin-left: 8px;
      }
      .lehei {
        margin-left: 10px;
      }
    }
  }
}
</style>
