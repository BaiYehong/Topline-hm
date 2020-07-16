<template>
  <div class="page-container">
    <!-- 导航栏 -->
    <van-nav-bar
      left-arrow
      @click-left="$router.back()"
      class="page-navbar"
      fixed
      title="我的收藏/历史/作品"
    ></van-nav-bar>
    <!-- /导航栏 -->
    <!-- 文章标签列表 -->
    <van-tabs
      v-model="active"
      :border="false"
      class="fixed-tabs"
      color="#3196fa"
      title-active-color="#3196fa"
      title-inactive-color="#000"
      background="#fff"
    >
      <van-tab v-for="tab in tabs" :key="tab.title" :title="tab.title">
        <loading-list :fn="tab.fn" v-slot="{ item }">
          <article-item :article="item"></article-item>
        </loading-list>
      </van-tab>
    </van-tabs>
    <!-- /文章标签列表 -->
  </div>
</template>
<script>
import LoadingList from '@/components/loading-list'
import ArticleItem from './components/article-item'
import { getUserCollection, getUserHistories, getUserArticle } from '@/api/user'
export default {
  name: 'MyArticle',
  props: {
    type: {
      type: String
    }
  },
  components: {
    LoadingList,
    ArticleItem
  },
  data() {
    return {
      tabs: [
        {
          title: '收藏',
          fn: getUserCollection.bind(null)
        },
        {
          title: '历史',
          fn: getUserHistories.bind(null)
        },
        {
          title: '作品',
          fn: getUserArticle.bind(null)
        }
      ],
      active: this.getInitialArticle()
    }
  },
  created() {},
  mounted() {},
  methods: {
    getInitialArticle () {
      const active = ['collect', 'history', undefined].indexOf(this.type)
      console.log(active)
      return active !== -1 ? active : 0
    }
  },
  // 当前页面路由跳转的时候会触发这个路由钩子函数
  // to 要去哪儿的信息
  // from 来自于哪里的信息
  // next 放行的方法
  //      next() 允许通过
  //      next(false) 不允许通过
  beforeRouteLeave(to, from, next) {
    //  如果跳转的是文章详情页，则把当前页面缓存起来，否则不缓存
    // console.log(to)
    if (to.name === 'article') {
      this.$store.commit('addCachePage', 'MyArticle')
    } else {
      this.$store.commit('removeCachePage', 'MyArticle')
    }

    // 放行通过
    next()
  }
}
</script>
<style scoped lang="less">
</style>
