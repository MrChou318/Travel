import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: mutations,
  // getters类似于组件里面的计算属性（根据state里面的数据，算出新的数据，避免数据冗余）
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
