<template>
<div>
   <!-- 商品分类导航 -->
    <TypeNav />
   <!--列表-->
    <ListContainer />
   <!--今日推荐-->
    <TodayRecommend />
   <!-- 商品排行 -->
    <Rank />
   <!-- 猜你喜欢 -->
    <Like />
   <!--楼层-->
    <Floor />
    <Floor />
   <!--商标-->
    <Brand />
</div>
</template>

<script type="text/ecmascript-6">
// 引入所有需要的组件对象
// import components from './components'
// 引入接口
import {reqBanners,reqFloors} from '../../api'

  import ListContainer from './ListContainer/ListContainer'
  import TodayRecommend from './TodayRecommend/TodayRecommend'
  import Like from './Like/Like'
  import Brand from './Brand/Brand'
  import Rank from './Rank/Rank'
  import Floor from './Floor/Floor'

export default {
  name:'Home',
  // components,
  components:{
    ListContainer,
    TodayRecommend,
    Like,
    Brand,
    Rank,
    Floor,
  },
  /*
  测试mock数据是否拿到的代码
  async mounted() {
    const r1 = await reqBanners()
    const r2 = await reqFloors()
    console.log(r1)
    console.log(r2)
  },*/
  mounted() {
    // 分发给异步action
    this.$store.dispatch('getBanners')
    this.$store.dispatch('getFloors')
  },
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
</style>
