// import React from 'react'
import React, { useState } from "react";
import bg from '../../../Assets/formBg.webp'
import send from '../../../Assets/send.svg'
import axios from "axios";
import { toast } from "react-hot-toast";
import Loader from "./Loader"

import './ContactUsForm.css'

const About = () => {
    


    return (
        <div className="aboutContainer" id='aboutUs'>

            <div className="abouts">
                <h2>About Neighborhue</h2>
                <p className='trust'>
                    “ Lorem ipsum dolor sit amet ”
                </p>
                <p className='aboutDetail'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint
                </p>
            </div>
            <div className="abouts">
                <h3 className="aboutSubHeading">Our Mission</h3>
                <p className="aboutDetail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint
                </p>
            </div>
            <div className="abouts">
                <h3 className="aboutSubHeading">Why Choose Us?</h3>
                <ul className="aboutDetail">
                    <li className='aboutList'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li className='aboutList'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li className='aboutList'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li className='aboutList'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                </ul>
            </div>
            <div className="abouts">
                <h3 className="aboutSubHeading">Meet our Team</h3>
                <ul className="aboutDetail">
                    <li className='aboutList'>
                        <a href="https://www.linkedin.com/" target='_blank'>
                            ABC
                        </a>
                        - Co-founder, Marketing & Operation Head
                    </li>
                    <li className='aboutList'>
                        <a href="https://www.linkedin.com/" target='_blank'>
                            XYZ
                        </a>
                        - Co-founder & Executive Head
                    </li>
                    <li className='aboutList'>
                        <a href="https://www.linkedin.com/" target='_blank'>
                            DEF
                        </a> - Mentor and Guide
                    </li>
                    <li className='aboutList'>
                        <a href="https://www.linkedin.com/" target='_blank'>
                            GHI
                        </a>
                        - Tech Head
                    </li>
                    <li className='aboutList'>
                        <a href="https://www.linkedin.com/" target='_blank'>
                            JKL
                        </a>
                        - Tech Developer
                    </li>
                </ul>
            </div>
        </div>
    )
}

const ContactUsForm = () => {

    const [username, setUsername] = useState("");
    const [problemDescription, setProblemDescription] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [loading, setLoading] = useState(false);

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     try {
    //       setLoading(true);
    //       const { data } = await axios.post(
    //         `http://localhost/api/inquiry/send-inquiry`,
    //         {
    //           username,
    //           userEmail,
    //           problemDescription,
    //         },
    //         // {
    //         //   withCredentials: true,
    //         //   headers: {
    //         //     "Content-Type": "application/json",
    //         //   },
    //         // }
    //       );
    
    //       setUsername("");
    //       setProblemDescription("");
    //       setUserEmail("");
    //       toast.success(data.message);
    //       setLoading(false);
    //     //   setRefresh((prev) => !prev);
    //     } catch (error) {
    //       toast.error(error.response.data.message);
    //       setLoading(false);
    //     }
    //   };

    const serverURL = "https://neighborhue-backend.vercel.app";
    
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
          const response = await axios.post(
            `${serverURL}/api/inquiry/send-inquiry`,
            {
              username,
              userEmail,
              problemDescription,
            },
          );
      
          console.log("Server Response:", response); // Log the response
      
          if (response.data) {
            setUsername("");
            setProblemDescription("");
            setUserEmail("");
            toast.success(response.data.message);
          } else {
            toast.error("Unexpected response from server");
          }
      
          setLoading(false);
        } catch (error) {
          console.error("Error in submitHandler:", error);
          toast.error(error.response?.data?.message || "An error occurred");
          setLoading(false);
        }
      };

    return (
        <div className='ContactFormContainer'>
            <img src={bg} alt="" className="formBg" />
            <div className="formAboutContainer">
                <div className="formContainer">
                    <div className="formHeader">
                        <h2>Facing any trouble? We are here to help.</h2>
                        <p>Tell us more about yourself and what you’re got in my mind</p>
                    </div>
                    <form action="" onSubmit={submitHandler}>
                        <input type="text" name="" id="" placeholder='Your name' value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <input type="email" name="" id="" placeholder='Your @Email ID' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
                        <input type="text" name="" id="" placeholder='Tell us your problem' value={problemDescription} onChange={(e) => setProblemDescription(e.target.value)} className='formFeedback' required />
                        <button type="submit">{loading ? <Loader /> : "Submit now"}<img src={send} alt="" className='submitIcon' /></button>
                    </form>
                </div>

                <About />

            </div>
        </div>
    )
}

export default ContactUsForm