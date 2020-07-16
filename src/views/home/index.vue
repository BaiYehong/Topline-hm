<template>
  <div class="home page-container">
    <!-- 导航栏 -->
    <div class="nav-bar">
      <div class="logo"></div>
      <van-button
        class="search-btn"
        round
        type="info"
        size="small"
        icon="search"
        @click="$router.push('/search')"
      >搜索</van-button>
    </div>
    <!-- /导航栏 -->

    <!-- 频道列表 -->
    <van-tabs
      ref="tabs"
      class="fixed-tabs"
      v-if="channels.length"
      v-model="active"
      swipeable
    >
      <van-tab
        :title="channel.name"
        v-for="channel in channels"
        :key="channel.id"
      >
        <!-- 文章列表 -->
        <article-list :channel="channel"/>
        <!-- /文章列表 -->
      </van-tab>
      <!-- 它默认会把你写的其它内容渲染到内容的底部 -->
      <div
        slot="nav-right"
        class="van-tab"
        style="flex: 0 0 8%;"
      ></div>
      <van-icon
        slot="nav-right"
        class="wap-nav"
        name="wap-nav"
        @click="isChannelEditShow = true"
      />
    </van-tabs>
    <!-- /频道列表 -->

    <!-- 频道编辑弹窗 -->
    <van-popup
      v-model="isChannelEditShow"
      round
      position="bottom"
      :style="{ height: '100%' }"
      :overlay="false"
      class="channel-edit-popup"
    >
      <van-nav-bar title="编辑频道">
        <van-icon
          name="cross"
          slot="left"
          size="20"
          @click="isChannelEditShow = false"
        ></van-icon>
      </van-nav-bar>
      <channel-edit
        :user-channels="channels"
        v-model="active"
        @close="isChannelEditShow = false"
      ></channel-edit>
    </van-popup>
    <!-- /频道编辑弹窗 -->
  </div>
</template>

<script>
import { getUserChannels } from '@/api/user'
import { getItem } from '@/utils/storage'
import ArticleList from './components/article-list'
import ChannelEdit from './components/channel-edit'
import { mapState } from 'vuex'
export default {
  name: 'HomePage',
  components: {
    ArticleList,
    ChannelEdit
  },
  props: {},
  data () {
    return {
      active: 0,
      channels: [],
      isChannelEditShow: false
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {
    // 当切换用户、用户退出、用户登录的时候更新频道列表
    user () {
      // 清空频道列表
      this.channels = []

      // 初始化激活标签
      this.active = 0
    }
  },
  // 被 keep-alive 缓存的组件激活时调用
  activated () {
    // 如果没有频道数据，则请求加载
    if (!this.channels.length) {
      this.loadUserChannels()
    }
  },
  created () {
    this.loadUserChannels()
  },
  mounted () {},
  methods: {
    async loadUserChannels () {
      let channels = []
      if (this.user) {
        // 已登录，请求获取用户频道列表
        const { data: res } = await getUserChannels()
        channels = res.data.channels
      } else {
        // 未登录
        const localChannels = getItem('channels')
        if (localChannels) {
          // 使用本地存储的频道列表
          channels = localChannels
        } else {
          // 没有就使用默认推荐的频道列表
          const { data: res } = await getUserChannels()
          channels = res.data.channels
        }
      }
      this.channels = channels
    }
  }
}
</script>

<style scoped lang="less">
.home {
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    width: 100%;
    height: 46px;
    background-color: #3196fa;
    z-index: 1;
    .logo {
      background: url("./logo.png") no-repeat;
      background-size: cover;
      width: 100px;
      height: 30px;
    }
    .search-btn {
      width: 50%;
      background-color: #5babfb;
    }
  }
  .wap-nav {
    position: fixed;
    right: 0;
    background-color: #fff;
    opacity: .8;
    font-size: 26px;
    line-height: 43px;
  }
  /deep/ .van-tabs {
    .van-tab {
      border-bottom: 1px solid #edeff3;
      border-right: 1px solid #edeff3;
    }
    .van-tabs__line {
      width: 15px !important;
      background-color: #3296fa;
      bottom: 20px;
    }
  }
  .channel-edit-popup {
    border-radius: 10px 10px 0 0;
  }
}

</style>
