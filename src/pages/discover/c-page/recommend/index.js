import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getTopBannerAction } from './store/actionsCreators'

function Recommend(props) {
  //通过hooks和redux相关联
  //获取到数据
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }))
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