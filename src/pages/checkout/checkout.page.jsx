import React from "react";
import { connect } from "react-redux";
import { selectItems, selectCartTotal } from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { StyledCheckoutPage , CheckoutHeader, HeaderBlock } from "./checkout.styles";


const CheckoutPage = props => {
  return (
    <React.Fragment>
      <StyledCheckoutPage>
        <CheckoutHeader>
        {["Product", "Description", "Quantity", "Price", "Remove"].map(item => (
          <HeaderBlock>
          <span>{item}</span>
          </HeaderBlock>
        ))}
        </CheckoutHeader>
        {props.cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItems={cartItem} />
        ))}

        <div className="total">
          <span>Total : Rs {props.itemCount}</span>
        </div>
        <div className="message">
          ** Please use the following test credit card for payments
          <br />
          4242424242424242 - Exp :10/22 - CVV: 123
        </div>
        <StripeCheckoutButton price={props.itemCount} />
      </StyledCheckoutPage>
    </React.Fragment>
  );
};

// const mapStateToProps = (state) => {
//     return {
//         cartItems: state.cart.cartItems,
//         itemCount: state.cart.cartItems.reduce(
//             (accumalatedQuantity, cartItem) =>
//                 accumalatedQuantity + cartItem.quantity * cartItem.price,
//             0
//         )
//     }
// }

const mapStateToProps = state => {
  return {
    cartItems: selectItems(state),
    itemCount: selectCartTotal(state)
  };
};

export default CheckoutPage
