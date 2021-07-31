import React, { memo } from 'react'
import { WrapperYQHotRecommend } from './style'
import YQThemeHeaderRCMQT from '@/components/theme-header-rcm'
export default memo(function YQHotRecommend() {
  return (
    <WrapperYQHotRecommend>
      <YQThemeHeaderRCMQT
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        morelink="/discover/songs"
        keywordClick="todo" />
    </WrapperYQHotRecommend>
  )
})
