import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'
import decodeJWT from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录用户， 一个对象，包含 token 信息
    user: getItem('user'),
    cachePages: ['TabBar']
  },

  mutations: {
    setUser (state, data) {
      // 解析 JWT 中的数据（需要使用用户ID）
      if (data && data.token) {
        const user = decodeJWT(data.token)
        data.user_id = user.user_id
      }
      state.user = data
      console.log('state.user', state.user)
      // 为了防止刷新丢失 state 中的 user 状态，我们把它放到本地存储
      setItem('user', state.user)
    },
    // 添加缓存页面
    addCachePage (state, name) {
      if (!state.cachePages.includes(name)) {
        state.cachePages.push(name)
      }
    },
    // 移除缓存页面
    removeCachePage (state, name) {
      const index = state.cachePages.indexOf(name)
      if (index !== -1) {
        state.cachePages.splice(index)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
