import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'


import A from '@/components/a'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)

}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home, children: [
        {
          path: '/a',
          name: 'A',
          component: A
        }
      ]
    },

  ]
})
