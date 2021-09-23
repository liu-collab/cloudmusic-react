import { Map } from 'immutable';
import * as actionType from './costans';
const defaultState = Map({
  categories: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_DJRDIO_CATEGORY:
      return state.set('categories', action.categories);
    default:
      return state;
  }
}

export default reducer;
