import { Map } from "immutable";

import * as actionType from "./constans";

const defaultState = Map({
  currentArea: -1,
  currentType: {
    name: "推荐歌手",
    type: 1,
  },
  artistlist: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_AREA:
      return state.set("currentArea", action.currentArea);
    case actionType.CHANGE_CURRENT_TYPE:
      return state.set("currentType", action.currentType);
    case actionType.CHANGE_ARTIST_LIST:
      return state.set("artistlist", action.artistlist);
    default:
      return state;
  }
}

export default reducer;
