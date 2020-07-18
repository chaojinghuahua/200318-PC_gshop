// 引入mock，拦截ajax请求，返回随机生成的数据
import Mock from 'mockjs'

// 引入banners数据
import banners from './banners.json'
// 引入floors数据
import floors from './floors.json'

// const { mock } = require("mockjs");

// 参数：对象，可以设计返回的数据的格式及内容
// '/mock/banners'拦截的地址，根据前面的地址返回数据data:banners
Mock.mock('/mock/banners',{code:200,data:banners})
Mock.mock('/mock/floors',{code:200,data:floors})
// console.log('这里代码执行')