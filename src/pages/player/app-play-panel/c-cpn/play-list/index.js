import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { formatMinuteSecond } from '@/utils/format-utils';

import { WrapperList } from './style'
export default memo(function YQPlayList() {
  const {playList , currentSongIndex} = useSelector(state=>({
    playList:state.getIn(['player' , 'playList']),
    currentSongIndex:state.getIn(['player' , 'currentSongIndex'])
  }),shallowEqual)

  return (
    <WrapperList>
      {
        playList.map((item, index) => {
          return (
            <div key={item.id}
                 className={classNames("play-item", {"active": currentSongIndex === index})}>
              <div className="left">{item.name}</div>
              <div className="right">
                <span className="singer">{item.ar[0].name}</span>
                <span className="duration">{formatMinuteSecond(item.dt)}</span>
                <span className="sprite_playlist link"></span>
              </div>
            </div>
          )
        })
      }
    </WrapperList>
  )
})
