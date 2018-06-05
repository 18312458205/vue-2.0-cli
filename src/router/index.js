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
        require(['@/views/login'], resolve)
    },
    {
      path: '/home',
      meta: {
        requireAuth: true
      },
      redirect: '/home/page1',
      component: resolve =>
        require(['@/views/home'], resolve),
      children: [
        {
          path: 'page1',
          component: resolve =>
            require(['@/views/page1'], resolve)
        },
        {
          path: 'page201',
          component: resolve =>
            require(['@/views/page201'], resolve)
        },
        {
          path: 'page202',
          component: resolve =>
            require(['@/views/page202'], resolve)
        },
        {
          path: 'page3',
          component: resolve =>
            require(['@/views/page3'], resolve)
        },
        {
          path: 'page4',
          component: resolve =>
            require(['@/views/page4'], resolve)
        }
      ]
    },
    {
      path: '/about',
      meta: {
        requireAuth: true
      },
      component: resolve =>
        require(['@/views/about'], resolve)
    }
  ]
})
