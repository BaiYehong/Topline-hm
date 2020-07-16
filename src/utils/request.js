/*
    封装axios 请求模块
*/
import axios from 'axios'
import jsonBig from 'json-bigint'
// 在非组件模块中访问容器，直接 import 加载即可
import store from '@/store'

import router from '@/router'

// axios.creat方法：复制一个axios
// 相当于复制了一个 axios,它的功能和 axios 是一样的， 但是它可以拥有自己的拦截器、基础路径
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
  // 基础路径
})

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    const user = store.state.user
    if (user) {
      // 注意： 后端要求 Bearer 后面有个空格，多了少了都不行
      // Authorization 也是后端要求的名字，不能乱写
      config.headers.Authorization = `Bearer ${user.token}`
    }
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  async function (error) { // 当请求失败的时候会进入这个响应拦截器中的错误处理函数
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status === 401) {
      // 1. 如果没有re-fresh/token, 则直接跳转登录页
      const user = store.state.user
      console.log({
        ...user
      })
      if (!user || !user.refresh_token) {
        redirectLogin()
        return
      }
      // 2. 如果有，则请求更新token
      try {
        // 这里为什么使用axios 请求刷新 token？
        // 刷新 token 的接口要求把 refresh_token 放到请求头中，名字叫 Authorization
        // 如果我们使用 request 请求刷新 token,则会走 request 的请求拦截器， request 的请求拦截器中添加的是token,不是refresh_token
        // 如果 request 刷新 token 失败了， 还会进入 request 自己的响应拦截器中， 在这里会执行请求请求刷新 token 的操作
        // 而我们需要当刷新 token 失败之后直接跳转登录页，不需要再执行任何处理了。
        // 所以：request 请求拦截器处理和响应拦截器都不符合我们刷新token的要求，除非你在里面继续更多的判断逻辑
        // 刷新 token 请求
        const { data: res } = await axios({
          method: 'PUT',
          url: 'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
          headers: {
            Authorization: `Bearer ${user.refresh_token}`
          }
        })

        // 响应结果： { message：ok, token: 'xxxxxxxxxx'}
        // user: { id, token, refresh_token }
        // 修改容器数据必须通过 mutation 来修改

        // 提交 mutation
        // 3. 如果刷新 token 成功了，则把新的 token 更新到容器中
        store.commit('setUser', {
          ...user, // 原来的数据不变 对象的混入语法
          token: res.data.token // 更新token
        })

        // 4. 把本次因为 token 无效过期的失败的请求继续发出去
        // error.config 读取到的是本次请求相关的配置对象， 其中包含它的 method 、url等信息。
        // 非刷新token请求：这里走原来的请求拦截器、响应拦截器
        // 注意： 使用 return 把请求结果继续返回，真正的请求代码才能拿到
        return request(error.config)
      } catch (err) {
        console.log('请求刷新 token 失败', err)
        redirectLogin()
      }
    }
    return Promise.reject(error)
  }
)

// 通过Axios请求得到的数据都是Axios处理（JSON.parse）之后的，我们应该在Axios执行处理之前手动使用json-bigint来解析处理。
// transformResponse 允许自定义原始的响应数据（字符串）
request.defaults.transformResponse = [function (data) {
  try {
    return jsonBig.parse(data)
  } catch (err) {
    return {}
  }
}]

function redirectLogin() {
  // 写法一：（拼串）
  // router.push(`/login?key=value&key=value`)

  // 写法二：
  router.push({
    name: 'login',
    // query 参数会以 ?key=value&key=value 的格式添加到 url 后面
    // query 参数不需要配置路由规则，可以传递任意参数
    // query 是固定的语法格式，用来传递 ？key=value 查询字符串
    query: {
      // 这里使用查询参数把要跳转回来的路由地址传递给了登录页面
      // router.currentRoute 就是当前路由对象，好比我们在组件中的 this.$route
      // 当前路由对象的fullPath 就是当前路由的路径
      // redirect 是我自己起的一个名字
      redirect: router.currentRoute.fullPath
    }
  })
}

// 导出
export default request
