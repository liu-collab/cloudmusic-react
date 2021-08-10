import React, { memo } from 'react'

import { WrapperThemeHeaderPlay } from './style'
export default memo(function YQThemeHeaderPlay(props) {
  const { title } = props

  return (
    <WrapperThemeHeaderPlay>
      <div className="title">
        <span>{title}</span>
      </div>
    </WrapperThemeHeaderPlay>
  )
})
