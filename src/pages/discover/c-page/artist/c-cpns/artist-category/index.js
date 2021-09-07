import React, { memo } from "react";

import { WrapperCategory, CategoryItem } from "./style";
import classNames from "classnames";

import {
  changeCurrentArea,
  changeCurrentType,
} from "../../store/actioncreators";

import { artistCategories } from "@/common/local-data";
import { useSelector, useDispatch } from "react-redux";

export default memo(function YQArtistCategory() {
  const { currentArea, currentType } = useSelector((state) => ({
    currentArea: state.getIn(["artist", "currentArea"]),
    currentType: state.getIn(["artist", "currentType"]),
  }));

  const dispatch = useDispatch();
  const selcetArtist = (area, item) => {
    dispatch(changeCurrentArea(area));
    dispatch(changeCurrentType(item));
  };

  const renderList = (artists, area) => {
    return (
      <div>
        {artists.map((item, index) => {
          const isSelect =
            currentArea === area && currentType.type === item.type; //判断当前选中的列表
          return (
            <CategoryItem
              key={item.name}
              className={classNames({ active: isSelect })}
            >
              <span onClick={(e) => selcetArtist(area, item)}>{item.name}</span>
            </CategoryItem>
          );
        })}
      </div>
    );
  };
  return (
    <WrapperCategory>
      {artistCategories.map((item, index) => {
        return (
          <div className="section" key={item.name}>
            <div className="title">{item.title}</div>  
            {renderList(item.artists, item.area)} 
          </div>
        );
      })}
    </WrapperCategory>
  );
});
