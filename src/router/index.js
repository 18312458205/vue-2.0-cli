import Vue from 'vue'
import Router from 'vue-router'
import ref01 from '@/components/ref01'
import ref02 from '@/components/ref02'
import ref03 from '@/components/ref03'
import upload from '@/components/upload'
import photo from '@/components/photo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ref01',
      name: 'ref01',
      component: ref01
    },
    {
      path: '/ref02',
      name: 'ref02',
      component: ref02
    },
    {
      path: '/ref03',
      name: 'ref03',
      component: ref03
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/photo',
      name: 'photo',
      component: photo
    }
  ]
})
