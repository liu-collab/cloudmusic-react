
import * as actionsType from './constants'

import { getTopList, getRankingList } from "@/services/ranking"

const ChangeTopList = (res) => ({
  type: actionsType.CHANGR_RANK_TOP_LIST,
  topList: res.list
})
//左侧榜单
export const getTopListAction = () => {
  return dispatch => {
    getTopList().then(res => {
      dispatch(ChangeTopList(res))
    })
  }
}
//歌曲列表
const changeRankingListAction = (res) => ({
  type: actionsType.CHANGE_RANK_LIST,

  rankingList: res.playlist
}
)
export const getRankingListAction = (id) => {
  return dispatch => {
    getRankingList(id).then(res => {
      console.log(res)
      dispatch(changeRankingListAction(res))
    })
  }
}

export const changeCurrentIndex = (index) => ({
  type: actionsType.CHANGR_CURRENT_INDEX,
  currentIndex: index
}
)