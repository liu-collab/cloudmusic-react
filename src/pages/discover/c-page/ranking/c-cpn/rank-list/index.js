import React, { memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getSizeImage, formatMinuteSecond } from '@/utils/format-utils';

import { getSongDetailAction } from '@/pages/player/store/actionsCreators';
import YQThemeHeaderSong from '@/components/theme-header-song';
import { WrapperRankList } from './style';
export default memo(function YQRankList() {
  const state = useSelector(
    (state) => ({
      rankingList: state.getIn(['ranking', 'rankingList']),
    }),
    shallowEqual
  );
  const tracks = state.rankingList.tracks || [];

  const dispatch = useDispatch();

  // useEffect(() => {
  //  // dispatch(getRankingListAction())
  // })

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };
  return (
    <WrapperRankList>
      <YQThemeHeaderSong></YQThemeHeaderSong>
      <div className="ranking-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div className="rank-num">
                      <span className="num">{index + 1}</span>
                      <span className="new sprite_icon2"></span>
                    </div>
                  </td>
                  <td>
                    <div className="song-name">
                      {index < 3 ? (
                        <img src={getSizeImage(item.al.picUrl, 50)} alt="" />
                      ) : null}
                      <span
                        className="play sprite_table"
                        onClick={(e) => playMusic(item)}
                      ></span>
                      <span className="name">{item.name}</span>
                    </div>
                  </td>
                  <td>{formatMinuteSecond(item.dt)}</td>
                  <td>{item.ar[0].name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </WrapperRankList>
  );
});
