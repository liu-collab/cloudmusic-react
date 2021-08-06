import React, { memo } from 'react'

import { WarpperPlayer } from './style'

import YQPlayNavbar from './app-play-navbar'
export default memo(function YQPlayer() {
  return (
    <WarpperPlayer>
      <YQPlayNavbar></YQPlayNavbar>
    </WarpperPlayer>
  )
})
