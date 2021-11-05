import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionsCreators';

import { Carousel } from 'antd';
import YQThemeHeaderRCMQT from '@/components/theme-header-rcm';
import YQAlbumCover from '@/components/album-cover';
import { NEW_ALBUM_LIMT } from '@/common/constants';
import { WrapperNewAlbum } from './style';

export default memo(function YQNewAlbum() {
  const pageRef = useRef(0);

  //redux hooks
  const { newAlbum } = useSelector(
    (state) => ({
      newAlbum: state.getIn(['recommend', 'newAlbum']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMT));
  }, [dispatch]);

  return (
    <WrapperNewAlbum>
      <YQThemeHeaderRCMQT
        title="新碟上架"
        morelink="/discover/album"
      ></YQThemeHeaderRCMQT>

      <div className="content">
        <div
          className="arrow arrow-left  sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></div>

        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              //用数组进行分页
              [0, 1].map((item, index) => {
                return (
                  <div key={item} className="page">
                    {
                      //截取每页五条数据进行遍历
                      newAlbum
                        .slice(item * 5, (item + 1) * 5)
                        .map((iten, index) => {
                          return (
                            <YQAlbumCover
                              key={iten.id}
                              info={iten}
                              size={100}
                              width={118}
                              bgp="-570px"
                            ></YQAlbumCover>
                          );
                        })
                    }
                  </div>
                );
              })
            }
          </Carousel>
        </div>
        <div
          className="arrow arrow-right  sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></div>
      </div>
    </WrapperNewAlbum>
  );
});
