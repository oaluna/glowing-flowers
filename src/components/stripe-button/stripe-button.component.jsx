import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
//import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.STRIPE_PUBLISHABLE_API_KEY;

  const onToken = token => {
    const onToken = token => {
    alert('Successful payment!');
  };
      fetch(`payment`, {
        method: 'post', data: {
          amount: priceForStripe,
          token: token
        }
      }).then(response => {
        alert(`Thank you for your payment!`);
      }).catch(error => {
        console.log('Payment error: ', error);
        alert('There was an issue with your payment. Please check your card info.')
      })


  //   axios({
  //     url: 'payment',
  //     method: 'post',
  //     data: {
  //       amount: priceForStripe,
  //       token: token
  //     }
  //   })
  //     .then(response => {
  //       alert('succesful payment');
  //     })
  //     .catch(error => {
  //       console.log('Payment Error: ', error);
  //       alert(
  //         'There was an issue with your payment! Please make sure you use the provided credit card.'
  //       );
  //     });
  // };
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Glowing Flowers | plants & Gifts'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
