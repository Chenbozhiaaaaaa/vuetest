import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import { getToken, setToken, removeToken } from '@/utils/auth'
import { getRouter } from '@/utils/getrouter'

export const store = new Vuex.Store({
  // modules:{
  //   permission
  // },
  state: {
    count: 0,
    token: {},
    oldtime:'',
    ismenu:false,
    navList:[],
    dynamicRouter:getRouter()
  },
  mutations: {
    increment(state, num = 1) {
      state.count += num
    },
    getoldtime(state){
      state.oldtime = new Date().getTime()
    },
    setnavList(state,n){
      state.navList = n
    },
    // 时间戳设置token过期时间
    romeroken(state) {
      var endDate = new Date().getTime()
      var leftTime = endDate - state.oldtime;
      if (leftTime > 4000000000) {
        removeToken()
      }
    },
    gettoken(state,n){
      state.token = n
    },
    changeMenu(state){
      state.ismenu = !state.ismenu
    }
 
  }
})