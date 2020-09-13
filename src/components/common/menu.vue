<template>
  <div class="menu">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      :inline-collapsed="collapsed"
    >
      <a-sub-menu v-for="(item, index) in list" :key="index">
        <span slot="title">
          <a-icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </span>
        <a-menu-item v-for="v in item.children" :key="v.key" @click="toUrl(item, v)">{{
          v.title
        }}</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      router: true,
      list: [
        {
          title: '系统首页',
          key: 'index',
          icon: 'user',
          children: [
            {
              key: '',
              title: '数据统计'
            }
          ]
        },
        {
          title: '用户管理',
          key: 'base',
          icon: 'table',
          children: [
            {
              key: 'user/list',
              title: '用户列表'
            }
          ]
        },
        {
          title: '提现管理',
          key: 'drawcash',
          icon: 'table',
          children: [
            {
              key: 'drawcash/list',
              title: '提现列表'
            }
          ]
        },
        {
          title: '内容管理',
          key: 'article',
          icon: 'table',
          children: [
            {
              key: 'article/list',
              title: '文章列表'
            },
            {
              key: 'banner/list',
              title: '轮播图'
            }
          ]
        }
      ],
      activeRouter: ''
    }
  },
  methods: {
    toUrl(item, v) {
      this.$router.push({
        path: '/admin/' + v.key
      })
    }
  },
  mounted() {}
}
</script>

<style lang="less">
.menu {
  height: 100%;
  overflow-y: auto;
  padding-bottom: 32px;
  position: relative;
}
.menu::-webkit-scrollbar {
  display: none;
}
.iconfont {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  display: inline-block;
}
.ant-menu-dark,
.ant-menu-inline,
.ant-menu-sub,
.ant-menu-dark .ant-menu-inline.ant-menu-sub {
  // background-color: rgb(45, 58, 75) !important;
  box-shadow: none !important;
}
</style>
