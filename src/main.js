// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入路由器对象
import router from './router'
// 引入store
import store from './store'
// 引入TypeNav
import TypeNav from './components/TypeNav'
// 设置浏览器的控制台的默认提示信息是否显示
Vue.config.productionTip = false

// 注册全局组件(所有组件都可以使用了)
Vue.component('TypeNav', TypeNav)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
