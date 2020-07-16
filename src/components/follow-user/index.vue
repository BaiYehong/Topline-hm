<template>
  <!-- @click.stop 阻止点击事件继续传播 -->
  <van-button
    v-bind="$attrs"
    :type="value ? 'default' : 'info'"
    :icon="value ? '' : 'plus'"
    size="small"
    :loading="loading"
    @click.stop="onFollow"
  >{{ value ? '已关注' : '关注' }}</van-button>
</template>
<script>
import { followUser, unFollowUser } from '@/api/user'

export default {
  name: 'FollowUser',
  props: {
    value: {
      type: Boolean
    },
    userId: {
      type: [Number, String, Object],
      required: true
    }
  },
  components: {},
  data() {
    return {
      loading: false
    }
  },
  created() {},
  mounted() {},
  methods: {
    async onFollow() {
      try {
        this.loading = true
        // 如果已关注，则取消关注
        if (this.value) {
          await unFollowUser(this.userId)
        } else {
          // 如果没有关注，则关注
          await followUser(this.userId)
        }

        // 更新视图
        this.$emit('input', !this.value)
      } catch (err) {
        if (err.response && err.response.status === 400) {
          this.$toast('你不能关注你自己')
        }
      }
      this.loading = false
    }
  }
}
</script>
<style scoped lang="less">
</style>
