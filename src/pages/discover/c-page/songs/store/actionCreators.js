import * as actionType from './constants'
import { getCategory,  getCategorySongList } from '@/services/song'
import { handleSongsCategory } from '@/utils/handle-data' 
import {PER_PAGE_NUMBER} from './constants'

const changeCategoryAction = (res) =>(
  {
  type: actionType.CHANGE_CATEGORY,
  category:res
}
)

const changeCategorySongListAction = (res)=>({
  type:actionType.CHANGE_CATEGORY_SONG,
  categorySongs:res
})

export  const changeCurrentCategory = (name)=>({
  type:actionType.CHANGE_CURRENT_CATEGORY,
  currentCategory:name
})


//分类列表请求
export const getCategoryAction = ()=>{
  return dispatch=>{
    getCategory().then(res=>{
     const categoryData = handleSongsCategory(res)
      dispatch(changeCategoryAction(categoryData))
    })
  }
}

//歌曲列表
export const getCategorySongListAction = (page) =>{

  return (dispatch , getState)=>{

    const name = getState().getIn(['song' ,'currentCategory'])

    getCategorySongList(name, page * PER_PAGE_NUMBER).then(res=>{
      dispatch(changeCategorySongListAction(res))
    })
  }

}