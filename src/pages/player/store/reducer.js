import { Map } from "immutable";
import * as actionsType from './constants'
//利用Map让对象的数据不可变
const defaultState = Map({
  currentSong: [],
  currentLyrics: [],
  simiPlayList: [],
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionsType.CHANGE_SONG_DETAIL:
      return state.set("currentSong", action.currentSong)
    case actionsType.CHANGE_LYRIC:
      return state.set("currentLyrics", action.lyric)
    case actionsType.CHANGE_PLAY_LIST:
      return state.set("simiPlayList", action.simiPlayList)
    default:
      return state
  }

}
export default reducer