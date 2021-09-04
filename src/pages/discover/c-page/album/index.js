import React, { memo , useEffect } from 'react'
import { useDispatch } from 'react-redux'


import { WrapperAlbum } from './style'
import YQAllAlbum from './c-cpns/allAlbum'
import YQHotAlbum from './c-cpns/hotAlbum'
import { getAllAlbumAction  ,getHotAlbumAction} from './store/actioncreators'

export default memo(function Album() {
   const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllAlbumAction(1))
     dispatch(getHotAlbumAction())
  },[dispatch])
  
  return (
    <WrapperAlbum className="wrap-v2">
      <YQHotAlbum></YQHotAlbum>
        <YQAllAlbum></YQAllAlbum>
    </WrapperAlbum>
  )
})
