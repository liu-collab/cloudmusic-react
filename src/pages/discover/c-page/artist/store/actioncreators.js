import * as actionType from "./constans";

import { getArtistList } from "../../../../../services/artist";

const changeArtistList = (artist) => ({
  type: actionType.CHANGE_ARTIST_LIST,
  artistlist: artist,
});

export const getArtistListAction = (area, type, alpha) => {
  return (dispatch) => {
    getArtistList(area, type, alpha).then((res) => {
      console.log(res);
      dispatch(changeArtistList(res.artists));
    });
  };
};
