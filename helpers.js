import { mapGetters, mapActions, mapState } from 'vuex'

export const userState = {
	...mapState('user', [
		'users'
	]),
}

export const userComputed = {
	...mapGetters('user', [
		'getterUsers'
	])
}

export const userMethods = {
	...mapActions('user', [
		'createUser',
		'loadList'
	])
}
