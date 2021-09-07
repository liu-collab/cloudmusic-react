import styled from "styled-components";

export const WrapperCategory = styled.div`
  width: 180px;
  padding: 50px 10px 40px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  background-color: #fafafa;
  .section {
    border-bottom: 1px solid #d3d3d3;
    padding: 10px 0;

    .title {
      padding-left: 15px;
      color: #333;
      font-weight: 500;
      font-size: 16px;
    }
  }
`;

export const CategoryItem = styled.div`
  width: 160px;
  color: #333;
  height: 29px;
  line-height: 29px;
  border-bottom: 2px;
  cursor: pointer;

  &.active {
    span {
      color: red;
      background-position: 0 0;
    }
  }
  span {
    display: inline-block;
    width: 160px;
    background: url(${require("@/assets/img/singer_sprite.png").default})
      no-repeat 0 -30px;
    cursor: pointer;
    padding-left: 27px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
