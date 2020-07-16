<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <div v-for="(item, index) in value" :key="index">
      <slot v-bind:item="item">{{ item }}</slot>
    </div>
  </van-list>
</template>
<script>
export default {
  name: 'LoadingList',
  props: {
    fn: {
      type: Function,
      required: true
    },
    value: {
      type: Array,
      default: () => []
    },
    totalCount: {
      type: Number
    }
  },
  components: {},
  data() {
    return {
      loading: false,
      finished: false,
      page: 1,
      per_page: 10
    }
  },
  created() {},
  mounted() {},
  methods: {
    async onLoad() {
      console.log('onload')
      // 1. 请求获取数据
      const { data: res } = await this.fn({
        page: this.page,
        per_page: this.per_page
      })

      // 2.将数据添加到列表中
      const { results, total_count: totalCount } = res.data
      this.value.push(...results)
      // 更新总数量
      this.$emit('update:total-count', totalCount)

      // 3. 停止loading
      this.loading = false

      // 4.判断是否还有数据
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
