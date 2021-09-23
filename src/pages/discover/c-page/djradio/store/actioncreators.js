import * as actionType from './costans';
import { getDjradioCategory } from '@/services/djrdio';

const changeDjrdioCategory = (res) => ({
  type: actionType.CHANGE_DJRDIO_CATEGORY,
  categories: res.categories,
});

export const changeDjrdioCategoryAction = () => {
  return (dispatch) => {
    getDjradioCategory().then((res) => {
      dispatch(changeDjrdioCategory(res));
    });
  };
};
