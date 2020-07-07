import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'


import A from '@/components/a'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'home',
      name: 'home',
      component: Home
    },
    {
      path: '/a',
      name: 'A',
      component: A
    }
  ]
})
