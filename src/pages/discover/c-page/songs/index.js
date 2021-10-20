import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  getCategoryAction,
  getCategorySongListAction,
  changeCurrentCategory,
} from './store/actionCreators';

import { WrapperSong } from './style';
import YQSongHeader from './c-cpns/header';
import YQSongList from './c-cpns/list';
import { useLocation } from 'react-router';

export default memo(function Songs() {
  const dispatch = useDispatch();
  const cat = useLocation().cat;

  useEffect(() => {
    dispatch(changeCurrentCategory(cat));
  }, [dispatch, cat]);

  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getCategorySongListAction(0));
  }, [dispatch]);
  return (
    <WrapperSong className="wrap-v2">
      <YQSongHeader></YQSongHeader>
      <YQSongList></YQSongList>
    </WrapperSong>
  );
});
