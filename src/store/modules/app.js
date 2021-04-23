// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  sidebar: null,
  sidebarImage: true,
  mini: false,
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
