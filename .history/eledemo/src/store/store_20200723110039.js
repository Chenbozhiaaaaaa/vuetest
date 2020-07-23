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
    romeroken() {
     
      // var endDate = now + 60;
     
      // var leftTime = endDate - now;
      // if (leftTime < 0) {
      //  state.token=''
      // }
    }
  }
})