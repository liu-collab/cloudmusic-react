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
              <img src={getSizeImage()} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="songer">歌曲名字</div>
            <div className="progress">
              <Slider>

              </Slider>
            </div>
            <div className="time">0:0/4:30</div>
          </div>
        </PlayInfo>
        <Operator>333</Operator>
      </div>
    </WarpperPlayBar>
  )
})
