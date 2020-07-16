<template>
    <div class="user-container page-container">
      <!-- 导航条 -->
        <van-nav-bar
          class="page-navbar"
          fixed
          left-arrow
          :title="user.name"
          @click-left="$router.back()"
        ></van-nav-bar>
      <!-- /导航条 -->

      <!-- 用户信息 -->
        <user-info :user="user"></user-info>
      <!-- /用户信息 -->

      <!-- 文章列表 -->
      <loading-list :fn="getArticleByUser" v-slot="{ item }">
        <article-item :article="item"></article-item>
      </loading-list>
      <!-- /文章列表 -->
    </div>
</template>

<script>
import { getUserById } from '@/api/user'
import UserInfo from './components/user-info'
import ArticleItem from './components/article-item'
import LoadingList from '@/components/loading-list'
import { getArticleByUser } from '@/api/article'
export default {
  name: 'UserPage',
  components: {
    UserInfo,
    LoadingList,
    ArticleItem
  },
  props: {
    userId: {
      type: [String, Number, Object],
      required: true
    }
  },
  data () {
    return {
      user: {
        id: this.userId
      },
      getArticleByUser: getArticleByUser.bind(null, this.userId)
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadUser()
  },
  mounted () {},
  methods: {
    async loadUser () {
      const { data: res } = await getUserById(this.userId)
      this.user = res.data
      console.log(this.user)
    }
  }
}
</script>

<style scoped lang="less">

</style>
