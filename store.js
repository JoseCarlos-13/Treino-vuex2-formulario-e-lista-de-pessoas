import Vuex from 'vuex'
import Vue from 'vue'
import user from './src/modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {user}
})