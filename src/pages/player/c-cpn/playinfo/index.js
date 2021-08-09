import React, { memo } from 'react'
import { getSizeImage } from '@/utils/format-utils'
import { shallowEqual, useSelector } from "react-redux"

import { WrapperPlayInfo, PlayInfoLeft, PlayInfoRight } from './style'
export default memo(function YQPlayInfo() {


  //redux hook
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])

  }), shallowEqual)


  //other handle
  const picUrl = currentSong.al && currentSong.al.picUrl
  return (
    <WrapperPlayInfo>
      <PlayInfoLeft>
        <div className="image">
          <img src={getSizeImage(picUrl, 130)} alt="" />
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="#/">生成外联播放器</a>

        </div>
      </PlayInfoLeft>
      <PlayInfoRight>

      </PlayInfoRight>

    </WrapperPlayInfo>
  )
})
