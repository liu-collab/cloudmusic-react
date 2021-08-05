import React, { memo } from 'react'
import { getSizeImage } from '@/utils/format-utils'
import YQThemeHeaderSmall from '@/components/theme-header-small'
import { WrapperHotRadio } from './style'
import { hotRadios } from '@/common/local-data'
export default memo(function YQHotRadio() {

  return (
    <WrapperHotRadio>
      <YQThemeHeaderSmall title="热门主播"></YQThemeHeaderSmall>
      <div>
        {
          hotRadios.map((item, index) => {
            return (
              <a className="item-list" href={item.url} key={item.url}>
                <img src={getSizeImage(item.picUrl, 40)} alt="" />
                <div className="info">
                  <span>{item.name}</span>
                  <p>{item.position}</p>
                </div>
              </a>
            )
          })
        }
      </div>
    </WrapperHotRadio>
  )
})
