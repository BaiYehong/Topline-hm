/*
  文章相关的数据接口
*/
import request from '@/utils/request'

/*
  获取文章列表
*/
export function getArticles (params) {
  return request(
    {
      method: 'GET',
      url: '/app/v1_1/articles',
      params
    }
  )
}

/*
  获取文章详情
*/
export function getArticle (articleId) {
  return request({
    method: 'GET',
    url: `/app/v1_0/articles/${articleId}`
  })
}

/*
  对文章收藏
*/
export function addArticleCollect (articleId) {
  return request({
    method: 'POST',
    url: '/app/v1_0/article/collections',
    data: {
      target: articleId
    }
  })
}

/*
  取消对文章的收藏
 */
export function deleteArticleCollect (articleId) {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/article/collections/${articleId}`
  })
}
/*
  对文章点赞
 */
export function addArticleLike (articleId) {
  return request({
    method: 'POST',
    url: '/app/v1_0/article/likings',
    data: {
      target: articleId
    }
  })
}

/*
  取消对文章的点赞
 */
export function deleteArticleLike (articleId) {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/article/likings/${articleId}`
  })
}

/*
  获取用户文章列表
*/
export function getArticleByUser (userId) {
  return request({
    method: 'GET',
    url: `/app/v1_0/users/${userId}/articles`
  })
}
