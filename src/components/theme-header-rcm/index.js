import React, { memo } from 'react'
import { WrappperThemeHeaderRCM } from './style'
export default memo(function YQThemeHeaderRCM(props) {
  const { title, keywords, morelink, keywordClick } = props
  return (
    <WrappperThemeHeaderRCM className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className="link" onClick={e => keywordClick(item)}>{item}</span>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <div to={morelink}>更多</div>
        <i className="icon sprite_02"></i>
      </div>

    </WrappperThemeHeaderRCM>
  )
})
