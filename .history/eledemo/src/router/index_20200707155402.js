import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'


import A from '@/components/a'
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {

return originalPush.call(this, location).catch(err => err)

}

作者：Nicholas_liang
链接：https://www.jianshu.com/p/6fbb009c45c4
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
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
