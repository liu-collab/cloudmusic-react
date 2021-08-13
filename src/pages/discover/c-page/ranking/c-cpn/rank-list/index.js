import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'


import { WrapperRankList } from './style'
export default memo(function YQRankList() {


  const state = useSelector(state => ({
    rankingList: state.getIn(["ranking", "rankingList"])
  }), shallowEqual)

  //const dispatch = useDispatch()

  // useEffect(() => {
  //  // dispatch(getRankingListAction())
  // })
  return (
    <WrapperRankList>
      <h2>YQRankList</h2>
    </WrapperRankList>
  )
})
