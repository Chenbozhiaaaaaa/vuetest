import router from './router'
import {store} from './store/store'
import {getToken} from '@/utils/auth'
 

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login'&&!store.state.token) next({ name: 'Login' })
    // 如果用户未能验证身份，则 `next` 会被调用两次
    next()
    console.log(store.state.token);

    store.commit('romeroken')

  })