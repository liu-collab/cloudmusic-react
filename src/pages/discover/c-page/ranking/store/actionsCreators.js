
import * as actionsType from './constants'

import { getTopList } from "@/services/ranking"

const ChangeTopList = (res) => ({
  type: actionsType.CHANGR_RANK_TOP_LIST,
  topList: res
})

export const getTopListAction = () => {
  return dispatch => {
    getTopList().then(res => {
      dispatch(ChangeTopList(res))
    })
  }
}