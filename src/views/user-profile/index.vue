<template>
  <div>
    <van-nav-bar class="page-navbar" title="个人信息" left-arrow @click-left="$router.replace('/my')" />
    <van-cell-group>
      <van-cell class="cell-item" is-link title="头像" @click="onShowFile">
        <van-image round :src="user.photo" class="avatar"></van-image>
      </van-cell>
      <!--
        表单元素的 hidden 属性： 影藏表单元素
        change事件：当用户所选的图片发生改变的时候才会触发
      -->
      <input type="file" hidden ref="file" @change="onFileChange" />
      <van-cell class="cell-item" is-link title="昵称" :value="user.name" @click="onEditName" />
      <van-cell
        class="cell-item"
        is-link
        title="性别"
        :value="user.gender === 1 ? '女' : '男'"
        @click="isGenderShow = true"
      />
      <van-cell
        class="cell-item"
        is-link
        title="生日"
        :value="user.birthday"
        @click="isEditBirthdayShow = true"
      />
    </van-cell-group>

    <!-- 上传头像预览 -->
    <van-image-preview
      v-model="isPreviewPhotoShow"
      :images="previewImages"
      @close="$refs.file.value = ''"
    >
      <van-nav-bar
        slot="cover"
        left-text="取消"
        right-text="确定"
        @click-left="isPreviewPhotoShow = false"
        @click-right="onUpdateAvatar"
      />
    </van-image-preview>
    <!-- /上传头像预览 -->

    <!-- 修改昵称 -->
    <van-popup
      v-model="isEditNameShow"
      position="bottom"
      class="edit-namme-popup"
      get-container="body"
    >
      <van-nav-bar
        left-text="取消"
        right-text="完成"
        title="昵称"
        @click-left="isEditNameShow = false"
        @click-right="onNameConfirm"
      ></van-nav-bar>
      <div class="intro-field-popup">
        <!--
          field 组件有一个 input 事件， 该事件接收一个参数：输入框的值
          在模板中 $event 表示事件参数， Vue 本身提供的
          <van-field :value="user.name" @input="inputName = $event"></field>
        -->
        <van-field
          v-model="inputName"
          class="input"
          rows="2"
          type="textarea"
          maxlength="7"
          placeholder="请输入昵称"
          show-word-limit
        ></van-field>
      </div>
    </van-popup>
    <!-- /修改昵称 -->

    <!-- 修改性别 -->
    <van-action-sheet
      v-model="isGenderShow"
      :actions="actions"
      @select="onGenderSelect"
      cancel-text="取消"
      @cancel="isGenderShow = false"
    />
    <!-- /修改性别 -->
    <!-- 修改生日 -->
    <van-popup
      v-model="isEditBirthdayShow"
      position="bottom"
    >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="isEditBirthdayShow = false"
        @confirm="onBirthdayConfirm"
    />
    </van-popup>
    <!-- /修改生日 -->
  </div>
</template>
<script>
import {
  getProfile,
  updateUserPhoto,
  updateUserProfile
} from '@/api/user'
import { formatTime } from '@/utils/date-time'
import globalBus from '@/utils/global-bus'
export default {
  name: 'UserProfile',
  props: {},
  computed: {
    file() {
      return this.$refs.file
    }
  },
  components: {},
  data() {
    return {
      user: {},
      previewImages: [],
      isPreviewPhotoShow: false,
      isEditNameShow: false,
      inputName: '',
      isGenderShow: false,
      actions: [
        /*
          name 会显示出来， value 是我们自己添加的
        */
        { name: '男', value: 0 },
        { name: '女', value: 1 }
      ],
      isEditBirthdayShow: false,
      minDate: new Date(1970, 1, 1),
      maxDate: new Date(),
      // currentDate 默认显示时间和同步用户选择的时间
      currentDate: new Date()
    }
  },
  created() {
    this.loadUserProfile()
  },
  mounted() {},
  methods: {
    async loadUserProfile() {
      const { data: res } = await getProfile()
      this.user = res.data
      // 把字符串格式的日期转换为 JavaScript 日期对象， 设置给 Vant 日期选择器
      this.currentDate = new Date(this.user.birthday)
    },
    onShowFile() {
      // 手动触发input的点击事件
      this.file.click()
    },
    onFileChange() {
      // 1. 拿到 file 类型 input 选择的文件对象
      const fileObj = this.file.files[0]
      /*
        URL.createObjectURL() 静态方法会创建一个 DOMString，
        其中包含一个表示参数中给出的对象的URL。这个 URL 的生命
        周期和创建它的窗口中的 document 绑定。
      */
      // 2. 使用window.URL.createObjectURL(file)得到文件数据
      const fileDate = URL.createObjectURL(fileObj)

      // 3. 将 img.src = 第二步的结果
      // 如果需要定义里面的内容，则通过模板的方式来使用这个组件

      /*
        // 清空数据
        this.previewImages = []
        // 添加预览图片
        this.previewImages.push(fileDate)
      */
      this.previewImages = [fileDate]

      // 显示预览
      this.isPreviewPhotoShow = true
    },
    async onUpdateAvatar() {
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '保存中...' // 提示消息
      })

      // 2. 请求提交
      try {
        // 1. 构建包含文件数据的表单对象 FormDate
        // 注意： 含有文件的数据务必要放到 FormData 中
        /*
          MDN-FormData: https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
          FormData 用代码来构造一个表单对象，主要目的是用于异步发送文件上传
        */
        const fd = new FormData()
        /*
          FormData 接口的append() 方法 会添加一个新值到 FormData 对象内的一个已存在的键中，如果键不存在则会添加该键。
          参数1： 后端要求的数据字段名称
          参数2： 数据值
        */
        fd.append('photo', this.file.files[0])

        const { data: res } = await updateUserPhoto(fd)

        // 更新页面
        this.user.photo = res.data.photo

        // 关闭图片预览
        this.isPreviewPhotoShow = false

        this.$toast.success('更新成功')

        globalBus.$emit('user-update')
      } catch (err) {
        console.log(err)
        this.$toast.fail('更新失败')
      }
      // 3. 根据响应结果执行后续处理

      this.isPreviewPhotoShow = false
    },
    onEditName() {
      this.inputName = this.user.name
      this.isEditNameShow = true
    },
    async onUpdateProfile(field, value) {
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '更新中...' // 提示消息
      })
      try {
        await updateUserProfile({
          [field]: value // 注意：属性名使用中括号包裹，否则会当作字符串来使用而不是变量
        })
        this.$toast.success('更新成功')
      } catch (err) {
        console.log(err)
        this.$toast.fail('更新失败')
      }
    },
    async onNameConfirm() {
      try {
        // 1. 请求提交更新
        await this.onUpdateProfile('name', this.inputName)

        // 2. 更新视图
        this.user.name = this.inputName

        this.isEditNameShow = false
      } catch ({ response }) {
        if (response.status === 400) {
          this.$toast.fail('昵称必须在1~7个字符之间')
        } else if (response.status === 409) {
          this.$toast.fail('昵称已存在')
        }
      }
    },
    async onGenderSelect(item) {
      // 请求更新
      await this.onUpdateProfile('gender', item.value)

      // 更新视图
      this.user.gender = item.name

      // 关闭弹窗
      this.isGenderShow = false
    },
    async onBirthdayConfirm (value) {
      // 使用 dayjs 日期对象格式化为指定格式的字符串
      const birthday = formatTime(value, 'YYYY-MM-DD')
      // 请求更新
      await this.onUpdateProfile('birthday', birthday)

      // 更新视图
      this.user.birthday = birthday

      // 关闭弹窗
      this.isEditBirthdayShow = false
    }
  }
}
</script>
<style scoped lang="less">
.cell-item {
  .avatar {
    width: 30px;
    height: 30px;
  }
}
/deep/ .van-image-preview__cover {
  left: 0;
  bottom: 0;
  right: 0;
  top: unset;
  .van-nav-bar {
    background-color: #000;
  }
}
.edit-namme-popup {
  background-color: #f5f7f9;
  font-size: 14px;
  .intro-field-popup {
    padding: 10px;
  }
}
</style>
