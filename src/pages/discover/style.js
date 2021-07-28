import styled from "styled-components";

export const WarpperTop = styled.div`

.top{
  height: 30px;
  background-color:  #C20C0C;
}
`
export const TopMenu = styled.div`
display: flex;
padding-left: 180px;


.item{
  width: 84px;
  height: 29px;
 font-size: 12px;
 position: relative;
 top: 2px;
 a {
   display: block;
   height: 20px;
   line-height: 20px;
   color: #fff;
   padding: 0 7px;
   margin: 0 7px;
   text-align: center;
  

   &:hover ,&.active {
     text-decoration: none;
     background-color:  #9B0909;
     border-radius: 20px;
   }
 }
}

`
