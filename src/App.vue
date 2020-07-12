<template>
  <div>
      <Header />
      <router-view></router-view>
      <Footer v-if="!$route.meta.isHideFooter" />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
// 引入api接口函数
export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  // 界面加载后的生命周期回调
  // 测试拿数据
//  async mounted() {
//     const result = await reqBaseCategoryList()
//     console.log(result);  
//   },
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
</style>
