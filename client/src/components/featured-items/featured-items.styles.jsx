import { styled } from "styled-components";

export const CarouselImages = styled.div`
  position: relative;
  border-radius: 10px;
  height: 400px;
  max-width: 25vw;
  margin: 12vh auto;
  overflow: hidden;
  img {
    object-fit: contain;
		width: 500px;
		height:500px;
    border-radius: 8px;
    border: none;
    box-shadow: 0px 1.5px 8px rgba(0, 0, 0, 0.22);
  }
`;

export const SlideDirection = styled.div`
  display: flex;
  justify-content: space-between;
  .left,
  .right {
    background-color: #fb666675;
    color: #fff;
    padding: 10px 8px 8px 13px;
    margin: 0 20px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 10px;
    height: 56px;
    width: 56px;
    font-size: 25px;
    object-fit: contain;
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
`;

export const CarouselIndicator = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  .dot {
    background-color: #333;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  .active {
    background-color: #fa2020;
  }
`;
