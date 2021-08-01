import React, { memo, useEffect } from 'react'
import YQThemeHeaderRCMQT from '@/components/theme-header-rcm'
import { getNewAlbumAction } from '../../store/actionsCreators'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NEW_ALBUM_LIMT } from '@/common/constants'
import { WrapperNewAlbum } from './style'
import YQSongCover from '@/components/songs-cover'

export default memo(function YQNewAlbum() {

  //redux hooks
  const { newAlbum } = useSelector(state => ({
    newAlbum: state.getIn(["recommend", "newAlbum"])
  }), shallowEqual)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMT))
  }, [dispatch])

  return (
    <WrapperNewAlbum>
      <YQThemeHeaderRCMQT title="新碟上架"></YQThemeHeaderRCMQT>

      <div>
        {
          newAlbum.map((item, index) => {
            return (
              <YQSongCover key={item.id} info={item}></YQSongCover>
            )
          })
        }
      </div>
    </WrapperNewAlbum>
  )
})
