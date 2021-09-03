import React, { memo    ,useEffect } from 'react'
import { useDispatch  } from 'react-redux'

import { getCategoryAction , getCategorySongListAction } from './store/actionCreators'


import { WrapperSong  } from './style'
import YQSongHeader from './c-cpns/header'
import YQSongList from './c-cpns/list'

export default memo(function Songs() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCategoryAction())
    dispatch(getCategorySongListAction(0))
  })
  return (
    <WrapperSong className="wrap-v2">
      <YQSongHeader></YQSongHeader>
      <YQSongList></YQSongList>
    </WrapperSong>
  )
})
