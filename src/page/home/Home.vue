<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-weekend></home-weekend>
      <home-recommend></home-recommend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeWeekend from './components/Weekend'
import HomeRecommend from './components/Recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeWeekend,
    HomeRecommend
  }
}
</script>

<style scoped>

</style>
