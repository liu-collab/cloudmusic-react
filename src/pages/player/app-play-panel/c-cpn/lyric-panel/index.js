import React, { memo ,useRef , useEffect } from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { WrapperPanel } from './style'
import { scrollTo } from '@/utils/scrollTo'
export default memo(function YQLyricPanel() {
  const {currentLyrics , currentLyricsIndex} = useSelector(state=>({
      currentLyrics: state.getIn(['player' , 'currentLyrics']),
      currentLyricsIndex:state.getIn(['player' , 'currentLyricsIndex'])
  }))
  const panelRef = useRef()

  useEffect(()=>{
    if(currentLyricsIndex>0 && currentLyricsIndex<3)return
    scrollTo(panelRef.current , (currentLyricsIndex-3)*32 , 300)
  } ,[currentLyricsIndex])
  return (
    <WrapperPanel ref= {panelRef}>
      <div className="lrc-content ">
         {
          currentLyrics.map((item, index) => {
            return (
              <div key={item.time}
                className={classNames("lrc-item", { "active": index === currentLyricsIndex })}>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </WrapperPanel>
  )
})
