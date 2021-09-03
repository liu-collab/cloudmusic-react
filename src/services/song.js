import  request from './request'

export function getCategory(){
  return request({
    url:"/playlist/catlist"
  })
}

export function getCategorySongList(cat="全部", offset=0, limit = 35){
  return request({
    url:"/top/playlist",
     params: {
      cat,
      limit,
      offset
    }
  })
}