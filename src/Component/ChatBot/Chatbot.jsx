import React, { useState, useEffect } from "react";
import "./Chatbot.css";
import "./Loader.css";
import OpenAI from "openai";
import neo from "../../Assets/neoLogo.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import clock from "../../Assets/clockicon.png";
import credit_card from "../../Assets/creditcard.png";
import message from "../../Assets/message.png";
import send from "../../Assets/send.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addChat } from "../../features/Chat";
import { useSelector } from "react-redux";
import Readchats from "../Readchats/Readchats";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from "react-redux";
import { saveuser } from "../../features/User";
// import { useSelector } from "react-redux";


const Chatbot = () => {
  const [error, seterror] = useState("");
  // const [flag, setflag] = useState(false);
  // const [count, setcount] = useState(0);
  const [chatReply, setChatReply] = useState(""); // New state variable
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const notify = () => toast(error);

  const [chatHistory, setChatHistory] = useState([{ role: "chatbot", content: "How may i assist you ?" }]);
  const [formData, setFormData] = useState({
    problem: "",
    location: "",
  });
  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  // useEffect(() => {
  //   if (count >= 2) {
  //     setflag(true);
  //   }
  // }, [flag]);

  let allchats = useSelector((state) => state.chats.chats);
  const user = useSelector((state) => state.user);
  // const user = useSelector((state) => state.user);
  console.log("User in chatbot:", user);


  const serverURL = "https://neighborhue-backend.vercel.app";
  const devUrl = "http://localhost:5000";

  const onSubmit = async () => {
    if (!user.user.email) {
      alert("Please log in to chat with Hue")
      return;
    }
    if (!formData.problem) {
      alert("Please write something in the textarea.");
      return;
    }
    if (!formData.location) {
      alert("Please provide your location.");
      return;
    }
    if (user.user.daily_tokens_available <= 0 && user.user.purchased_tokens_available <= 0) {
      alert("You do not have any tokens right now. Please make a purchase first to continue chatting.")
      window.location.href = "/pricing";
    }

    try {
      setLoading(true); // Set loading to true

      const response = await axios.post(`${process.env.REACT_APP_serverUrl}/api/ai-chat/chatbot`, {
        userEmail: user.user.email,
        message: formData.problem,
        location: formData.location,
      });
      console.log("response from chatbot: ", response);
      const updated_user_data = response.data.user;

      if (response.data.message) {
        const newChatHistory = [
          ...chatHistory,
          { role: "user", content: formData.problem },
          { role: "chatbot", content: response.data.message },
        ];

        setChatHistory(newChatHistory);
        setChatReply(response.data.message); // Set chatReply for the bot's immediate response

        handleChange("problem", "");
        dispatch(
          saveuser({
            email: user.user.email,
            username: user.user.username,
            profilePicture: user.user.profilePicture,
            daily_tokens_available: updated_user_data.daily_tokens_available,
            purchased_tokens_available: updated_user_data.purchased_tokens_available,
            tokens_used: updated_user_data.tokens_used,
            is_premium: user.user.is_premium,
          })
        );
      }
    } catch (error) {
      seterror(error.message || "Error submitting message.");
      notify();
    } finally {
      setLoading(false); // Set loading to false, regardless of success or failure
    }
  };


  return (
    <div className="chatbotSectionContainer" id='chatBot'>
      <h2 className="chatbotSectionHeader">Meet with Hue</h2>
      <p className="chatbotIntro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae
      </p>
      <div className="chatbotContainer">
        <div className="chatbotContainer-top">
          <img src={neo} alt="neo-logo" />
          <div className="chatbotContainer-top-content">
            <p>Hue</p>
            <p>Online</p>
          </div>
          <div className="locationSearch">
            <i class="fa-solid fa-location-dot fa-lg" style={{ color: "#DD6745" }}></i>
            <input
              type="text"
              name="search"
              placeholder="Your Location"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
            ></input>
          </div>
        </div>

        <div className="chatbotContainer-chatarea">

          <Readchats chatHistory={chatHistory} />
          {/* {chatReply && (
            <div className="chatbot-reply">
              <strong>Hue:</strong> {chatReply}
            </div>
          )} */}
          {loading && (
            <div className="loader-container">
              <div className="loader-bubble loading">
                <span>Replying...</span>
              </div>
            </div>
          )}

        </div>
        <div className="chatbotContainer-textarea">
          <textarea
            value={formData.problem}
            onChange={(e) => handleChange("problem", e.target.value)}
            required
            placeholder="Eg: type here about your problem"
          />

          <button
            type="button"
            onClick={onSubmit}
            className="app-submitbutton"
          >
            {/* {window.innerWidth > 900 ? <p style={{fontSize:"1.111vw",marginRight:"4px"}}>Send</p> : ""} */}
            <p>Send</p>
            {/* <img src={send} alt="" /> */}
            <i class="fa-regular fa-paper-plane"></i>
          </button>
          <ToastContainer bodyClassName="custom-toast-text" />
        </div>
        {user.user.email ? (user.user.is_premium ? (
          <div className="tokens_available">
            <p >You have unlimited tokens as part of your premium plan.</p>

          </div>
        ) : (
          <div className="tokens_available">
            <p >Daily tokens available : {user.user.daily_tokens_available}</p>
            <p >Purchased tokens available : {user.user.purchased_tokens_available}</p>
          </div>
        )) : (
          <div className="chatbotContainer-bottom">
            <p className="chatbotContainer-bottom-title ">
              {/* In the Demo chat, you have 2 messages left. Register now and get: */}
              Please log in to chat with Hue
            </p>
            <div>
              <div style={{ display: "flex" }}>
                <div>
                  <img src={message} alt="More Messages" />
                  <Link to="/register">
                    <p>More Messages</p>
                  </Link>
                </div>
                <div>
                  <img src={clock} alt="chat History" />
                  <Link to="/register">
                    <p>chat History</p>
                  </Link>
                </div>
              </div>
              <div>
                <img src={credit_card} alt="" />
                <Link to="/pricing">
                  <p> No credit card required</p>
                </Link>
              </div>
            </div>
            <Link to="/register">
              <button className="registerButton">Login Now</button>
            </Link>
          </div>
        )}


        {/* {user.user.email ? (
          <div className="chatbotContainer-bottom">
            <Link to="/chathistory">History</Link>
          </div>
        ) : (
          <div className="chatbotContainer-bottom">
            <p className="chatbotContainer-bottom-title">
              {/* In the Demo chat, you have 2 messages left. Register now and get: */}
              {/* Please log in to chat with Hue */}
            {/* </p> */}
            {/* <div>
              <div style={{ display: "flex" }}>
                <div>
                  <img src={message} alt="" />
                  <p>More Messages</p>
                </div>
                <div>
                  <img src={clock} alt="" />
                  <p>chat History</p>
                </div>
              </div>
              <div>
                <img src={credit_card} alt="" />
                <p> No credit card required</p>
              </div>
            </div>
            <Link to="/register">
              <button className="registerButton">Register Now</button>
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Chatbot;
// >>>>>>> 0914021175b667caf2bffeb3c66fb886b8a68867
