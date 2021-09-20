import styled from 'styled-components';

export const WrapperBanners = styled.div`
  background: url(${(props) => props.bgImage}) center/6000px;

  .banner {
    height: 270px;
    background-color: red;
    display: flex;
    position: relative;
    .ant-carousel .slick-dots li button {
      width: 8px;
      height: 8px;
      border-radius: 4px;
    }
    .ant-carousel .slick-dots li {
      width: 10px;
      height: 10px;
      margin-left: 15px;
    }
    .ant-carousel .slick-dots li.slick-active button {
      background-color: #c20c0c;
    }
  }
`;

export const BannersLeft = styled.div`
  width: 730px;
  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`;

export const BannersRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank',
})`
  width: 254px;
  height: 270px;
  background: url(${require('@/assets/img/download.png')});
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png').default});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
