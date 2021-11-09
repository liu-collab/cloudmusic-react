import React, { memo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import YQSongCover from '@/components/songs-cover';
import YQPagination from '@/components/pagination';
import { PER_PAGE_NUMBER } from '../../store/constants';
import { getCategorySongListAction } from '../../store/actionCreators';

import { WrapperList } from './style';
export default memo(function YQSongList() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const { categorySongs } = useSelector(
    (state) => ({
      categorySongs: state.getIn(['song', 'categorySongs']),
    }),
    shallowEqual
  );

  const playLists = categorySongs.playlists || [];

  const total = categorySongs.total || 0;

  const onPageChange = (page) => {
    setCurrentPage(page);
    dispatch(getCategorySongListAction(page));
  };
  return (
    <WrapperList>
      <div className="songs-list">
        {playLists.map((item, index) => {
          return (
            <YQSongCover
              key={item.id}
              info={item}
              nickename1={'歌单'}
              right="30px"
            />
          );
        })}
      </div>
      <YQPagination
        currentPage={currentPage}
        total={total}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange}
      ></YQPagination>
    </WrapperList>
  );
});
