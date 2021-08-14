import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import YQThemeHeaderSong from '@/components/theme-header-song'
import { WrapperRankList } from './style'
export default memo(function YQRankList() {


  const state = useSelector(state => ({
    rankingList: state.getIn(["ranking", "rankingList"])
  }), shallowEqual)
  const traks = state.rankingList.traks || []

  //const dispatch = useDispatch()

  // useEffect(() => {
  //  // dispatch(getRankingListAction())
  // })

  return (
    <WrapperRankList>
      <YQThemeHeaderSong></YQThemeHeaderSong>
    </WrapperRankList>
  )
})
