import React from 'react';
import Signup from "./Signup";
import Login from "./Login"

const Navbar = () => {

  return (
  <div classname="navbar">
    <ul classname="nav">
      <li><a href="./Profile" id="nav-font">Profile</a></li>
      <li><a href="./Calculate" id="nav-font">Footprint</a></li>
      <li><a href="./Learn" id="nav-font">Learn</a></li>
      <li><a href="./Donate" id="nav-font">Get Involved</a></li>
      <li><a href="./Signup" id="nav-font">Sign Up</a></li>
      <li><a href="./Login" id="nav-font">Log In</a></li>
      <Signup />
      <Login />
    </ul>
  </div>
  );
}

  export default Navbar;

 