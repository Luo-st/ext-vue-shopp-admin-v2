<template>
  <div class="app-header">
    <!-- 头部导航 -->
    <div class="header-info">
      <!-- <breadcrumb /> -->
    </div>

    <div class="userinfo-submenu">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <span>
            {{ username }}
          </span>
          <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item key="setUser">
            修改信息
          </a-menu-item>
          <a-menu-item key="loginOut" @click="onLoginOut">
            退出登录
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import { getStorage, StorageKey, rmStorage } from '@/utils/storage'

import Breadcrumb from './../breadcrumb'
@Component({
  components: {
    Breadcrumb
  }
})
export default class Header extends Vue {
  @Action('viewStore/toogleSidebar') private toogleSidebar!: () => void
  @Action('init/changeUserInfo') private changeUserInfo!: (params: any) => void
  @Action('init/changeTokenInfo') private changeTokenInfo!: (params: any) => void
  @Action('init/changeMemu') private changeMemu!: (params: any) => void

  private username = ''

  private logout(): void {
    this.$router.push({ name: 'login' })
  }

  private onLoginOut(): void {
    rmStorage(StorageKey.TOKEN_INFO)
    rmStorage(StorageKey.USER_INFO)
    rmStorage(StorageKey.MENU)
    rmStorage(StorageKey.ONLINE)
    this.changeUserInfo({})
    this.changeTokenInfo({})
    this.changeMemu([])
    this.$router.push('/login')
  }

  private mounted() {
    const { nick_name } = getStorage(StorageKey.USER_INFO)
    this.username = nick_name
  }
}
</script>
<style lang="less">
.app-header {
  height: 64px;
  background: #fff;
  display: flex;
  flex-direction: row;
  line-height: 50px;
  color: #fff;
  .logo {
    width: 240px;
    height: inherit;
    text-align: center;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  .header-info {
    flex: 1;
    margin: 0 10px;
    line-height: 50px;
  }
  .userinfo-submenu {
    width: 200px;
    height: inherit;
    text-align: right;
    margin-right: 2rem;
  }
}
</style>
