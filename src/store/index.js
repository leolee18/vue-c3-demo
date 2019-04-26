import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={}
const getters={}
const actions={}
const mutations={}

import logindemo from './modules/logindemo'

export default new Vuex.Store({
  state,
	getters,
  mutations,
  actions,
	modules:{
		logindemo
	}
})
