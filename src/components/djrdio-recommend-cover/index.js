import React, { memo } from 'react';

import { WrapperRecommendCover } from './style';
import { getSizeImage } from '../../utils/format-utils';

export default memo(function YQrecommendCover(props) {
  const { info } = props;
  return (
    <WrapperRecommendCover>
      <a href="/#">
        <img src={getSizeImage(info.picUrl, 150)} alt="" />
      </a>
      <a href="/#" className="text-nowrap name">
        {info.name}
      </a>
      <p>{info.rcmdtext}</p>
    </WrapperRecommendCover>
  );
});
