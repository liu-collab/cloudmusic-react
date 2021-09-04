import React, { memo } from 'react'
import { PropTypes } from 'prop-types'
import { WrappperThemeHeaderRCM } from './style'
const YQThemeHeaderTitle = memo(function (props) {
  const { title } = props
  return (
    <WrappperThemeHeaderRCM className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
      </div>
    </WrappperThemeHeaderRCM>
  )
})
//检查数据类型
YQThemeHeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array

}



export default YQThemeHeaderTitle