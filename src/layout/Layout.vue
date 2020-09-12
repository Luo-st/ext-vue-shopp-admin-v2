<template>
  <div class="wrapper">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider width="220" v-model="collapsed" theme="light" :trigger="null">
        <div class="logo">
          后台管理
        </div>
        <menuList></menuList>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>
          <div class="head-info">
            <Breadcrumb></Breadcrumb>
          </div>
          <Header></Header>
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '5px 2px 0px', background: '#fff', minHeight: '280px' }"
        >
          <router-view :key="$route.fullPath"></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import menuList from '../components/common/menu'
import Header from './header'
import Breadcrumb from './breadcrumb'

export default {
  data() {
    return {
      collapsed: false
    }
  },
  components: {
    Header,
    menuList,
    Breadcrumb
  }
}
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  /* padding-top: 69px; */
}
.ant-layout {
  height: 100%;
}
.ant-layout-content {
  padding: 0 !important;
}
.ant-layout-header {
  background: rgb(255, 255, 255);
  padding: 0px 20px;
  display: flex;
  align-items: center;
}
.head-info {
  flex: 1;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 64px;
  background-color: #1890ff;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 22px;
}
</style>
