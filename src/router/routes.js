// 引入Home组件,
import Home from '@/pages/Home'
// 引入Register组件
import Register from '@/pages/Register'
// 引入Login组件
import Login from '@/pages/Login'
// 引入Search组件
import Search from '@/pages/Search'
// 引入Detail组件
import Detail from '@/pages/Detail'

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
  // Detail路由组件
  {
    path:'/detail/:skuId',
    component:Detail,
    name:'detail'
  },
  // 路由的重定向设置
  {
    path: '/',
    redirect: '/'
  }
]