import { Map } from "immutable";

import * as actionType from './constans'

const defaultState = Map({
  allAlbum:[],
  hotAlbum:[]
})


function reducer(state = defaultState,action){
  switch(action.type){
    case actionType.CHANGE_ALL_ALBUM:
      return state.set('allAlbum' , action.allAlbum)
    case actionType.CHANGE_HOT_ALBUM:
      return state.set('hotAlbum' , actionType.hotAlbum)
    default:
      return state
  }
}

export default reducer