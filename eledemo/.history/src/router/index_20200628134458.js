import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 全局注册组件
import Slider from '@components/aside'

Vue.use(Router)
Vue.use(ElementUI);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
