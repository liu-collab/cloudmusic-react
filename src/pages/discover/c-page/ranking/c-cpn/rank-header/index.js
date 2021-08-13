import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { getSizeImage, formatMonthDay } from '@/utils/format-utils'

import { WrapperRankHeader } from './style'
import YQSongOperationBar from '@/components/song-operation-bar'
export default memo(function YQRankHeader() {

  const state = useSelector(state => ({
    rankingList: state.getIn(["ranking", "rankingList"])
  }), shallowEqual)
  const topInfo = state.rankingList
  return (
    <WrapperRankHeader>
      <div className="image">
        <img src={getSizeImage(topInfo.coverImgUrl, 150)} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{topInfo.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <span>最近更新:  {formatMonthDay(topInfo.updateTime)}</span>
          <span className="update">（{"刚刚更新"}）</span>
        </div>
        <YQSongOperationBar
          favorTitle={`(${topInfo.subscribedCount})`}
          shareTitle={`(${topInfo.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${topInfo.commentCount})`}
        ></YQSongOperationBar>
      </div>
    </WrapperRankHeader>
  )
})
