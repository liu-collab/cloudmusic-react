import React, { memo, useEffect, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getHotRecommendAction } from '../../store/actionsCreators';
import { WrapperYQHotRecommend } from './style';

import { HOT_RECOMMEND_LIMT } from '@/common/constants';
import YQThemeHeaderRCMQT from '@/components/theme-header-rcm';
import YQSongCover from '@/components/songs-cover';

export default memo(function YQHotRecommend() {
  //redux hooks
  const { hotRecommend } = useSelector(
    (state) => ({
      hotRecommend: state.getIn(['recommend', 'hotRecommend']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const history = useHistory();
  //other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMT));
  }, [dispatch]);
  const keywordClick = useCallback(
    (keywords) => {
      history.push({ pathname: '/discover/songs', cat: keywords });
    },
    [history]
  );
  return (
    <WrapperYQHotRecommend>
      <YQThemeHeaderRCMQT
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        morelink="/discover/songs"
        keywordClick={keywordClick}
      />
      <div className="recommend-list">
        {hotRecommend.map((item, index) => {
          return <YQSongCover key={item.id} info={item}></YQSongCover>;
        })}
      </div>
    </WrapperYQHotRecommend>
  );
});
