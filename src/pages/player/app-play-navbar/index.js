import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSongDetailAction } from '../store/actionsCreators'

import { WarpperPlayBar, Control, PlayInfo, Operator } from './style'

import { Slider } from 'antd'
import { NavLink } from 'react-router-dom'

// import { getSongDetail } from '@/services/player'
export default memo(function YQPlayNavbar() {


  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChange, setIsChange] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  //redux-hooks
  const dispatch = useDispatch()
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)

  //other hooks
  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  useEffect(() => {
    //根据获取到的歌曲链接利用歌曲id进行播放歌曲
    audioRef.current.src = getPlaySong(currentSong.id)

  }, [currentSong])


  //test
  // useEffect(() => {
  //   getSongDetail(167876).then(res => {
  //     console.log(res)
  //   })
  // })

  //other handle
  //取值时进行判断,确保值不会为undefined
  const picUrl = (currentSong.al && currentSong.al.picUrl) || " "
  const SongName = (currentSong && currentSong.name) || "未知歌曲"
  const SingerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手"
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration, "mm:ss")
  const showPlayTime = formatDate(currentTime, "mm:ss")
  //进度条
  //  const progress = currentTime / duration * 100

  //other handle
  const playMusic = () => {

    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  //获取播放歌曲时间
  const playTime = (e) => {
    const currentTime = e.target.currentTime

    if (!isChange) {
      setCurrentTime(currentTime * 1000)
      setProgress((currentTime * 1000) / duration * 100)
    }
  }

  const sliderChange = useCallback((value) => {
    setProgress(value)
    const currentTime = value / 100 * duration / 1000
    setCurrentTime(currentTime * 1000)
    setIsChange(true)

  }, [duration])
  const sliderAfterChange = useCallback(value => {

    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime)
    setIsChange(false)
  }, [duration])

  return (
    <WarpperPlayBar className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying} >
          <button className="sprite_player  prev"></button>
          <button className="sprite_player  play" onClick={e => playMusic()} ></button>
          <button className="sprite_player  next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 34)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <a href="/#" className="song-name"> {SongName}</a>
              <a href="/#" className="singer-name">{SingerName} </a>
            </div>
            <div className="progress">
              <Slider

                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}  >


              </Slider >
              <div className="time">
                <span className="now-time">{showPlayTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div>
            <div className="left">
              <button className="play_info btn icn"></button>
              <button className="sprite_player btn favor"></button>
              <button className="sprite_player btn share"></button>
            </div>
            <div className="right sprite_player">
              <button className="sprite_player btn volume"></button>
              <button className="sprite_player btn loop" ></button>
              <button className="sprite_player btn playlist"></button>
            </div>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={e => playTime(e)}></audio>
    </WarpperPlayBar>
  )
})
