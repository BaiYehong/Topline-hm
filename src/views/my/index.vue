<template>
  <div class="my-container">
    <!-- 已登录： 用户信息 -->
    <div class="user-info-wrap" v-if="$store.state.user">
      <div class="base-info-wrap">
        <div class="avatar-title-wrap" @click="$router.push({
          name: 'user',
          params: {
            userId: user.id
          }
        })">
          <van-image
            :src="user.photo"
            class="avatar"
            round
            fit="cover"
          ></van-image>
          <span>{{ user.name }}</span>
        </div>
        <van-button
          size="mini"
          round
         @click="$router.push('/user/profile')"
        >编辑资料</van-button>
      </div>
      <van-grid class="data-info" :border="false">
        <van-grid-item>
          <span class="count">{{ user.art_count }}</span>
          <span class="text">头条</span>
        </van-grid-item>
        <van-grid-item :to="`/user/${user.id}/following`">
          <span class="count">{{ user.follow_count }}</span>
          <span class="text">关注</span>
        </van-grid-item>
        <van-grid-item :to="`/user/${user.id}/follower`">
          <span class="count">{{ user.fans_count }}</span>
          <span class="text">粉丝</span>
        </van-grid-item>
        <van-grid-item>
          <span class="count">{{ user.like_count }}</span>
          <span class="text">获赞</span>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- /已登录： 用户信息 -->

    <!-- 未登录 -->
    <div class="not-login" v-else>
      <div
        class="mobile"
        @click="$router.push({
            name: 'login',
            query: {
              redirect: '/my'
            }
          })"
      ></div>
      <div class="text">未登录</div>
    </div>
    <!-- /未登录 -->

    <!-- 其它 -->
    <van-grid :column-num="3" clickable>
      <van-grid-item text="收藏" to="/my-article/collect">
        <van-icon slot="icon" name="star-o" color="#eb5253"></van-icon>
      </van-grid-item>
      <van-grid-item text="历史" to="/my-article/history">
        <van-icon slot="icon" name="browsing-history-o" color="#ffa023"></van-icon>
      </van-grid-item>
       <van-grid-item text="作品" to="/my-article">
        <van-icon slot="icon" name="edit" color="#3196fa"></van-icon>
      </van-grid-item>
    </van-grid>

    <van-cell-group :border="false">
      <van-cell title="小智同学" is-link  to="/user/chat"/>
    </van-cell-group>

    <van-cell-group v-if="$store.state.user">
      <van-cell
        title="退出登录"
        clickable
        style="text-align: center;"
        @click="onLogout"
      ></van-cell>
    </van-cell-group>
    <!-- /其它 -->
  </div>
</template>

<script>
import { getSelf } from '@/api/user'
import globalBus from '@/utils/global-bus'
export default {
  name: 'MyPage',
  components: {},
  props: {},
  data() {
    return {
      user: {} // 用户信息记录
    }
  },
  computed: {},
  watch: {
    '$store.state.user' () {
      if (this.$store.state.user) {
        this.loaderUser()
      }
    }
  },
  created() {
    if (this.$store.state.user) {
      this.loaderUser()
    }
    /*
      - 非父子组件间的数据传递两种方案:
        1. 借助Vue官方提供的一个数据层的框架——Vuex
        2. 发布订阅模式（又称为：总线机制/Bus/观察者模式)
    */
    globalBus.$on('user-update', () => {
      this.loaderUser()
    })
  },
  mounted() {},
  methods: {
    async loaderUser() {
      const { data: res } = await getSelf()
      this.user = res.data
    },
    onLogout () {
      /*
        Dialog  组件既可以在模板中使用
        也可以通过 JavaScript 来调用
        模板中使用 van-dialog
        JavaScript 调用： this.$dialog
      */
      this.$dialog.confirm({
        title: '退户确认',
        message: '退出当前头条账号，将不能同步收藏，发布评论和云端分享'
      }).then(() => {
        // 确认执行这里

        // 清除容器和本地存储的数据
        this.$store.commit('setUser', null)
      }).catch(() => {
        // 取消执行这里
      })
    }
  }
}
</script>

<style scoped lang="less">
.my-container {
  .user-info-wrap {
    background: url(./banner.png) no-repeat;
    background-size: cover;
    height: 182px;
    padding: 40px 20px;
    font-size: 15px;
    color: #fff;
    box-sizing: border-box;
    .base-info-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .avatar-title-wrap {
        display: flex;
        align-items: center;
        .avatar {
          width: 66px;
          height: 66px;
          padding: 2px;
          background-color: #fff;
          margin-right: 15px;
        }
      }
    }
      /* 默认只能影响到自子组件的根节点 */
    .data-info {
      ::v-deep .van-grid-item__content {
        background: none;
      }
    }
  }
  .not-login {
    height: 182px;
    background: url(./banner.png) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .mobile {
      width: 66px;
      height: 66px;
      background: url(./mobile.png) no-repeat;
      background-size: cover;
      margin-bottom: 10px;
    }
    .text {
      font-size: 14px;
      color: #fff;
    }
  }
  > .van-cell-group {
    margin-top: 10px;
  }
}
</style>
