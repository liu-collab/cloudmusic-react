import React, { memo } from 'react'
import PropsTypes from 'prop-types'

import { WarpperHeaderSmall } from './style'

const YQThemeHeaderSmall = memo(function (props) {
  const { title, more } = props
  return (
    <WarpperHeaderSmall>
      <span>{title}</span>
      <a href="/more">{more}</a>
    </WarpperHeaderSmall>
  )
})

YQThemeHeaderSmall.default = {
  title: ""
}

YQThemeHeaderSmall.PropsTypes = {
  title: PropsTypes.string.isRequired,
  more: PropsTypes.string
}


export default YQThemeHeaderSmall