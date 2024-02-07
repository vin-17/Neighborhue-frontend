import "./PremiumCheckout.css"; // Import CSS file
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PremiumPaymentForm from './PremiumPaymentForm';
// import './Checkout.css'; // Import CSS file

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const PremiumCheckout = () => {
  return (
    <div className='CheckoutContainer'>
      <h1 className='CheckoutTitle'>Click to proceed your payment</h1>
      <Elements stripe={stripePromise}>
        <PremiumPaymentForm />
      </Elements>
    </div>
  );
};

export default PremiumCheckout;
