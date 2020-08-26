import {request} from './request'

export function getHomeMultiData() {
  return request({
    url:'/home/multidata'
  });
}

// 获取分类商品
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}