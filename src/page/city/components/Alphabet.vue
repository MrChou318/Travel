<template>
    <ul class="list">
      <li class="item"
          v-for="(item) of letters"
          :key="item"
          @click="handleLetterClick"
          @touchstart="handTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          :ref="item"
      >{{item}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      var letter = e.target.innerHTML
      this.$emit('letterClick', letter)
    },
    handTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('letterClick', this.letters[index])
          }
        }, 10)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
