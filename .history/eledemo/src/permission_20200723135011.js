import router from './router'
import {store} from './store/store'
import {getToken} from '@/utils/auth'
 
console.log(store.state.token);
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login'&&!store.state.token) next({ name: 'Login' })
    // 如果用户未能验证身份，则 `next` 会被调用两次
    next()
    // store.commit('romeroken')

  })