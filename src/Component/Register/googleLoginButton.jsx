// import React from 'react';
// import {
//   googleLogout,
//   GoogleLogin,
// } from "@react-oauth/google";
// import axios from 'axios';

// const GoogleLoginButton = () => {
//   const responseGoogle = async (response) => {
//     try {
//       const { tokenId } = response;
      
//       // Send the tokenId to your server for verification
//       const serverResponse = await axios.post('https://neighborhue-backend.vercel.app/auth/google/verify', { tokenId });

//       // Handle the server response as needed
//       console.log(serverResponse.data);
//     } catch (error) {
//       // Handle errors
//       console.error('Error sending tokenId to server:', error);
//     }
//   };

//   // const handleLogout = async () => {
//   //   try {
//   //     // Perform the Google logout
//   //     await googleLogout();

//   //     // Optionally, you can also make a server-side request to handle logout on the server
//   //     // await axios.post('/auth/logout');

//   //     // Handle any additional client-side logout logic as needed
//   //     console.log('Logged out successfully');
//   //   } catch (error) {
//   //     // Handle errors
//   //     console.error('Error during logout:', error);
//   //   }
//   // };

//   return (
//     <div>
//       <GoogleLogin
//         clientId="816962704603-frbb8go67f7htmtkto57e5rned6m2d49.apps.googleusercontent.com"
//         buttonText="Login with Google"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         // cookiePolicy={'single_host_origin'}
//       />

//       {/* Logout button */}
//       {/* <button onClick={handleLogout}>Logout</button> */}
//     </div>
//   );
// };

// export default GoogleLoginButton;
