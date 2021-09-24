import React, { memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import YQThemeHeaderTitle from '@/components/theme-header-title';
import YQrecommendCover from '../../../../../../components/djrdio-recommend-cover';
import { changeDjrdioRecommendAction } from '../../store/actioncreators';
import { WrappRanking } from './style';

export default memo(function YQRanking() {
  const { currentId, recommends } = useSelector((state) => ({
    currentId: state.getIn(['djrdio', 'currentId']),
    recommends: state.getIn(['djrdio', 'recommends']),
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeDjrdioRecommendAction(currentId));
  }, [dispatch, currentId]);
  return (
    <WrappRanking>
      <YQThemeHeaderTitle title="优秀新电台" />
      <div className="radio-item">
        {recommends.slice(0, 5).map((item) => {
          return <YQrecommendCover info={item} key={item.id} />;
        })}
      </div>
    </WrappRanking>
  );
});
