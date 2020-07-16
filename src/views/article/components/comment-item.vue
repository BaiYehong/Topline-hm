<template>
  <van-cell class="comment-item">
    <van-image
      slot="icon"
      round
      width="30"
      height="30"
      style="margin-right:10px"
      :src="comment.aut_photo"
    />
    <span slot="title" style="color: #466b9d;">{{ comment.aut_name }}</span>
    <div slot="label">
      <p style="color: #363636;">{{ comment.content }}</p>
      <div>
        <span style="margin-right:10px;">{{ comment.pubdate | relativeTime }}</span>
        <van-button
          v-if="reply"
          size="mini"
          type="default"
          @click="$emit('click-reply')"
        >回复 {{ comment.reply_count }}</van-button>
      </div>
    </div>
    <div slot="right-icon" class="like-container">
      <van-icon
        :name="comment.is_liking ? 'good-job' : 'good-job-o'"
        :color="comment.is_liking ? '#e5645f' : ''"
        @click="onCommentLike(comment)"
      ></van-icon>
      <span>{{ comment.like_count ? comment.like_count : '赞' }}</span>
    </div>
  </van-cell>
</template>
<script>
import { deleteCommentLike, addCommentLike } from '@/api/comment'

export default {
  name: 'CommentItem',
  props: {
    comment: {
      type: Object,
      required: true
    },
    reply: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    async onCommentLike(comment) {
      try {
        // 如果已经赞了，则取消点赞
        if (comment.is_liking) {
          await deleteCommentLike(comment.com_id)
        } else {
          // 如果没有赞，则点赞
          await addCommentLike(comment.com_id)
        }

        // 更新视图状态
        comment.is_liking = !comment.is_liking
        comment.like_count += comment.is_liking ? 1 : -1
        this.$toast.success(comment.is_liking ? '点赞成功' : '取消点赞')
      } catch (err) {
        console.log(err)
        this.$toast.fail('操作失败')
      }
    }
  }
}
</script>
<style scoped lang="less">
.comment-item {
  display: flex;
  align-items: flex-start;
  .like-container {
    width: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
  }
}
</style>
