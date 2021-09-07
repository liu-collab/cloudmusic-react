import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import YQListAlpha from "./c-cpns/list-alpha";
import YQListItem from "./c-cpns/list-item";

import { getArtistListAction } from "../../store/actioncreators";
export default memo(function YQArtistList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArtistListAction());
  });
  return (
    <div>
      <YQListAlpha></YQListAlpha>
      <YQListItem></YQListItem>
    </div>
  );
});
