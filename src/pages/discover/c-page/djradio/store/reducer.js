import { Map } from 'immutable';
import * as actionType from './costans';
const defaultState = Map({
  categories: [],
  currentId: 0,
  recommends: [],
  radios: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_DJRDIO_CATEGORY:
      return state.set('categories', action.categories);
    case actionType.CHANGE_CURRENT_ID:
      return state.set('currentId', action.currentId);
    case actionType.CHANGE_DJRDIO_RECOMMEND:
      return state.set('recommends', action.recommends);
    case actionType.CHANGE_DJRADIO_RADIOS:
      return state.set('radios', action.radios);
    default:
      return state;
  }
}

export default reducer;
