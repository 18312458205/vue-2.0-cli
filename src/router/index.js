import Vue from 'vue'
import Router from 'vue-router'
import ref01 from '@/components/ref01'
import ref02 from '@/components/ref02'
import ref03 from '@/components/ref03'
import upload from '@/components/upload'
import uploadphoto from '@/components/uploadphoto'
import dragdrop from '@/components/dragdrop'
import vuex from '@/components/vuex'

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
      path: '/uploadphoto',
      name: 'uploadphoto',
      component: uploadphoto
    },
    {
      path: '/dragdrop',
      name: 'dragdrop',
      component: dragdrop
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex
    }
  ]
})
