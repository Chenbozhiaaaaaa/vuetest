import Vue from 'vue'
import Router from 'vue-router'

import Text from '@/components/text'
// import Home from '@/components/home'

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
    // {
    //   path: '/text',
    //   name: 'Text',

    //   // component: (resolve) => require(['../components/text.vue'], resolve),
    //   component:Text,

    // },
    // {
    //   path: "*",
    //   component: NotFind
    // }

  ]
})
// 模拟后台来的数据
export const dynamicRouter =[ //动态路由
  {  
    path: '/home',
    icon: "el-icon-document",
    title: "首页",
    name: 'home',
    meta: {  
      roles:['admin','user']  
    },
    component: (resolve) => require(['../components/home.vue'], resolve), 
    children: [
      {
        icon: "el-icon-document",
        title: "订单管理",
        path: '/a',
        name: 'A',
        meta: {  
          roles:['admin']  
        },
        component: (resolve) => require(['../components/a.vue'], resolve),
        children:[
          {
            path: '/text',
            name: 'Text',
            meta: {  
              roles:['admin','user']  
            },
            // component: (resolve) => require(['../components/text.vue'], resolve),
            component:Text,
      
          },
        ]
      },
      {
        path: '/b',
        name: 'B',
        icon: "el-icon-dish",
        title: "菜单管理",
        meta: {  
          roles:['admin','user']  
        },
        component: (resolve) => require(['../components/b.vue'], resolve)
      },
    ]
  },

]
