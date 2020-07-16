<template>
    <div class="error-page">
      <img src="./no-network.png" alt="no-network">
      <p class="text">亲，网路不给力哦~</p>
       <van-button
      class="btn"
      type="info"
      size="small"
      @click="$emit('btn-click')"
    >点击重试</van-button>
    </div>
</template>
<script>
export default {
  name: 'ErrorPage',
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
.error-page {
  padding-top: 100px;
  text-align: center;
  .text {
    font-size: 15px;
  }
  .btn {
      width: 30%;
  }
}
</style>
