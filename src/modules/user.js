import { User } from "../main"

export default {
	namespaced: true,

	state: {
		users: []
	},

	getters: {
		getterUsers(state){
			return state.users
		}
	},

	mutations: {
		setterUsers(state, payload){
			return state.users = payload
		}
	},

	actions: {
		// eslint-disable-next-line
		createUser({}, user){
			return	User.post('usuarios.json', { user })
		},

		loadList({commit}, users){
			return User.get('usuarios.json', users).then(response => {
				commit('setterUsers', response.data)
				return response
			})
		}
	}
}