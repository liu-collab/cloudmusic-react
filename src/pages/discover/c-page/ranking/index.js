import React, { memo } from 'react'


import YQTopRank from './c-cpn/top-rank'
import YQRankHeader from './c-cpn/rank-header'
import YQRankList from './c-cpn/rank-list'
import { WrapperRanking, RankingRight, RankingLeft } from './style'
export default memo(function Ranking() {
  return (
    <WrapperRanking className="wrap-v2">
      <RankingRight>
        <YQTopRank></YQTopRank>
      </RankingRight>
      <RankingLeft>
        <YQRankHeader></YQRankHeader>
        <YQRankList></YQRankList>
      </RankingLeft>
    </WrapperRanking>
  )
})
