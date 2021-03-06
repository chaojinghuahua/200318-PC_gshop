/*
  
 */

//  引入axios
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


// 1、设置基础路径和超时时间
const ajax = axios.create({
  baseURL:'/api',
  timeout:20000
})

// 请求拦截器
ajax.interceptors.request.use(config=>{
  // 显示进度条
  NProgress.start()
  // 直接返回请求配置对象
  return config
})

// 响应拦截器
ajax.interceptors.response.use(response=>{
  // 隐藏进度条
  NProgress.done()
  return response.data
},error => {
   // 隐藏进度条
   NProgress.done()
   alert('请求错误'+error.message || '未知错误')
   return Promise.reject(error)
})
// 暴露
export default ajax