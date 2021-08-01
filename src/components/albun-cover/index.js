import React, { memo } from 'react'
import { getSizeImage } from '@/utils/format-utils'
import { WrapperAlbumCover } from './style'
export default memo(function YQAlbumCover(props) {
  const { info, size, width, bgp } = props
  return (
    <WrapperAlbumCover size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl)} alt="" />
        <a href="to" className="cover image_cover">{info.name}</a>
      </div>
      <div className="album-info">

      </div>
    </WrapperAlbumCover>
  )
})
