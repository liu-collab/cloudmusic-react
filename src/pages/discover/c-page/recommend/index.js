import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannerAction } from './store/actionsCreators'

function Recommend(props) {
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
    <div>
      <h2>Recommend:{topBanners.length}</h2>
    </div>
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