import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../pages/discover/c-page/recommend/store";
import { reducer as playerReducer } from "../pages/player/store";
//合并reducer
const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})

export default reducer