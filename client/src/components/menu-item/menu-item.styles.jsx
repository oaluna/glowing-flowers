import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? '380px' : '240px')};
  min-width: 30%;
	max-width: 45%;
	position: relative;
    display: flex;
    flex-direction: column;
		align-items:flex-end;
		justify-content:flex-end;
		overflow: hidden;
    border-radius: 15px;
		margin: 15px;
		box-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);
  &:hover {
    box-shadow: 0 20px 25px 4px rgb(0 0 0 / .1), 0 8px 10px 4px rgb(0 0 0 / .1);
    overflow: none;
    cursor: pointer;
		position: relative;
    z-index: 20;
    & .background-image {
      transform: scale(1.1);
      transition: transform 0.4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      transition: transform 2.2s;
    	opacity: 1;
	
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: ${({ size }) => (size ? '380px' : '240px')};
    min-width: 50%;

    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin: 0 7.5px 15px;
    &:hover {
      cursor: pointer;
      & .background-image {
        transform: scale(2);
        transition: transform 2.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
      & .content {
        transition: transform 2.2s;
        opacity: 1;
      }
    }
    &:first-child {
      margin-right: 7.5px;
    }
    &:last-child {
      margin-left: 7.5px;
    }
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 0;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  height: 90px;
  width: ${({ size }) => (size ? '380px' : '240px')};
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
	box-shadow: 0px 1.5px 6px rgba(0,0,0,0.75);
 
  position: absolute;
	background-color: rgba(65, 82, 31, 0.85);
  &:hover {
    background: rgba(65, 82, 31, 1)
  }

  @media screen and (max-width: 800px) {
    opacity: 1;
  }
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  text-shadow: 1px 0px 10px #000;
  font-size: 22px;
  color: white;

`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  text-shadow: 1px 0px 10px #000;
  font-size: 16px;
  color: white;

`;
