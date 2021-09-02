import React, { memo } from 'react'


import { WrapperPlayPanel } from './style'
import YQPlayHeader from './c-cpn/play-header'
import YQLyricPanel from './c-cpn/lyric-panel'
import YQPlayList from './c-cpn/play-list'
export default memo(function YQPlayPanel() {
  return (
    <WrapperPlayPanel>
      <YQPlayHeader></YQPlayHeader>
      <div className="main">
         <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
      <YQPlayList/>
      <YQLyricPanel/>
      </div>
    </WrapperPlayPanel>
  )
})
