import VueCompositionAPI, { VueConstructor } from './vue/index'

import '@/setup/ant-design-vue/index'
import '@/setup/ant-design-vue/spin'
// import RunTimeVue from '@/setup/vue/setRunTimeVue';

import './freeze/freezeWindowConfig'

export default {
  install: (Vue: VueConstructor): void => {
    Vue.use(VueCompositionAPI)
    // Vue.use(RunTimeVue);

    // Vue.use(Scrollbar);
    // 使用svg sprit
    // setupSvgIcon();
    // error handler
    // registerScriptErrorHandler();
  }
}
