import { css } from '@emotion/css';
import styled, { keyframes } from 'styled-components';

const heroCSS = css`
  height: 70vh;

`;

const fadeInAnimation = keyframes`
0% {
  opacity: 0;
  margin-left: 40vw;
  animation-delay: 0.3s;
 }
 50% {
  opacity: 0;
  margin-left: 20vw;
 }
100% {
  opacity: 1;
  float: none;
  transition: 3s ease-in;
 }
`;

const headerHeroImgCSS = css`
  opacity: 1;
  z-index: 0;
  width: 100%;
  @media (min-width: 300px) {
    display: flex;
    height: 60%;
    width: 100%;
    img {
    overflow-x: none;
    }
  }
  @media (min-width: 768px){
    height: 70vh;
  object-fit: cover;
  }

`;

const HeroTextCSS = styled.h1`
  font-weight: 500;
color: white;
  z-index: 21;
  @media (min-width: 300px) {
     position: absolute;
     font-size: 50px;
     margin: auto;
   }
  @media (min-width: 768px) {
    font-size: 72px;
    width: 40%;
    margin: 45vh 15vw;

    text-shadow: 0px 1.5px 2px rgba(0,0,0,0.65);

    opacity: 1;
    z-index: 5;
    animation: ${fadeInAnimation} 0.3s ease-in;
  }
`;

function Hero() {
  return (
    <div className={heroCSS}>
      <HeroTextCSS>Quality floral arrangements in San Francisco.</HeroTextCSS>
      <img
        className={headerHeroImgCSS}
        src="https://images.pexels.com/photos/950251/pexels-photo-950251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="flower arrangements"
      />
    </div>
  );
}

export default Hero;
