import { Map } from "immutable";
import * as actionsTypes from './constants.js'
const defaultState = Map({
  topList: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionsTypes.CHANGR_RANK_TOP_LIST:
      return state.set("topList", action.topList)
    default:
      return state

  }
}

export default reducer