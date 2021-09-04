import request from './request'

export function getAllAllbum(limit,offset){
  return request({
    url:"/top/album",
    params:{
      limit,
      offset
    }
  })
}

export function getHotAlbum(){
  return request({
    url:"/album/newest"
  })
}