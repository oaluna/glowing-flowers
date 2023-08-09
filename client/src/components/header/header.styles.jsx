import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { addItemToCart } from './../../redux/cart/cart.utils';


export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;

  @media screen and (max-width: 800px) {
    height: 70px;
    padding: auto;
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const HeaderTitle = styled.h2`
  display: flex;

  width: 100%;
  text-shadow: 1px 0px 10px #000;
  font-weight: 600;
  font-size: 18px;
  padding: 0 auto;
  margin: 0 auto;
  &:hover {
    color: crimson;
  }
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }
`;

export const LogoContainer = styled.span`
  
  & img {
   margin-left: 10rem;
    height: auto;
    max-width: 300px;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction:column;
    width: 100vw;
    align-items: center;
    padding-right: 50%;
padding-top: 15px;
    text-align: center;
    transform: scale(1.2);
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  align-items: center;
  margin: 2em auto 0 auto;
  padding: auto;
  &:hover {
    color: crimson;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    width: 100%;
    justify-content: space-evenly;
position: relative;
    margin-left: -4em;
    margin-top: 0;
  }
`;

export const OptionLink = styled(Link)`
  color: black;
  padding: 25px;
  height: 100%;
  font-size: 18px;

  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: rgba(118, 50, 89, 1);
  }
  @media and (max-width:800px) {
    padding: 0;
  }
`;
