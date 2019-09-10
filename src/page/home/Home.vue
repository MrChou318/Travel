<template>
    <div>
      <home-header :city="city"></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommend :list="recommendList"></home-recommend>
      <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeWeekend from './components/Weekend'
import HomeRecommend from './components/Recommend'
import axios from 'axios'
export default {
  name: 'Home',
  data: function () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeWeekend,
    HomeRecommend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      this.city = res.data.data.city
      this.swiperList = res.data.data.swiperList
      this.iconList = res.data.data.iconList
      this.recommendList = res.data.data.recommendList
      this.weekendList = res.data.data.weekendList
      console.log(this.city)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
