import Vue from 'vue'
import Router from 'vue-router'


// import Home from '@/components/home'
import Login from '@/login/login'
import NotFind from '@/components/notFind'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

// 实现权限功能 动态路由

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   // name: 'home',
    //   // component: Home,
    //   redirect: '/login'
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true
    },
    {
      path: '/404',
      name: '404',
      component: NotFind,
      hidden: true

    },
    {
      path: '/',
      redirect: '/home',
    },
    

  ]
})
