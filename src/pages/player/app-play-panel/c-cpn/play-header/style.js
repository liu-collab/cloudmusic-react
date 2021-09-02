import styled from "styled-components"; 

export const WrapperHeader = styled.div`
 display: flex;
  height: 41px;
  line-height: 41px;
  background: url(${require("@/assets/img/playpanel_bg.png").default}) 0 0;
`
export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 553px;
  padding: 0 20px;
  h3 {
    color: #ffffff;
  }
  .operator {
    color: #ccc;

    button {
      background-color: transparent;
      color: #ccc;
    }

    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      position: relative;
      top: 4px;
      right: 2px;
     padding: 0 8px;
    }

    .favor {
      background-position: -24px 0;
    }

    .remove {
      width: 13px;
      background-position: -51px 0;
    }
  }
`
export const HeaderRight = styled.div`
 flex: 1;
  text-align: center;
  color: #fff;
  font-size: 14px;
`