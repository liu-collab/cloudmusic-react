import { getSongDetail, getLyric } from "@/services/player"

import * as actionsType from './constants'


const changeSongDetailAction = (currentSong) => ({
  type: actionsType.CHANGE_SONG_DETAIL,
  currentSong
}
)

const changeLyricAction = (res) => ({
  type: actionsType.CHANGE_LYRIC,
  currentLyrics: res
})

export const getSongDetailAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeSongDetailAction(res.songs[0]))
    })
  }
}



export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      dispatch(changeLyricAction(res))
    })
  }
}