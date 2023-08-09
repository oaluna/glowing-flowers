import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  margin-bottom: 15px;
	
`;

export const CartItemImage = styled.img`
  width: 25%;
  height: 100%;
`;

export const ItemDetailsContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px  0 0 0;
  color: white !important;
`;

export const SubTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
