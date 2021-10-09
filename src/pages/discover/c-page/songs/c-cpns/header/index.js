import React, { memo } from 'react';

import { WrapperHeader, HeaderLeft, HeaderRight } from './style';
import YQCategory from '../category';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  changeCurrentCategory,
  getCategorySongListAction,
} from '../../store/actionCreators';

export default memo(function YQSongHeader() {
  const [showCategory, setShowCategory] = useState(false);
  const dispatch = useDispatch();
  const { currentCategory } = useSelector(
    (state) => ({
      currentCategory: state.getIn(['song', 'currentCategory']),
    }),
    shallowEqual
  );

  const hotClick = () => {
    dispatch(changeCurrentCategory('全部'));
    dispatch(getCategorySongListAction(0));
  };
  return (
    <WrapperHeader>
      <HeaderLeft>
        <div className="title">{currentCategory}</div>
        <button
          className="select"
          onClick={(e) => setShowCategory(!showCategory)}
        >
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {showCategory ? <YQCategory /> : null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot" onClick={(e) => hotClick()}>
          热门
        </button>
      </HeaderRight>
    </WrapperHeader>
  );
});
