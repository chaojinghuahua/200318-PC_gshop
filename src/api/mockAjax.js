/*
  axios的二次封装(axios本身就是对XHR原生ajax的封装)     面试必说
1. 配置通用的基础路径和超时
    const intance = axios.create({baseURL, timeout})  // intance是一个能发ajax请求的函数
    向外暴露的必须是instance
2. 显示请求进度条
    显示: 在请求拦截器回调中执行: NProgress.start()
    隐藏: 在请求完成后的成功或失败回调中执行: NProgress.done()
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
    在响应拦截器成功回调中: return response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
    在响应拦截器失败的回调中: 提法错误信息, 抛出error或返回失败的promise

5. 每个请求自动携带userTempId的请求头: 在请求拦截器中实现

6.登陆后每个请求自动携带token的请求头:在请求拦截器中实现
 */

//  引入axios
import axios from 'axios'
// 引入nprogress（进度条）
import NProgress from 'nprogress'
// 引入nprogress样式
import 'nprogress/nprogress.css'


// 1、设置基础路径和超时时间
const ajax = axios.create({
  baseURL:'/mock',
  timeout:20000
})

// 注册请求拦截器
ajax.interceptors.request.use(config=>{
  // 显示进度条
  NProgress.start()
  // 直接返回请求配置对象
  return config
})

// 注册响应拦截器
ajax.interceptors.response.use(response=>{
  // 隐藏进度条
  NProgress.done()
  return response.data
},error => {
   // 隐藏进度条
   NProgress.done()
   /* 4. 统一处理请求错误, 具体请求也可以选择处理或不处理 */
   // 显示一个统一的提示
   alert('请求错误'+error.message || '未知错误')
   // 要么抛出error 或者返回一个失败的promise
    // throw error
   return Promise.reject(error)
})

// 暴露
export default ajax