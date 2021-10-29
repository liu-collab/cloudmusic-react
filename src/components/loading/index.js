import React, { memo } from 'react';

import { Spin, Alert } from 'antd';
import { WrapperLoading } from './style';
export default memo(function YQIsLoading() {
  return (
    <WrapperLoading className="wrap-v2">
      <Spin tip="isLoading..." size="large">
        <Alert message="加载中" type="info" />
      </Spin>
    </WrapperLoading>
  );
});
