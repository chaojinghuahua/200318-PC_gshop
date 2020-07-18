// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 声明使用插件
Vue.use(VueRouter)
// 引入routes
import routes from './routes'
// 路由跳转中push和replace方法内部需要有默认的成功的空回调或者失败的空回调
// 重写(重新定义)路由器的push和replace方法
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 重新设置
VueRouter.prototype.push = function (location,onComplete=()=>{},onAbort) {
  return originPush.call(this,location,onComplete,onAbort)
}

VueRouter.prototype.replace = function (location,onComplete,onAbort=()=>{}) {
  return originReplace.call(this,location,onComplete,onAbort)
}

export default new VueRouter({
  mode:'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
