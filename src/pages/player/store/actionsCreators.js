import { getSongDetail, getLyric, getPlayList } from "@/services/player"

import * as actionsType from './constants'

import { parseLyric } from '@/utils/lrc-parse'
//歌曲
const changeSongDetailAction = (currentSong) => ({
  type: actionsType.CHANGE_SONG_DETAIL,
  currentSong
}
)
//歌词
const changeLyricAction = (lyric) => ({
  type: actionsType.CHANGE_LYRIC,
  lyric
})

const changePlayListAction = (res) => ({
  type: actionsType.CHANGE_PLAY_LIST,
  simiPlayList: res.playlists
})
//歌曲
export const getSongDetailAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => {

      dispatch(changeSongDetailAction(res.songs[0]))
    })
  }
}

//歌词
export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyricing = res.lrc.lyric
      const lyric = parseLyric(lyricing)
      dispatch(changeLyricAction(lyric))
    })
  }
}

//播放列表

export const getPlayListAction = () => {
  return (dispatch, getState) => {
    //从
    const id = getState().getIn(["player", "currentSong"]).id
    if (!id) return
    getPlayList(id).then(res => {

      dispatch(changePlayListAction(res))
    })
  }
}