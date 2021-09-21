import styled from 'styled-components';
import imgMine from '@/assets/img/mine_sprite.png';

export const WrapperMine = styled.div`
  .content {
    background-color: #fff;
    min-height: 700px;
    .pic {
      position: relative;

      width: 807px;
      height: 372px;
      margin: 0 auto;
      background: url(${imgMine}) 0 104px no-repeat;

      .login {
        position: absolute;
        width: 167px;
        height: 45px;
        left: 482px;
        top: 306px;
        text-indent: -9999px;
      }
    }
  }
`;
