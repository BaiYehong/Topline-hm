<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finish-text="没有更多了"
    @load="onLoad"
  >
    <van-cell
      v-for="item in list"
      :key="item.art_id.toString()"
      :title="item.title"
      @click="$router.push({
        name: 'article',
        params: {
          articleId: item.art_id.toString()
        }
      })"
    ></van-cell>
  </van-list>
</template>
<script>
import { getSearch } from '@/api/search'
export default {
  name: 'SearchResult',
  props: {
    q: {
      type: String,
      required: true
    }
  },
  components: {},
  data () {
    return {
      loading: false,
      finished: false,
      list: [],
      page: 1, // 页码
      perPage: 10
    }
  },
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      // this.loading = true

      // 1. 请求获取数据
      const { data: res } = await getSearch({
        page: this.page, // 页数，不传默认为1
        per_page: this.perPage, // 每页数量，不传每页数量由后端决定
        q: this.q // 搜索关键字
      })

      // 2. 将数据添加到数据列表中
      const { results } = res.data
      this.list.push(...results)

      // 3. 将本次的 loading 设置为false
      this.loading = false

      // 4. 判断是否还有数据
      if (results.length) {
        this.page++
      } else {
        this.finished = true
      }
    }
  }
}
</script>
<style scoped lang="less">
</style>
