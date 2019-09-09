<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/d52e15a5769b90dc1fc8ad15b093d70f.jpg_750x200_71f1c317.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/acb2599f8574fcfdb12fdd0dfa71f038.jpg_750x200_4c05039f.jpg'
        },
        {
          id: '0003',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/4c232af79d5ee2826994519d5ced0ed0.jpg_750x200_5ec9be08.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .wrapper >>> .swiper-pagination-bullet-active{
    background: #fff;
  }
  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.67%;
  }
  .swiper-img{
    width: 100%;
  }
</style>
