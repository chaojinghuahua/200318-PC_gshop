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