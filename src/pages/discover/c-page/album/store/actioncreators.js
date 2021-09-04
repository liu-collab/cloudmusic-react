import * as actionType from './constans'

import { getHotAlbum ,  getAllAllbum} from '@/services/album'

const changeHotAlbum = (res)=>({
  type:actionType.CHANGE_HOT_ALBUM,
  hotAlbum:res.albums
}
)
const changeAllAlbum = (res)=>({
  type:actionType.CHANGE_ALL_ALBUM,
  allAlbum:res.albums
})

const changeTotal = (total)=>({
  type:actionType.CHANGE_TOTAL,
  total
})

export const getHotAlbumAction = ()=>{
  return dispatch =>{
   getHotAlbum().then(res=>{
     dispatch(changeHotAlbum(res))
   })
  }
} 

export const getAllAlbumAction = (page)=>{
  return dispatch =>{
    getAllAllbum(30,(page-1)*30).then(res=>{
      dispatch(changeAllAlbum(res))
      dispatch(changeTotal(res.total))
    })
  }
}