import React, { memo  } from 'react'

import { WrapperCategory } from './style'


import { changeCurrentCategory , getCategorySongListAction } from '../../store/actionCreators'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
export default memo(function YQCategory() {
  const {category}   =  useSelector(state=>({
    category:state.getIn(['song' ,'category'])
  }) ,shallowEqual )

  //redux hook
  const dispatch = useDispatch()
  
  const selectCategory = (name)=>{
    dispatch(changeCurrentCategory(name))
    dispatch(getCategorySongListAction(0))
  }
  return (
    <WrapperCategory>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={e => selectCategory('全部') }>全部风格</span>
      </div>
      <div className="category">
        {
          category.map((item,index)=>{
            return (
              <dl className={'item'+index} key={item.name}>
                  <dt>
                  <i className="icon sprite_icon2"></i>
                  <span>{item.name}</span>
                </dt>
                 <dd>
                    {
                    item.subs.map(sItem => {
                      return (
                        <div className="item" key={sItem.name}>
                          <span className="link" onClick={e => selectCategory(sItem.name)}>{sItem.name}</span>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                 </dd>
              </dl>
            )
          })
        }
      </div>
    </WrapperCategory>
  )
})
