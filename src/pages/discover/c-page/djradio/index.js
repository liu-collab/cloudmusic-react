import React, { memo } from 'react';

import YQRadioCategory from './c-cpns/radio-category';
import { WrapperDjradio } from './style';

export default memo(function YQDjradio() {
  return (
    <WrapperDjradio className="wrap-v2">
      <YQRadioCategory></YQRadioCategory>
    </WrapperDjradio>
  );
});
