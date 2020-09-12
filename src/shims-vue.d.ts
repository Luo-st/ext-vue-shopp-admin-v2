import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
    $route: Route
    $message: any
    $confirm: any
    $notification: any
  }
}
