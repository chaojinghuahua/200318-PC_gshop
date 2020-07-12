/* 
Vuex最核心的管理对象: store(仓库)
*/
// 引入vue
import  Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 
import modules from './modules'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// 声明使用vuex
Vue.use(Vuex)
// 暴露vuex
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules
})
