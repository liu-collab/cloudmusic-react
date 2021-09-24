import React, { memo, useEffect } from 'react';

import YQThemeHeaderTitle from '@/components/theme-header-title';

import { changeDjrdioRadioAction } from '../../store/actioncreators';
import { shallowEqual, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default memo(function YQRecommend() {
  const { currentId } = useSelector(
    (state) => ({
      currentId: state.getIn(['djrdio', 'currentId']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(changeDjrdioRadioAction(currentId, 0));
  }, [dispatch, currentId]);
  return (
    <div>
      <YQThemeHeaderTitle title="电台排行榜"></YQThemeHeaderTitle>
    </div>
  );
});
