/*
  搜索相关的数据接口
*/
import request from '@/utils/request'

/* 、
  获取搜索结果
 */
export function getSearch (params) {
  return request({
    method: 'GET',
    url: '/app/v1_0/search',
    params
  })
}

/*
  获取搜索联想建议
*/
export function getSuggestions (q) {
  return request({
    method: 'GET',
    url: '/app/v1_0/suggestion',
    params: {
      q
    }
  })
}
