import router from './router'
import { store } from './store/store'
import { getToken } from '@/utils/auth'

console.log(store.state.token);
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.state.token) {
    next({ name: 'Login' })
  }
  else if (to.name == 'Login') {
    next({ name: 'Login' })
  }
  else {
    next()
    console.log(store.state.token);
    store.commit('romeroken')
  }



})