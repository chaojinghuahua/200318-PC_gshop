/* 
管理搜索模块相关数据的vuex子模块
*/

import {reqProductList} from '@/api'

export default {
  state:{
    productList:{}  // 商品信息数据对象
  },

  mutations:{
    RECEIVE_PRODUCT_LIST(state,productList){
      state.productList = productList
    }
  },

  actions:{
    async getProductList({commit},searchParams){
      // console.log(searchParams);  这里面有很多空的参数
      // 把options对象里的属性全部结构出来
      searchParams = {...searchParams}
      
      // 不需要携带，所以进行删除操作
      //  Object.keys(searchParams)得到属性里面的键(属性)
      // forEach遍历传过来的所有参数，如果参数的值是空的或者该参数是一个空数组
      Object.keys(searchParams).forEach(key=>{
        // 如果参数的值是空的或者该参数是一个空数组
        /*  
            判断参数要考虑空字符串，和空数组两种情况
            searchParams[key] ==='' 当前的是个空的字符串
            searchParams[key]instanceof Array 类型是数组，
            searchParams[key].length===0 数组的长度是0 ，说明是个空数组
        */
        if(searchParams[key] ===''||searchParams[key]instanceof Array&&searchParams[key].length===0){
          // 删除空的参数
          delete searchParams[key]
        }
      })
      // 调用api接口函数
      const result = await reqProductList(searchParams)
      if(result.code === 200){
        // 获取响应回来的状态数据
        const productList = result.data
        commit('RECEIVE_PRODUCT_LIST',productList)
      }
    }
  },

  getters:{
    // 根据状态数据获取品牌数据数组
    trademarkList(state){
      // 确保当前的一定是个数组
      return state.productList.trademarkList || []
    },
    // 根据状态数据获取平台属性数据数组
    attrsList(state){
      return state.productList.attrsList || []
    },
    // 根据状态数据获取产品信息数据数组
    goodsList(state){
      return state.productList.goodsList || []
    },
  }
}