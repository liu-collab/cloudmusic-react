import styled from 'styled-components';
import imgUrl from '@/assets/img/wrap-bg.png';
export const WarpperPlayer = styled.div`
  .content {
    background: url(${imgUrl}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`;
export const PlayerLeft = styled.div`
  width: 710px;
  border-right: 1px solid #ccc;
`;
export const PlayRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`;
