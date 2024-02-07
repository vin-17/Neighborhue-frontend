// import React from "react";
// import StripeCheckout from "./stripePayment";
import "./Checkout.css"; // Import CSS file

// const Checkout = () => {
//   return (
//     <div className="container">
//       <div className="stripe-container">
//         <StripeCheckout />
//       </div>
//     </div>
//   );
// };

// export default Checkout;
// checkout.jsx
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
// import './Checkout.css'; // Import CSS file

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {
  return (
    <div className='CheckoutContainer'>
      <h1 className='CheckoutTitle'>Stripe Payment Integration</h1>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default Checkout;
