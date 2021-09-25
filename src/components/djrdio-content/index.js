import React, { memo } from 'react';

import { WrapperDjContent } from './style';
import { getSizeImage } from '../../utils/format-utils';

export default memo(function YQDjrdioContent(props) {
  const { info } = props;
  return (
    <WrapperDjContent>
      <a href="/#">
        <img src={getSizeImage(info.picUrl, 120)} alt="" />
      </a>
      <div className="info">
        <h2>{info.name}</h2>
        <div className=" nickname sprite_icon2">
          <i className="sprite_icon2 left"> </i>
          <span className="nick">{info.dj.nickname}</span>
        </div>
        <div className="count">
          <span>共{info.programCount}期</span>
          <span className="subCount">订阅{info.subCount}次</span>
        </div>
      </div>
    </WrapperDjContent>
  );
});
