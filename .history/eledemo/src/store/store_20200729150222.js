import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import { getToken, setToken, removeToken } from '@/utils/auth'

export const store = new Vuex.Store({
  // modules:{
  //   permission
  // },
  state: {
    count: 0,
    token: getToken(),
    oldtime:'',
    ismenu:false,
    navList:[]
  },
  mutations: {
    increment(state, num = 1) {
      state.count += num
    },
    getoldtime(state){
      state.oldtime = new Date().getTime()
    },
    setnavList(state){
      state.navList = this.$router.options.routes
      console.log(state.navList);
    },
    // 时间戳设置token过期时间
    romeroken(state) {
      var endDate = new Date().getTime()
      var leftTime = endDate - state.oldtime;
      if (leftTime > 4000000000) {
        removeToken()
      }
    },
    changeMenu(state){
      state.ismenu = !state.ismenu
    }
 
  }
})