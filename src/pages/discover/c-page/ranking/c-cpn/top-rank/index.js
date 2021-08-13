import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import { getRankingListAction } from '../../store/actionsCreators'


import { WrapperTopRank } from './style'
export default memo(function YQTopRank() {

  const state = useSelector(state => ({
    topList: state.getIn(["ranking", "topList"]),
    currentIndex: state.getIn(["ranking", "currentIndex"])
  }), shallowEqual)
  const currentIndex = state.currentIndex
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
      <h2>YQTopRank</h2>
    </WrapperTopRank>
  )
})
