// 引入api接口函数
import { reqBaseCategoryList, reqBanners,reqFloors } from '@/api'

export default {
  state:{
    // 三级分类信息状态数据
    baseCategoryList:[],   // 分类列表
    banners:[],  // 广告轮播列表数据
    floors:[]  // 楼层列表数据
  },

  mutations:{
    // 直接修改三级分类状态数据
    RECEIVE_BASE_CATEGORY_LIST(state,baseCategoryList){
      state.baseCategoryList = baseCategoryList.splice(0,baseCategoryList.length-2)
    },

    // 直接修改轮播图数据
    RECEIVE_BANNERS (state, banners) {
      state.banners = banners
    },

    // 直接修改楼层数据
    RECEIVE_FLOORS (state, floors) {
      state.floors = floors
    },
    
  },

  actions:{
    /* 
      请求获取广告轮播列表的异步action
    */
    async getBaseCategoryList ({commit}){
      // 调用api接口函数
      const result = await reqBaseCategoryList()
      if(result.code === 200){
        // 获取响应回来的状态数据
        const baseCategoryList = result.data
        // 触发mutation调用
        commit('RECEIVE_BASE_CATEGORY_LIST',baseCategoryList)
      }
    },

    /* 
      请求获取楼层列表的异步action
    */
   async getBanners ({commit}){
    //  调用api接口函数
    const result = await reqBanners()
    if(result.code === 200){
      // 获取响应回来的状态数据
      const banners = result.data
      commit('RECEIVE_BANNERS',banners)
    }
   },

   /* 
      请求获取楼层列表的异步action
    */
   async getFloors ({commit}){
    // 调用api接口函数
    const result = await reqFloors()
    if(result.code === 200){
      // 获取响应回来的状态数据
      const floors = result.data
      commit('RECEIVE_FLOORS',floors)
    }
   }
  },
  getters:{},
}