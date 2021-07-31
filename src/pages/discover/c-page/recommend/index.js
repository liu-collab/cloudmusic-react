import React, { memo } from 'react'

import YQTopBanners from './c-cpns/top-banner'

import { WrapperRecommend, Content, RecommendLeft, RecommendRight } from './styled'
import YQHotRecommend from './c-cpns/hot-recommend'

function Recommend(props) {

  return (
    <WrapperRecommend>
      <YQTopBanners></YQTopBanners>
      <Content className="wrap-v2">
        <RecommendLeft>
          <YQHotRecommend></YQHotRecommend>
        </RecommendLeft>
        <RecommendRight> RecommendRight</RecommendRight>
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