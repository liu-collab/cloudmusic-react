import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../pages/discover/c-page/recommend/store';
import { reducer as playerReducer } from '../pages/player/store';
import { reducer as rankingRducer } from '../pages/discover/c-page/ranking/store';
import { reducer as songReducer } from '../pages/discover/c-page/songs/store';
import { reducer as albumReducer } from '../pages/discover/c-page/album/store';
import { reducer as artistReducer } from '../pages/discover/c-page/artist/store';
import { reducer as djrdioReducer } from '../pages/discover/c-page/djradio/store';
//合并reducer
const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  ranking: rankingRducer,
  song: songReducer,
  album: albumReducer,
  artist: artistReducer,
  djrdio: djrdioReducer,
});

export default reducer;
