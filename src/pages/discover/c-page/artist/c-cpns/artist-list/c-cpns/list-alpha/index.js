import React, { memo, useState } from "react";

import { WrapperListAlpha } from "./style";
import classNames from "classnames";

import { singerAlphas } from "@/utils/alpha";
import { useSelector } from "react-redux";
export default memo(function YQListAlpha() {
  const [currentAlpha, setCurrentAlpha] = useState("-1");

  const { currentArea, currentTypre } = useSelector((state) => ({
    currentArea: state.getIn(["artist", "currentArea"]),
    currentTypr: state.getIn(["artist", "currentTypr"]),
  }));
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
              className={classNames("item", { active: isActive })}
            >
              <span>{item.toUpperCase()}</span>
            </div>
          );
        })}
    </WrapperListAlpha>
  );
});
