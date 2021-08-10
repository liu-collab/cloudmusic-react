import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSimiSongAction } from '../../store/actionsCreators'
import { WrapperSimiSong } from './style'
import YQThemeHeaderPlay from '@/components/theme-header-play'
import { useEffect } from 'react'

export default memo(function YQSimiSong() {

  //redux hooks
  const dispatch = useDispatch()
  const { simiSongs } = useSelector(state => ({
    simiSongs: state.getIn(["player", "simiSongs"])
  }))
  //other Hooks
  useEffect(() => {
    dispatch(getSimiSongAction())
  })

  //const artist = simiSongs && simiSongs.artists && simiSongs.artists[0] && simiSongs.artists[0].name
  const artist = ""
  return (
    <WrapperSimiSong>
      <YQThemeHeaderPlay title="相似歌曲"></YQThemeHeaderPlay>
      <div className="songs">

        {
          simiSongs.map((item, index) => {
            return (
              <div className="song-item" key={item.id}>
                <div className="info">
                  <div className="title">
                    <a href="#/">{item.name}</a>
                  </div>
                  <div className="artist">
                    <a href="#/">{artist ? "simiSongs.artists[0].name" : "未知歌手"}</a>
                  </div>
                </div>
                <div className="operate">
                  <button className="item sprite_icon3 play"></button>
                  <button className="item sprite_icon3 add"></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </WrapperSimiSong>
  )
})
