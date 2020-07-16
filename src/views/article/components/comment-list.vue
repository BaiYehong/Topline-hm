<template>
  <!-- 文章评论区域 -->
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="已展示所有评论"
    :immediate-check="false"
    @load="onLoad"
  >
  <comment-item
    v-for="(comment, index) in value"
    :key="index"
    :comment="comment"
    @click-reply="$emit('click-reply', comment)"
  ></comment-item>
  </van-list>
  <!-- /文章评论区域 -->
</template>
<script>
import { getComments } from '@/api/comment'
import commentItem from './comment-item'
export default {
  name: 'commentList',
  props: {
    // 查看文章评论：文章ID
    // 查看评论回复： 评论ID
    source: {
      type: [Number, String, Object],
      required: true
    },
    totalCount: {
      type: Number
    },
    value: {
      type: Array,
      default: () => []
    },
    isComment: {
      type: Boolean,
      default: false
    }
  },
  components: {
    commentItem
  },
  data () {
    return {
      loading: false,
      finished: false,
      offset: null,
      limit: 10
    }
  },
  created () {
    this.onLoad()
  },
  mounted () {},
  methods: {
    async onLoad () {
      // 1. 请求获取数据
      const { data: res } = await getComments({
        type: this.isComment ? 'c' : 'a', // 查看文章评论： a, 查看评论回复： c
        source: this.source.toString(), // 源id，文章id或评论id
        offset: this.offset, // 获取评论数据的偏移量，值为评论id，表示从此id的数据向后取，不传表示从第一页开始读取数据
        limit: this.limit // 获取的评论数据个数，不传表示采用后端服务设定的默认每页数据量
      })

      // 2. 将数据放到列表中
      const { results, total_count: totalCount } = res.data
      console.log('value', this.value) // 2
      console.log('this.value.slice()', this.value.slice()) // 2
      const arr = this.value.slice()
      console.log('arr', arr) // 2 (4)
      arr.push(...results)
      console.log('arr', arr) // 4 (4)
      this.$emit('input', arr)
      this.$emit('update:total-count', totalCount)

      // 3. 结束 loading
      this.loading = false

      // 4. 判断是否还有数据
      if (results.length) {
        this.offset = res.data.last_id //  last_id: 本次返回结果的最后一个评论id，作为请求下一页数据的offset参数，若本次无具体数据，则值为NULL
      } else {
        this.finished = true
      }
    }
  }
}
</script>
<style scoped lang="less">
</style>
