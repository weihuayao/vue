import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}
const mutations = {
  add (state) {
    state.count++
  },
  reducer (state) {
    state.count--
  }
}
const actions = {
  increment ({ commit }) {
    commit('add')
  },
  decrement ({ commit }) {
    commit('reducer')
  },
  incrementIfOdd ({ commit, state }) {
    if (state.count % 2 === 0) {
      commit('add')
    }
  },
  incrementAsync ({ commit }) {
    setTimeout(() => { commit('add') }, 1000)
  }
}

const getters = {
  evenOrOdd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
