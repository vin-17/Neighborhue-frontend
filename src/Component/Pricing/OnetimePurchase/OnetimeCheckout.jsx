import "./OnetimeCheckout.css"; // Import CSS file
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OnetimePaymentForm from './OnetimePaymentForm';
// import './Checkout.css'; // Import CSS file

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
// console.log(process.env.REACT_APP_NEW)

const OnetimeCheckout = () => {
  return (
    <div className='CheckoutContainer'>
      <Elements stripe={stripePromise}>
        <OnetimePaymentForm />
      </Elements>
    </div>
  );
};

export default OnetimeCheckout;
