import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login')
    }
  ]
})
