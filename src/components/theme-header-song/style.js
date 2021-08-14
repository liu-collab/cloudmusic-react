import styled from "styled-components";

export const WrapperThemeHdeaderSong = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 2px solid #C20C0C;
height: 35px;

.left {
 display: flex;
 .title {
   font-size: 20px;
   color: #333333;
 }
 .count {
   color: #666666;
   margin: 9px 0 0 20px;
 }
}
.right{
  color: #666666;
  margin: 5px 0 0 ;
  .count {
    color: #C20C0C;
  }
}
`