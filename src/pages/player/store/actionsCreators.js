import { getSongDetail, getLyric, getPlayList, getSimiSong } from "@/services/player"

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
//相似歌单
const changePlayListAction = (res) => ({
  type: actionsType.CHANGE_PLAY_LIST,
  simiPlayList: res.playlists
})
//相似歌曲
const changeSimiSongsAction = (res) => ({
  type: actionsType.CHANGR_SIMI_SONG,
  simiSongs: res.songs
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

//播放歌单

export const getPlayListAction = () => {
  return (dispatch, getState) => {
    //从
    const id = getState().getIn(["player", "currentSong"]).id
    if (!id) return
    getPlayList(id).then(res => {

      setTimeout(() => {
        dispatch(changePlayListAction(res))
      }, 100)
    })
  }
}

//相似歌曲

export const getSimiSongAction = () => {
  return (dispatch, getState) => {
    const id = getState().getIn(["player", "currentSong"]).id
    if (!id) return
    getSimiSong(id).then(res => {
      dispatch(changeSimiSongsAction(res))
    })
  }
}