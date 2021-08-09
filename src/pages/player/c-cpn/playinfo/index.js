import React, { memo, useEffect, useState } from 'react'
import { getSizeImage } from '@/utils/format-utils'
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { getLyricAction } from '../../store/actionsCreators'

import { WrapperPlayInfo, PlayInfoLeft, PlayInfoRight } from './style'
import YQSongOperationBar from '@/components/song-operation-bar'
export default memo(function YQPlayInfo() {

  const [isSpread, setIsSpread] = useState(false)
  //redux hook
  const dispatch = useDispatch()
  const { currentSong, currentLyrics } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    currentLyrics: state.getIn(["player", "currentLyrics"])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getLyricAction(167876))
  }, [dispatch])


  //other handle
  const picUrl = currentSong.al && currentSong.al.picUrl
  const singer = currentSong.ar && currentSong.ar[0].name
  const name = currentSong && currentSong.name
  const Zname = currentSong.al && currentSong.al.name
  //const Lyric = currentLyrics.lrc && currentLyrics.lrc.lyric

  const totalcount = isSpread ? currentLyrics.length : 13
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
      <PlayInfoRight isSpread={isSpread}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title"  >{name}</h3>
        </div>
        <div className="singer">
          <span className="laber">歌手:</span>
          <a href="/#">{singer}</a>
        </div>
        <div className="album">
          <span className="laber">所属专辑:</span>
          <a href="/#">{Zname}</a>
        </div>
        <YQSongOperationBar
          favorTitle="收藏"
          shareTitle="分享"
          downloadTitle="下载"
          commentTitle={currentSong.cp}
        ></YQSongOperationBar>

        <div className="Lyric">
          <div className="Lyric-info">
            {
              currentLyrics.slice(0, totalcount).map((item, index) => {
                return (
                  <p key={item.time} className="text">{item.content}</p>
                )
              })
            }
          </div>
          <button className="lyric-control"
            onClick={e => setIsSpread(!isSpread)}>
            {isSpread ? "收起" : "展开"}
            <i className="sprite_icon2" ></i>
          </button>
        </div>
      </PlayInfoRight>

    </WrapperPlayInfo>
  )
})
