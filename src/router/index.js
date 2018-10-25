import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/layout',
      component: () => import('@/views/layout/index'),
      redirect: '/layout/home',
      children: [
        {
          path: 'home',
          name: 'home',
          meta: {
            title: '首页'
          },
          component: () => import('@/views/home')
        },
        {
          path: 'adminUser',
          name: 'adminUser',
          meta: {
            title: '管理员列表'
          },
          component: () => import('@/views/admin/adminUser')
        },
        {
          path: 'addAdmin',
          name: 'addAdmin',
          meta: {
            title: '添加管理员'
          },
          component: () => import('@/views/admin/addAdmin')
        },
        {
          path: 'news',
          name: 'news',
          meta: {
            title: '新闻管理'
          },
          component: () => import('@/views/news/index')
        },
        {
          path: 'addNews',
          name: 'addNews',
          meta: {
            title: '添加新闻'
          },
          component: () => import('@/views/news/addNews')
        }
      ]
    }
  ]
})
