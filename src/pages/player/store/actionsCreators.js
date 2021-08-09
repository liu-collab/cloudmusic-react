import { getSongDetail, getLyric } from "@/services/player"

import * as actionsType from './constants'

import { parseLyric } from '@/utils/lrc-parse'
const changeSongDetailAction = (currentSong) => ({
  type: actionsType.CHANGE_SONG_DETAIL,
  currentSong
}
)

const changeLyricAction = (lyric) => ({
  type: actionsType.CHANGE_LYRIC,
  lyric
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
      const lyricing = res.lrc.lyric
      const lyric = parseLyric(lyricing)
      dispatch(changeLyricAction(lyric))
    })
  }
}