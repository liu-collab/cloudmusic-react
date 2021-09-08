import React, { memo, useEffect, useState } from "react";

import { WrapperListAlpha } from "./style";
import classNames from "classnames";

import { singerAlphas } from "@/utils/alpha";
import { getArtistListAction } from "../../../../store/actioncreators";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
export default memo(function YQListAlpha() {
  const [currentAlpha, setCurrentAlpha] = useState("-1");

  //redux-hook
  const { currentArea, currentType } = useSelector(
    (state) => ({
      currentArea: state.getIn(["artist", "currentArea"]),
      currentType: state.getIn(["artist", "currentType"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  //other hook
  useEffect(() => {
    setCurrentAlpha("-1");
  }, [currentArea, currentType]);
  useEffect(() => {
    dispatch(getArtistListAction(currentArea, currentType.type, currentAlpha));
  }, [currentArea, currentType, currentAlpha, dispatch]);
  return (
    <WrapperListAlpha hasTop={currentAlpha !== -1}>
      {currentArea !== -1 &&
        singerAlphas.map((item, index) => {
          const isActive = currentAlpha === item; //当前选中的字母
          if (item === "0") item = "其他";
          if (item === "-1") item = "热门";
          return (
            <div
              key={item}
              className={classNames("item", { "active": isActive })}
            >
              <span onClick={(e) => setCurrentAlpha(item)}>
                {item.toUpperCase()}
              </span>
            </div>
          );
        })}
    </WrapperListAlpha>
  );
});
