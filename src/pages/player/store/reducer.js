import { Map } from "immutable";
import * as actionsType from './constants'
//利用Map让对象的数据不可变
const defaultState = Map({
  currentSong: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionsType.CHANGE_SONG_DETAIL:
      return state.set("currentSong", action.currentSong)
    default:
      return state
  }

}
export default reducer