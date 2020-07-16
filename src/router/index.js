import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Tabbar from '@/views/tab-bar'
import Home from '@/views/home'
import My from '@/views/my'
import Qa from '@/views/qa'
import Video from '@/views/video'
import Article from '@/views/article'
import User from '@/views/user'
import Search from '@/views/search'
import UserProfile from '@/views/user-profile'
import UserFollowing from '@/views/user-following'
import UserFollower from '@/views/user-follower'
import MyArticle from '@/views/my-article'
import UserChat from '@/views/user-chat'

Vue.use(VueRouter)

// 配置路由表
const routes = [
  { // 登录
    name: 'login',
    path: '/login',
    component: Login
  },
  { // 底部标签栏
    path: '/',
    component: Tabbar,
    children: [
      { // 首页
        name: 'home',
        path: '', // 默认子路由
        component: Home
      },
      { // 我的
        name: 'my',
        path: '/my', // 默认子路由
        component: My
      },
      { // 问答
        name: 'qa',
        path: '/qa', // 默认子路由
        component: Qa
      },
      { // 视频
        name: 'video',
        path: '/video', // 默认子路由
        component: Video
      }
    ]
  },
  { // 文章详情
    name: 'article',
    path: '/article/:articleId',
    component: Article,
    /*
      父子间的组件通讯是通过props和$emit来实现的，
      那么路由之间的通讯呢?
    */
    props: true
  },
  { // 搜索页面
    name: 'search',
    path: '/search',
    component: Search
  },
  { // 用户资料
    name: 'user-profile',
    path: '/user/profile',
    component: UserProfile
  },
  { // 用户关注列表
    name: 'user-following',
    path: '/user/:userId/following',
    component: UserFollowing,
    props: true
    /* meta: {
      requiresAuth: true
    } */
  },
  { // 用户关注列表
    name: 'user-follower',
    path: '/user/:userId/follower',
    component: UserFollower,
    props: true
    /* meta: {
      requiresAuth: true
    } */
  },
  { // 小智同学
    name: 'user-chat',
    path: '/user/chat',
    component: UserChat
  },
  { // 用户主页
    /*
      路由的匹配规则是从上到下的，越靠上面的优先级越高
    */
    name: 'user',
    path: '/user/:userId',
    component: User,
    props: true
  },
  { // 我的作品、收藏、历史
    name: 'my-article-colle',
    path: '/my-article/:type?', // ? 表示第二段路由可有可无
    component: MyArticle,
    props: true
    /* meta: {
      requiresAuth: true
    } */
  }
]

const router = new VueRouter({
  routes
})

export default router
