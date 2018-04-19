import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userInfo: {},
  isLoading: false,
  direction: 'forward'
}
export default new Vuex.Store({
  state,
  mutations: {
    UPDATE_USER (state, payload) {
      state.userInfo = payload.userInfo
      console.log(state.userInfo)
    },
    UPDATE_LOADING (state, payload) {
      state.isLoading = payload.isLoading
    },
    UPDATE_DIRECTION (state, payload) {
      state.direction = payload.direction
    }
  }
})
