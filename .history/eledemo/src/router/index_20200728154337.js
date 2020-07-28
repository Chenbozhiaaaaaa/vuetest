import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'


import A from '@/components/a'
import B from '@/components/b'
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
      component: Login
    },

    {
      path: "*",
      component: NotFind
    }

  ]
})

export const dynamicRouter =[ //动态路由
  {
    path: '/',
    name: 'home',
    meta: {  //添加meta标签，里面自定义了roles，用来设置权限
      roles:['admin','user']  //该路由仅admin和user权限访问
    },
    component: (resolve) => require(['../components/home.vue'], resolve), 
    children: [
      {
        path: '/a',
        name: 'A',
        meta: {  //添加meta标签，里面自定义了roles，用来设置权限
          roles:['admin']  //该路由仅admin和user权限访问
        },
        component: (resolve) => require(['../components/a.vue'], resolve)
      },
      {
        path: '/b',
        name: 'B',
        meta: {  //添加meta标签，里面自定义了roles，用来设置权限
          roles:['admin','user']  //该路由仅admin和user权限访问
        },
        component: (resolve) => require(['../components/b.vue'], resolve)
      },
    ]
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: Home, children: [
  //     {
  //       path: '/a',
  //       name: 'A',
  //       component: A
  //     },
  //     {
  //       path: '/b',
  //       name: 'B',
  //       component: B
  //     },
  //   ]
  // },
]
