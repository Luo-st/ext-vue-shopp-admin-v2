<template>
  <div class="base-wrapper">
    <div class="title">
      基本信息
    </div>
    <div class="base">
      <div class="avatar">
        <a-avatar :size="68" :src="userInfo.avatar" />
      </div>
      <div class="base-box">
        <div class="item">
          <span class="label">姓名：</span>
          <span>{{ userInfo.name }}</span>
        </div>
        <div class="item">
          <span class="label">手机号码：</span>
          <span>{{ userInfo.mobile }}</span>
        </div>
        <div class="item">
          <span class="label">注册时间：</span>
          <span>{{ userInfo.create_time }}</span>
        </div>
        <div class="item">
          <span class="label">昵称：</span>
          <span class="valie">{{ userInfo.nick_name || '暂未设置昵称' }}</span>
        </div>
        <div class="item">
          <span class="label">来源：</span>
          <span class="valie">{{ userInfo.register_client_type }}</span>
        </div>
        <div class="item">
          <span class="label">微信号：</span>
          <span class="valie">{{ userInfo.wechat }}</span>
        </div>
        <div class="item">
          <span class="label">最后登录时间：</span>
          <span class="valie">{{ lastLoginTime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Base extends Vue {
  @Prop(Object) userInfo!: any
  @Prop(String) lastLoginTime!: undefined
}
</script>
<style lang="less">
.base-wrapper {
  > .title {
    font-size: 14px;
    font-weight: 500;
    padding: 20px;
  }
  > .base {
    display: flex;
    padding: 0 20px 20px 20px;
    > .avatar {
      flex: 0 0 auto;
    }
    > .base-box {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      > .item {
        flex: 0 0 320px;
        margin: 10px 0 0 20px;
      }
    }
  }
}
</style>
