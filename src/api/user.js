/* *
 * 用户相关的请求模块
 */
import request from '@/utils/request'

/* *
 * 用户登录
 */
export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}

/*
  短信验证码
*/
export function sendSmsCode(mobile) {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}

/*
  获取用户频道列表
  如果登录了： 获取用户频道列表
  没有登录： 获取默认推荐的频道列表
*/
export function getUserChannels() {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}

/*
  关注用户
*/
export function followUser (userId) {
  return request({
    method: 'POST',
    url: '/app/v1_0/user/followings',
    data: {
      target: userId
    }
  })
}

/*
  取消关注用户
 */
export function unFollowUser(userId) {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/followings/${userId}`
  })
}

/*
  获取当前登录用户自己信息
*/
export function getSelf () {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
  })
}

/*
  根据id获取用户信息
*/
export function getUserById(userId) {
  return request({
    method: 'GET',
    url: `/app/v1_0/users/${userId}`
  })
}

/*
  获取用户个人资料
*/
export function getProfile() {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/profile'
  })
}

/*
  更新用户头像
*/
export const updateUserPhoto = data => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/photo',
    /*
      注意：
        如果 Content-Type 要求是 application/json, 则y传递{}
        如果 Content-Type 要求是 multipart/form-data, 则传递 Form-Data 对象
        multipart / form - data 常见于文件上传的格式要求
    */
    data
  })
}

/*
  编辑用户资料
 */
export const updateUserProfile = data => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/profile',
    data
  })
}

/*
  获取用户关注列表
 */
export const getFollowingsByUser = (userId, params) => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/followings',
    params,
    data: {
      target: userId.toString()
    }
  })
}

/*
  获取用户关注列表
 */
export const getFollowersByUser = (userId, params) => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/followers',
    params,
    data: {
      target: userId.toString()
    }
  })
}

/*
  获取用户的收藏列表
*/
export const getUserCollection = params => {
  return request({
    method: 'GET',
    url: '/app/v1_0/article/collections',
    params
  })
}

/*
  用户阅读历史列表
 */
export const getUserHistories = params => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/histories',
    params
  })
}

/*
  用户文章列表
*/
export const getUserArticle = params => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/articles',
    params
  })
}
