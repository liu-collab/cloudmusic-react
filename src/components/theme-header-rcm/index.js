import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { WrappperThemeHeaderRCM } from './style';
const YQThemeHeaderRCM = memo(function (props) {
  const { title, keywords, morelink, keywordClick } = props;
  return (
    <WrappperThemeHeaderRCM className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span className="link" onClick={(e) => keywordClick(item)}>
                  {item}
                </span>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Link to={morelink}>更多</Link>
        <i className="icon sprite_02"></i>
      </div>
    </WrappperThemeHeaderRCM>
  );
});
//检查数据类型
YQThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
};
YQThemeHeaderRCM.defaultProps = {
  keywords: [],
};

export default YQThemeHeaderRCM;
