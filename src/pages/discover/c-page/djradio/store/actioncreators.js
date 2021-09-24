import * as actionType from './costans';
import { getDjradioCategory, getDjradioRecommend } from '@/services/djrdio';

const changeDjrdioCategory = (res) => ({
  type: actionType.CHANGE_DJRDIO_CATEGORY,
  categories: res.categories,
});
const changeDjrdioRecommend = (res) => ({
  type: actionType.CHANGE_DJRDIO_RECOMMEND,
  recommends: res.djRadios,
});

export const changeCurrentId = (id) => ({
  type: actionType.CHANGE_CURRENT_ID,
  currentId: id,
});

export const changeDjrdioCategoryAction = () => {
  return (dispatch) => {
    getDjradioCategory().then((res) => {
      dispatch(changeDjrdioCategory(res));
      const currentId = res.categories[0].id;
      dispatch(changeCurrentId(currentId));
    });
  };
};

export const changeDjrdioRecommendAction = (currentId) => {
  return (dispatch) => {
    getDjradioRecommend(currentId).then((res) => {
      dispatch(changeDjrdioRecommend(res));
    });
  };
};
