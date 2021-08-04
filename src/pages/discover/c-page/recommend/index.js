import React, { memo } from 'react'



import { WrapperRecommend, Content, RecommendLeft, RecommendRight } from './styled'
import YQTopBanners from './c-cpns/top-banner'
import YQHotRecommend from './c-cpns/hot-recommend'
import YQNewAlbum from './c-cpns/album'
import YQRecommendRanking from './c-cpns/recommend-ranking'
import YQHotRadio from './c-cpns/hot-radio'
import YQUserLogin from './c-cpns/user-login'
import YQSetterSinger from './c-cpns/setter-singer'


function Recommend(props) {

  return (
    <WrapperRecommend>
      <YQTopBanners></YQTopBanners>
      <Content className="wrap-v2">
        <RecommendLeft>
          <YQHotRecommend></YQHotRecommend>
          <YQNewAlbum></YQNewAlbum>
          <YQRecommendRanking></YQRecommendRanking>
        </RecommendLeft>
        <RecommendRight>
          <YQUserLogin></YQUserLogin>
          <YQSetterSinger></YQSetterSinger>
          <YQHotRadio></YQHotRadio>


        </RecommendRight>
      </Content>
    </WrapperRecommend>
  )
}


export default (memo(Recommend))



//   //通过解构获取相对应的dispatch
//   const { getbanners, topBanners } = props

//   useEffect(() => {
//     getbanners()
//   }, [getbanners])
//   return (
//     <div>
//       <h2>Recommend:{topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })
// const mapDispatchToProps = dispatch => ({
//   getbanners: () => {
//     //派发相应的action
//     dispatch(getTopBannerAction())
//   }
// })