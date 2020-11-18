import { User } from "../main"

export default {
	namespaced: true,

	state: {
		users: [],
		alertSuccess: false
	},

	getters: {
		getterUsers(state){
			return state.users
		},

		getterAlertSuccess(state){
			return state.alertSuccess
		}
	},

	mutations: {
		setterUsers(state, payload){
			return state.users = payload
		},

		setterAlertSuccess(state, payload){
			return state.alertSuccess = payload
		}
	},

	actions: {
		success({commit, state}){
			commit('setterAlertSuccess', !state.alertSuccess)
			setTimeout(() => {
			commit('setterAlertSuccess', state.alertSuccess = false)
			}, 2000);
		},
		// eslint-disable-next-line
		createUser({}, user){
			return	User.post('usuarios.json', user)
		},

		loadList({commit}, users){
			return User.get('usuarios.json', users).then(response => {
				commit('setterUsers', response.data)
				return response
			})
		}
	}
}