import React, { memo, useEffect, useState } from 'react';

import YQThemeHeaderTitle from '@/components/theme-header-title';
import YQDjrdioContent from '@/components/djrdio-content';
import YQPagination from '../../../../../../components/pagination';

import { changeDjrdioRadioAction } from '../../store/actioncreators';
import { shallowEqual, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { WrapperRecommend } from './style';
export default memo(function YQRecommend() {
  const [currentPage, setCurrentPage] = useState(1);
  const { currentId, radios } = useSelector(
    (state) => ({
      currentId: state.getIn(['djrdio', 'currentId']),
      radios: state.getIn(['djrdio', 'radios']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(changeDjrdioRadioAction(currentId, 0));
  }, [dispatch, currentId]);

  const onPageChange = (page) => {
    setCurrentPage(page);
    dispatch(changeDjrdioRadioAction(currentId, page * 30));
  };
  return (
    <WrapperRecommend>
      <YQThemeHeaderTitle title="电台排行榜"></YQThemeHeaderTitle>
      <div className="recommend-list">
        {radios.map((item, index) => {
          return <YQDjrdioContent info={item} key={item.id}></YQDjrdioContent>;
        })}
      </div>
      <YQPagination
        currentPage={currentPage}
        total={1000}
        onPageChange={onPageChange}
        pageSize={30}
      />
    </WrapperRecommend>
  );
});
