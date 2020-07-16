<template>
  <div class="page-container">
    <van-nav-bar class="page-navbar" left-arrow fixed @click-left="$router.back()">
      <van-tabs
        v-model="active"
        slot="title"
        :border="false"
        color="#fff"
        title-active-color="#fff"
        title-inactive-color="#fff"
        background="#3196fa"
      >
        <van-tab title="关注"></van-tab>
        <van-tab title="粉丝"></van-tab>
      </van-tabs>
    </van-nav-bar>

    <loading-list :fn="fn" v-slot="{ item }">
      <van-cell class="item-list">
        <van-image
          slot="icon"
          round
          fit="cover"
          class="avatar"
          :src="item.photo"
          @click="$router.push({
            name: 'user',
            params: {
              userId: item.id
            }
          })"
        ></van-image>
        <span slot="title" calss="title">{{ item.name.trim() || '黑马头条号'}}</span>
        <span slot="label" class="label">粉丝数：{{ item.fans_count }}</span>
        <follow-user
          v-model="item.mutual_follow"
          :user-id="item.id"
        ></follow-user>
      </van-cell>
    </loading-list>
  </div>
</template>
<script>
import loadingList from '@/components/loading-list'
import { getFollowersByUser } from '@/api/user'
import FollowUser from '@/components/follow-user'
export default {
  name: 'FollowAndFans',
  props: {
    userId: {
      type: [Number, String, Object],
      required: true
    }
  },
  components: {
    loadingList,
    FollowUser
  },
  data() {
    return {
      active: 1,
      fn: getFollowersByUser.bind(null, this.userId)
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="less">
.item-list {
  align-items: center;
  .avatar {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
  .title {
    font-size: 14px;
  }
  .label {
    font-size: 12px;
    color: #999;
  }
}
</style>
