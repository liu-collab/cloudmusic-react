import React, { memo } from 'react'
import { getSizeImage } from '@/utils/format-utils'
import { WrapperAlbumCover } from './style'
export default memo(function YQAlbumCover(props) {
  const { info, size = 130, width = 153, bgp = "-845px" } = props
  return (
    <WrapperAlbumCover size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href="to" className="cover image_cover">{info.name}</a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </WrapperAlbumCover>
  )
})
