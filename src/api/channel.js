/*
  频道相关接口
*/
import request from '@/utils/request'

/*
  获取所有频道列表
*/
export function getAllChannels () {
  return request({
    method: 'GET',
    url: '/app/v1_0/channels'
  })
}
/*
  根据频道id删除频道
*/
export const deleteChannel = channelId => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/channels/${channelId}`
  })
}
/*
 批量修改用户频道列表
*/
export const addChannel = channel => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/channels',
    data: {
      channels: [channel]
    }
  })
}
