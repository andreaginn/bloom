import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../fjO3sek7ZT.json';
import Signup from "./Signup";
import Login from "./Login";
import Auth from '../utils/auth';

const Navbar = () => {

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="navbar">
      <ul className="nav-1">
        {Auth.loggedIn() ? (
          <>
            <li><Link as={Link} to='/Profile' id="nav-font">Profile</Link></li>
            <li><Link as={Link} to='/Donate' id="nav-font">Donate</Link></li>
            <li><Link as={Link} to='/Learn' id="nav-font">Learn</Link></li>
            <Link id="nav-font" onClick={Auth.logout}>Logout</Link>
          </>
        ) : (
          <>
            <Signup />
            <Login />
          </>
        )}
      </ul>
      <Link className="logo" as={Link} to='/' >
        <h1 className="logo-text">B<span>
          <div className="animation-container">
            <Lottie options={defaultOptions} />
          </div>
        </span>oom</h1>
      </Link>
    </div>
  );
}

export default Navbar