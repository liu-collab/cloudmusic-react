import React, { memo } from 'react'
import YQThemeHeaderSmall from '@/components/theme-header-small'
import { WrapperHotRadio } from './style'
export default memo(function YQHotRadio() {

  return (
    <WrapperHotRadio>
      <YQThemeHeaderSmall title="热门主播"></YQThemeHeaderSmall>
    </WrapperHotRadio>
  )
})
