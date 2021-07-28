
//导入常量
import * as actionsTypes from './constants.js'

//默认值
const defaultState = {
  topBanners: []
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionsTypes.CHANGE_TOP_BANNAER:
      return { ...state, topBanners: [] }

    default:
      return state
  }
}
export default reducer