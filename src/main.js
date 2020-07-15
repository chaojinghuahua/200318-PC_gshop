// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入路由器对象
import router from './router'
// 引入store
import store from './store'
// 引入TypeNav公共组件
import TypeNav from './components/TypeNav'
// 引入carouser公共组件
import Carousel from './components/Carousel'
// 引入pagination公共组件
import Pagination from './components/Pagination'
// 引入mock
import './mock/'
// 引入swiper的样式
import 'swiper/css/swiper.css'
// 设置浏览器的控制台的默认提示信息是否显示
Vue.config.productionTip = false

// 注册全局组件(所有组件都可以使用了)
Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)


new Vue({
  // 初始化之前的生命周期回调
  beforeCreate() {
    // 定义一个事件总线的属性
    Vue.prototype.$bus = new Vue()
  },
  // 渲染组件
  render: h => h(App),
  router,
  store
}).$mount('#app')
