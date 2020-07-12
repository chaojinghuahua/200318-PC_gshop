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
    path:'/search/:keyword?',
    component:Search,
    name:'search'
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