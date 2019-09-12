<template>
    <ul class="list">
      <li class="item" v-for="(value,key) of cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .list
    //垂直居中
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      text-align center
      color $bgColor
      line-height .4rem
</style>
