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
    token: getToken()
  },
  mutations: {
    increment(state, num = 1) {
      state.count += num
    },
    romeroken() {
      var date = new Date();
  
      var now = date.getTime();
     
      var endDate = now + 2;
     
      var leftTime = endDate - now;
      if (leftTime < 0) {
       state.token=''
      }
    }
  }
})