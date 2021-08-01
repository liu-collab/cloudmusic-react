
//导入常量
import * as actionsTypes from './constants.js'


import { getTopBanners, getHotRecommend, getNewAlbum } from '@/services/recommend.js'



const changeBannersAction = (res) => ({
  type: actionsTypes.CHANGE_TOP_BANNAER,
  topBanners: res.banners
})

//获取banner的action
export const getTopBannerAction = () => {
  //返回一个dispatch,进行网络请求
  return dispatch => {
    getTopBanners().then(res => {
      //派发一个action,将请求到的res传过去
      dispatch(changeBannersAction(res))
    })
  }
}

///热门推荐模块
const changeHotRecommendAction = (res) => ({
  type: actionsTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: res.result

})

export const getHotRecommendAction = (limt) => {
  return dispatch => {
    getHotRecommend(limt).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

//新碟上架模块
const changeNewAlbumAction = (res) => ({
  type: actionsTypes.CHANGE_NEW_ALBUM,
  newAlbum: res.albums
})

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

