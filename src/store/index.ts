import Vue from 'vue'
import Vuex from 'vuex'
import init from './init'
import * as modules from './modules'

// tslint:disable-next-line: no-var-requires
// const path = require('path')

Vue.use(Vuex)

// const file = require.context('./modules', true, /\.ts/)
// const modules: { [propsName: string]: any } = {}
// file.keys().forEach((key: string) => {
//   const name = path.basename(key, '.ts')
//   modules[name] = file(key).default || file(key)
// })

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    ...modules,
    init
  }
})
