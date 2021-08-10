import styled from "styled-components";

export const WrapperSimiSong = styled.div`
margin-top: 50px;
 .songs {
   margin-top: 20px;
    .song-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      .info {
        .title {
          a {
            color: #666;
          }
        }

        .artist {
          a {
            color: #999;
          }
        }
      }

      .operate {
        .item {
          display: inline-block;
          width: 10px;
          height: 11px;
        }

        .play {
          background-position: -69px -455px;
          margin-right: 10px;
        }

        .add {
          background-position: -87px -454px;
        }
      }
    }
  }
`