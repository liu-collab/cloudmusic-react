import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { headerLinks } from "@/common/local-data"
import { ContentWrapper, HeaderLeft, HeaderRight } from './style'
export default memo(function YQAppHeader() {
  const ShowItem = (item, index) => {
    if (index < 3) {
      return <NavLink to={item.link}>{item.title}   <i className="sprite_01 icon"></i> </NavLink>
    } else {
      return <a href="{item.link}">{item.title}</a>
    }
  }
  return (
    <ContentWrapper>

      <div className={"content wrap-v1"}>
        <HeaderLeft >
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {ShowItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
      <div className={"contentBottom"}></div>
    </ContentWrapper>
  )
})
