<template>
  <div class="user-info-container">
    <div class="base-user-info">
      <van-image
        class="avatar"
        round
        fit="cover"
        :src="user.photo"
        @click="onPreview(user.photo)"
      ></van-image>
      <div class="data-info-wrap">
        <div class="data-info-container">
         <div class="item">
          <div class="count">{{ user.art_count }}</div>
          <div class="text">发布</div>
        </div>
        <div class="item">
          <div class="count">{{ user.follow_count }}</div>
          <div class="text">关注</div>
        </div>
        <div class="item">
          <div class="count">{{ user.fans_count }}</div>
          <div class="text">粉丝</div>
        </div><div class="item">
          <div class="count">{{ user.like_count }}</div>
          <div class="text">获赞</div>
        </div>
      </div>
      <div class="action">
        <!-- 展示条件： 如果没有登录 || 当前页面用户非登录用户 -->
        <template v-if="!sessionUser || sessionUser.user_id !== user.id">
          <van-button
            type="primary"
            size="small"
          >私信</van-button>
          <follow-user
            v-model="user.is_following"
            :user-id="user.id"
          ></follow-user>
        </template>
        <!-- 否则显示编辑资料 -->
        <van-button
          v-else
          type="default"
          size="small"
        >编辑资料</van-button>
      </div>
      </div>
    </div>
    <div class="intro-wrap">
      <div v-if="user.is_media">
        <span>认证：</span>
        <span>{{ user.certi }}</span>
      </div>
      <div>
        <span>简介：</span>
        <span>{{ user.intro }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import FollowUser from '@/components/follow-user'
import { ImagePreview } from 'vant'
import { mapState } from 'vuex'
export default {
  name: 'userInfo',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    FollowUser
  },
  computed: {
    ...mapState({
      sessionUser: state => state.user
    /*
      等价于：
        sessinonUser: 'user'
    */
    })
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    onPreview (src) {
      ImagePreview([
        src
      ])
    }
  }
}
</script>
<style scoped lang="less">
.user-info-container {
  padding: 12px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: #fff;
  .base-user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    .avatar {
      height: 80px;
      width: 80px;
    }
    .data-info-wrap {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      width: 80%;
      height:80px;
      padding: 0 12px;
      .data-info-container {
        display: flex;
        justify-content: space-between;
        .item {
          text-align:center;
          .text {
            font-size: 12px;
          }
        }
      }
      .action {
        display: flex;
        justify-content: space-between;
        .van-button {
          width: 45%;
        }
      }
    }
  }
}
</style>
