import styled from 'styled-components';

export const WrappCategory = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -40px;
  .arrow {
    width: 20px;
    height: 30px;

    background-image: url(${require('@/assets/img/radio_slide.png').default});
    cursor: pointer;
  }
  .arrow-left {
    margin-left: 15px;
    background-position: 0 -30px;
  }
  .arrow-right {
    margin-right: 15px;
    background-position: -30px -30px;
  }
`;
export const CategoryContent = styled.div`
  flex: 1;
  width: 900px;
`;
