import { createStore } from 'vuex'
import constants from '@/constants'

const store = createStore({
  state: () => ({
    sideBarActive: constants.SIDEBAR.HOME
  }),
  getters: {
    getSideBarActive (state) {
      return state.sideBarActive
    }
  },

  mutations: {
    setSideBarActive (state, newValue) {
      state.sideBarActive = newValue
    }
  },

  actions: {
    activeSideBar: ({ commit }, data) => {
      commit('setSideBarActive', data)
    }
  }
})

export default store
