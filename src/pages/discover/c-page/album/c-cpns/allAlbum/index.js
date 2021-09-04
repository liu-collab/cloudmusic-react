import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { WrapperAllBlum } from './style'
import YQThemeHeaderTitle from '@/components/theme-header-title'
import YQAlbumCover from '@/components/album-cover'
import YQPagination from '@/components/pagination'
import {getAllAlbumAction} from '../../store/actioncreators'
export default memo(function YQAllAlbum() {
  const [currentPage ,setCurrentPage] = useState(1)
  const {allAlbum , total} = useSelector(state=>({
    allAlbum:state.getIn(['album' , 'allAlbum']),
    total:state.getIn(['album','total'])
  }))
  const dispatch = useDispatch()
 const onPageChange = (page)=>{
   setCurrentPage(page)
   dispatch(getAllAlbumAction(page))

 }
  return (
    <WrapperAllBlum>
        <YQThemeHeaderTitle title="全部新碟"></YQThemeHeaderTitle>
        <div className="album-list">
          {
            allAlbum.map((item,index)=>{
              return (
                   <YQAlbumCover 
                                 key={item.id} 
                                 info={item} 
              />
              ) 
            })
          }
        

         
        </div>
          <YQPagination  
          currentPage={currentPage} 
                    total={total} 
                    pageSize={30}
                    onPageChange={onPageChange}
          />
    </WrapperAllBlum>
  )
})
