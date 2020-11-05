import Vue from 'vue'
import Router from 'vue-router'
import FirstLayout from './src/Layouts/FirstLayout'
import Create from './src/screens/Create'
import Users from './src/screens/Users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: FirstLayout,
      children: [
        {
          path: '/',
          name: 'Create',
          component: Create
        },

        {
          path: '/usuarios',
          name: 'Users',
          component: Users
        }
      ]
    }
  ]
})