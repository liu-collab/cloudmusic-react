import styled from 'styled-components';

export const WrapperDjContent = styled.div`
  display: flex;
  align-items: center;
  width: 48%;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;
  .info {
    margin-left: 20px;
  }
  .nickname {
    margin-top: 10px;
    color: #000;
    .left {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-top: 5px;
      background-position: -50px -300px;
      vertical-align: text-bottom;
    }
    .nick {
      display: inline-block;
      margin-left: 3px;
    }
  }
  .count {
    margin-top: 15px;
    color: #666666;
    .subCount {
      margin-left: 10px;
    }
  }
`;
