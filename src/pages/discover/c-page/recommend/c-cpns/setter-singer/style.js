import styled from "styled-components";

export const WarpperSetterSinger = styled.div`
padding: 20px;
.singer-list{
  .item {
    display: flex;
    height: 62px;
    margin-top: 10px;
    background-color: #fafafa;
    text-decoration: none;
    :hover{
      background-color: #f4f4f4;
    }
    .info{
      padding: 10px 0 0 10px;

      .title{
        font-size: 14px;
        color: #333333;
        font-weight: 600;
      }
      .name{
        margin-top: 5px;
      }
    }
  }
 
}
.apply-for {
   margin-top: 15px;
  a {
  display: block;
  color: #333;
  height: 31px;
   line-height: 31px;
   text-align: center;
   text-decoration: none;
   font-size: 12px;
   font-weight: 700;
   border-radius: 4px ;
   border: 1px solid #ccc;
   background-color: #FAFAFA;
  }
 }
`