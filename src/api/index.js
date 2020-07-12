/*
  封装api接口函数
*/

// 引入二次封装的axios
import ajax from './ajax'

/**
  获取首页三级分类列表的接口函数
  /api/product/getBaseCategoryList
 */
export const reqBaseCategoryList = () => ajax.get('/product/getBaseCategoryList')

