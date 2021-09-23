import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Carousel } from 'antd';

import { changeDjrdioCategoryAction } from '../../store/actioncreators';
import { WrappCategory, CategoryContent } from './style';
export default memo(function YQRadioCategory() {
  const PAGE_SIZE = 16;
  const { categories } = useSelector(
    (state) => ({
      categories: state.getIn(['djrdio', 'categories']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeDjrdioCategoryAction());
  }, [dispatch]);
  const page = Math.ceil(categories.length / PAGE_SIZE) || 1;
  return (
    <WrappCategory>
      <div className="arrow arrow-left"></div>
      <CategoryContent>
        <Carousel>
          {Array(page)
            .fill(0)
            .map((_, index) => {
              return <div key={index} className="category-page"></div>;
            })}
        </Carousel>
      </CategoryContent>
      <div className="arrow arrow-right"></div>
    </WrappCategory>
  );
});
