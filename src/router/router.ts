import Vue from 'vue'
import VueRouter, { Route, RouteConfig } from 'vue-router'
import Layout from '../layout/Layout.vue'
import { constantRoutes } from './constant-routes'
import store from '@/store'
import { getStorage, StorageKey } from '@/utils/storage'

Vue.use(VueRouter)

interface StrObj {
  [propName: string]: any
}

const routes: Array<RouteConfig> = [
  {
    path: '/admin',
    name: 'admin',
    component: Layout,
    meta: { title: '后台管理' },
    children: [
      {
        path: '/',
        name: 'home',
        meta: { title: '数据统计' },
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
      },
      ...constantRoutes
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/admin'
  },
  {
    path: '*',
    name: '404',
    component: Layout,
    children: [
      {
        name: '404',
        path: '*',
        component: () => import(/* webpackChunkName: "Login" */ '../views/404.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 动态添加路由的方法
const mergeRoute = async () => {
  // 本地中有存储的时候更新
  const memu = getStorage(StorageKey.MENU)
  const userInfo = getStorage(StorageKey.USER_INFO)
  const tokenInfo = getStorage(StorageKey.TOKEN_INFO)
  store.dispatch('init/changeUserInfo', userInfo)
  store.dispatch('init/changeTokenInfo', tokenInfo)
  store.dispatch('init/changeMemu', memu)
}
/**
 * 路由拦截器start
 */
router.beforeEach((to: Route, from: Route, next) => {
  // 获取登录信息
  mergeRoute()
  const tokenInfo = getStorage(StorageKey.TOKEN_INFO)
  if (!tokenInfo) {
    if (to.name !== 'Login') {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

/**
 * 路由拦截器 end
 */
router.afterEach((to: Route, from: Route) => {
  console.log(to.name)
})

router.onError((error: any) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  if (isChunkLoadFailed) {
    location.reload()
  }
})

export default router
