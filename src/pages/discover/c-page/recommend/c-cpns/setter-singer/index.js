import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import YQThemeHeaderSmall from '@/components/theme-header-small'
import { WarpperSetterSinger } from './style'
import { getSingerAction } from '../../store/actionsCreators'

export default memo(function YQSetterSinger() {
  //redux- hooks
  const dispatch = useDispatch()
  const state = useSelector(state => ({
    setterSingers: state.getIn(["recommend", "setterSingers"])
  }), shallowEqual)



  //hooks
  useEffect(() => {
    dispatch(getSingerAction())
  }, [dispatch])


  return (
    <WarpperSetterSinger>
      <YQThemeHeaderSmall title="入驻歌手" more="查看全部 >"></YQThemeHeaderSmall>
    </WarpperSetterSinger>
  )
})
