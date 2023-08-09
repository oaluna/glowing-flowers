import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import ICON from '../../assets/ICON.png'

const StripeCheckoutButton = ({ pricingText }) => {
  const priceForStripe = pricingText * 100;
  const publishableKey =
    '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';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please check your card information and try again.'
        );
      });
  };

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Glowing Flowers | Plants & Gifts'
      billingAddress
      shippingAddress
      image={ICON}
      description={console.log(priceForStripe)}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
