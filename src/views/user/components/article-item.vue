<template>
    <div class="article-item">
      <div class="author">
        <van-image
          class="avatar"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        ></van-image>
        <div>
          <div class="name">{{ article.aut_name }}</div>
          <div class="date">{{ article.pubdate }}</div>
        </div>
      </div>
      <div class="title-cover" v-if="article.cover.type">
        <div class="title">{{ article.title }}</div>
        <van-image
          class="cover"
          :src="article.cover.images[0]"
        ></van-image>
      </div>
      <div class="title" v-else>{{ article.title }}</div>
      <div class="action">
        <div class="action-item">
          <van-icon class="comment-icon" name="comment-o"></van-icon>
          <span>{{ article.comm_count }}</span>
        </div>
        <div class="action-item">
          <van-icon class="comment-icon" name="comment-o"></van-icon>
          <span>{{ article.comm_count }}</span>
        </div>
        <div class="action-item">
          <van-icon class="comment-icon" name="comment-o"></van-icon>
          <span>{{ article.comm_count }}</span>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
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
.article-item {
  padding: 12px 12px 0;
  background-color: #fff;
  margin-bottom: 6px;
  .author {
    display: flex;
    align-items: center;
    .avatar {
      width: 36px;
      height: 36px;
      margin-right: 9px;
    }
    .name {
      color: #222;
      font-size: 14px;
    }
    .date {
      color: #999;
      font-size: 11.5px;
    }
  }
  .title-cover {
    display: flex;
    justify-content: space-between;
    padding: 14px 0;
    font-size: 15px;
    color: #3A3A3A;
    > .title {
      width: 65%;
    }
    .cover {
      width: 116px;
      height: 73px;
    }
  }
  > .title {
    padding: 14px 0;
    font-size: 15px;
    color: #3A3A3A;
  }
  .action {
    height: 46px;
    display: flex;
    .action-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      .van-icon {
        font-size: 18px;
        margin-right: 5px;
      }
    }
  }
}
</style>
