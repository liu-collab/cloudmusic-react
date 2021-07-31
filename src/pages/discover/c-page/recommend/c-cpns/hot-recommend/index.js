import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommendAction } from '../../store/actionsCreators'
import { WrapperYQHotRecommend } from './style'
import { HOT_RECOMMEND_LIMT } from '@/common/constants'
import YQThemeHeaderRCMQT from '@/components/theme-header-rcm'

export default memo(function YQHotRecommend() {

  //redux hooks
  const { hotRecommend } = useSelector(state => ({
    hotRecommend: state.getIn(["recommend", "hotRecommend"])
  }), shallowEqual)
  const dispatch = useDispatch()

  //other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMT))
  }, [dispatch])
  return (
    <WrapperYQHotRecommend>
      <YQThemeHeaderRCMQT
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        morelink="/discover/songs"
        keywordClick="todo" />
      <div className="recommend-list">
        {
          hotRecommend.map((item, index) => {
            return <div key={item.targetId}>{item.name}</div>
          })
        }
      </div>
    </WrapperYQHotRecommend>
  )
})
