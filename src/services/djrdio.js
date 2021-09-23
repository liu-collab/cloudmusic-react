import request from './request';

export function getDjradioCategory() {
  return request({
    url: '/dj/catelist',
  });
}
