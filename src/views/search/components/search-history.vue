<template>
  <van-cell-group>
    <van-cell title="历史记录">
      <template v-if="isDeleteShow">
        <span @click="$emit('update:search-histories', [])">全部删除</span>
        &nbsp;&nbsp;
        <span @click="isDeleteShow = false">完成</span>
      </template>
      <van-icon  v-else slot="right-icon" name="delete" @click="isDeleteShow = true"></van-icon>
    </van-cell>
    <van-cell
      :title="item"
      v-for="(item, index) in searchHistories"
      :key="index"
      @click="onHistoryClick(item, index)"
    ></van-cell>
  </van-cell-group>
</template>
<script>
export default {
  name: 'SearchHistory',
  model: {
    prop: 'search-histories',
    event: 'update: search-histories'
  },
  props: {
    searchHistories: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  data () {
    return {
      isDeleteShow: false
    }
  },
  created () {},
  mounted () {},
  methods: {
    onHistoryClick (item, index) {
      if (this.isDeleteShow) {
        // 删除频道
        this.searchHistories.splice(index, 1)
      } else {
        // 展示搜索结果
        this.$emit('search', item)
      }
    }
  }
}
</script>
<style scoped lang="less">
</style>
