import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 540px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  top: 90px;
  right: 40px;
  z-index: 5;
  color: white;
  box-shadow: 0px 1.5px 5px rgba(0,0,0,0.3)
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
