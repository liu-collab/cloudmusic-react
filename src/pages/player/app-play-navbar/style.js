import styled from 'styled-components';

export const WarpperPlayBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    position: absolute;
    height: 47px;
    align-items: center;
    justify-content: space-between;
    left: 50%;
    transform: translateX(-50%);

    bottom: 0;
  }
`;

export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev,
  .next {
    width: 28px;
    height: 28px;
  }
  .prev {
    background-position: 0 -130px;
  }
  .next {
    background-position: -80px -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};
  }
`;
export const PlayInfo = styled.div`
  display: flex;
  width: 652px;
  align-items: center;
  margin-left: 20px;
  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }
  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;
    .song {
      position: relative;
      top: 8px;
      left: 8px;
      .song-name {
        color: #e8e8e8;
      }
      .singer-name {
        color: #9b9b9b;
        margin-left: 8px;
      }
    }
    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png').default})
            right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png').default})
            left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;
        }
      }
      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`;
export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;
  width: 262px;
  left: 50px;
  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .left {
    position: absolute;
    left: -15px;
    top: -15px;
    .icn {
      background-position: 0 0;
      :hover {
        background-position: 0 -25px;
      }
    }
    .favor {
      background-position: -88px -163px;
      :hover {
        background-position: -88px -189px;
      }
    }

    .share {
      background-position: -114px -163px;
      :hover {
        background-position: -114px -189px;
      }
    }
  }

  .right {
    position: absolute;
    left: 65px;
    top: -15px;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;
      :hover {
        background-position: -31px -248px;
      }
    }

    .loop {
      background-position: ${(props) => {
        switch (props.sequence) {
          case 1:
            return '-66px -248px';
          case 2:
            return '-66px -344px';
          default:
            return '-3px -344px';
        }
      }};
    }

    .playlist {
      width: 59px;
      color: #fff;

      background-position: -42px -68px;
      :hover {
        background-position: -42px -98px;
      }
    }
  }
`;
