import styled from 'styled-components';
import imgFriend from '@/assets/img/friend_sprite.jpg';
export const WrapprerFriend = styled.div`
  .content {
    background-color: #fff;
    min-height: 700px;
    .pic {
      position: relative;
      width: 807px;
      height: 484px;
      margin: 0 auto;
      background: url(${imgFriend}) 0 104px no-repeat;

      .login {
        position: absolute;
        width: 167px;
        height: 45px;
        left: 482px;
        top: 368px;
        text-indent: -9999px;
      }
    }
  }
`;
