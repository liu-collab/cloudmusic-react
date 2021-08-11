import React, { memo } from 'react'
import { useSelector } from 'react-redux'
export default memo(function YQRankList() {


  const state = useSelector(state => ({
    rankingList: state.getIn(["ranking", "rankingList"])
  }))
  console.log(state)
  //const dispatch = useDispatch()

  // useEffect(() => {
  //  // dispatch(getRankingListAction())
  // })
  return (
    <div>
      <h2>YQRankList</h2>
    </div>
  )
})
