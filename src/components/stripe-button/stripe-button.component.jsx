import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = props => {
  const priceForStripe = props.price * 100;
  const publishablekey = process.env.STRIPE_PUBLISHABLE_KEY;

 const handleToken = async (token, adresses) => {
  fetch('payment',() => {
    let data = {
       amount: priceForStripe,
       token: token
     }
     return data;
   })
     .then(response => {
       alert('succesful payment');
     })
     .catch(error => {
       console.log('Payment Error: ', error);
       alert(
         'There was an issue with your payment! Please make sure you use the provided credit card.'
       );
     });
};

  return (
    <StripeCheckout
      stripeKey={publishablekey}
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      onClick={handleToken}
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is ${props.price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={props.token}
    />
  );
};

export default StripeCheckoutButton;
