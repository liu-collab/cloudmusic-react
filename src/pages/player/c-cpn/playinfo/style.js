import styled from 'styled-components';

export const WrapperPlayInfo = styled.div`
  display: flex;
  padding: 47px 30px 40px 39px;
`;

export const PlayInfoLeft = styled.div`
  width: 206px;

  .image {
    position: relative;
    display: flex;
    width: 198px;
    height: 198px;
    justify-content: center;
    align-items: center;
    img {
      position: relative;
      top: -2px;
      left: 4px;
    }

    .cover {
      background-position: -140px -580px;
      right: -6px;
      top: -6px;
      width: 206px;
      height: 205px;
    }
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    i {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-position: -34px -863px;
    }
    a {
      color: #0c73c2;
      text-decoration: underline;
    }
  }
`;

export const PlayInfoRight = styled.div`
  width: 414px;
  margin-left: 20px;

  .header {
    display: flex;
    align-items: center;
    i {
      display: inline-block;
      width: 54px;
      height: 24px;
      background-position: 0 -463px;
    }
    .title {
      margin-left: 10px;
      font-size: 24px;
      font-weight: 400;
    }
  }

  .singer,
  .album {
    margin: 10px;
    a {
      margin-left: 5px;
      color: #0c73c2;
    }
  }
  .Lyric {
    margin: 13px 0 0;
    .text {
      margin-top: 5px;
    }
  }
  .lyric-control {
    position: relative;
    text-decoration: underline;
    color: #0c73c2;
    background-color: #fff;
    cursor: pointer;
    i {
      position: absolute;
      width: 11px;
      height: 8px;
      right: -8px;
      top: 5px;
      background-position: ${(props) => (props.isSpread ? '-45px' : '-65px')} -520px;
    }
  }
`;
