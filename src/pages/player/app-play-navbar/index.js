import React, { memo } from 'react'
import { getSizeImage } from '@/utils/format-utils'



import { WarpperPlayBar, Control, PlayInfo, Operator } from './style'

import { Slider } from 'antd'
import { NavLink } from 'react-router-dom'
export default memo(function YQPlayNavbar() {
  return (
    <WarpperPlayBar className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player  prev"></button>
          <button className="sprite_player  play"></button>
          <button className="sprite_player  next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src="http://p3.music.126.net/Bs04WWcGHYYj13DhlBsBgQ==/109951166177469818.jpg?param=34y34" alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <a href="/#" className="song-name"> 红豆</a>
              <a href="/#" className="singer-name">啊啊啊 </a>
            </div>
            <div className="progress">
              <Slider>

              </Slider>
              <div className="time">
                <span className="now-time">0:0</span>
                <span className="divider">/</span>
                <span className="duration">4:30</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div>
            <div className="left">
              <button className="play_info btn icn"></button>
              <button className="sprite_player btn favor"></button>
              <button className="sprite_player btn share"></button>
            </div>
            <div className="right sprite_player">
              <button className="sprite_player btn volume"></button>
              <button className="sprite_player btn loop" ></button>
              <button className="sprite_player btn playlist"></button>
            </div>
          </div>
        </Operator>
      </div>
    </WarpperPlayBar>
  )
})
