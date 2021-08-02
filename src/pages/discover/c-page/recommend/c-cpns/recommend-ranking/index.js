import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopDataAction } from '../../store/actionsCreators'
import { WrapperRanking } from './style'
import YQTopRanking from "@/components/top-ranking"
import YQThemeHeaderRCMQT from '@/components/theme-header-rcm'
export default memo(function YQRecommednRanking() {
  const state = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopDataAction(0))
    dispatch(getTopDataAction(2))
    dispatch(getTopDataAction(3))
  }, [dispatch])
  return (
    <WrapperRanking>
      <YQThemeHeaderRCMQT title="榜单">

      </YQThemeHeaderRCMQT>
      <div className="tops">
        <YQTopRanking info={state.upRanking}></YQTopRanking>
        <YQTopRanking info={state.newRanking}></YQTopRanking>
        <YQTopRanking info={state.originRanking}></YQTopRanking>
      </div>
    </WrapperRanking>
  )

})



