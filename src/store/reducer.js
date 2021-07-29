import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../pages/discover/c-page/recommend/store";
//合并reducer
const reducer = combineReducers({
  recommend: recommendReducer
})

export default reducer