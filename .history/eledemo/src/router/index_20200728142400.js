import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'


import A from '@/components/a'
import B from '@/components/b'
import Login from '@/login/login'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      // name: 'home',
      // component: Home,
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home, children: [
        {
          path: '/a',
          name: 'A',
          component: A
        },
        {
          path: '/b',
          name: 'B',
          component: B
        },
      ]
    },
    {
      path: '/home',
      component: () => import('./notFind') // 或者使用component也可以的
    }

  ]
})

