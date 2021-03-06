// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
// import echarts from 'echarts'
import Axios from '@/js/AxiosPlugin'
import store from './store/index.js'
import './css/reset.css'
// import ElementUI from 'element-ui'
import {
  Pagination,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  MessageBox,
  Message
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js'
// Vue.use(ElementUI)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)

// eslint-disable-next-line
// import './mocks/mock.js'

// Vue.prototype.$echarts = echarts
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.prototype.$axios = Axios

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
  // 从本地存储中获得的值
  let userInfo = JSON.parse(localStorage.getItem('userInfo'))
  let token = localStorage.getItem('token')
  let isLogin = JSON.parse(localStorage.getItem('isLogin'))
  // 当非登陆页面时
  if (to.matched.some(m => m.meta.requireAuth)) {
    // 在没有登陆的情况下，跳转到非登陆页面
    if (!isLogin && to.path !== '/login') {
      next({
        path: '/login'
        // query: {redirect: to.fullPath}
      })
      // 在已经登陆的状态下,刷新页面，避免vuex的数据消失
    } else if (isLogin && to.path !== '/login') {
      next(
        store.dispatch('setLogin', { userInfo, token, isLogin })
      )
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
