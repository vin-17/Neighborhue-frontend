import React from 'react'
import PriceOption from './PriceOption/PriceOption'
import TrustedBy from './trustedBy/TrustedBy'
import BetaReviews from './BetaReviews/BetaReviews'
import FAQ from '../FAQ/FAQ'
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

import './Pricing.css'
import Checkout from './PriceOption/Checkout'

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Pricing = () => {
    return (
        <>  
        
            
                <div className='pricingContainer' id='priceTop'>
                    <PriceOption />
                    {/* <Checkout /> */}
                    <TrustedBy />
                    <BetaReviews />
                </div>
            
            
            <FAQ />
        </>

    )
}

export default Pricing