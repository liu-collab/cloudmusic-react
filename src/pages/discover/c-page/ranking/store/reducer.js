import { Map } from "immutable";
import * as actionsTypes from './constants.js'
const defaultState = Map({
  topList: [],
  rankingList: [],
  currentIndex: 0
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionsTypes.CHANGR_RANK_TOP_LIST:
      return state.set("topList", action.topList)
    case actionsTypes.CHANGE_RANK_LIST:
      return state.set("rankingList", action.rankingList)
    case actionsTypes.CHANGR_CURRENT_INDEX:
      return state.set("currentIndex", action.currentIndex)
    default:
      return state

  }
}

export default reducer