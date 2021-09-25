import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import classnames from 'classnames';

import { Carousel } from 'antd';

import {
  changeDjrdioCategoryAction,
  changeCurrentId,
} from '../../store/actioncreators';
import { WrappCategory, CategoryContent, CategoryImage } from './style';
export default memo(function YQRadioCategory() {
  const PAGE_SIZE = 16;
  const { categories, currentId } = useSelector(
    (state) => ({
      categories: state.getIn(['djrdio', 'categories']),
      currentId: state.getIn(['djrdio', 'currentId']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeDjrdioCategoryAction());
  }, [dispatch]);
  const CarouselRef = useRef();
  if (!categories) return;
  const page = Math.ceil(categories.length / PAGE_SIZE) || 1;

  function getSize(index) {
    return index * PAGE_SIZE > categories.length
      ? index * PAGE_SIZE
      : categories.length;
  }
  return (
    <WrappCategory>
      <div
        className="arrow arrow-left"
        onClick={(e) => CarouselRef.current.prev()}
      ></div>
      <CategoryContent>
        <Carousel dots={{ className: 'dots' }} ref={CarouselRef}>
          {Array(page)
            .fill(0)
            .map((_, index) => {
              return (
                <div key={index} className="category-page">
                  {categories
                    .slice(index * PAGE_SIZE, getSize(index))
                    .map((item, indey) => {
                      return (
                        <div
                          key={item.id}
                          className={classnames('category-item', {
                            active: currentId === item.id,
                          })}
                          onClick={(e) => dispatch(changeCurrentId(item.id))}
                        >
                          <CategoryImage
                            className="image"
                            imgUrl={item.picWebUrl}
                          />
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </Carousel>
      </CategoryContent>
      <div
        className="arrow arrow-right"
        onClick={(e) => CarouselRef.current.next()}
      ></div>
    </WrappCategory>
  );
});
