import Vue from 'vue'
import Vuex from 'vuex'
import type from './mutations-types'

Vue.use(Vuex)

const state = {
  count: 6,
  userInfo: null,
  token: '',
  isLogin: false
}

const getters = {
  count: state => {
    return state.count
  },
  userInfo: state => {
    return state.userInfo
  },
  token: state => {
    return state.token
  },
  isLogin: state => {
    return state.isLogin
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
  setLogin ({ commit }, login) {
    commit('SET_LOGIN', login)
  },
  out ({ commit }, out) {
    commit('SET_OUT', out)
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
  SET_LOGIN (state, login) {
    state.userInfo = login.userInfo
    state.token = login.token
    state.isLogin = login.isLogin
  },
  SET_OUT (state, out) {
    state.userInfo = out.userInfo
    state.token = out.token
    state.isLogin = out.isLogin
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
