import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import YQThemeHeaderSmall from '@/components/theme-header-small'
import { WarpperSetterSinger } from './style'
import { getSingerAction } from '../../store/actionsCreators'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function YQSetterSinger() {



  //redux- hooks
  const dispatch = useDispatch()
  const state = useSelector(state => ({
    setterSingers: state.getIn(["recommend", "setterSingers"])
  }), shallowEqual)

  //hooks
  useEffect(() => {
    dispatch(getSingerAction(5))

  }, [dispatch])

  //other handle

  // const ad = useEffect(() => {
  //   const adc = []
  //   const { setterSingers } = state
  //   adc.push(setterSingers)
  //   return adc
  // })
  const { setterSingers = [] } = state.setterSingers


  return (
    <WarpperSetterSinger>
      <YQThemeHeaderSmall title="入驻歌手" more="查看全部 >"></YQThemeHeaderSmall>
      <div className="singer-list">
        {
          setterSingers.map((item, index) => {
            return (
              <a href="/singer" key={item.id} className="item">
                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.alias}</div>
                  <div className="name">{item.name}</div>
                </div>
              </a>
            )
          })


        }
      </div>
      <div className="apply-for">
        <a href="/todo">申请成为网易音乐人</a>
      </div>
    </WarpperSetterSinger>
  )


})
