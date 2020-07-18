/*
  包含项目中所有接口的ajax请求函数
  函数的返回值是promise,函数内部调用ajax模块发请求
*/

// 引入二次封装的axios
import ajax from './ajax'
// 引入二次封装好的mockAjax
import mockAjax from './mockAjax'
/**
  获取首页三级分类列表的接口函数
  /api/product/getBaseCategoryList
 */
export const reqBaseCategoryList = () => ajax.get('/product/getBaseCategoryList')

/*
  自己定义接口获取轮播图和楼层数据
*/
export const reqBanners = () => mockAjax.get('/banners')
export const reqFloors = () => mockAjax.get('/floors')

/*
获取商品列表,搜索界面产品信息数据
searchParams:包含所有需要传递的搜索请求参数的对象,里面可以使很多参数
*/
export const reqProductList = (searchParams) => ajax.post('/list',searchParams)