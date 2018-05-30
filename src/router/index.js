import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: resolve =>
        require(['@/components/login'], resolve)
    },
    {
      path: '/home',
      meta: {
        requireAuth: true
      },
      component: resolve =>
        require(['@/components/home'], resolve)
    },
    {
      path: '/about',
      meta: {
        requireAuth: true
      },
      component: resolve =>
        require(['@/components/about'], resolve)
    }
  ]
})
