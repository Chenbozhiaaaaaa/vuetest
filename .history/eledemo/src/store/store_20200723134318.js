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
    oldtime:''
  },
  mutations: {
    increment(state, num = 1) {
      state.count += num
    },
    getoldtime(state){
      state.oldtime = new Date().getTime()
    },
    romeroken(state) {
      var endDate = new Date().getTime()
      var leftTime = endDate - state.oldtime;
      if (leftTime > 30000) {
       state.token=removeToken()
      }
    },
  }
})