import React, { memo } from 'react'

import { dicoverMenu } from '@/common/local-data'
import { NavLink } from "react-router-dom"
import { renderRoutes } from 'react-router-config'

import { WarpperTop, TopMenu } from './style'

export default memo(function YQDiscover(props) {
  // useEffect(() => {

  //   request({
  //     url: "/banner"
  //   }).then(res => console.log(res))
  // }, [])
  //获取子路由
  const { route } = props
  return (
    <WarpperTop>
      <div className="top">

        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map(item => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </WarpperTop>
  )
})
