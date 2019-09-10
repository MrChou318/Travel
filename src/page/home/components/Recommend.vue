<template>
    <div>
      <div class="title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg',
          title: '长隆野生动物世界',
          desc: '感受现代与传统相融合的广州'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/88/889ae02b07140066a3.img.jpg_200x200_d3b1427c.jpg',
          title: '长隆欢乐世界',
          desc: '感受现代与传统相融合的广州'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1601/3d/3dc7f222d6bca6a790.img.jpg_200x200_e0bb3017.jpg',
          title: '广州花城汇MAG环球魔幻世界',
          desc: '感受现代与传统相融合的广州'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1605/56/568488164697e2f590.img.jpg_200x200_967bd139.jpg',
          title: '越美冰雪大世界',
          desc: '感受现代与传统相融合的广州'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl";
  .title {
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    /*首行文本缩进*/
    text-indent: .2rem;
  }
  .item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;
  }
  .item-img {
    height: 1.7rem;
    width: 1.7rem;
    padding: .1rem;
  }
  .item-info {
    flex: 1;
    padding: .1rem;
    min-width 0;
  }
  .item-title {
    line-height: .54rem;
    font-size: .32rem;
    ellipsis();
  }
  .item-desc {
    line-height: .4rem;
    color: #ccc;
    ellipsis();
  }
  .item-button {
    line-height: .44rem;
    margin-top: .16rem;
    background: #ff9300;
    padding: 0 .2rem;
    border-radius: .06rem;
    color: #fff;
  }
</style>
