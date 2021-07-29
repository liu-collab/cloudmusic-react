
//导入常量
//import * as actionsTypes from './constants.js'


import { getTopBanners } from '@/services/recommend.js'

// dispatch(getTopBannerAction())

//获取banner的action
export const getTopBannerAction = () => {
  //返回一个dispatch,进行网络请求
  return dispatch => {
    getTopBanners().then(res => {
      console.log(res)
    })
  }


}
