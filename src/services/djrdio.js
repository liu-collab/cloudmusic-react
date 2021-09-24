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
