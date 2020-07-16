<template>
  <div
    class="author"
    ref="author"
    @click="$router.push({
      name: 'user',
      params: {
        userId: article.aut_id.toString()
      }
  })"
  >
    <div class="base-info">
      <van-image
        round
        width="1rem"
        height="1rem"
        :src="article.aut_photo"
      />
      <div class="text">
        <p class="name">{{ article.aut_name }}</p>
        <p class="time">{{ article.pubdate | relativeTime }}</p>
      </div>
    </div>
    <!-- 如果没登录或者当前文章作者不是当前登录用户 -->
    <follow-user
      v-if="!user || article.aut_id !== user.user_id"
      v-model="article.is_followed"
      :user-id="article.aut_id"
      round
      style="width: 30%"
    ></follow-user>
  </div>
</template>
<script>
import FollowUser from '@/components/follow-user'
import { mapState } from 'vuex'
export default {
  name: 'ArticleAuth',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  components: {
    FollowUser
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['user'])
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="less">
.author {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .base-info {
    display: flex;
    align-items: center;
    .text {
      padding-left: 10px;
      flex: 1;
      line-height: 1.3;
      .name {
        font-size: 14px;
        margin: 0;
      }
      .time {
        font-size: 12px;
        color: #999;
        margin: 0;
      }
    }
  }
}
</style>
