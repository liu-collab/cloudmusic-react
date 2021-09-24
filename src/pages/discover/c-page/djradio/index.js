import React, { memo } from 'react';

import YQRadioCategory from './c-cpns/radio-category';
import YQRanking from './c-cpns/radio-ranking';
import YQRecommend from './c-cpns/radio-recommend';
import { WrapperDjradio } from './style';

export default memo(function YQDjradio() {
  return (
    <WrapperDjradio className="wrap-v2">
      <YQRadioCategory></YQRadioCategory>
      <YQRanking></YQRanking>
      <YQRecommend></YQRecommend>
    </WrapperDjradio>
  );
});
