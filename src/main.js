// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from '@/js/AxiosPlugin'
import store from './store/index.js'
import './assets/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js'
Vue.use(ElementUI)

// eslint-disable-next-line
// import './mocks/mock.js'

Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/api'
Vue.config.productionTip = false

// Add a request interceptor
Axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.requireAuth)) {
    if (localStorage.token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
