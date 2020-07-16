<template>
  <div class="footer">
    <van-button
      type="default"
      class="write-btn"
      round
      size="small"
      @click="$emit('click-write')"
    >写评论</van-button>
    <van-icon
      name="comment-o"
      class="comment-icon"
      :info="commentCount"
      @click="$emit('click-comment')"
    ></van-icon>
    <van-icon
      :name="article.is_collected ? 'star' : 'star-o'"
      :color="article.is_collected ? 'orange' : ''"
      @click="onCollect"
    ></van-icon>
    <van-icon
      :name="article.attitude === 1 ? 'good-job' : 'good-job-o'"
      :color="article.attitude === 1 ? '#e5645f' : ''"
      @click="onLike"
    ></van-icon>
  </div>
</template>
<script>
import { addArticleCollect, deleteArticleCollect, addArticleLike, deleteArticleLike } from '@/api/article'
export default {
  name: 'AticleFooter',
  props: {
    article: {
      type: Object,
      required: true
    },
    commentCount: {
      type: Number,
      default: 0
    }
  },
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    async onCollect() {
      try {
        // 如果已收藏，取消收藏
        if (this.article.is_collected) {
          await deleteArticleCollect(this.article.art_id.toString())
        } else {
          // 如果没有收藏，则收藏
          await addArticleCollect(this.article.art_id.toString())
        }

        // 更新视图
        this.article.is_collected = !this.article.is_collected
        this.$toast.success(this.article.is_collected ? '收藏成功' : '取消收藏')
      } catch (err) {
        console.log(err)
        this.$toast.fail('操作失败')
      }
    },
    async onLike() {
      try {
        // 如果已点赞，取消点赞
        if (this.article.attitude === 1) {
          await deleteArticleLike(this.article.art_id.toString())
        } else {
          // 如果没有点赞，则点赞
          await addArticleLike(this.article.art_id.toString())
        }

        // 更新视图
        this.article.attitude = this.article.attitude === -1 ? 1 : -1
        this.$toast.success(this.article.attitude === 1 ? '点赞成功' : '取消点赞')
      } catch (err) {
        console.log(err)
        this.$toast.fail('操作失败')
      }
    }
  }
}
</script>
<style scoped lang="less">
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 44px;
  border-top: 1px solid #d8d8d8;
  background-color: #fff;
  .write-btn {
    width: 160px;
  }
  .van-icon {
    font-size: 20px;
  }
  .comment-icon {
    bottom: -2px;
  }
}
</style>
