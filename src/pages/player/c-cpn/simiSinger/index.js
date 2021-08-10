import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSizeImage } from '@/utils/format-utils'

import { getPlayListAction } from '../../store/actionsCreators'
import { WrapperSimiSinger } from './style'
import YQThemeHeaderPlay from '@/components/theme-header-play'
export default memo(function YQSimiSinger() {

  //react redux

  const { simiPlayList } = useSelector(state => ({
    simiPlayList: state.getIn(["player", "simiPlayList"])
  }), shallowEqual)
  const dispatch = useDispatch()
  //other hooks
  useEffect(() => {
    dispatch(getPlayListAction())
  }, [dispatch])

  return (
    <WrapperSimiSinger>
      <YQThemeHeaderPlay title="包含这首歌的歌单"></YQThemeHeaderPlay>
      <div className="song">
        {
          simiPlayList.map((item, index) => {
            return (
              <div className="song-item" key={item.id}>
                <a href="/#" className="image">
                  <img src={getSizeImage(item.coverImgUrl, 50)} alt="" />
                </a>
                <div className="info text-nowrap">
                  <a href="/#">{item.name}</a>
                  <div className="auchor">
                    by
                    <a href="/#">{item.creator.nickname}</a>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </WrapperSimiSinger>
  )
})
