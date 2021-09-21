import React, { memo } from 'react';

import { Spin, Alert } from 'antd';

export default memo(function YQIsLoading() {
  return (
    <div>
      <Spin tip="Loading..." size="large">
        <Alert message="加载中" type="info" />
      </Spin>
    </div>
  );
});
