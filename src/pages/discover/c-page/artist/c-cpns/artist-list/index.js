import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import YQListAlpha from "./c-cpns/list-alpha";
import YQListItem from "./c-cpns/list-item";
import YQThemeHeaderSmall from "@/components/theme-header-title";

import { getArtistListAction } from "../../store/actioncreators";
import { useSelector } from "react-redux";

import { WrapperList } from "./style";
export default memo(function YQArtistList() {
  const { currentType, artistlist } = useSelector((state) => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistlist: state.getIn(["artist", "artistlist"]),
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArtistListAction());
  });
  return (
    <WrapperList>
      <YQThemeHeaderSmall title={currentType.name} more={"更多"} />
      <YQListAlpha></YQListAlpha>
      <div className="artist-list">
        {artistlist.map((item, index) => {
          return <YQListItem key={item.id} index={index} info={item} />;
        })}
      </div>
    </WrapperList>
  );
});
