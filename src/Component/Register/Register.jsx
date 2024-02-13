// <<<<<<< HEAD
// import React from 'react'
// import { Link } from 'react-router-dom'
// import registerVector from '../../Assets/registerVector.png'
// import googleIcon from '../../Assets/iconGoogle.svg'
// import mail from '../../Assets/mailGrey.svg'
// import key from '../../Assets/key.svg'
// import eye from '../../Assets/eye.svg'

// import './Register.css'

// const Register = () => {
//     return (
//         <div className='registerContainer' id='registerTop'>
//             <div className="registerFormContainer">

//                 <div className="registerHeader">
//                     <h1>Register Now!</h1>
//                     <p>Welcome to Nidaan, Please enter your details</p>
//                 </div>

//                 <div className="registerForm">

//                     <button><img src={googleIcon} alt="" />Continue with google</button>

//                     <div className="or">
//                         <hr />
//                         <p>Or</p>
//                         <hr />
//                     </div>

//                     <form className='register' action="">

//                         <div className="registerInputContainer" id='registerInputEmail'>
//                             <img src={mail} alt="" className='lIcon' />
//                             <input type="text" placeholder='Enter Your Email' />
//                         </div>

//                         <div className="registerInputContainer">
//                             <img src={key} alt="" className='lIcon' />
//                             <input type="password" placeholder='Enter Password' />
//                             <img src={eye} alt="" className='key' />
//                         </div>

//                         <div className="registerInputContainer">
//                             <img src={key} alt="" className='lIcon' />
//                             <input type="password" placeholder='Confirm Password' />
//                             <img src={eye} alt="" className='key' />
//                         </div>

//                         <button>Register Now</button>
//                     </form>

//                     <p className="switch">Alread have account? <Link to='/signin'>Sign in</Link></p>
//                 </div>

//             </div>

//             <div className="registerImg">
//                 <div className="imgText">
//                     <h4>Nidaan</h4>
//                     <p>One and only Advance AI healthcare Solution</p>
//                 </div>
//                 <img src={registerVector} alt="" />
//             </div>
//         </div>
//     )
// }

// export default Register
// =======
import React, { useEffect, useState } from "react";
import { Link, resolvePath } from "react-router-dom";
import axios from "axios";
import registerVector from "../../Assets/reg2.png";
import googleIcon from "../../Assets/iconGoogle.svg";
import mail from "../../Assets/mailGrey.svg";
import key from "../../Assets/key.svg";
import eye from "../../Assets/eye.svg";
import google_logo from "../../Assets/google_logo.png";
import { useDispatch } from "react-redux";
import { saveuser } from "../../features/User";
import { useSelector } from "react-redux";
import {
  GoogleOAuthProvider,
  googleLogout,
  useGoogleLogin,
  GoogleLogin,
} from "@react-oauth/google";
import "./Register.css";
import jwt_decode from "jwt-decode";
import GoogleLoginButton from "./googleLoginButton";
import { store } from "../../app/store.js";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [errormessage, seterrormessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  let user = useSelector((state) => state.user);
  console.log(user);

  // -----------Have to uncomment later for registration----------
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const userData = {
  //     email: email,
  //     password: password,
  //   };
  //   if (userData.email && userData.password) {
  //     if (confirmpassword == password) {
  //       try {
  //         const response = await axios.post(
  //           "https://nidaan15.onrender.com/register",
  //           userData
  //         );
  //         const user = {
  //           email: response.data.email,
  //           token: response.data.token,
  //           type: response.data.type,
  //         };
  //         localStorage.setItem("user", JSON.stringify(user));
  //         dispatch(
  //           saveuser({
  //             email: response.data.email,
  //             token: response.data.token,
  //             type: response.data.type,
  //           })
  //         );
  //         window.location.href = "/";
  //       } catch (error) {
  //         console.error("Error sending data:", error.message);
  //         seterrormessage(error.response.data);
  //       }
  //     } else {
  //       seterrormessage("Passwords doesn't match");
  //     }
  //   } else {
  //     seterrormessage("Please enter email and password");
  //   }
  // };


  // client id =40479294399-kp15176gefinpslttft8opq43qahu968.apps.googleusercontent.com
  // s=client secret =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
  // api key = AIzaSyDdEQ8HEndw4bOXYdgTrkMJxmQnpuV-v8o


  // const google = () => {
  //   window.open("http://localhost:5000/auth/google", "_self");
  // };

  const serverUrl = "https://neighborhue-backend.vercel.app";
  const devUrl = "http://localhost:5000";

  return (
    <div className="registerContainer">
      <div className="registerFormContainer">
        <div className="registerHeader">
          <h1>Register Now!</h1>
          <p>Welcome to Neighborhue</p>
          <div className="registerForm">
            <div className="or">
              <hr />
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  // console.log(credentialResponse);
                  const decoded = jwt_decode(credentialResponse.credential);

                  const decodeduser = {
                    username: decoded.name,
                    email: decoded.email,
                    profilePic: decoded.picture,
                    token: credentialResponse,
                  };
                  console.log("decodeduser: ", decodeduser)
                  const register = async () => {
                    try {
                      const response = await axios.post(
                        `${process.env.REACT_APP_serverUrl}/register/signin`,
                        decodeduser
                      );
                      console.log("response after fetch: ", response);
                      const user = {
                        email: response.data.user.email,
                        username: response.data.user.username,
                        profilePicture: response.data.user.profilePic,
                        daily_tokens_available: response.data.user.daily_tokens_available,
                        purchased_tokens_available: response.data.user.purchased_tokens_available,
                        tokens_used: response.data.user.tokens_used,
                        is_premium: response.data.user.is_premium,
                      };
                      console.log("user after fetch before dispatch: ", user);
                      const userJSON = JSON.stringify(user);
                      localStorage.setItem("user", userJSON);

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
                      localStorage.setItem("reduxState", JSON.stringify(store.getState()));
                      window.location.href = "/";
                    } catch (error) {
                      console.error("Error sending data:", error.message);
                      seterrormessage(error.response.data);
                    }
                  };
                  register();
                  // dispatch(
                  //   saveuser({
                  //     email: decodeduser.email,
                  //     username: decodeduser.username,
                  //     profilePicture: decodeduser.profilePic,
                  //     daily_tokens_available: 12,
                  //     purchased_tokens_available: 1,
                  //     tokens_used: 1,
                  //     is_premium: false,
                  //   })
                  // );
                }}
                onError={() => {
                  seterrormessage("signup failed");
                }}
              />



              {/* trial of googleauth */}

              {/* <GoogleLoginButton /> */}


              {/* <div className="googleButton" onClick={google}>
            <img src={google_logo}/>

          </div> */}



              <hr />
            </div>
            {/* <form className="register" action="">
            <div className="registerInputContainer" id="registerInputEmail">
              <img src={mail} alt="" className="lIcon" />
              <input
                type="text"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="registerInputContainer">
              <img src={key} alt="" className="lIcon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={eye}
                className={`key ${showPassword ? "show" : ""}`}
                onClick={togglePasswordVisibility}
                alt=""
              />
            </div>

            <div className="registerInputContainer">
              <img src={key} alt="" className="lIcon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
              />
              <img
                src={eye}
                alt=""
                className={`key ${showPassword ? "show" : ""}`}
                onClick={togglePasswordVisibility}
              />
            </div>
            <p className="register-error-message">{errormessage}</p>

            {/* <button onClick={handleSubmit}>Register Now</button> */}
            {/* <button className="comingBtn" style={{background: "linear-gradient(90deg, rgba(212,65,23,0.7988445378151261) 24%, rgba(84,24,207,0.8016456582633054) 100%)",border:"none",borderRadius:"7px",padding:"12px 18px",color:"#ffff",fontSize:"clamp(12px, 2vw, 18px)",display:"flex",justifyContent:"center"}}>
            Register Now
                    </button> */}
            {/* </form> */}

            {/* <p className="switch">
            Already have account? <Link to="/signin">Sign in</Link>
          </p> */}
            {/* <p className="switch">
            Already have account? <Link >Sign in</Link>
          </p> */}
          </div>

          <div>
            <ul className="list_style">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius
              </li>
            </ul>
          </div>
        </div>


      </div>

      <div className="registerImg">
        <div className="imgText">
          <h4>Neighborhue</h4>
          <p>Find your perfect neighborhood  today</p>
        </div>
        <img src={registerVector} alt="" />
      </div>
    </div>
  );
};

export default Register;
// >>>>>>> 0914021175b667caf2bffeb3c66fb886b8a68867
