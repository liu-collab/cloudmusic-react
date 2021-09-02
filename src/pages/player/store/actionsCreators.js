import { getSongDetail, getLyric, getPlayList, getSimiSong } from "@/services/player"

import * as actionsType from './constants'

import { parseLyric } from '@/utils/lrc-parse'
//歌曲
const changeCurrentSongAction = (currentSong) => ({
  type: actionsType.CHANGE_SONG_DETAIL,
  currentSong
}
)
const changeCurrentSongIndexAction = (index) =>({
  type:actionsType.CHANGE_CURRENTINDEX,
  index
})
//播放列表
const changePlayListAction = (playList)=>({
  type:actionsType.CHANGE_PLAY_LIST , 
  playList
})
const changePlayListIndexAction= (index)=>({
  type:actionsType.CHANGE_CURRENTINDEX,
  index
})
//歌词
const changeLyricAction = (lyric) => ({
  type: actionsType.CHANGE_LYRIC,
  lyric
})
//相似歌单
const changeSimiListAction = (res) => ({
  type: actionsType.CHANGE_SIMI_PLAY_LIST,
  simiPlayList: res.playlists
})
//相似歌曲
const changeSimiSongsAction = (res) => ({
  type: actionsType.CHANGR_SIMI_SONG,
  simiSongs: res.songs
})
//获取歌曲
export const getSongDetailAction = (ids) => {
  return (dispatch ,getState) => {
    //1.根据id进行查找playList是否已经存在歌曲
    const playList = getState().getIn(['player' , 'playList'])
    const songIndex =  playList.findIndex(song=>song.id ===ids)
    //2.判断是否找到歌曲 , -1表示没有找到
    if(songIndex !==-1){  //查找歌曲

      dispatch(changeCurrentSongIndexAction(songIndex))
      const song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))

    }else {
      //获取歌曲数据
       getSongDetail(ids).then(res => {
    const song = res.songs && res.songs[0]
        if(!song) return 
        //将新的歌曲添加到播放列表
        const newPlayList = [...playList]
        newPlayList.push(song)
        //更新播放列表
      dispatch(changePlayListAction(newPlayList))
      dispatch(changePlayListIndexAction(newPlayList.length -1))

      dispatch(changeCurrentSongAction(song))
    })
    }


   
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
        dispatch(changeSimiListAction(res))
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