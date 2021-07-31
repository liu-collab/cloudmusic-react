import request from './request'

//recommend 模块的网络请求 
//将recommend模块封装到单独的文件夹,recommend组件内的网络请求之后都面向这个问件夹进行网络请求

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommend(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}