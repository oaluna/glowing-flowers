import { css } from '@emotion/css';
import { Link } from "react-router-dom"
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

const HeroTextSubitle = styled.h3`
  font-weight: 400;
color: white;
  z-index: 21;
  position: "relative";
  @media (min-width: 300px) {
     position: absolute;
     font-size: 32px;
     margin: auto;
   }
  @media (min-width: 768px) {
    font-size: 24px;
    width: 40%;
    margin: 45vh 15vw;

    text-shadow: 0px 1.5px 2px rgba(0,0,0,0.65);

    opacity: 1;
    z-index: 5;
    animation: ${fadeInAnimation} 0.3s ease-in;
  }
`;
const HeroTextTitle = styled.h1`
  font-weight: 500;
  bottom: 20vh;
color: white;
  z-index: 21;
 
  @media (min-width: 300px) {
     position: absolute;
     font-size: 56px;
     margin: auto;
   }
  @media (min-width: 768px) {
    font-size: 48px;
    width: 40%;
    margin: 50vh 15vw 35vh 15vw;

    text-shadow: 0px 1.5px 2px rgba(0,0,0,0.65);

    opacity: 1;
    z-index: 5;
    animation: ${fadeInAnimation} 0.3s ease-in;
  }
`;

function Hero() {
  return (
    <div className={heroCSS}>
    <div style={{height: "100%", width: "100%", position:"absolute", display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"space-evenly"}}>
    <HeroTextTitle>Glowing Flowers - Plants & Gifts</HeroTextTitle>
      <HeroTextSubitle>Adorn your abode with quality floral arrangements, arranged in the heart of San Francisco.</HeroTextSubitle>
      </div>
      <Link to="/products/all-occasions">
      <button style={{ width: 150, height: 50, borderRadius: 50,border: "none", boxShadow:"0px 1.5px 4px rgba(0,0,0,0.2)", backgroundColor: 'lightpink', color: 'black', fontSize: 16, fontWeight: 500, position: 'absolute', zIndex: 5, marginLeft: '15vw', marginTop: '60vh', color:"white", fontWeight: 500 }}>Shop Now</button>
      </Link>
      <img
        className={headerHeroImgCSS}
        src="https://images.pexels.com/photos/950251/pexels-photo-950251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="flower arrangements"
      />
    </div>
  );
}

export default Hero;
