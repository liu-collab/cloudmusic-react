import React, { memo } from 'react'

import { WarpperPlayer, PlayerLeft, PlayRight } from './style'

import YQPlayInfo from './c-cpn/playinfo'
import YQPlaySong from './c-cpn/playsong'
import YQSimiSinger from './c-cpn/simiSinger'
import YQSimiSong from './c-cpn/simiSong'
import YQDownload from './c-cpn/download'




export default memo(function YQPlayer() {

  return (
    <WarpperPlayer>
      <div className="content wrap-v2">
        <PlayerLeft>
          <YQPlayInfo></YQPlayInfo>
          <YQPlaySong></YQPlaySong>
        </PlayerLeft>
        <PlayRight>
          <YQSimiSinger></YQSimiSinger>
          <YQSimiSong></YQSimiSong>
          <YQDownload></YQDownload>
        </PlayRight>
      </div>
    </WarpperPlayer>
  )
})
