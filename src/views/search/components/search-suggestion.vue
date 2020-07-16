<template>
    <van-cell-group>
      <van-cell
        v-for="(suggestion, index) in suggestions"
        :key="index"
        icon="search"
        @click="$emit('search', suggestion)"
      >
      <div slot="title" v-html="highlight(suggestion)" />
      </van-cell>
    </van-cell-group>
</template>
<script>
import { debounce } from 'lodash'
import { getSuggestions } from '@/api/search'
export default {
  name: 'SearchSuggestion',
  props: {
    q: {
      type: String,
      required: true
    }
  },
  components: {},
  data () {
    return {
      suggestions: []
    }
  },
  created () {},
  mounted () {},
  watch: {
    q: {
      handler: debounce(async function () {
        const q = this.q
        if (!q) return
        const { data: res } = await getSuggestions(q)
        this.suggestions = res.data.options
      }, 200),
      immediate: true
    }
  },
  methods: {
    highlight (str) {
      return str.toLowerCase().replace(
        this.q.toLowerCase(),
        `<span style="color: red;">${this.q}</span>`
      )
    }
  }
}
</script>
<style scoped lang="less">
</style>
