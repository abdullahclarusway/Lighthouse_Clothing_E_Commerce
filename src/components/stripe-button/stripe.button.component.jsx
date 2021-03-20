import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from "../../assets/Logo.png";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HrXmgGY5KPrAbUiZ6ZIo7mkgu2a4IG2pNHdgnCHoZ1LHn3iDEceDRTxWkYMz9CGpj1w5yn4zBWTm6J69Idpztbu00917SoAwj';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Lighthouse Clothing Ltd.'
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