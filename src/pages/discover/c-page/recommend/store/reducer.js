import { Map } from 'immutable'
//导入常量
import * as actionsTypes from './constants.js'

//默认值
const defaultState = Map({
  topBanners: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionsTypes.CHANGE_TOP_BANNAER:
      //每次数据进行更改时都创建一个新的state对象,开辟一个新的内存空间,可以进行优化
      // return { ...state, topBanners: action.topBanners }
      //导入immutableJS,对数据进行一个优化
      return state.set("topBanners", action.topBanners)

    default:
      return state
  }
}
export default reducer