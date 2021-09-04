import React, { memo } from 'react'


import { WrapperAlbum } from './style'
import YQAllAlbum from './c-cpns/allAlbum'
import YQHotAlbum from './c-cpns/hotAlbum'
export default memo(function Album() {
  return (
    <WrapperAlbum className="wrap-v2">
      <YQHotAlbum></YQHotAlbum>
        <YQAllAlbum></YQAllAlbum>
    </WrapperAlbum>
  )
})
