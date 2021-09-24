import request from './request';

export function getDjradioCategory() {
  return request({
    url: '/dj/catelist',
  });
}

export function getDjradioRecommend(type) {
  return request({
    url: '/dj/recommend/type',
    params: {
      type,
    },
  });
}

export function getDjradioRadio(cateId, limit, offset) {
  return request({
    url: '/dj/radio/hot',
    params: {
      cateId,
      limit,
      offset,
    },
  });
}
