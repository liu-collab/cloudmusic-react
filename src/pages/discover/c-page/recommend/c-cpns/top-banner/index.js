import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Carousel } from 'antd';
import { getTopBannerAction } from '../../store/actionsCreators'

import { WrapperBanners, BannersLeft, BannersRight, BannerControl } from './style'

export default memo(function YQTopBanners() {
  //通过hooks和redux相关联
  //获取到数据
  //存在性能优化问题
  //useSelector 内部数据进行比较时是用===进行比较,意味着只要你的数据类型不同或者内存地址不一样就会重新渲染
  //而这里的state是一个函数,所以每次有其他组件的数据进行更改,返回的内存地址都会进行改变,意味着每次都要重新渲染
  //解决方案将第二个参数传入shallowEqual 进行浅层比较
  const { topBanners } = useSelector(state => ({
    //第一次使用immutable对topBanners进行优化
    // topBanners: state.recommend.topBanners
    // topBanners: state.recommend.get("topBanners")
    //第二次使用immutable对recommend进行优化
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])

  }), shallowEqual)
  //获取到dispatch
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  return (
    <WrapperBanners>
      <div className="banner wrap-v2">
        <BannersLeft>
          <Carousel autoplay>
            {
              topBanners.map((item) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>,
        </BannersLeft>
        <BannersRight></BannersRight>
        <BannerControl className="contor">
          <button className="btn left"></button>
          <button className="btn right"></button>
        </BannerControl>
      </div>

    </WrapperBanners>
  )
})
