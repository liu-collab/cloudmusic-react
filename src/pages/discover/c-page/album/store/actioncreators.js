import * as actionType from './constans'

import { getHotAlbum ,  getAllAllbum} from '@/services/album'

const changeHotAlbum = (res)=>({
  type:actionType.CHANGE_HOT_ALBUM,
  hotAlbum:res.albums
}
)

export const getHotAlbumAction = ()=>{
  return dispatch =>{
   getHotAlbum().then(res=>{
     dispatch(changeHotAlbum(res))
   })
  }
} 