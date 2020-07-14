<template>
  <div class="swiper-container" id="swiper1" ref="swiper2">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./images//banner1.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images//banner2.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images//banner3.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images//banner4.jpg" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 引入swiper
  import Swiper from 'swiper'
  // 引入swiper样式
  import 'swiper/css/swiper.css'
  export default {
    name: 'Carousel',
    // 界面加载后的生命周期回调
    mounted() {
      // var mySwiper = new Swiper ('.swiper-container', {类样市选择器
      // var mySwiper = new Swiper ('#swiper1', {  id选择器
      var mySwiper = new Swiper(this.$refs.swiper2, { // 直接使用DOM对象
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    },
  }
</script>

<style scoped>


</style>