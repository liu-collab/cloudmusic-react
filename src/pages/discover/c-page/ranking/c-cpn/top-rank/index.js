import React, { memo, useEffect } from 'react'
import classNames from "classnames"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSizeImage } from '@/utils/format-utils'


import { getRankingListAction } from '../../store/actionsCreators'


import { WrapperTopRank } from './style'
export default memo(function YQTopRank() {

  const state = useSelector(state => ({
    topList: state.getIn(["ranking", "topList"]),
    currentIndex: state.getIn(["ranking", "currentIndex"])
  }), shallowEqual)
  const currentIndex = state.currentIndex
  const topList = state.topList
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getTopListAction())
    const id = state.topList[currentIndex] && state.topList[currentIndex].id
    if (!id) return
    dispatch(getRankingListAction(id))
  }, [dispatch, state, currentIndex])

  // console.log(state)
  return (
    <WrapperTopRank>
      {
        topList.map((item, index) => {
          let header
          if (index === 0 || index === 4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <div key={item.id}>
              {header}
              <div className={classNames("item", { "active": index === currentIndex })}>
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>

              </div>
            </div>
          )
        })
      }
    </WrapperTopRank>
  )
})
