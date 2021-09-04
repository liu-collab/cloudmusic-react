import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'


import { WrapperHotAlbum } from './style'
import YQThemeHeaderTitle from '@/components/theme-header-title'
import YQAlbumCover from '@/components/album-cover'

export default memo(function YQHotAlbum() {
  
  const {hotAlbum} = useSelector(state=>({
    hotAlbum:state.getIn(['album','hotAlbum'])
  }),shallowEqual)
  return (
    <WrapperHotAlbum>
        <YQThemeHeaderTitle title="热门新碟"></YQThemeHeaderTitle>
       <div className="album-list">
         {
           hotAlbum.slice(0,10).map((item,index)=>{
             return (
              <YQAlbumCover 
                                 key={item.id} 
                                 info={item} 
              />
             )
           })
         }
       </div>

    </WrapperHotAlbum>
  )
})
