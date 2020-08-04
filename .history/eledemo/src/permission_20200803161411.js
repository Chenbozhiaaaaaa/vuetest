import router from './router'
import { store } from './store/store'
import { getToken } from '@/utils/auth'

// 路由守卫
router.beforeEach((to, from, next) => {
  let token = store.state.token
  if (to.name !== 'Login' && !token) {
    next({ name: 'Login' })
  }
  else {
    store.commit('romeroken')
    next()
  }
  // 如果用户未能验证身份，则 `next` 会被调用两次

})