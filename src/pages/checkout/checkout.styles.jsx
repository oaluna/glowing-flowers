import styled from "styled-components";

export const StyledCheckoutPage = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;


export const CheckoutHeader = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgray;
`;
export const HeaderBlock = styled.div`
      text-transform: capitalize;
      width: 25%;

      &:last-child {
        width: 8%;
      }
    
  
  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }

  .message {
    text-align: center;
    color: red;
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 33px;
  }

  button {
    //text-align: center;
    margin-left: auto;
  }
`
