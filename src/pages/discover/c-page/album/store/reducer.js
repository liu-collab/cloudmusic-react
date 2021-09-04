import { Map } from "immutable";

import * as actionType from './constans'

const defaultState = Map({
  allAlbum:[],
  hotAlbum:[],
  total:0
})


function reducer(state = defaultState,action){
  switch(action.type){
    case actionType.CHANGE_ALL_ALBUM:
      return state.set('allAlbum' , action.allAlbum)
    case actionType.CHANGE_HOT_ALBUM:
      return state.set('hotAlbum' , action.hotAlbum)
    case actionType.CHANGE_TOTAL:
      return state.set('total' , action.total)
    default:
      return state
  }
}

export default reducer