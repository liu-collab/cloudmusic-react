import { Map } from 'immutable'
//导入常量
import * as actionsTypes from './constants.js'

//默认值
const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbum: [],

  upRanking: {},
  newRanking: {},
  originRanking: {},

  setterSingers: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionsTypes.CHANGE_TOP_BANNAER:
      //每次数据进行更改时都创建一个新的state对象,开辟一个新的内存空间,可以进行优化
      // return { ...state, topBanners: action.topBanners }
      //导入immutableJS,对数据进行一个优化
      return state.set("topBanners", action.topBanners)
    case actionsTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend)
    case actionsTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbum", action.newAlbum)

    case actionsTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking)
    case actionsTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking)
    case actionsTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking)
    case actionsTypes.CHANGE_SINGER:
      return state.set("setterSingers", action.setterSingers)
    default:
      return state
  }
}
export default reducer