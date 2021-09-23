import * as actionType from './constans';

import { getArtistList } from '@/services/artist';

const changeArtistList = (artist) => ({
  type: actionType.CHANGE_ARTIST_LIST,
  artistlist: artist,
});

export const changeCurrentArea = (area) => ({
  type: actionType.CHANGE_CURRENT_AREA,
  currentArea: area,
});
export const changeCurrentType = (item) => ({
  type: actionType.CHANGE_CURRENT_TYPE,
  currentType: item,
});

export const getArtistListAction = (area, type, alpha) => {
  return (dispatch) => {
    getArtistList(area, type, alpha).then((res) => {
      dispatch(changeArtistList(res.artists));
    });
  };
};
