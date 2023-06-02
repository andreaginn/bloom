import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../fjO3sek7ZT.json';
import Signup from "./Signup";
import Login from "./Login"

const Navbar = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn,setShowLogIn] = useState(false);
 
  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogIn(false);
  };

  const handleLogInClick = () => {
    setShowLogIn(true);
    setShowSignUp(false);
  };
  

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="main-screen">
  <div className="navbar">
    <ul className="nav-1">
      <li><a href="./Profile" id="nav-font">Profile</a></li>
      <li><a href="./Calculate" id="nav-font">Footprint</a></li>
      
      </ul>
      <div className="logo">
        <h1 className="logo-text">B<span>
        <div className="animation-container">
        <Lottie  options={defaultOptions} />
      </div>
          </span>oom</h1>
      </div>
      <ul className="nav-2">
      <li><a href="./Learn" id="nav-font">Learn</a></li>
      <li><a href="./Donate" id="nav-font">Get Involved</a></li>
      </ul>
      </div>
<div className="login-signup">
  <Signup />
 <Login />
    </div>
    </div>
  );
}

  export default Navbar