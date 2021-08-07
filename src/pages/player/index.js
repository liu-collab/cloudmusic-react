import React, { memo } from 'react'

import { WarpperPlayer, PlayerLeft, PlayRight } from './style'

export default memo(function YQPlayer() {
  return (
    <WarpperPlayer>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2> YQPlayInfo </h2>
          <h2> YQPlaySong</h2>
        </PlayerLeft>
        <PlayRight>
          <h2>YQSimiSinger</h2>
          <h2>YQSimisong</h2>
          <h2>YQDownload</h2>
        </PlayRight>
      </div>
    </WarpperPlayer>
  )
})
