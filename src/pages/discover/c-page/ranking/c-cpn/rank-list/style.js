import styled from 'styled-components';
import imgUrl from '@/assets/img/sprite_table.png';
export const WrapperRankList = styled.div`
  padding: 0 30px 40px 40px;

  .ranking-list {
    table {
      width: 100%;
      border: 1px solid #d9d9d9;
      thead {
        th {
          height: 34px;
          line-height: 34px;
          background-image: url(${imgUrl});
          color: #666;
          border: 1px solid #ddd;
          border-width: 0 0 1px 1px;
          padding-left: 10px;
          box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
        }
        .ranking {
          width: 78px;
          border-left: none;
        }
        .title {
        }
        .duration {
          width: 91px;
        }

        .singer {
          width: 173px;
        }
      }
      tbody {
        td {
          padding: 6px 10px;
        }

        tr:nth-child(2n) {
          background-color: #fff;
        }

        tr:nth-child(2n + 1) {
          background-color: #f7f7f7;
        }

        .rank-num {
          display: flex;

          .num {
            width: 25px;
            height: 18px;
            text-align: center;
            color: #999;
          }

          .new {
            width: 16px;
            height: 17px;
            margin-left: 12px;
            background-position: -67px -283px;
          }
        }

        .song-name {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }

          .play {
            width: 17px;
            height: 17px;
            background-position: 0 -103px;
            cursor: pointer;
          }

          .name {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
