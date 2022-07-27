import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import Logo from "../../assets/glowing-flowers.svg"

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = `${process.env.STRIPE_PUBLISHABLE_API_KEY}`;

  const onToken = token => {
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
      label='Pay Now'
      name='Glowing Flowers | Plants & Gifts'
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
