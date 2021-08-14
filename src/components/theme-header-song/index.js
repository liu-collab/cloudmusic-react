import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { WrapperThemeHdeaderSong } from './style'
export default memo(function YQThemeHeaderSong() {

  const state = useSelector(state => ({
    rankingList: state.getIn(["ranking", "rankingList"])
  }), shallowEqual)

  return (
    <WrapperThemeHdeaderSong>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{state.rankingList.trackCount}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{state.rankingList.playCount}</span>
        <span>次</span>
      </div>
    </WrapperThemeHdeaderSong>
  )
})
