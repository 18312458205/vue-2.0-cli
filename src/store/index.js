import Vue from 'vue'
import Vuex from 'vuex'
import type from './mutations-types'

Vue.use(Vuex)

var state = {
  count: 6,
  userinfo: ''
}

var getters = {
  count: state => {
    return state.count
  },
  userinfo: state => {
    return state.userinfo
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
  },
  setUserInfo ({ commit }, userinfo) {
    commit('SET_USERINFO', userinfo)
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
  },
  SET_USERINFO (state, user) {
    state.userinfo = user
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
