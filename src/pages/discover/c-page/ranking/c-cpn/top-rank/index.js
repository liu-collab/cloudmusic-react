import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import { getRankingListAction } from '../../store/actionsCreators'

export default memo(function YQTopRank() {

  const state = useSelector(state => ({
    topList: state.getIn(["ranking", "topList"])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getTopListAction())
    const id = state.topList[0] && state.topList[0].id
    dispatch(getRankingListAction(id))
  }, [dispatch, state])

  console.log(state)
  return (
    <div>
      <h2>YQTopRank</h2>
    </div>
  )
})
