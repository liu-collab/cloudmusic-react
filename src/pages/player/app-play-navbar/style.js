import styled from "styled-components";

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
  align-items: center;
  justify-content: space-between;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  height: 47px;
  color: #fff;
  bottom: 0;
}
`

export const Control = styled.div`

display: flex;
align-items: center;

.prev, .next{
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
  background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"};
}
`
export const PlayInfo = styled.div`
`
export const Operator = styled.div`
`