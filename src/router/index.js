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
      redirect: '/home/page101',
      component: resolve =>
        require(['@/views/home'], resolve),
      children: [
        {
          path: 'page101',
          name: '导航101',
          component: resolve =>
            require(['@/views/page101'], resolve)
        },
        {
          path: 'page102',
          name: '导航102',
          component: resolve =>
            require(['@/views/page102'], resolve)
        },
        {
          path: 'page2',
          name: '导航2',
          component: resolve =>
            require(['@/views/page2'], resolve)
        },
        {
          path: 'page3',
          name: '导航3',
          component: resolve =>
            require(['@/views/page3'], resolve)
        },
        {
          path: 'page4',
          name: '导航4',
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
        require(['@/components/about'], resolve)
    }
  ]
})
