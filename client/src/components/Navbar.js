import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../fjO3sek7ZT.json';
import Signup from "./Signup";
import Login from "./Login";
import Auth from '../utils/auth';
import Button from '../components/Button'
import ImpactModal from './ImpactModal';
import '../styles/Button.css';


const Navbar = ({ openModal }) => {

  const [modalOpen, setModalOpen] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleClick = () => {
    console.log('Impact Button Clicked')
    setModalOpen(true)
  }

  return (
    <div className="navbar">
      <ul className="nav-1">
        {Auth.loggedIn() ? (
          <>
            <li><Link as={Link} to='/Profile' id="nav-font">Profile</Link></li>
            <li><Link as={Link} to='/Donate' id="nav-font">Donate</Link></li>
            <Link className="animation-container" as={Link} to='/' >
              <Lottie options={defaultOptions} />
            </Link>
            <li><Link as={Link} to='/Learn' id="nav-font">Learn</Link></li>
            <Link id="nav-font" onClick={Auth.logout}>Logout</Link>
            <Button content={"Log Your Impact"} onClick={() => handleClick()} />
            {modalOpen && <ImpactModal onClose={() => setModalOpen(false)} />}
            <button className='hamburger'>
              <span className='hamburgerLine'></span>
              <span className='hamburgerLine'></span>
              <span className='hamburgerLine'></span>
            </button>

          </>
        ) : (
          <>
            <button className='hamburger'>
              <span className='hamburgerLine'></span>
              <span className='hamburgerLine'></span>
              <span className='hamburgerLine'></span>
            </button>
          </>
        )}
      </ul>

    </div>
  );
}

export default Navbar

