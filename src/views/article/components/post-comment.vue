<template>
  <van-row class="post-comment" type="flex" align="center">
    <van-col span="20">
      <van-field
        v-model.trim="content"
        rows="2"
        autosize
        type="textarea"
        :placeholder="inputPlaceholder"
        maxlength="50"
        show-word-limit
      ></van-field>
    </van-col>
    <van-col
      span="4"
      class="post-btn"
      :style="{ color: content.length ? '#4a8ecf' : '#666' }"
      @click="onPostComment"
    >发布</van-col>
  </van-row>
</template>
<script>
import { addComment } from '@/api/comment'
export default {
  name: 'PostComment',
  props: {
    target: {
      type: [Number, String, Object],
      required: true
    },
    articleId: {
      type: [Number, String, Object],
      default: null
    },
    replyTo: {
      type: Object,
      default: null
    }
  },
  components: {},
  data() {
    return {
      content: ''
    }
  },
  computed: {
    inputPlaceholder () {
      const replyTo = this.replyTo
      return replyTo ? `回复${replyTo.aut_name}` : '优质评论将会被优先展示'
    }
  },
  created() {},
  mounted() {},
  methods: {
    async onPostComment () {
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: '发布中...',
        forbidClick: true
      })

      try {
        let { content, replyTo } = this
        if (!content) return
        if (replyTo) {
          content += `//@${replyTo.aut_name} : ${replyTo.content}`
        }

        const articleId = this.articleId ? this.articleId : null

        const { data: res } = await addComment({
          target: this.target.toString(), // 评论的目标id,(评论文章即为文章id, 对评论进行回复则为评论id)
          content, // 评论内容
          art_id: articleId // 文章id, 对评论内容发表回复时，需要传递此参数，对文章进行评论，不需要传递此参数
        })

        const newComment = res.data.new_obj

        // 后端返回数据中没有该字段，所以这里收到添加，否则会影响所添加的评论的点赞功能
        // 更好的做法是建议后端在返回的数据中包含该字段
        newComment.is_liking = false

        this.$emit('post-success', newComment)

        this.$toast.success('发布成功')

        this.content = ''
      } catch (err) {
        console.log(err)
        this.$toast.fail('发布失败')
      }
    }
  }
}
</script>
<style scoped lang="less">
.post-comment {
  padding: 12px;
}
.post-btn {
  font-size: 15px;
  text-align: center;
}
</style>
