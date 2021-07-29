import React, { memo, useEffect } from 'react'

import { connect } from 'react-redux'

import { getTopBannerAction } from './store/actionsCreators'

function Recommend(props) {
  //通过解构获取相对应的dispatch
  const { getbanners } = props

  useEffect(() => {
    getbanners()
  }, [getbanners])
  return (
    <div>
      <h2>Recommend</h2>
    </div>
  )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})
const mapDispatchToProps = dispatch => ({
  getbanners: () => {
    //派发相应的action
    dispatch(getTopBannerAction())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
