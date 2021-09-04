import React, { memo, useEffect } from 'react'


import { WrapperHotAlbum } from './style'

import { getHotAlbumAction } from '../../store/actioncreators'
import { useDispatch } from 'react-redux'


export default memo(function YQHotAlbum() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getHotAlbumAction())
  })
  return (
    <WrapperHotAlbum>
      
    </WrapperHotAlbum>
  )
})
