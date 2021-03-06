import React, { memo } from 'react';

import { getSizeImage, getCount } from '@/utils/format-utils';

import { SongCoverWrapper } from './style';

export default memo(function YQSongCover(props) {
  const { info, right, nickname1 = undefined } = props;
  let nickname = info.copywriter ? info.copywriter : '热门推荐';

  if (nickname1) {
    nickname = info.creator.nickname;
  }
  return (
    <SongCoverWrapper right={right}>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source">by {nickname}</div>
    </SongCoverWrapper>
  );
});
