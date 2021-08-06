import { getSongDetail } from "@/services/player"

import * as actionsType from './constants'


const changeSongDetailAction = (currentSong) => ({
  type: actionsType.CHANGE_SONG_DETAIL,
  currentSong
}
)

export const getSongDetailAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeSongDetailAction(res.songs[0]))
    })
  }
}