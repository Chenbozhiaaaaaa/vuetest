import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export  const store = new Vuex.Store({
  state: {
    count: 0,
    token:getToken()
  },
  mutations: {
    increment (state,num=1) {
      state.count+=num
    },
    setToken(){

    }
  }
})