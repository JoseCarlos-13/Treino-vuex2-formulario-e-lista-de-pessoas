import { mapGetters, mapActions, mapState } from 'vuex'

export const userState = {
	...mapState('user', [
		'users',
		'alertSuccess'
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
		'loadList',
		'success'
	])
}
