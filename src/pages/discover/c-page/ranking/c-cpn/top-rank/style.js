import styled from "styled-components";

export const WrapperTopRank = styled.div`
padding: 25px 0;
.header{
  margin-top: 15px;
  padding: 0 10px 12px 15px;
  font-size: 14px;
  color: #000000;
  font-weight: 600;
  font-family: simsun;
}
.active {
  background-color: #E6E6E6;
}
.item{
  display: flex;
  align-items: center;
  padding: 10px 0 10px 20px;
  img {
    width: 40px ;
    height: 40px;
  }

  .info {
    margin-left: 10px;
    .name{
      margin: 2px 0 8px;
    }
    .update{
      color: #999999;
    }
  }
}
`