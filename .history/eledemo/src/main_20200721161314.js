// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/index.css'
Vue.config.productionTip = false
import ElementUI, { Form } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 全局注册组件
import Slider from '@/components/aside.vue'
Vue.component(Slider.name, Slider)
Vue.use(ElementUI);
import {store} from './store/stroe'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
