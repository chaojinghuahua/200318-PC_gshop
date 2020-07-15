import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 注册路由并且暴露出去
export default [
  // Home路由注册
  {
    path:'/',
    component:Home
  },
  {
    // params方式传参
    path:'/search/:keyword?',  // ?代表可传值，可不传，有没有都可以跳转
    // query方式传参
    // path:'/search',
    component:Search,
    name:'search' //params的方式以对象的写法进行路由跳转的时候参数的传递需要name
  },
  {
    path:'/login',
    component:Login,
    meta:{
      isHideFooter:true   // true 默认是隐藏
    }
  },
  {
    path:'/register',
    component:Register,
    meta:{
      isHideFooter:true
    }
  },
]