import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'


import A from '@/components/a'



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
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
