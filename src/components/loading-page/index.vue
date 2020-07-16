<template>
    <div>
      <van-loading
        class="loading"
        color="#1989fa"
        vertical
      >
        <slot>加载中...</slot>
      </van-loading>
    </div>
</template>
<script>
export default {
  name: 'LoadingPage',
  props: {},
  components: {},
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="less">
.loading {
  padding-top: 100px;
  text-align: center;
}
</style>
