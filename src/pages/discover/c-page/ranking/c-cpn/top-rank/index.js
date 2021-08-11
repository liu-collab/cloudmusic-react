import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import { getTopListAction } from '../../store/actionsCreators'
export default memo(function YQTopRank() {

  const state = useSelector(state => ({
    topList: state.getIn(["ranking", "topList"])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction())
  }, [dispatch])

  console.log(state)
  return (
    <div>
      <h2>YQTopRank</h2>
    </div>
  )
})
