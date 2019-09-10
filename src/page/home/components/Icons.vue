<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.iconUrl" />
            </div>
            <p class="icon-desc">{{item.iconDesc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      swiperOption: {
        loop: false
      },
      iconList: [
        {
          id: '0001',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          iconDesc: '热门景点'
        },
        {
          id: '0002',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          iconDesc: '广州必游'
        },
        {
          id: '0003',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          iconDesc: '动植物园'
        },
        {
          id: '0004',
          iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
          iconDesc: '自然风光'
        },
        {
          id: '0005',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          iconDesc: '一日游'
        },
        {
          id: '0006',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          iconDesc: '水上乐园'
        },
        {
          id: '0007',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          iconDesc: '亲子游'
        },
        {
          id: '0008',
          iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/184e261814a5d07a5d3d08cd29cf590d.png',
          iconDesc: '长隆度假区'
        },
        {
          id: '0009',
          iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/c032ae43b15a3dac34b5e07bb0e46850.png',
          iconDesc: '广州塔'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container {
    height 0;
    padding-bottom 50%
  }
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
  }
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .44rem;
    box-sizing: border-box;
    padding: .1rem;
  }
  .icon-img-content {
    display: block;
    margin: 0 auto;
    height: 100%;
  }
  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .44rem;
    line-height: .44rem;
    color: $darkTextColor;
    text-align center
    ellipsis()
  }
</style>
