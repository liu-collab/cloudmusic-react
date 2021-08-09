import React, { memo } from 'react'
import { getSizeImage } from '@/utils/format-utils'
import { shallowEqual, useSelector } from "react-redux"


import { WrapperPlayInfo, PlayInfoLeft, PlayInfoRight } from './style'
import YQSongOperationBar from '@/components/song-operation-bar'
export default memo(function YQPlayInfo() {


  //redux hook
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])

  }), shallowEqual)


  //other handle
  const picUrl = currentSong.al && currentSong.al.picUrl
  const singer = currentSong.ar && currentSong.ar[0].name
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
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title"  >{currentSong.name}</h3>
        </div>
        <div className="singer">
          <span className="laber">歌手:</span>
          <a href="/#">{singer}</a>
        </div>
        <div className="album">
          <span className="laber">所属专辑:</span>
          <a href="/#">{currentSong.al.name}</a>
        </div>

        <YQSongOperationBar
          favorTitle="收藏"
          shareTitle="分享"
          downloadTitle="下载"
          commentTitle={currentSong.cp}
        ></YQSongOperationBar>
      </PlayInfoRight>

    </WrapperPlayInfo>
  )
})
