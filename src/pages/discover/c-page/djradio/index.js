import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeDjrdioCategoryAction } from './store/actioncreators';
import { WrapperDjradio } from './style';

export default memo(function YQDjradio() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeDjrdioCategoryAction());
  });
  return (
    <WrapperDjradio className="wrap-v2">
      <h2>YQDjradio</h2>
    </WrapperDjradio>
  );
});
