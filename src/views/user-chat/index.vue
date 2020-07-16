<template>
  <div class="chat-container">
    <!-- 导航栏 -->
    <van-nav-bar left-arrow fixed class="page-navbar" title="小智同学" @click-left="$router.back()"></van-nav-bar>
    <!-- /导航栏 -->

    <!-- 消息列表 -->
    <div class="message-list" ref="message-list">
      <div
        class="message-item"
        v-for="(item, index) in messages"
        :key="index"
        :class="{reverse: item.userId === user.user_id}"
      >
        <van-image round class="avatar" :src="item.photo"></van-image>
        <div class="msg-wrap" style="flex: 1;">
          <div class="title">{{ item.msg }}</div>
        </div>
      </div>
    </div>
    <!-- /消息列表 -->

    <!-- 发送消息 -->
    <van-cell-group class="send-message">
      <van-field v-model="message" center clearable>
        <van-button slot="button" type="primary" size="small" @click="onSend">发送</van-button>
      </van-field>
    </van-cell-group>
    <!-- /发送消息 -->
  </div>
</template>
<script>
import io from 'socket.io-client'
import { mapState } from 'vuex'
import { setItem, getItem } from '@/utils/storage'

export default {
  name: 'UserChat',
  props: {},
  components: {},
  data() {
    return {
      message: '',
      messages: getItem('chat-messages') || [], // 消息列表
      socket: null // WebSocket 通信对象
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {
    messages (value) {
      /*
        监视函数有两个参数：
          参数1：最新值
          参数2：消变化之前的旧值
       */
      setItem('chat-messages', value)
      // 让消息滚动到底部
      this.$nextTick(() => {
        this.scrollToBottom()
      })
    }
  },
  created() {
    // 建立 WebSocket 连接
    // 这里的请求是 WebSocket 请求， 和项目中的 axios 没有任何关系
    const socket = io('http://ttapi.research.itcast.cn')
    this.socket = socket

    socket.on('connect', function() {
      console.log('建立连接成功')
    })

    //  发送消息
    // socket.emit('message', this.message)
    // 测试小技巧：手动将数据成员暴露到全局，就可以在控制台中直接访问了，测试完毕，删除代码
    // window.socket = socket

    // 接收消息
    socket.on('message', data => {
      data.photo = 'http://toutiao.meiduo.site/FqHn7ps9v5I8esWXJNKH0asrSwcB'
      this.messages.push(data)
    })
  },
  mounted() {
    this.scrollToBottom()
  },
  methods: {
    onSend() {
      const message = this.message.trim()

      // 非空校验
      if (!message.length) {
        return
      }

      // 消息类型和 数据格式都有要求
      const data = {
        msg: message,
        timestamp: Date.now(),
        photo: 'http://toutiao.meiduo.site/FlOAkWHoU8lnYwU6eCEPN-dHINHl',
        userId: this.user.user_id
      }
      this.socket.emit('message', data)

      // 将消息存储到列表中
      this.messages.push(data)

      // 清空文本框
      this.message = ''
    },
    scrollToBottom () {
      const messageList = this.$refs['message-list']
      // 注意：数据影响视图不是即时的
      // 该函数中的代码会确保本次数据更新视图之后才执行
      // 什么场景下才需要使用这个API, 当你想要在修改完数据之后马上操作数据影响的DOM.
      // 视图更新过程不会阻塞代码
      this.$nextTick(() => {
        // messageList.scrollTop 获取距离顶部的距离
        // messageList.scrollTop = xxx 设置距离顶部的距离
        messageList.scrollTop = messageList.scrollHeight
      })
    }
  }
}
</script>
<style scoped lang="less">
.chat-container {
  position: absolute;
  top: 0;
  left: 0;
  padding: 46px 0 50px;
  box-sizing: border-box;
  background-color: #f5f5f6;
  width: 100%;
  height: 100%;
  .message-list {
    overflow-y: scroll;
    height: 100%;
    .message-item {
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
      padding: 10px;
      .avatar {
        width: 40px;
        height: 40px;
        margin-right: 5px;
      }
      .msg-wrap {
        word-break: break-all;
        word-wrap: break-word;
        .title {
          display: table;
          border-radius: 6px;
          font-size: 14px;
          padding: 10px;
          margin-right: 45px;
          background-color: #e0effb;
        }
      }
    }
    .reverse {
      flex-direction: row-reverse;
      .msg-wrap {
        display: flex;
        flex-direction: row-reverse;
        .title {
          margin-right: 5px;
          margin-left: 45px;
        }
      }
    }
  }
  .send-message {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: #f5f5f6 !important;
  }
}
</style>
