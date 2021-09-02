import React, { memo } from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { WrapperPanel } from './style'
export default memo(function YQLyricPanel() {
  const {currentLyrics , currentLyricsIndex} = useSelector(state=>({
      currentLyrics: state.getIn(['player' , 'currentLyrics']),
      currentLyricsIndex:state.getIn(['player' , 'currentLyricsIndex'])
  }))
  return (
    <WrapperPanel>
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
