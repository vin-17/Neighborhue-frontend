import "./OnetimeCheckout.css"; // Import CSS file
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OnetimePaymentForm from './OnetimePaymentForm';
// import './Checkout.css'; // Import CSS file

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const OnetimeCheckout = () => {
  return (
    <div className='CheckoutContainer'>
      <h1 className='OnetimeCheckoutTitle'>Click to proceed your payment</h1>
      <Elements stripe={stripePromise}>
        <OnetimePaymentForm />
      </Elements>
    </div>
  );
};

export default OnetimeCheckout;
