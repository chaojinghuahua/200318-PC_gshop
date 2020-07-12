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
import ListContainer from './ListContainer/ListContainer'
import TodayRecommend from './TodayRecommend/TodayRecommend'
import Like from './Like/Like'
import Brand from './Brand/Brand'
import Rank from './Rank/Rank'
import Floor from './Floor/Floor'
export default {
  name:'Home',
  components:{
    ListContainer,
    TodayRecommend,
    Like,
    Brand,
    Rank,
    Floor,
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
</style>
