import React, { useState, useEffect } from 'react';

import Intro from '../Intro/Intro'
import Solutions from '../Solutions/Solutions'
import Upcoming from '../Upcoming/Upcoming'
import ShareSection from '../ShareSection/ShareSection'
import Chatbot from '../ChatBot/Chatbot'
import Reviews from '../Reviews/Reviews'
import FAQ from '../FAQ/FAQ'
import { useDispatch } from "react-redux";
import { saveuser } from "../../features/User";
import { useSelector } from "react-redux";



const Home = () => {

    const dispatch = useDispatch();
    let user = useSelector((state) => state.user);

    if(user.user.email){
        useEffect(() => {
            // Fetch user details from the backend
            const fetchUserDetails = async () => {
                try {
                    const response = await fetch(`${process.env.REACT_APP_serverUrl}/api/register/getUser`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            // Add any additional headers if needed
                        },
                        // Include credentials if your backend requires them
                        credentials: 'include',
                    });
                    const data = await response.json();
                    console.log("\nhome page data", data);
                    const user = {
                        email: response.data.user.email,
                        username: response.data.user.username,
                        profilePicture: response.data.user.profilePic,
                        daily_tokens_available: response.data.user.daily_tokens_available,
                        purchased_tokens_available: response.data.user.purchased_tokens_available,
                        tokens_used: response.data.user.tokens_used,
                        is_premium: response.data.user.is_premium,
                      };
    
                    dispatch(
                        saveuser({
                          email: user.email,
                          username: user.username,
                          profilePicture: user.profilePicture,
                          daily_tokens_available: user.daily_tokens_available,
                          purchased_tokens_available: user.purchased_tokens_available,
                          tokens_used: user.tokens_used,
                          is_premium: user.is_premium,
                        })
                      );
                    if (response.ok) {
                        // Set the user details in state
                        setUser(data.user);
                    } else {
                        console.error('Error fetching user details:', data.message);
                    }
                } catch (error) {
                    console.error('Error fetching user details:', error);
                }
            };
    
            // Call the fetchUserDetails function when the component mounts
            fetchUserDetails();
        }, []); // Empty dependency array ensures this effect runs only once, on mount
    }

    


    return (
        <div>
            <Chatbot />
            
            <Intro />

            <Solutions />

            <Upcoming />

            <ShareSection />

            <Reviews />

            <FAQ />
        </div>
    )
}

export default Home