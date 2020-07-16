<template>
  <div
    class="article-item"
    @click="$router.push({
    name: 'article',
    params: {
      articleId: article.art_id.toString()
    }
  })"
  >
    <div class="author">
      <van-image
        slot="icon"
        round
        fit="cover"
        class="avatar"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      ></van-image>
      <div>
        <div class="title">{{ article.aut_name }}</div>
        <div class="label">{{ article.pubdate | relativeTime }}</div>
      </div>
    </div>
    <div v-if="article.cover.type" class="title-cover">
      <p class="title">{{ article.title }}</p>
      <van-image class="photo" :src="article.cover.images[0]"></van-image>
    </div>
    <div v-else class="title">
      <p class="title">{{ article.title }}</p>
    </div>
    <div class="action">
      <div class="action-item">
        <van-icon name="comment-o" class="icon"></van-icon>
        <span>{{ article.comm_count}}</span>
      </div>
      <div class="action-item">
        <van-icon name="good-job-o"></van-icon>
        <span>{{ article.like_count}}</span>
      </div>
      <div class="action-item">
        <van-icon name="star-o"></van-icon>
        <span>{{ article.collect_count}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="less">
.article-item {
  padding: 12px 12px 0px;
  background-color: #fff;
  margin-bottom: 6px;
  align-items: center;
  .author {
    display: flex;
    align-items: center;
    .avatar {
      width: 36px;
      height: 36px;
      margin-right: 9px;
    }
    .title {
      font-size: 14px;
      color: #222;
    }
    .label {
      font-size: 11.5px;
      color: #999;
    }
  }
  .title-cover {
    display: flex;
    justify-content: space-between;
    padding: 14px 0;
    font-size: 15px;
    color: #3a3a3a;
    > .title {
      width: 65%;
    }
    .photo {
      width: 116px;
      height: 73px;
    }
  }
  > .title {
    padding: 14px 0;
    font-size: 15px;
    color: #3a3a3a;
  }
  .action {
    height: 46px;
    display: flex;
    font-size: 14px;
    .action-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 18px;
        margin-right: 5px;
      }
    }
  }
}
</style>
