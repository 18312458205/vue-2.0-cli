import Vue from 'vue'
import Vuex from 'vuex'
import type from './mutations-types'

Vue.use(Vuex)

var state = {
  count: 6
}

var getters = {
  count: state => {
    return state.count
  }
}

const actions = {
  increment ({ commit }) {
    commit(type.INCERMENT)
  },
  decrement ({ commit }) {
    if (state.count > 10) {
      commit(type.DECERMENT)
    }
  }
}

const mutations = {
  [type.INCERMENT] (state) {
    // 变更状态
    state.count++
  },
  [type.DECERMENT] (state) {
    // 变更状态
    state.count--
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
